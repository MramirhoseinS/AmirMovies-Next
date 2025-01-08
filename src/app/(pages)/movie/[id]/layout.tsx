import { api, imgURL } from "@/app/_components/api/apiConfig";
import type { Metadata } from "next";

interface IData {
  title: string;
  overview: string;
  backdrop_path: string;
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> => {
  try {
    const id = (await params).id;
    const data: IData = (await api.get(`/movie/${id}`)).data;
  
    return {
      alternates: {
        canonical: `/movie/${id}`
      },
      title: data.title,
      description: `${data.overview.slice(0, 150)} ...`,
      openGraph: {
        title: data.title,
        description: data.overview,
        url: `/movie/${id}`,
        siteName: "AmirMovies",
        images: [`${imgURL(data.backdrop_path, "w500")}`],
        type: "website"
      }
    };
  } catch (error) {
    return {
      title: "Not Found",
      description: "The page does not exist",
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
