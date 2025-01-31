import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "./context/GlobalContext";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Petrodata",
  description: "Petroleum products and services info",
  openGraph: {
    url: "https://petrodata-basit.vercel.app/",
    type: "website",
    title: "Petrodata",
    description: "Petroleum products and services info",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/8228a5c7-9e1f-4949-b628-c66be3e6bdb1.png?token=ht9qwHHSWAT6cy71FMEc95rWbSTZg0wWwLosaQFLZn4&height=567&width=1200&expires=33274272715",
        width: 1200,
        height: 567,
        alt: "Petrodata Preview",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-ash text-white h-screen`}
      >
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
