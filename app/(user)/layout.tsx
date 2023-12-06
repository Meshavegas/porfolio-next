import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mesha Vegas",
  description: "Personal mesha vegas web site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
