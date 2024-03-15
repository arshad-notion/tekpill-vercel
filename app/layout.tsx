import type { Metadata } from "next";
 
import { Sora } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Providers from "./components/Providers";


const sora = Sora ({ subsets: ['latin']})
 

export const metadata: Metadata = {
  title: "TekPill",
  description: "Welcome to TekPill",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">    
    
      <body className={sora.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
