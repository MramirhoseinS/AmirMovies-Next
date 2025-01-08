"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { useMovieDB } from "@/app/_hooks/useMovieDB";
import PersonCard from "./PersonCard";

interface IMoviesList {
  url: string;
  page?: number;
}

interface IDataPerson {
  results: {
    id: number;
    name: string;
    biography: string;
    known_for_department: string;
    profile_path: string;
  }[];
}

const PersonList = ({ url, page }: IMoviesList) => {
  const [data, loading] = useMovieDB<IDataPerson>(
    { endpoint: url, params: { page } },
    { results: [] }
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
            1536: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop
        >
          {data?.results?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <PersonCard person={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default PersonList;
