import type { Metadata } from "next";
import { Inter, Forum } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const forum = Forum({
  variable: "--font-forum",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Qitchen | Sushi Sensation",
  description: "Experience the art of sushi at Qitchen.",
};

import SplitLayout from "@/components/SplitLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${forum.variable}`}>
      <body style={{ backgroundColor: "#0a0a0a", color: "#fff" }}>
        <SplitLayout>
          {children}
        </SplitLayout>
      </body>
    </html>
  );
}
