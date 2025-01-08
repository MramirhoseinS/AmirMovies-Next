import type { Metadata } from "next";


export const metadata: Metadata = {
  alternates: {
    canonical: "/tvshow",
  },
  title: {
    default: "Tv Shows",
    template: `Next App | %s`,
  },
  description:
    "Explore a wide collection of Tv Shows on AmirMovies.",
  openGraph: {
    title: "Tv Shows",
    description:
      "Explore a wide collection of Tv Shows on AmirMovies.",
    url: "/tvshow",
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
