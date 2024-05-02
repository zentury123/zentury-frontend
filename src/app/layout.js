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
import 'react-image-lightbox/style.css';

export const metadata = {
  title: 'Dražobná spoločnosť Zentury',
  description: 'Zísajte nehnuteľnosť v dražbe | Zentury',
  keywords: 'dražby, Zentury, nehnuteľnosti',
  language: 'English',
  author: 'Zentury',
  other: {
    'robots': 'index, follow',
    'http-equiv': 'Content-Type',
    'content': 'text/html; charset=utf-8',
    'language': 'English'
  },
  icons: {
    appleTouchIcon: '/apple-touch-icon.png',
    favicon: [
      {
        href: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        href: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    maskIcon: '/safari-pinned-tab.svg',
    maskIconColor: '#5bbad5',
    msTileColor: '#da532c',
    themeColor: '#ffffff',
    webAppManifest: '/site.webmanifest'
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
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
