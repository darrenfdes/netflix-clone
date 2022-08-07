import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

interface Inputs {
  email: string;
  password: string;
}

const Login = () => {
  const [login, setLogin] = useState(false);

  const { signIn, signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return (
    <div className="relative flex flex-col h-screen w-screen bg-black md:items-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        objectFit="cover"
        src="/login-banner.jpg"
        alt="Netflix Logo"
        width={100}
        height={100}
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
      />
      <Image
        src="/netflix-logo.svg"
        className="absolute top-4 left-4 md:left-10 md:top-6"
        width={150}
        height={150}
        objectFit="contain"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0md:max-w-md md:px-14"
      >
        <h1 className="text-4xl">Sign In</h1>
        <div className="space-y-4 w-full">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500">Please enter a valid email</p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500">Please enter a valid password</p>
            )}
          </label>
        </div>
        <button
          onClick={() => setLogin(true)}
          className="w-full rounded bg-[#e50914] py-3 font-semibold"
        >
          Sign In
        </button>
        <div className="text-[gray]">
          New to Netflix?{" "}
          <button className="text-white hover:underline"> Sign Up now</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
