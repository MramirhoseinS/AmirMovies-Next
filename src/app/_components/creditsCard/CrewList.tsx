"use client"

import { useMovieDB } from "@/app/_hooks/useMovieDB";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IDataCredits {
  crew: {
    id: number;
    job: string;
    name: string;
    profile_path: string;
  }[];
}

interface ICreated {
  created?: { id: number; name: string }[];
  path?: string;
}

const job = ["Director", "Novel", "Screenplay", "Writer", "Story", "Producer"];

const CrewList = ({ created, path }: ICreated) => {
  const pathname = usePathname();

  const [credits] = useMovieDB<IDataCredits>(
    { endpoint: `${path || pathname}/credits` },
    { crew: [] }
  );

  return (
    <>
      {created?.map((c) => (
        <li key={c.id} className="mb-4">
          <h5 className="text-lg font-bold">
            <Link href={`/person/${c.id}`} className="hover:text-rose-400 transition-all duration-300">{c.name}</Link>
          </h5>
          <div className="text-sm text-slate-300">Creator</div>
        </li>
      ))}
      {credits.crew
        .filter((c) => job.includes(c.job))
        .reduce((acc, curr) => {
          const existingItem = acc.find((item) => item.name === curr.name);
          if (existingItem) {
            existingItem.job += `, ${curr.job}`;
          } else {
            acc.push(curr);
          }
          return acc;
        }, [] as typeof credits.crew)
        .map((c) => (
          <li key={c.id} className="mb-4">
            <h5 className="text-lg font-bold">
              <Link href={`/person/${c.id}`} className="hover:text-rose-400 transition-all duration-300">{c.name}</Link>
            </h5>
            <div className="text-sm text-slate-300">{c.job}</div>
          </li>
        ))}
    </>
  );
};

export default CrewList;
