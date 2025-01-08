import type { Metadata } from "next";


export const metadata: Metadata = {
  alternates: {
    canonical: "/people",
  },
  title: {
    default: "People",
    template: `Next App | %s`,
  },
  description:
    "Explore a wide collection of People on AmirMovies.",
  openGraph: {
    title: "People",
    description:
      "Explore a wide collection of People on AmirMovies.",
    url: "/people",
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
