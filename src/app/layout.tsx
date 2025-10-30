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
  title: "Ignition Motors | Premium Carsales Marketplace",
  description:
    "Discover, compare, and finance premium new and pre-owned vehicles with confidence at Ignition Motors.",
  metadataBase: new URL("https://agentic-b45d4055.vercel.app"),
  openGraph: {
    title: "Ignition Motors | Premium Carsales Marketplace",
    description:
      "Browse curated inventory, explore financing, and book test drives all in one seamless carsales experience.",
    url: "https://agentic-b45d4055.vercel.app",
    siteName: "Ignition Motors",
    images: [
      {
        url: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1200&q=80&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Ignition Motors showroom",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ignition Motors | Premium Carsales Marketplace",
    description:
      "Hand-picked vehicles, smart financing, and concierge service from Ignition Motors.",
    images: [
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1200&q=80&auto=format&fit=crop",
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
