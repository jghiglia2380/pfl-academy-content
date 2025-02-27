import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import supabase from '../../utils/supabase';
import { ReturnAuthenticatedToHomeWrapper } from '../../guards/ReturnAuthenticatedToHomeWrapper';
import { getConfirmPasswordValidation, getPasswordValidation } from '../../utils/yup';
import useUserStore from '../../stores/user';

function ResetPasswordPage() {
  const hashParams = new URLSearchParams(window.location.hash.substring(1));
  const errorDescription = hashParams.get('error_description');
  const setUser = useUserStore((state) => state.setUser);

  const navigate = useNavigate();
  const schemaShape: Record<string, yup.StringSchema<string | undefined, yup.AnyObject, string | undefined, ''>> = {
    userPassword: getPasswordValidation(),
    userConfirmPassword: getConfirmPasswordValidation()
  };

  const schema = yup.object().shape(schemaShape, [['userPassword', 'userPassword'], ['userConfirmPassword', 'userConfirmPassword']]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      {errorDescription && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <p>
            An error occurred. <br />
            {errorDescription}
          </p>
        </div>
      )}
      {!errorDescription && (
        <div>
          <h1 className="text-2xl font-semibold text-center">Reset Password</h1>
          <Formik
            initialValues={{
              userPassword: '',
              userConfirmPassword: ''
            }}
            validationSchema={schema}
            onSubmit={async (values) => {
              const { data, error } = await supabase.auth.updateUser({
                password: values.userPassword
              });

              if (error) {
                toast.error(error.message);
                return;
              }

              if (data) {
                toast.success('Password reset successfully!');

                const { data, error } = await supabase.auth.getSession();

                if (data) {
                  setUser(data.session?.user);
                  navigate('/');
                }

                if (error) {
                  console.error('Error getting session:', error.message);
                  toast.error('Error getting your current session. Please login again.');

                  navigate('/login');
                }
              }
            }}
          >
            {(formik) => (
              <Form>
                <div className="mt-4">
                  <label htmlFor="userPassword" className="block text-sm font-medium text-gray-700">
                    New Password
                  </label>
                  <Field
                    type="password"
                    name="userPassword"
                    className="mt-1 block w-full h-10 border-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 outline-none"
                  />
                  {formik.errors.userPassword && <span className="text-red-500 text-sm">{formik.errors.userPassword}</span>}
                </div>

                <div className="mt-4">
                  <label htmlFor="userConfirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirm New Password
                  </label>
                  <Field
                    type="password"
                    name="userConfirmPassword"
                    className="mt-1 block w-full h-10 border-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 outline-none"
                  />
                  {formik.errors.userConfirmPassword && <span className="text-red-500 text-sm">{formik.errors.userConfirmPassword}</span>}
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 py-2 px-4 rounded-md bg-indigo-500 text-white shadow-sm hover:bg-indigo-600 focus:ring focus:ring-indigo-300 "
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
}

export const Component = ReturnAuthenticatedToHomeWrapper(ResetPasswordPage);
