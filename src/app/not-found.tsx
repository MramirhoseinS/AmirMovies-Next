import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "404 Page not found",
};

const Not = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="text-center py-12 md:py-24">
          <h1 className="text-4xl md:text-6xl mb-4 md:mb-6">Page not found</h1>
          <p className="text-lg md:text-xl mb-3 md:mb-5">
            We're sorry, we couldn't find the page you requested.
          </p>
          <Link
            href={"/"}
            className="bg-rose-600 hover:bg-rose-400 transition-all duration-300
                    px-2 py-1 rounded-lg mx-auto text-lg md:text-xl"
          >
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Not;
