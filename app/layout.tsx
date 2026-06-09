import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xyberox - Robotics & Innovation",
  description: "Next-generation robotics website with responsive design, literature review, weekly updates, and real-time prototype details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full dark antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 antialiased overflow-x-hidden">
        {/* Matrix Background elements */}
        <div className="matrix-container">
          {Array.from({ length: 5 }).map((_, pIdx) => (
            <div key={pIdx} className="matrix-pattern">
              {Array.from({ length: 40 }).map((_, cIdx) => (
                <div key={cIdx} className="matrix-column"></div>
              ))}
            </div>
          ))}
        </div>

        <Navbar />
        <div className="flex-1 flex flex-col relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
