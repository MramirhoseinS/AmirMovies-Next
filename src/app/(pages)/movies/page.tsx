"use client"

import MovieTab from "@/app/_components/movieData/MovieTab";
import ForwardButton from "@/app/_components/button/ForwardButton";

const trend = [
  { name: "Day", path: "day" },
  { name: "Week", path: "week" },
];

const moviesNowPlaying = [{ name: "", path: "now_playing" }];
const moviesPopular = [{ name: "", path: "popular" }];
const moviesTopRated = [{ name: "", path: "top_rated" }];
const moviesUpcoming = [{ name: "", path: "upcoming" }];

const Movies = () => {

  return (
    <>
      <div className="container mx-auto">
        <div>
          <MovieTab basePath="/trending/movie" list={trend} name="Trending" />
        </div>
        <div className="mt-10">
          <MovieTab
            basePath="/movie"
            list={moviesNowPlaying}
            name="Now Playing"
          />
          <div className="flex justify-end mt-2">
            <ForwardButton name="More" link="/movies/now_playing/1" />
          </div>
        </div>
        <div className="mt-5">
          <MovieTab basePath="/movie" list={moviesPopular} name="Popular" />
          <div className="flex justify-end mt-2">
            <ForwardButton name="More" link="/movies/popular/1" />
          </div>
        </div>
        <div className="mt-5">
          <MovieTab basePath="/movie" list={moviesTopRated} name="Top Rated" />
          <div className="flex justify-end mt-2">
            <ForwardButton name="More" link="/movies/top_rated/1" />
          </div>
        </div>
        <div className="mt-5">
          <MovieTab basePath="/movie" list={moviesUpcoming} name="Upcoming" />
          <div className="flex justify-end mt-2">
            <ForwardButton name="More" link="/movies/upcoming/1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
