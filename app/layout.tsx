import type { Metadata } from "next";
import { Abril_Fatface, Imperial_Script, Poppins } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "./globals.css";

const ImperialScript = Imperial_Script({
  variable: "--font-imperial-script",
  subsets: ["latin"],
  weight: "400",
});

const AbrilFatface = Abril_Fatface({
  variable: "--font-abril-fatface",
  subsets: ["latin"],
  weight: "400",
});

const PoppinsFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Tecnologia em Sistemas para Internet - IFSP Campus Itapetininga",
  description:
    "Site do curso de Tecnologia em Sistemas para Internet do Instituto Federal de São Paulo (IFSP) Campus Itapetininga - TECWEB",
  keywords: [
    "Tecnologia em Sistemas para Internet",
    "IFSP",
    "Campus Itapetininga",
    "TECWEB",
  ],
  openGraph: {
    title: "Tecnologia em Sistemas para Internet - IFSP Campus Itapetininga",
    description:
      "Site do curso de Tecnologia em Sistemas para Internet do Instituto Federal de São Paulo (IFSP) Campus Itapetininga - TECWEB",
    images: ["/ifsp/ifsp1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PoppinsFont.className} ${ImperialScript.variable} ${AbrilFatface.variable} antialiased  flex flex-col gap-12 bg-linear-to-b from-light to-neutral-100`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
