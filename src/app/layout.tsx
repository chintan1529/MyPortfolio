import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Preloader from "@/components/layout/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chintan Chhajed — AI Engineer",
  description:
    "AI Engineer building intelligent systems across machine learning, RAG, computer vision, backend engineering, and full-stack AI.",
  openGraph: {
    title: "Chintan Chhajed — AI Engineer",
    description:
      "AI Engineer building intelligent systems across machine learning, RAG, computer vision, backend engineering, and full-stack AI.",
    url: "https://my-portfolio-murex-two-94.vercel.app",
    siteName: "Chintan Chhajed Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chintan Chhajed — AI Engineer",
    description:
      "AI Engineer building intelligent systems across machine learning, RAG, computer vision, backend engineering, and full-stack AI.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} dark antialiased scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col font-sans bg-[#050505] text-[#FAFAFA]"
      >
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
