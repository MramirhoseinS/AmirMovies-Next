"use client"

import { useRouter } from "next/navigation";
import BackwardButton from "../button/BackwardButton";
import ForwardButton from "../button/ForwardButton";

interface IPage {
  page: number;
  path: string;
  total: number;
}

const Pagination = ({ page, path, total }: IPage) => {
  const router = useRouter();

  const handlePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault;
    if (e.currentTarget.name === "per") {
      if (page === 1) return;
      router.push(`${path}/${page - 1}`);
    }
    if (e.currentTarget.name === "nex") {
      if (page === Number((total / 20).toFixed())) return;
      router.push(`${path}/${page + 1}`);
    }
  };

  return (
    <>
      <div className="mt-10">
        <nav className="flex justify-between lg:justify-around items-center border-t-2 border-slate-400 pt-2 text-sm md:text-lg">
          <div>
            <BackwardButton name="Previous" onclick={handlePage} />
          </div>
          <div className="flex group text-slate-400 gap-2">
            <span className="hidden md:inline">Showing</span>
            <span className="font-bold group-hover:text-rose-400 transition-all duration-300">
              {page * 20 - 19}
            </span>
            to
            <span className="font-bold group-hover:text-rose-400 transition-all duration-300">
              {page * 20}
            </span>
            of
            <span className="font-bold group-hover:text-rose-400 transition-all duration-300">
              {total}
            </span>
            <span className="hidden md:inline">results</span>
          </div>
          <div>
            <ForwardButton name="Next" onclick={handlePage} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Pagination;
