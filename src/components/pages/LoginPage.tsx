import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { GoogleButton } from "../auth/GoogleButton";
import { CleverButton } from "../auth/CleverButton";
import supabase from "../../utils/supabase";
import useUserStore from "../../stores/user";
import { ReturnAuthenticatedToHomeWrapper } from "../../guards/ReturnAuthenticatedToHomeWrapper";

function LoginPage() {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const schema = yup.object().shape({
    userEmail: yup
      .string()
      .email("Please provide a valid email")
      .required("Email is required"),
    userPassword: yup.string().required("Password is required"),
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold text-center">Log In</h1>
      <Formik
        initialValues={{
          userEmail: "",
          userPassword: "",
        }}
        validationSchema={schema}
        onSubmit={async (values) => {
          const { error, data } = await supabase.auth.signInWithPassword({
            email: values.userEmail,
            password: values.userPassword,
          });

          if (error) {
            toast.error(error.message);
            return;
          }

          if (data.user) {
            setUser(data.user);

            const redirect = localStorage.getItem("redirect");
            if (redirect) {
              localStorage.removeItem("redirect");
              return navigate(redirect);
            }

            return navigate("/");
          }

          toast.error("An error occurred. Please try again.");
        }}
      >
        {(formik) => (
          <Form>
            <div className="mt-4">
              <label
                htmlFor="userEmail"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Field
                name="userEmail"
                className="mt-1 block w-full h-10 border-2 rounded-md border-gray-300 shadow-sm focus:!border-indigo-500 focus:ring-indigo-500 p-2 outline-none"
              />
              {formik.errors.userEmail && (
                <span className="text-red-500 text-sm">
                  {formik.errors.userEmail}
                </span>
              )}
            </div>

            <div className="mt-4">
              <label
                htmlFor="userPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Field
                type="password"
                name="userPassword"
                className="mt-1 block w-full h-10 border-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 outline-none"
              />
              {formik.errors.userPassword && (
                <span className="text-red-500 text-sm">
                  {formik.errors.userPassword}
                </span>
              )}
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
      <span className="text-center flex items-center justify-center my-5 text-black font-medium">
        OR
      </span>
      <div className="flex flex-col gap-2">
        <GoogleButton />
        <CleverButton />
      </div>
      <div className="text-center mt-5">
        Don't have an account?{" "}
        <Link to="/register" className="text-indigo-500">
          Register here
        </Link>
      </div>
      <div className="text-center">
        Forgot your password?{" "}
        <Link to="/forgot-password" className="text-indigo-500">
          Reset here
        </Link>
      </div>
    </div>
  );
}

export const Component = ReturnAuthenticatedToHomeWrapper(LoginPage);
