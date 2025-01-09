import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link"
import Image from "next/image";
import Logo from "@/app/logo.jpg"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CampusDay 2025",
  description: "Tagline acara di sini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed w-screen bg-pink-200 p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex justify-between items-center">
              <Image alt="logo" src={Logo} width={50} height={50} />
              <h1 className="text-3xl font-bold text-yellow-600 mx-4">CampusDay 2025</h1>
            </div>
              <nav>
                  <ul className="flex space-x-4">
                      <li><Link href="/materi" className="text-yellow-600 hover:text-yellow-800">Materi</Link></li>
                      <li><Link href="/entre" className="text-yellow-600 hover:text-yellow-800">Entre</Link></li>
                      <li><Link href="/adaptasi" className="text-yellow-600 hover:text-yellow-800">Adaptasi</Link></li>
                      <li><Link href="/alumni" className="text-yellow-600 hover:text-yellow-800">Alumni</Link></li>
                      <li><Link href="/beasiswa" className="text-yellow-600 hover:text-yellow-800">Beasiswa</Link></li>
                  </ul>
              </nav>
          </div>
        </header>
        {children}
        <footer className="bg-pink-200 p-4 text-center">
          <p className="text-yellow-600">&copy; 2025 CampusDay. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
