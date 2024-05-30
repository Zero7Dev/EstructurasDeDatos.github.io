import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './Components/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sistema De Gestion",
  description: "Make by JulioCV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col items-center ">
          <Navbar></Navbar>
          <span className="p-21 7-xl">Procesos de software</span>
          {children}
        </main>
      </body>
    </html>
  );
}
