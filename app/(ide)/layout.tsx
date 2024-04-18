import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import { Inter, Open_Sans } from "next/font/google";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no"
};

export const metadata: Metadata = {
  title: "QuillShield",
  description: "Task for Snr Frontend Developer at QuillAudits."
};

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans"
});

const inter = Inter({
  subsets: ["latin"],
  display: "auto",
  variable: "--font-inter"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${inter.variable} font-sans`}
    >
      <body className="bg-quill-500 h-screen ">
        <main className="p-3">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
