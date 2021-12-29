import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import { API_ENDPOINT } from "../constants";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { LoginContext } from "../contexts/LoginContext";

const Login = () => {
  const router = useRouter();
  const { accesstoken, setAccesstoken } = useContext(LoginContext);

  useEffect(() => {
    if (accesstoken) {
      router.push("/plans");
    }
  }, []);

  const validationSchema = yup.object({
    email: yup.string().required("email is required"),
    password: yup.string().required("password is required"),
  });

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="flex flex-1 justify-center items-center m-5">
        <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
          <div className="py-12 p-10 bg-white border-gray-400 border rounded-xl">
            <div className="flex justify-center mb-6">
              <img src="/images/logo.png" alt="gamp_logo" />
            </div>
            <Formik
              validateOnChange={true}
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true);
                let loginResponse = await fetch(`${API_ENDPOINT}/auth/login`, {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ ...values }),
                });
                const res = await loginResponse.json();
                const data = await res.data;
                setAccesstoken(data.accesstoken);
                router.push("/plans");
                setSubmitting(false);
              }}
            >
              {({ isSubmitting, errors }) => (
                <Form>
                  <div className="mb-6">
                    <Field
                      type="text"
                      className={`border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-green-600 rounded ${
                        errors.password ? "border-red-500 focus:ring-0" : null
                      }`}
                      placeholder="Email Address or Phone Number"
                      name="email"
                    />
                    {errors.email ? (
                      <small className="text-red-500">{errors.email}</small>
                    ) : null}
                  </div>
                  <div className="">
                    <Field
                      type="password"
                      className={`border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-green-600 rounded ${
                        errors.password ? "border-red-500 focus:ring-0" : null
                      }`}
                      placeholder="Password"
                      name="password"
                    />
                    {errors.password ? (
                      <small className="text-red-500">{errors.password}</small>
                    ) : null}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-6 text-indigo-50 font-bold bg-green-600 py-3 rounded-md hover:bg-green-500 transition duration-300"
                  >
                    {isSubmitting ? (
                      <span>Logging in...</span>
                    ) : (
                      <span>Login</span>
                    )}
                  </button>
                </Form>
              )}
            </Formik>
            <div className="text-center">
              <span className="text-sm text-gray-700 inline-block mt-6 hover:text-green-600 hover:underline hover:cursor-pointer transition duration-200">
                Forgot Password?
              </span>
              <span className="text-gray-400 text-center p-6 mt-2 inline-block w-full">
                © GAMP
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 hidden md:flex">
        <div className="hidden md:flex justify-center">
          <img src="/images/artboard.png" alt="gamp_artboard" />
        </div>
      </div>
    </div>
  );
};

export default Login;
