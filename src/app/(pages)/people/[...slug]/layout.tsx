import { api, imgURL } from "@/app/_components/api/apiConfig";
import type { Metadata } from "next";

interface IData {
  results: {
    backdrop_path: string;
  }[];
}

const personForPage = [
  { name: "Popular", path: "popular" },
];

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> => {
  try {
    const id = (await params).slug[0];
    const page = (await params).slug[1];
    const title = personForPage.find((item) => item.path === id)?.name
    const data: IData = (
      await api.get(`/person/${id}`, { params: { page: Number(page) } })
    ).data;

    return {
      alternates: {
        canonical: `/people/${id}/${page}`,
      },
      title: `${title} People`,
      description: `Discover the ${title} People on AmirMovies`,
      openGraph: {
        title: `${title} People`,
        description: `Discover the ${title} People on AmirMovies`,
        url: `/people/${id}/${page}`,
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
