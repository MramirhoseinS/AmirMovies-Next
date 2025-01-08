"use client"

import MovieCard from "@/app/_components/movieData/MovieCard";
import Pagination from "@/app/_components/pagination/Pagination";
import { useMovieDB } from "@/app/_hooks/useMovieDB";
import { useParams } from "next/navigation";

const movieForPage = [
  { name: "Now Playing", path: "now_playing" },
  { name: "Popular", path: "popular" },
  { name: "Top Rated", path: "top_rated" },
  { name: "Upcoming", path: "upcoming" },
];

interface IDataMovie {
  results: {
    id: number;
    name: string;
    title: string;
    poster_path: string;
    vote_average: number;
  }[];
  total_results: number;
}

const MoviesCat = () => {
  const { slug } = useParams<{ slug: string[] }>();
  slug[1] = slug[1] || "1";

  const [data, loading] = useMovieDB<IDataMovie>(
    {
      endpoint: `/movie/${slug[0]}`,
      params: {
        page: Number(slug[1]),
      },
    },
    { results: [], total_results: 0 }
  );
  if (loading) {
    return (
      <>
        <div className="container mx-auto">
          <h1 className="text-slate-200 text-4xl mb-5">
            {movieForPage.find((item) => item.path === slug[0])?.name} Movies
          </h1>
          <div className="mb-5 text-4xl text-slate-200">Loading ...</div>
          <Pagination
            total={data.total_results}
            page={Number(slug[1])}
            path={`/movies/${slug[0]}`}
          />
        </div>
      </>
    );
  }
  if (!data.results.length) {
    return (
      <div className="container mx-auto">
        <div className="mb-5 text-4xl text-slate-200">Title Invalid!</div>
      </div>
    );
  }
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-slate-200 text-4xl mb-5">
          {movieForPage.find((item) => item.path === slug[0])?.name} Movies
        </h1>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
          {data.results.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
        <Pagination
          total={data.total_results}
          page={Number(slug[1])}
          path={`/movies/${slug[0]}`}
        />
      </div>
    </>
  );
};
export default MoviesCat;
