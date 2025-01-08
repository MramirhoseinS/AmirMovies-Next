"use client";

import { useState } from "react";
import MoviesList from "./MoviesList";
import { usePathname } from "next/navigation";
import PersonMoviesList from "./PersonMoviesList";

interface IMovieTab {
  basePath?: string;
  list: { name: string; path: string }[];
  page?: number;
  name: string;
}

const MovieTab = ({ basePath, list, name, page }: IMovieTab) => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(list[0]);

  return (
    <>
      <div className="pt-8 group/tab">
        <div className="flex gap-4 sm:gap-8 md:gap-10 items-baseline lg:items-center mb-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-slate-200 group-hover/tab:text-rose-400 transition-all duration-300">
            {name}
          </h1>
          <ul className="flex gap-3 sm:gap-6 md:gap-8 text-rose-200">
            {list.map((item) => (
              <li
                key={item.name}
                className={`text-sm sm:text-base md:text-lg ${
                  activeTab === item
                    ? "text-rose-600 font-extrabold"
                    : "cursor-pointer"
                }`}
                onClick={() => setActiveTab(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        {pathname.startsWith("/person") ? (
          <PersonMoviesList
            url={`${basePath || pathname}/${activeTab.path}`}
          ></PersonMoviesList>
        ) : (
          <MoviesList
            url={`${basePath || pathname}/${activeTab.path}`}
            page={page}
          />
        )}
      </div>
    </>
  );
};

export default MovieTab;
