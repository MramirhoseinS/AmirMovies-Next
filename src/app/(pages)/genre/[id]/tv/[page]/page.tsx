"use client";

import { useMovieDB } from "@/app/_hooks/useMovieDB";
import MovieCard from "@/app/_components/movieData/MovieCard";
import Pagination from "@/app/_components/pagination/Pagination";
import { useParams } from "next/navigation";

interface IMovieApi {
  results: {
    title: string;
    name: string;
    id: number;
    poster_path: string;
    vote_average: number;
  }[];
  total_results: number;
}

interface IGenreTv {
  genres: {
    id: number;
    name: string;
  }[];
}

const GenreTv = () => {
  const { id, page } = useParams<{ id: string; page: string }>();

  const [genreTv] = useMovieDB<IGenreTv>(
    { endpoint: "genre/tv/list" },
    { genres: [] }
  );

  const [data, loading] = useMovieDB<IMovieApi>(
    {
      endpoint: `/discover/tv`,
      params: { with_genres: id, page: Number(page) },
    },
    { results: [], total_results: 0 }
  );

  if (loading) {
    return (
      <div className="container mx-auto">
        <div className="mb-5 text-4xl text-slate-200">Loading ...</div>
      </div>
    );
  }
  if (!data.results.length) {
    return (
      <div className="container mx-auto">
        <div className="mb-5 text-4xl text-slate-200">Genre Invalid!</div>
      </div>
    );
  }
  return (
    <>
      <div className="container mx-auto">
        <p className="mb-5 text-4xl text-slate-200">
          Genre:{" "}
          {genreTv?.genres?.find((item) => item.id.toString() === id)?.name}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          {data?.results?.map((movie) => (
            <MovieCard key={movie.title || movie.name} movie={movie} />
          ))}
        </div>
        <div>
          <Pagination
            page={Number(page)}
            path={`/genre/${id}/tv`}
            total={data.total_results}
          />
        </div>
      </div>
    </>
  );
};

export default GenreTv;
