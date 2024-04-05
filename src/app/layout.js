import { Jost } from "next/font/google";
import "./globals.css";
import "sweetalert2/src/sweetalert2.scss";

const jost = Jost({ subsets: ["latin-ext"] });

import { NextAuthProvider } from "@/provider/NextAuthProvider";
import TopHeader from "@/components/topHeader/page";
import Navigation from "@/components/navigation/page";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";

import "swiper/css";
import "swiper/css/navigation";

export const metadata = {
  title: "Zentury",
  description: "Zentury",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <NextAuthProvider>
          <TopHeader />
          <Navigation />
          {children}
          <div className="mt-[89px]">
            <ContactUs />
            <Footer />
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
