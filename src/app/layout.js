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
  // metadataBase: new URL("https://YOUR-DOMAIN.com"),
  title: {
    default: "AM Logistics | Global Freight Solutions",
    template: "%s | AM Logistics",
  },

  description:
    "AM Logistics provides reliable ocean freight, air freight, inland transportation, customs clearance, and import solutions for businesses worldwide.",

  applicationName: "AM Logistics",

  keywords: [
    "AM Logistics",
    "freight forwarding",
    "international logistics",
    "ocean freight",
    "air freight",
    "inland transportation",
    "customs clearance",
    "import on behalf",
    "importer of record",
    "Egypt freight forwarder",
    "Egypt logistics",
  ],

  authors: [
    {
      name: "AM Logistics",
    },
  ],

  creator: "AM Logistics",
  publisher: "AM Logistics",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "AM Logistics | Global Freight Solutions",
    description:
      "Reliable ocean freight, air freight, inland transportation, customs clearance, and import solutions.",
    siteName: "AM Logistics",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "AM Logistics | Global Freight Solutions",
    description:
      "Reliable global freight and logistics solutions for your business.",
  },
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