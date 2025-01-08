import type { Metadata } from "next";


export const metadata: Metadata = {
  alternates: {
    canonical: "/about",
  },
  title: "About",
  description:
    "About of AmirMovies, A Collection of Movies, TV Shows, and People Data",
  openGraph: {
    title: "About",
    description:
      "About of AmirMovies, A Collection of Movies, TV Shows, and People Data",
    url: "/about",
    siteName: "AmirMovies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
