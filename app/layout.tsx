import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://autoservis-demo-beryl.vercel.app"),

  title: {
    default: "AutoServis | Autoservis v Nitre",
    template: "%s | AutoServis",
  },

  description:
    "Moderný autoservis v Nitre. Výmena oleja, diagnostika, brzdy, pneuservis a profesionálny servis vozidiel.",

  keywords: [
    "autoservis",
    "autoservis Nitra",
    "diagnostika",
    "výmena oleja",
    "brzdy",
    "pneuservis",
    "servis áut",
  ],

  authors: [
    {
      name: "AutoServis",
    },
  ],

  creator: "AutoServis",

  openGraph: {
    title: "AutoServis | Autoservis v Nitre",
    description:
      "Profesionálny autoservis v Nitre. Diagnostika, pneuservis, brzdy, výmena oleja a ďalšie služby.",
    url: "https://autoservis-demo-beryl.vercel.app",
    siteName: "AutoServis",
    locale: "sk_SK",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AutoServis | Autoservis v Nitre",
    description:
      "Profesionálny autoservis v Nitre. Diagnostika, pneuservis a servis vozidiel.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sk"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-white">
        {children}
      </body>
    </html>
  );
}