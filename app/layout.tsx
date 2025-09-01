import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provide";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lahiru Yasas Karunathilaka Portfolio",
  description:
    "Passionate full-stack Software Engineer skilled in Next.js, React, and NestJS. Explore my portfolio featuring innovative web solutions, scalable applications, and modern JavaScript frameworks.",
  keywords: [
    "Lahiru Yasas",
    "Karunathilaka",
    "Full Stack Software Engineer",
    "Next.js Portfolio",
    "React Developer",
    "NestJS",
    "Web Developer Sri Lanka",
  ],
  metadataBase: new URL("https://lahirukarunathilaka.web.lk"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "google1134d4c168fdafa0.html",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CV583NR2Q7"
        ></Script>
        <Script id="google-analytics">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CV583NR2Q7');`}
        </Script> */}
      </head>
      <body className={inter.className}>
        {" "}
        <Navbar />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
