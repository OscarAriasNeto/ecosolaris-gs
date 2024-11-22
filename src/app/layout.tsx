import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {Poppins} from "next/font/google";

const poppins = Poppins({
  
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: "normal",
  display: "swap",

})

export const metadata: Metadata = {
  title: "Ecosolaris",
  description: "Venda de placas solares",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
