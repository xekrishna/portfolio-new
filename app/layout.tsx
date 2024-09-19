import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/ui/cursor";
import ContextMenu from "@/components/ui/right-click-menu";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconUser } from "@tabler/icons-react";
import {
  Inter,
  Poppins,
  Montserrat,
  Instrument_Sans,
  Rozha_One,
} from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const instrument_sans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const rozha = Rozha_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rozha",
});

export const metadata: Metadata = {
  title: "Mayank Bisht",
  description: "Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Info",
      link: "/info",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} ${montserrat.variable} ${instrument_sans.variable} ${rozha.variable}`}
    >
      <head>
        <link rel="shortcut icon" href="/assets/xe.png" type="image/x-icon" />
        <meta property="og:image" content="/assets/meta.png" />
      </head>
      <body className={` `} suppressHydrationWarning>
        <Suspense fallback={<Loading />}>
          <Providers>
            <Navbar />
            <FloatingNav navItems={navItems} />
            <Cursor />
            <ContextMenu />
            {children}
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
