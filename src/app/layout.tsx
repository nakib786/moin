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
  title: "The Moin Chicken",
  description: "Experience the deliciousness at The Moin Chicken.",
};

import SplitLayout from "@/components/SplitLayout";
import PageLoader from "@/components/PageLoader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${forum.variable}`}>
      <body style={{ color: "#fff", background: "transparent" }}>
        <PageLoader />
        <SplitLayout>
          {children}
        </SplitLayout>
      </body>
    </html>
  );
}
