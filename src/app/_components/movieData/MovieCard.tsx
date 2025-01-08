"use client"

import { imgURL } from "../api/apiConfig"; 
import Image from "next/image";
import Link from "next/link";

interface IMovieCard {
  movie: {
    title: string;
    name: string;
    id: number;
    poster_path: string;
    vote_average: number;
  };
}

const MovieCard = ({ movie }: IMovieCard) => {
  return (
    <>
      <Link href={`/${movie.title ? "movie" : "tv"}/${movie.id}`}>
        <div className="group/card bg-gray-600 relative aspect-[2/3]  rounded-lg overflow-hidden ">
          <Image
            width={500}
            height={500}
            src={imgURL(movie.poster_path, "w500")}
            alt={movie.title || movie.name}
            className="object-cover h-full w-full"
          />
          <div
            className="flex flex-col justify-end 
                absolute bottom-0 left-0 w-full h-full p-2 md:p-4
                bg-gradient-to-t from-[#0f172aa5] to-[#0f172a19]
                opacity-100 group-hover/card:opacity-0 
                transition-all duration-300"
          >
            <h1 className="text-base md:text-lg">
              {movie.title || movie.name}
            </h1>
            <p>
              <span className="text-sm md:text-base">
                {movie.vote_average.toString().slice(0, 3)}
              </span>
              <span className="text-xs md:text-sm"> / 10</span>
            </p>
          </div>
          <div
            className="flex justify-center items-center absolute z-10 
              top-0 left-0 p-5 
              opacity-0 group-hover/card:opacity-100 transition-all duration-300 w-full h-full
              bg-gradient-to-t from-[#0f172ac9] to-[#0f172abe]"
          >
            <h2 className="text-lg md:text-xl text-center">
              {movie.title || movie.name}
            </h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
