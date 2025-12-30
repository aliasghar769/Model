"use client";

import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideLayoutRoutes = [
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
  ];

  const hideLayout = hideLayoutRoutes.includes(pathname);

  return (
    <html lang="en">
      <head>
        <title>🌳 Model-Avenue</title>
        <meta name="description" content="Modern full-stack ecommerce app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        {!hideLayout && <Navbar />}

        <main className={`${!hideLayout ? "pt-20" : ""}`}>
          {children}
        </main>

        {!hideLayout && <Footer />}
      </body>
    </html>
  );
}
