import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { LanguageProvider } from "@/components/language/LanguageProvider";
import MotionProvider from "@/components/motion/MotionProvider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Krzysztof Buda — Developer",
    template: "%s | Krzysztof Buda",
  },

  description:
    "Portfolio Krzysztofa Budy — backend, API, Android, Python, Kotlin, SQL, systemy embedded i integracje ze sprzętem.",

  applicationName: "Krzysztof Buda — Portfolio",

  authors: [
    {
      name: "Krzysztof Buda",
    },
  ],

  creator: "Krzysztof Buda",

  keywords: [
    "Krzysztof Buda",
    "Developer",
    "Software Developer",
    "Backend Developer",
    "Python",
    "FastAPI",
    "Kotlin",
    "Android",
    "SQL",
    "Embedded",
    "Raspberry Pi",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Krzysztof Buda — Developer",
    description:
      "Backend, API, Android, Python, Kotlin, SQL, systemy embedded i integracje ze sprzętem.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Krzysztof Buda — Developer",
    description:
      "Backend, API, Android, Python, Kotlin, SQL, systemy embedded i integracje ze sprzętem.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MotionProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </MotionProvider>
      </body>
    </html>
  );
}