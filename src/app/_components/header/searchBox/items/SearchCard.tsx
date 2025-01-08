import { imgURL } from "@/app/_components/api/apiConfig"; 
import Image from "next/image";
import Link from "next/link";

interface ISerachCard {
  poster: string;
  title: string;
  path: string;
}

const SearchCard = ({ poster, title, path }: ISerachCard) => {
  if (!poster) {
    return <></>;
  }
  return (
    <Link href={path}>
      <div
        className="group flex gap-4 m-2 relative overflow-hidden rounded-lg transition-all"
      >
        <Image
          width={500}
          height={500}
          src={imgURL(poster, "w500")}
          alt={title}
          className="w-full h-[200px] object-cover group-hover:scale-105 transition-all duration-300"
        />
        <div
          className="flex flex-col justify-end 
            absolute bottom-0 left-0 w-full h-full p-2 md:p-4
            bg-gradient-to-t from-[#0f172aa5] to-[#0f172a19]
            opacity-100 group-hover:opacity-0 transition-all duration-300"
        >
          <h1 className="text-sm md:text-base">{title}</h1>
        </div>
      </div>
    </Link>
  );
};

export default SearchCard;
