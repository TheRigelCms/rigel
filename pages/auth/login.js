import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";

import { loginSchema } from "../../utils/Validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import AuthMock from "../../components/AuthMock";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
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
        <title>Login</title>
        <meta name="description" content="Login to your Rigel CMS account" />
      </Head>
      <AuthMock
        descriptionA="All you need for your content"
        descriptionB="welcome back to Rigel CMS"
      />
      <div className="flex justify-center lg:justify-start w-full lg:w-3/5 border">
        <form
          className="w-9/12 lg:pl-40 mt-7 lg:mt-28"
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <h1 className="font-bold mb-5 lg:hidden text-blue-600">Rigel CMS</h1>
          <h2 className="mb-5 font-bold tracking-wide">
            Login to your account
          </h2>
          <p className="mt-2 mb-12 text-gray-400 ">
            Connect to your Rigel Cms account to manage your blog
          </p>
          <div className="flex flex-col mb-6">
            <label className="text-sm font-bold ">Email</label>
            <input
              className="input-form my-2 border-medium_muted lowercase"
              name="email"
              type="text"
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
          <button
            type="submit"
            className="block btn bg-blue-600 text-white mt-8 mb-3 w-52 font-semibold"
          >
            {isLoading === true ? "...loading" : `LOGIN →`}
          </button>
          <small className="text-gray-400">
            Don't have an account yet ?{" "}
            <Link href="/auth/register">
              <span className="text-blue-600 font-semibold cursor-pointer">
                Join
              </span>
            </Link>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
