import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Slackey } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const berkshire = Slackey({
  variable: "--font-berkshire",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Root Beverages",
  description:
    "Discover Root Beverages – a curated range of bold, fizzy drinks inspired by authentic Indian flavours. Taste the nostalgic blend of desi classics like Jeera, Kokam, and Guava with a refreshing modern twist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${berkshire.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
