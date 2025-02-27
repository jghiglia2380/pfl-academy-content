import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

import supabase from '../../utils/supabase';
import { ReturnAuthenticatedToHomeWrapper } from '../../guards/ReturnAuthenticatedToHomeWrapper';
 
function ForgotPasswordPage() {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    userEmail: yup.string().email('Please provide a valid email').required('Email is required')
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold text-center">Forgot Password</h1>
      <p>
        Enter your email address and we will send you a link to reset your password.
      </p>
      <Formik
        initialValues={{
          userEmail: '',
        }}
        validationSchema={schema}
        onSubmit={async (values) => {
          const { error, data } = await supabase.auth.resetPasswordForEmail(values.userEmail, {
            redirectTo: `${window.location.origin}/reset-password`
          });

          if (error) {
            toast.error(error.message);

            navigate('/forgot-password');

            return;
          }

          if (data) {
            toast.success('Password reset email sent. Please check your inbox.');

            // reset form
            values.userEmail = '';
          }
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

            <button
              type="submit"
              className="w-full mt-6 py-2 px-4 rounded-md bg-indigo-500 text-white shadow-sm hover:bg-indigo-600 focus:ring focus:ring-indigo-300 "
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <div className='text-center'>
        Remember your password? <Link to='/login' className='text-indigo-500'>Login here</Link>
      </div>
    </div>
  );
}

export const Component = ReturnAuthenticatedToHomeWrapper(ForgotPasswordPage);
