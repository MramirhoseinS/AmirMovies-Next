import { api, imgURL } from "@/app/_components/api/apiConfig";
import type { Metadata } from "next";

interface IData {
  results: {
    backdrop_path: string;
  }[];
}

interface IGenreTv {
  genres: {
    id: number;
    name: string;
  }[];
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string; page: string }>;
}): Promise<Metadata> => {
  try {
    const id = (await params).id;
    const page = (await params).page;
    const genreTv: IGenreTv = (await api.get(`genre/tv/list`)).data;
    const title = genreTv?.genres?.find(
      (item) => item.id.toString() === id
    )?.name;
    const data: IData = (
      await api.get(`/discover/tv`, {
        params: { with_genres: id, page: Number(page) },
      })
    ).data;

    return {
      alternates: {
        canonical: `genre/${id}/tv/${page}`,
      },
      title: title,
      description: `A Collection of ${title} Tv Shows`,
      openGraph: {
        title: title,
        description: `A Collection of ${title} Tv Shows`,
        url: `genre/${id}/tv/${page}`,
        siteName: "AmirMovies",
        images: [`${imgURL(data.results[0].backdrop_path, "w500")}`],
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
