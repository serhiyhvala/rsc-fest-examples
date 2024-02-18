import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Header } from "@/widgets/header";
import { Categories } from "@/widgets/categories";
import { appStyles } from "@/shared/styles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Server Components",
  icons: {
    icon: "https://fav.farm/🔥",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className={appStyles.container}>
          <Categories />
          {children}
        </div>
      </body>
    </html>
  );
}
