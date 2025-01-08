import { api, imgURL } from "@/app/_components/api/apiConfig";
import type { Metadata } from "next";

interface IData {
  results: {
    backdrop_path: string;
  }[];
}

const movieForPage = [
  { name: "Now Playing", path: "now_playing" },
  { name: "Popular", path: "popular" },
  { name: "Top Rated", path: "top_rated" },
  { name: "Upcoming", path: "upcoming" },
];

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> => {
  try {
    const id = (await params).slug[0];
    const page = (await params).slug[1];
    const title = movieForPage.find((item) => item.path === id)?.name
    const data: IData = (
      await api.get(`/movie/${id}`, { params: { page: Number(page) } })
    ).data;

    return {
      alternates: {
        canonical: `/movies/${id}/${page}`,
      },
      title: `${title} Movies`,
      description: `Discover the ${title} Movies on AmirMovies`,
      openGraph: {
        title: `${title} Movies`,
        description: `Discover the ${title} Movies on AmirMovies`,
        url: `/movies/${id}/${page}`,
        images: [`${imgURL(data.results[0].backdrop_path, "w500")}`],
        siteName: "AmirMovies",
        type: "website",
      },
    };
  } catch (error) {
    return {
      title: "Not Found",
      description: "The page does not exist",
    };
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
