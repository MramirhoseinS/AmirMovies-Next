"use client";

import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { useMovieDB } from "@/app/_hooks/useMovieDB";

interface IMoviesList {
  url: string;
  page?: number;
}

interface IMovieApi {
  cast: {
    title: string;
    name: string;
    id: number;
    poster_path: string;
    vote_average: number;
  }[];
}

const PersonMoviesList = ({ url, page = 1 }: IMoviesList) => {
  const [data, loading] = useMovieDB<IMovieApi>(
    { endpoint: url, params: { page } },
    { cast: [] }
  );

  if (loading) {
    return <div className="mb-5 text-4xl text-slate-200">Loading ...</div>;
  }
  return (
    <>
      <div>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop
        >
          {data.cast?.slice(0, 8).map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default PersonMoviesList;
