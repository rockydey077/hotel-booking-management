import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home | BeachBliss",
  description: "A hotel booking landing page.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' data-theme='light'>
      <body className={inter.className}>
        <Navbar />
        <section>{children}</section>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
