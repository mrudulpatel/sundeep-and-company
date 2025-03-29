import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Space_Grotesk } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const space_grotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sundeep & Company",
  description: "Dealers & Distributors in Construction Materials",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ fontFamily: "Space Grotesk" }}
        className={`${space_grotesk.variable} antialiased`}
      >
        {/* <Navbar /> */}
        <main>{children}</main>
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
