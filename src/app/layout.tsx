import Header from "./_components/header/Header";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./_components/footer/Footer";
import { Providers } from "./redux/provider";
import { Toaster } from "react-hot-toast";

const noto_Sans = Noto_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Next App | Home",
    template: `Next App | %s`,
  },
  description: "Collection of Movies, TV Shows, and People Data",
  openGraph: {
    title: "AmirMovies",
    description: "Collection of Movies, TV Shows, and People Data",
    siteName: "AmirMovies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${noto_Sans.className} bg-slate-800 text-white`}>
        <Providers>
          <Header />
          {children}
          <Footer />

          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
