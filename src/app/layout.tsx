"use-client";

import type {Metadata} from "next";

import Link from "next/link";
import localFont from "next/font/local";

import "./nes.min.css";
import "./globals.css";

const myFont = localFont({
  src: "./PressStart2P-Regular.ttf",
  display: "swap",
  variable: "--press-start--2p-regular",
});

export const metadata: Metadata = {
  title: "pokesearch-project",
  description: "Generated by pnvdev",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html className={`${myFont.variable}`} lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] overflow-y-scroll bg-background px-4 font-sans antialiased">
        <header className="nes-text text-xl font-bold leading-[4rem]">
          <Link href="/">Pokesearch</Link>
        </header>
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[4rem] opacity-70">
          © {new Date().getFullYear()} pnvdev-project
        </footer>
      </body>
    </html>
  );
}