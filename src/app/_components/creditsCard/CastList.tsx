"use client"

import CastCard from "./CastCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, FreeMode } from "swiper/modules";

import "swiper/swiper-bundle.css";
import { useMovieDB } from "@/app/_hooks/useMovieDB";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface IDataCast {
  cast: {
    id: number;
    name: string;
    profile_path: string;
    character: string;
  }[];
}

const CastList = () => {
  const pathname = usePathname();

  const [credits, loading] = useMovieDB<IDataCast>(
    { endpoint: `${pathname}/credits` },
    { cast: [] }
  );

  if (loading) {
    return <div className="mb-5 text-4xl text-slate-200">Loading ...</div>;
  }
  if (!credits.cast.length) {
    return <></>;
  }
  return (
    <>
      <h5 className="text-3xl mb-5 font-bold ml-2 text-slate-200">Top Cast</h5>
      <ul className="flex">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            520: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5.5,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 6.5,
              spaceBetween: 20,
            },
          }}
          scrollbar={{
            draggable: true,
            hide: false,
          }}
          freeMode
          modules={[Scrollbar, FreeMode]}
        >
          {credits.cast.slice(0, 9).map((c) => (
            <SwiperSlide key={c.id}>
              <li className="mb-5">
                <CastCard cast={c} />
              </li>
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <li className="flex items-center h-full pb-5">
              <Link href={`${pathname}/credits`}>View More</Link>
            </li>
          </SwiperSlide>
        </Swiper>
      </ul>
    </>
  );
};

export default CastList;
