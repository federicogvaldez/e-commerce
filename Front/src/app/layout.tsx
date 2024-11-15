import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import NavBarXL from "@/components/Navbar/NavBarXL";
import Footer from "@/components/footer/Footer";
import BottomNavBar from "@/components/Navbar/BottomNavBar";
import VoiceflowWidget from "@/components/VoiceflowWidget/VoiceflowWidget";
import NavBarMobile from "@/components/Navbar/NavBarMobile";

const geistSans = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Club Fellini - Bar",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen justify-between">
        <div className="hidden md:block">
          <NavBarXL />
        </div>
        <div className="block md:hidden">
          <NavBarMobile />
        </div>
        {children}
        <div className="block md:hidden">
          <BottomNavBar />
        </div>
          <Footer />

          <VoiceflowWidget/>
      </body>
    </html>
  );
}