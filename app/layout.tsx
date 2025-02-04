import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import AnimatedBackground from "@/components/animated-background";
import { Cursor } from "@/components/cursor/cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "*NISHAT's* Portfolio",
  description: "Personal portfolio website showcasing my work and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <AnimatedBackground />
        <main className="relative z-10">
          {children}
          <Cursor />
        </main>
      </body>
    </html>
  );
}
