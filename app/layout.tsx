import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import LoadingAnimation from "@/components/LoadingAnimation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Pascom | Chemical Suppliers Australia",
  description:
    "Pascom offers expert custom chemical blending services, chemical formulation, and logistics solutions for industries across Australia.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* <LoadingAnimation /> */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
