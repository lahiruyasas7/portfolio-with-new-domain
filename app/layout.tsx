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
    "Lahiru Yasas Karunathilaka",
    "Lahiru Karunathilaka",
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
  // verification: {
  //   google: "google1134d4c168fdafa0.html",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Lahiru Yasas Karunathilaka Portfolio",
              url: "https://lahirukarunathilaka.web.lk",
            }),
          }}
        />

        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Lahiru Yasas Karunathilaka",
              url: "https://lahirukarunathilaka.web.lk",
              sameAs: ["https://www.linkedin.com/in/lahiru-yasas-2ba260214/"],
            }),
          }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4YRPPPS33M"
        ></Script>
        <Script id="google-analytics">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-4YRPPPS33M');`}
        </Script>
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
          {/* === Elfsight AI Chatbot Widget === */}
          <Script
            src="https://elfsightcdn.com/platform.js"
            strategy="lazyOnload"
          />
          <div
            className="elfsight-app-006a6e38-d63c-4648-95a8-c7a709c3d04e overflow-hidden"
            data-elfsight-app-lazy
          ></div>
          {/* === End Elfsight Widget === */}
        </ThemeProvider>
      </body>
    </html>
  );
}
