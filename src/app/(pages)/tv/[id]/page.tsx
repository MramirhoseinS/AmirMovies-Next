"use client";

import { imgURL } from "@/app/_components/api/apiConfig";
import CastList from "@/app/_components/creditsCard/CastList";
import CrewList from "@/app/_components/creditsCard/CrewList";
import MovieTab from "@/app/_components/movieData/MovieTab";
import SocailMovie from "@/app/_components/socialMovie/SocialMovie";
import { useMovieDB } from "@/app/_hooks/useMovieDB";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface IDataTv {
  name: string;
  poster_path: string;
  backdrop_path: string;
  first_air_date: string;
  genres: { id: number; name: string }[];
  vote_average: number;
  overview: string;
  tagline: string;
  created_by: { id: number; name: string }[];
}

const listOtherTv = [
  { name: "Recommendations", path: "recommendations" },
  { name: "Similar", path: "similar" },
];

const Tv = () => {
  const { id } = useParams();

  const [data, loading, error] = useMovieDB<IDataTv>(
    { endpoint: `/tv/${id}` },
    {
      name: "",
      poster_path: "",
      backdrop_path: "",
      first_air_date: "",
      genres: [],
      vote_average: 0,
      overview: "",
      tagline: "",
      created_by: [],
    }
  );

  if (loading) {
    return (
      <div className="container mx-auto">
        <div className="mb-5 text-4xl text-slate-200">Loading ...</div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="container mx-auto">
        <div className="mb-5 text-4xl text-slate-200">Tv id Invalid!</div>
      </div>
    );
  }
  return (
    <>
      <div className="container mx-auto">
        <div className="md:flex gap-10">
          <Image
            width={500}
            height={450}
            className="rounded-xl mx-auto w-auto h-[450px] md:h-[370px] lg:h-[450px]"
            src={imgURL(data.poster_path, "w500")}
            alt={data.name}
          />
          <div className="mt-5">
            <div>
              <div className="flex justify-center gap-3 md:justify-normal md:gap-5 items-baseline">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  {data.name}
                </h1>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-300">
                  {data.first_air_date.slice(0, 4)}
                </h3>
              </div>
              <p className="text-slate-300 text-center md:text-left italic ml-2">
                {data.tagline}
              </p>
            </div>
            <div className="flex justify-center md:justify-normal gap-3 items-center mt-5">
              <div className="group flex items-center gap-2">
                <div>
                  <svg
                    className="text-yellow-400 group-hover:text-rose-600 transition-all duration-300"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xl font-bold">
                    {data.vote_average.toString().slice(0, 3)}
                  </span>{" "}
                  / 10
                </div>
              </div>
              <SocailMovie />
            </div>
            <div>
              <div className="flex gap-3 justify-center md:justify-normal items-baseline mt-5">
                <ul className="flex gap-2">
                  {data.genres.map((genre, index, { length }) => (
                    <li
                      key={genre.id}
                      className="text-slate-300 hover:text-rose-400 transition-all duration-300"
                    >
                      <Link href={`/genre/${genre.id}/tv/1`}>
                        {genre.name}
                        <span className={`${index === length - 1 && "hidden"}`}>
                          ,
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-5 text-center md:text-left">
              <h4 className="text-2xl font-bold mb-2">Overview</h4>
              <p>{data.overview}</p>
            </div>
            <div className="mt-5 md:mt-10">
              <ul className="grid grid-cols-3 text-center md:text-left">
                <CrewList created={data.created_by} />
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div>
            <CastList />
          </div>
          <div>
            <MovieTab list={listOtherTv} name="More Like This" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tv;
