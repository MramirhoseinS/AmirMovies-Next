import type { Metadata } from "next";


export const metadata: Metadata = {
  alternates: {
    canonical: "/movies",
  },
  title: {
    default: "Movies",
    template: `Next App | %s`,
  },
  description:
    "Explore a wide collection of Movies on AmirMovies.",
  openGraph: {
    title: "Movies",
    description:
      "Explore a wide collection of Movies on AmirMovies.",
    url: "/movies",
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
