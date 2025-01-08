"use client"

import { userData } from "@/app/redux/features/login/loginSlice";
import { useAppDispatch } from "@/app/redux/hook";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const Signin = () => {
  const [developer, setDeveloper] = useState(false);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    login();
  };
  const login = async () => {
    try {
      const { data } = await axios.post(
        `${window.location.origin}/signin/api`,
        {
          username,
          password,
        }
      );
      dispatch(userData(data));
      localStorage.setItem("user", JSON.stringify(data));
      toast.success("Login successfully");
      router.replace("/");
    } catch (e: any) {
      if (e.status === 400) toast.error(e.response.data);
    }
  };
  return (
    <>
      <div className="relative">
        <div
          className={`w-full sm:w-auto text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            bg-slate-400 p-5 ${developer ? "" : "hidden"}`}
        >
          <p>برای ورود و تست از این داده استفاده کنید</p>
          <p>Username: amirhosein, Password: 1234</p>
          <p>Username: rezafa, Password: RezaFa1</p>
        </div>
      </div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-6">
        <div className="text-center">
          <button
            className="bg-slate-500 rounded-md p-1"
            onClick={() => setDeveloper(!developer)}
          >
            پیام توسعه دهنده
          </button>
        </div>
        <h1 className="text-center text-3xl md:text-4xl text-slate-200 font-bold">
          Sign in to your account
        </h1>
        <form
          action=""
          onSubmit={handleSubmit}
          className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg"
        >
          <div className="mt-2 group">
            <label
              htmlFor="email"
              className="block md:text-lg text-slate-300 group-focus-within:text-rose-400 
                  transition-all duration-300"
            >
              Email or Username
            </label>
            <input
              className="block w-full rounded-md bg-slate-800 mt-2 px-3 pb-1.5 pt-1 text-slate-200 
                outline outline-1 -outline-offset-1 outline-slate-400 placeholder:text-slate-400 
                focus:outline-2 focus:-outline-offset-1 focus:outline-rose-600 transition-all
                text-lg md:text-xl"
              type="text"
              id="email"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mt-6 group">
            <div className="flex justify-between">
              <label
                htmlFor="password"
                className="block md:text-lg text-slate-300 group-focus-within:text-rose-400 
                    transition-all duration-300"
              >
                Password
              </label>
              <div className="">
                <Link
                  href="#"
                  className="text-rose-400 hover:text-rose-500 focus:text-rose-500 transition-all duration-300"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <input
              className="block w-full rounded-md bg-slate-800 mt-2 px-3 pb-1.5 pt-1 text-slate-200 
                outline outline-1 -outline-offset-1 outline-slate-400 placeholder:text-slate-400 
                focus:outline-2 focus:-outline-offset-1 focus:outline-rose-600 transition-all
                text-lg md:text-xl"
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-rose-600 text-xl cursor-default font-bold rounded py-1.5 px-2 mt-10
              hover:bg-rose-500 outline outline-2 outline-transparent focus:outline-slate-400
                transition-all duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default Signin;
