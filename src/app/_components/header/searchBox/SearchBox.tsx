"use client";

import { useEffect, useState } from "react";
import { api } from "../../api/apiConfig";
import Items from "./items/Items";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (query) {
        const result = await api("/search/multi", {
          params: {
            query,
          },
        });
        console.log(result.data);
        setSearchResult(result.data.results);
      } else {
        setSearchResult([]);
      }
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [query]);

  return (
    <>
      <section className="mt-2 md:mt-4 text-slate-200">
        <div className="relative">
          <input
            placeholder="Search for Movie"
            type="text"
            className="focus:outline-slate-900 focus:outline-double focus:outline-offset-2
              transition-all focus:outline-4  w-full bg-slate-600  text-xl p-2 border-slate-900 border-4
              rounded-xl outline-none placeholder:text-slate-400 placeholder:text-base"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="flex justify-center">
            <div
              className={`absolute overflow-hidden bg-slate-600 bg-opacity-80 w-full z-50 rounded-md 
                transition-all duration-200 border-slate-900 border-4 ${
                  query && searchResult.length
                    ? "max-h-[435px] opacity-100"
                    : "h-0 opacity-0"
                }`}
            >
              <div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
                onClick={() => setQuery("")}
              >
                {searchResult.map(Items)}
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-search absolute right-5 top-4"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default SearchBox;
