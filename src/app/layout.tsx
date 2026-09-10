import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chintan Chhajed | Full-Stack & AI Engineer",
  description: "Portfolio of Chintan Chhajed, Full-Stack Developer & AI/ML Specialist building products that are both intelligent and beautiful.",
  openGraph: {
    title: "Chintan Chhajed | Full-Stack & AI Engineer",
    description: "Portfolio of Chintan Chhajed, Full-Stack Developer & AI/ML Specialist building products that are both intelligent and beautiful.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark antialiased scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
