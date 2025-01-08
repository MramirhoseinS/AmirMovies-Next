import type { Metadata } from "next";


export const metadata: Metadata = {
  alternates: {
    canonical: "/signin",
  },
  title: "Sign In",
  description: "Sign in to access your account and explore a collection of Movies, Tv shows, and People data.",
  openGraph: {
    title: "Sign In",
    description: "Sign in to access your account and explore a collection of Movies, Tv shows, and People data.",
    url: "/signin",
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
