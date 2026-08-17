import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://YOUR-DOMAIN.com"),
  title: {
    default: "AM Logistics | International Freight Forwarding",
    template: "%s | AM Logistics",
  },
  description:
    "AM Logistics provides ocean freight, air freight, inland transportation, customs clearance, and importer of record solutions.",
  applicationName: "AM Logistics",
  keywords: [
    "freight forwarding",
    "international logistics",
    "ocean freight",
    "air freight",
    "inland transportation",
    "customs clearance",
    "importer of record",
    "Egypt logistics",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />

        {children}

        <Footer />
      </body>
    </html>
  );
}