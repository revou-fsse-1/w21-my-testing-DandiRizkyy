import Link from "next/link";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import { useDispatch, useSelector } from "react-redux";
import { changeEmail, changePassword, resetForm } from "@/redux/formSlice";

interface FormInput {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const formState = useSelector<{ form: FormInput }>((state) => state.form);
  const dispatch = useDispatch();

  const schema = yup
    .object({
      email: yup.string().email().required("Email is required"),
      password: yup.string().min(5).required("Password is required"),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInput> = async (data, event: any) => {
    event.preventDefault();
    const response = await axios.post(
      "https://w17-our-backend-group-c-production.up.railway.app/auth/login/user",
      {
        email: data.email,
        password: data.password,
      }
    );

    // Set the cookie on the server
    setCookie("token", response.data.access_token);

    // Redirect to the home page
    localStorage.removeItem("form");
    dispatch(resetForm());
    router.push("/");
    console.log(data);
  };

  useEffect(() => {
    reset(formState as FormInput);
  }, []);

  return (
    <div>
      <div className="p-56">
        <div className="flex w-[500px]  flex-col space-y-5 rounded-lg border py-20 px-5 shadow-xl mx-auto">
          <div className="mx-auto mb-2 space-y-3">
            <h1 className=" text-3xl font-bold text-gray-700">Login Toko-Ku</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="relative mt-2 w-full">
                <input
                  type="text"
                  id="email"
                  {...register("email")} // Register email input
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                  onChange={(e) => dispatch(changeEmail(e.target.value))}
                />
                <label
                  htmlFor="email"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  {" "}
                  Enter Your Email{" "}
                </label>
              </div>
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <div>
              <div className="relative mt-2 w-full">
                <input
                  type="password"
                  id="password"
                  {...register("password")} // Register password input
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                  onChange={(e) => dispatch(changePassword(e.target.value))}
                />
                <label
                  htmlFor="password"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  {" "}
                  Enter Your Password
                </label>
              </div>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
            <div className="z-50 text-center mt-3">
              <button
                className="rounded-lg z-30 bg-blue-600 hover:bg-blue-500 px-32 py-4 font-bold text-lg text-white"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-sm z-30 text-center font-light text-black ">
            Don`t have an account ?{" "}
            <Link
              href="/auth/register"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
