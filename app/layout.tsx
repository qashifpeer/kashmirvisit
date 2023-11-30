import type { Metadata } from "next";

import "./globals.css";
import { Footer, Navbar, ThemeToggle } from "@/components";
import Providers from "@/contexts/Providers";

export const metadata: Metadata = {
  title: "Explore Kashmir with Kashmir Visit",
  description: "Discover the breathtaking landscapes and hidden treasuresof Kashmir. Witness the tourist footfall this year",
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
          <Footer />
          </Providers>
        </body>
      
    </html>
  );
}
