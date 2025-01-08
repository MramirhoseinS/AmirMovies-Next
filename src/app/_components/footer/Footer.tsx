import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="mt-10">
        <div className="text-center py-2 text-slate-300 text-2xl bg-slate-700 ">
          <div className="flex justify-center gap-20">
            <div className="flex flex-col items-start justify-center font-semibold">
              <span className="-mb-2">Amir</span>
              <span className="text-rose-500">Movies</span>
            </div>
            <div>
              <ul className="flex flex-col gap-2 text-sm lg:text-base uppercase">
                <li className="hover:text-rose-300 transition-all duration-300">
                  <Link href={`/movies`}>Movies</Link>
                </li>
                <li className="hover:text-rose-300 transition-all duration-300">
                  <Link href={`/tvshow`}>Tv Shows</Link>
                </li>
                <li className="hover:text-rose-300 transition-all duration-300">
                  <Link href={`/people`}>People</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-2 mb-4 text-center text-slate-300">
          <p>&copy; 2025 AmirMovies. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
