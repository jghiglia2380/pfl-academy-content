import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getEmailValidation, getFullNameValidation, getPasswordValidation, getConfirmPasswordValidation } from '../../utils/yup';
import { GoogleButton } from '../auth/GoogleButton';
import { CleverButton } from '../auth/CleverButton';
import supabase from '../../utils/supabase';
import { ReturnAuthenticatedToHomeWrapper } from '../../guards/ReturnAuthenticatedToHomeWrapper';

function RegisterPage() {
  const schemaShape: Record<string, yup.StringSchema<string | undefined, yup.AnyObject, string | undefined, ''>> = {
    userEmail: getEmailValidation(),
    fullName: getFullNameValidation(),
    userPassword: getPasswordValidation(),
    userConfirmPassword: getConfirmPasswordValidation()
  };

  const schema = yup.object().shape(schemaShape, [['userPassword', 'userPassword'], ['userConfirmPassword', 'userConfirmPassword']]);
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold text-center">Register</h1>
      <Formik
        initialValues={{
          userEmail: '',
          fullName: '',
          userPassword: '',
          userConfirmPassword: ''
        }}
        validationSchema={schema}
        onSubmit={async (values) => {
          const { error, data } = await supabase.auth.signUp({
            email: values.userEmail,
            password: values.userPassword,
            options: {
              data: {
                full_name: values.fullName
              },
              emailRedirectTo: `${window.location.origin}/confirm`
            }
          });

          if (error) {
            toast.error(error.message);
            return;
          }

          if (data.user?.identities?.length === 0) {
            toast.error('There is already an account with this email address.');
            return;
          }

          navigate('/confirm?emailSent=true');
        }}
      >
        {(formik) => (
          <Form>
            <div className="mt-4">
              <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Field
                name="userEmail"
                className="mt-1 block w-full h-10 border-2 rounded-md border-gray-300 shadow-sm focus:!border-indigo-500 focus:ring-indigo-500 p-2 outline-none"
              />
              {formik.errors.userEmail && <span className="text-red-500 text-sm">{formik.errors.userEmail}</span>}
            </div>

            <div className="mt-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <Field
                name="fullName"
                className="mt-1 block w-full h-10 border-2 rounded-md border-gray-300 shadow-sm focus:!border-indigo-500 focus:ring-indigo-500 p-2 outline-none"
              />
              {formik.errors.fullName && <span className="text-red-500 text-sm">{formik.errors.fullName}</span>}
            </div>

            <div className="mt-4">
              <label htmlFor="userPassword" className="block text-sm font-medium text-gray-700">
                Password
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
                Confirm Password
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
              className="w-full mt-6 py-2 px-4 rounded-md bg-indigo-500 text-white shadow-sm hover:bg-indigo-600 focus:ring focus:ring-indigo-300"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <span className='text-center flex items-center justify-center my-5 text-black font-medium'>
        OR
      </span>
      <div className='flex flex-col gap-2'>
        <GoogleButton />
        <CleverButton />
      </div>
      <div className='text-center mt-5'>
        Already have an account? <Link to='/login' className='text-indigo-500'>Login here</Link>
      </div>
    </div>
  );
}

export const Component = ReturnAuthenticatedToHomeWrapper(RegisterPage);