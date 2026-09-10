import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const siteUrl = "https://autoservis-demo-beryl.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Autoservis — demo web | Samuel Zelíska",
    template: "%s | Demo web Samuela Zelísku",
  },
  description:
    "Samostatne vytvorený ukážkový koncept webovej stránky pre autoservis. Nejde o skutočnú prevádzku ani ponuku servisných služieb.",
  applicationName: "Autoservis — demo projekt",
  category: "Portfolio demo",
  authors: [{ name: "Samuel Zelíska", url: "https://www.samuelzeliska.sk" }],
  openGraph: {
    title: "Autoservis — ukážkový webový koncept",
    description: "Demo projekt vytvorený na prezentáciu webového dizajnu a vývoja. Nejde o skutočný autoservis.",
    url: siteUrl,
    siteName: "Portfolio demo Samuela Zelísku",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Ukážkový koncept webu autoservisu" }],
    locale: "sk_SK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autoservis — ukážkový webový koncept",
    description: "Demo projekt Samuela Zelísku. Nejde o skutočný autoservis.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sk" className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col bg-zinc-950 text-white">{children}</body>
    </html>
  );
}
