import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import { Footer, Navbar, ThemeToggle } from "@/components";
import Providers from "@/contexts/Providers";

export const metadata: Metadata = {
  title: "Explore Kashmir with Nuzha Kashmir",
  description:
    "Discover the breathtaking landscapes and hidden treasures of Kashmir. Witness the tourist footfall this year",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Providers>
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
