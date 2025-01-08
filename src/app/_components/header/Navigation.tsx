"use client";

import { userData } from "@/app/redux/features/login/loginSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const menuItem = [
  {
    path: "/movies",
    name: "Movies",
  },
  {
    path: "/tvshow",
    name: "Tv Shows",
  },
  {
    path: "/people",
    name: "People",
  },
  {
    path: "/about",
    name: "About us",
  },
];

const Navigation = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const loginState = useAppSelector((state) => state.login);

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const pathname = usePathname();

  const handleLogout = () => {
    dispatch(userData({ name: "", username: "", id: 0 }));
    localStorage.clear();
    toast.error("Sign Out");
    router.replace("/");
    // router.refresh();
  };
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(userData(JSON.parse(user)));
    }
  }, []);
  return (
    <>
      <nav className="mx-auto flex items-center text-slate-200">
        <div className="flex items-center">
          <Link href="/" onClick={() => setIsOpenMenu(false)}>
            <h1 className="text-4xl mr-4 lg:mr-12">
              Amir<span className="text-rose-500">Movies</span>
            </h1>
          </Link>
          <ul className="hidden md:flex text-sm pt-2 pl-5 lg:p-0 lg:text-base gap-4 lg:gap-7 uppercase">
            {menuItem.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`${
                    pathname === item.path
                      ? "text-rose-500 font-semibold"
                      : "hover:text-rose-300 transition-all duration-300"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex ml-auto text-sm pt-2 lg:p-0 lg:text-base">
          {loginState.isLogin === true ? (
            <>
              <div className="flex gap-2 lg:gap-4 items-center">
                <span className="text-xl">{loginState.name}</span>
                <button
                  onClick={handleLogout}
                  className="uppercase bg-rose-600 hover:bg-rose-300 transition-all duration-300 hover:text-slate-950 py-1.5 px-2.5 rounded-2xl text-white"
                >
                  Sign Out
                </button>
              </div>
            </>
          ) : (
            <ul className="flex gap-3 lg:gap-8 uppercase">
              <li>
                <Link
                  href="/signin"
                  className="hover:text-rose-300 transition-all duration-300"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  className="bg-rose-600 hover:bg-rose-300 transition-all duration-300 hover:text-slate-950 py-2 px-4 rounded-2xl text-white"
                  href="#"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className="md:hidden ml-auto">
          <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`${isOpenMenu ? `h-[225px] pt-4` : `h-[0]`}
          md:hidden overflow-hidden transition-all duration-200
          text-slate-200`}
      >
        <ul className="flex flex-col text-center gap-4 uppercase">
          {menuItem.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`${
                  pathname === item.path
                    ? "text-rose-500 font-semibold"
                    : "hover:text-rose-300 transition-all duration-300"
                }`}
                onClick={() => setIsOpenMenu(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {loginState.isLogin === true ? (
          <div className="flex justify-center mt-4 gap-2 lg:gap-4 items-center">
            <span className="text-lg">{loginState.name}</span>
            <button
              onClick={handleLogout}
              className="uppercase bg-rose-600 hover:bg-rose-300 transition-all duration-300 hover:text-slate-950 py-1.5 px-2.5 rounded-2xl text-white"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <ul className="flex justify-center mt-6 pl-8 text-center gap-4 uppercase">
            <li>
              <Link
                href="signin"
                className="hover:text-rose-300 transition-all duration-300"
                onClick={() => setIsOpenMenu(false)}
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                className="bg-rose-600 hover:bg-rose-300 transition-all duration-300 hover:text-slate-950 py-2 px-4 rounded-2xl text-white"
                href="#"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navigation;
