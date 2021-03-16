import React, { useState } from "react";
import Router from "next/router";
import Link from "next/link";
import Head from "next/head";

import { registerSchema } from "../../utils/Validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import AuthMock from "../../components/AuthMock";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const handleOnSubmit = (user) => {
    setIsLoading(true);

    setTimeout(() => {
      console.log(user);
      Router.push("/panel");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="flex h-screen">
      <Head>
        <title>Register</title>
        <meta name="description" content="Open a Rigel CMS account" />
      </Head>
      <AuthMock
        descriptionA="Just a few more steps to get started"
        descriptionB="with your blog"
      />
      <div className="flex justify-center lg:justify-start w-full lg:w-3/5 border">
        <form
          className="w-9/12 lg:pl-40 mt-7"
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <h1 className="font-bold mb-5 lg:hidden text-blue-600">Rigel CMS</h1>
          <h2 className="mb-5 font-bold tracking-wide">Create an account</h2>
          <p className="mt-2 mb-8 text-gray-400 ">
            Create an account on Rigel Cms and start writing your first articles
            today
          </p>
          <div className="flex flex-col mb-6">
            <label className="text-sm font-bold">Full name</label>
            <input
              className="input-form my-2 border-medium_muted"
              name="name"
              type="text"
              ref={register}
            />
            {errors.name && (
              <small id="email" className="text-error">
                {errors.name.message}
              </small>
            )}
          </div>
          <div className="flex flex-col mb-6">
            <label className="text-sm font-bold">Email</label>
            <input
              className="input-form my-2 border-medium_muted"
              name="email"
              type="email"
              ref={register}
            />
            {errors.email && (
              <small id="email" className="text-error">
                {errors.email.message}
              </small>
            )}
          </div>
          <div className="flex flex-col mb-6">
            <label className="text-sm font-bold">Password</label>
            <input
              className="input-form my-2 border-medium_muted"
              name="password"
              type="password"
              ref={register}
            />
            {errors.password && (
              <small id="password" className="text-error">
                {errors.password.message}
              </small>
            )}
          </div>

          <div className="flex flex-col mb-6">
            <label className="text-sm font-bold">Confirm password</label>
            <input
              className="input-form my-2 border-medium_muted"
              name="confirm"
              type="password"
              ref={register}
            />
            {errors.confirm && (
              <small id="confirmPassword" className="text-error">
                {errors.confirm.message}
              </small>
            )}
          </div>

          <button
            type="submit"
            className="block btn bg-blue-600 text-white mt-8 mb-3 w-52 font-semibold"
          >
            {isLoading === true ? "...loading" : `CREATE ACCOUNT   →`}
          </button>
          <small className="text-gray-400">
            Already have an account ?
            <Link href="/auth/login">
              <span className="text-blue-600 font-semibold cursor-pointer">
                {" "}
                Login
              </span>
            </Link>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Register;
