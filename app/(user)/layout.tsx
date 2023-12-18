import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";

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
      <meta
        name="google-site-verification"
        content="mhcfEkbkeCkKB5K1G4fuzqsPl45HNt_aRR4LVsUz64w"
      />
      <meta name="google-adsense-account" content="ca-pub-1082872931704117" />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1082872931704117"
        crossOrigin="anonymous"
      />
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </body>
    </html>
  );
}
