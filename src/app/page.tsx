import MovieTab from "./_components/movieData/MovieTab";

const movies = [
  { name: "Now Playing", path: "now_playing" },
  { name: "Popular", path: "popular" },
  { name: "Top Rated", path: "top_rated" },
  { name: "Upcoming", path: "upcoming" },
];

const tv = [
  { name: "Airing Today", path: "airing_today" },
  { name: "On The Air", path: "on_the_air" },
  { name: "Popular", path: "popular" },
  { name: "Top Rated", path: "top_rated" },
];

export default function Home() {
  return (
    <>
      <main className="container mx-auto">
        <div>
          <MovieTab basePath="/movie" list={movies} name="Movies" />
        </div>
        <div className="mt-10">
          <MovieTab basePath="/tv" list={tv} name="Tv Shows" />
        </div>
      </main>
    </>
  );
}
