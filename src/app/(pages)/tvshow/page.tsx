"use client";

import MovieTab from "@/app/_components/movieData/MovieTab";
import ForwardButton from "@/app/_components/button/ForwardButton";

const trend = [
  { name: "Day", path: "day" },
  { name: "Week", path: "week" },
];

const tvAiringToday = [{ name: "", path: "airing_today" }];
const tvOnTheAir = [{ name: "", path: "on_the_air" }];
const tvPopular = [{ name: "", path: "popular" }];
const tvTopRated = [{ name: "", path: "top_rated" }];

const TvShow = () => {
  return (
    <>
      <div className="container mx-auto">
        <div>
          <MovieTab basePath="/trending/tv" list={trend} name="Trending" />
        </div>
        <div className="mt-10">
          <MovieTab basePath="/tv" list={tvAiringToday} name="Airing Today" />
          <div className="flex justify-end mt-2">
            <ForwardButton name="More" link="/tvshow/airing_today/1" />
          </div>
        </div>
        <div className="mt-5">
          <MovieTab basePath="/tv" list={tvOnTheAir} name="On The Air" />
          <div className="flex justify-end mt-2">
            <ForwardButton name="More" link="/tvshow/on_the_air/1" />
          </div>
        </div>
        <div className="mt-5">
          <MovieTab basePath="/tv" list={tvPopular} name="Popular" />
          <div className="flex justify-end mt-2">
            <ForwardButton name="More" link="/tvshow/popular/1" />
          </div>
        </div>
        <div className="mt-5">
          <MovieTab basePath="/tv" list={tvTopRated} name="Top Rated" />
          <div className="flex justify-end mt-2">
            <ForwardButton name="More" link="/tvshow/top_rated/1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TvShow;
