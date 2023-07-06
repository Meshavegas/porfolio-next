import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mesha vegas",
  description: "site Portfolio de Lontchi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  mx-auto`}>
        <header>
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-2xl drop-shadow font-extrabold"
          >
            mesha vegas
          </Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
