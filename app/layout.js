import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "./context/GlobalContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Petrodata",
  description: "Petroleum products and services info",
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
