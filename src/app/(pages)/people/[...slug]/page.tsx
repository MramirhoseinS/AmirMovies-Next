"use client";

import Pagination from "@/app/_components/pagination/Pagination";
import PersonCard from "@/app/_components/personData/PersonCard";
import { useMovieDB } from "@/app/_hooks/useMovieDB";
import { useParams } from "next/navigation";

const personForPage = [{ name: "Popular", path: "popular" }];

interface IDataPeople {
  results: {
    id: number;
    name: string;
    biography: string;
    known_for_department: string;
    profile_path: string;
  }[];
  total_results: number;
}

const PeopleCat = () => {
  const { slug } = useParams<{ slug: string[] }>();
  slug[1] = slug[1] || "1";

  const [data, loading] = useMovieDB<IDataPeople>(
    {
      endpoint: `/person/${slug[0]}`,
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
            {personForPage.find((item) => item.path === slug[0])?.name} People
          </h1>
          <div className="mb-5 text-4xl text-slate-200">Loading ...</div>
          <Pagination
            total={data.total_results}
            page={Number(slug[1])}
            path={`/people/${slug[0]}`}
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
          {personForPage.find((item) => item.path === slug[0])?.name} People
        </h1>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
          {data.results.map((person) => (
            <li key={person.id}>
              <PersonCard person={person} />
            </li>
          ))}
        </ul>
        <Pagination
          total={data.total_results}
          page={Number(slug[1])}
          path={`/people/${slug[0]}`}
        />
      </div>
    </>
  );
};
export default PeopleCat;
