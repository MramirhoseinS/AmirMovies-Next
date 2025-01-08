"use client";

import { useState } from "react";
import PersonList from "./PersonList";

interface IPersonTab {
  basePath: string;
  list: { name: string; path: string }[];
  page?: number;
  name: string;
}

const PersonTab = ({ basePath, list, name, page }: IPersonTab) => {
  const [activeTab, setActiveTab] = useState(list[0]);

  console.log(activeTab);
  return (
    <>
      <div className="pt-8 group/tab">
        <div className="flex gap-8 items-center mb-4">
          <h1 className="text-3xl text-slate-200 group-hover/tab:text-rose-400 transition-all duration-300">
            {name}
          </h1>
          <ul className="flex gap-8 text-rose-200">
            {list.map((item) => (
              <li
                key={item.name}
                className={`text-lg ${
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
        <PersonList url={`${basePath}/${activeTab.path}`} page={page} />
      </div>
    </>
  );
};

export default PersonTab;
