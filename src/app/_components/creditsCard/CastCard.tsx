"use client"

import { imgURL } from "../api/apiConfig";
import Image from "next/image";
import Link from "next/link";

interface ICastCard {
  cast: {
    id: number;
    name: string;
    character: string;
    profile_path: string;
  };
}

const CastCard = ({ cast }: ICastCard) => {
  return (
    <>
      <Link href={`/person/${cast.id}`}>
        <div className="group/card bg-gray-600 aspect-[2/3] relative rounded-lg overflow-hidden ">
            <Image
              width={500}
              height={500}
              src={
                cast.profile_path
                  ? imgURL(cast.profile_path, "w500")
                  : "/person.jpg"
              }
              alt={cast.name}
              className="w-full h-full group-hover/card:scale-105 transition-all duration-300"
            />
          <div
            className="flex flex-col justify-end 
                absolute bottom-0 left-0 w-full h-full p-2 md:p-4
                bg-gradient-to-t from-[#0f172a78] to-[#0f172a0a]
                opacity-100 group-hover/card:opacity-0 
                transition-all duration-300"
          >
            <h1 className="text-sm md:text-base font-bold">{cast.name}</h1>
            <p>
              <span className="text-xs md:text-sm">{cast.character}</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CastCard;
