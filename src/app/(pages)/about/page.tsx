const About = () => {
  return (
    <>
      <div className="container mx-auto lg:h-80">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 mt-24">
          <div className="md:col-span-2 text-center lg:text-left">
            <h1 className="text-5xl grid grid-cols-1 md:flex md:justify-center lg:justify-normal">
              <span className="font-bold">About</span>
              <span className="md:ml-5">
                Amir<span className="text-rose-500">Movies</span>
              </span>
            </h1>
            <p className="mt-5 text-xl lg:pl-2 leading-relaxed">
              This site is a project created to showcase my skills in web
              development. It features a collection of movies and related
              information, designed to provide an engaging user experience. I
              built this site as part of a personal project to demonstrate my
              abilities in React and Next.js.
            </p>
          </div>
          <div className="flex flex-col w-full mx-auto text-center gap-5 py-5 mt-10 lg:mt-0
                bg-slate-700 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <h2 className="text-4xl font-semibold">Developer</h2>
            <div className="group flex flex-col xl:block">
              <span className="text-rose-400 group-hover:text-rose-500 transition-all duration-300">
                Name:{" "}
              </span>
              <span className="text-lg">Amirhosein Samiee</span>
            </div>
            <div className="group flex flex-col xl:block">
              <span className="text-rose-400 group-hover:text-rose-500 transition-all duration-300">
                Email:{" "}
              </span>
              <span className="text-lg">amirhoseinsamiei@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
