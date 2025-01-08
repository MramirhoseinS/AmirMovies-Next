import { api, imgURL } from "@/app/_components/api/apiConfig";
import type { Metadata } from "next";

interface IData {
  results: {
    backdrop_path: string;
  }[];
}

const tvForPage = [
  { name: "Airing Today", path: "airing_today" },
  { name: "On The Air", path: "on_the_air" },
  { name: "Popular", path: "popular" },
  { name: "Top Rated", path: "top_rated" },
];

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> => {
  try {
    const id = (await params).slug[0];
    const page = (await params).slug[1];
    const title = tvForPage.find((item) => item.path === id)?.name
    const data: IData = (
      await api.get(`/tv/${id}`, { params: { page: Number(page) } })
    ).data;

    return {
      alternates: {
        canonical: `/tvshow/${id}/${page}`,
      },
      title: `${title} Tv Shows`,
      description: `Discover the ${title} Tv Shows on AmirMovies`,
      openGraph: {
        title: `${title} Tv Shows`,
        description: `Discover the ${title} Tv Shows on AmirMovies`,
        url: `/tvshow/${id}/${page}`,
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
