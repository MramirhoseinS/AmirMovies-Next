"use client";

import ForwardButton from "@/app/_components/button/ForwardButton";
import PersonTab from "@/app/_components/personData/PersonTab";

const trend = [
  { name: "Day", path: "day" },
  { name: "Week", path: "week" },
];

const personPopular = [{ name: "", path: "popular" }];


const People = () => {
  return (
    <>
      <div className="container mx-auto">
        <div>
          <PersonTab basePath="/trending/person" list={trend} name="Trending" />
        </div>
        <div className="mt-10">
          <PersonTab basePath="/person" list={personPopular} name="Popular" />
          <div className="flex justify-end mt-2">
            <ForwardButton name="More" link="/people/popular/1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default People;
