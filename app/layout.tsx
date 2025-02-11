import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/sections/footer/footer";
import Profile from "@/sections/profile/Profile";
import BackgroundBricks from "@/components/ui/bg-bricks";
import MouseSpotlight from "@/components/ui/mouse-spotlight";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ali Calimli - Front-end Engineer",
  description:
    "Focused on building high-quality websites that are also visually appealing and easy to use.",
  keywords:
    "ali, ali calimli, calimli, ac, Ali, Calimli, Ali Calimli, alicalimli, alicalimli_dev, web development, frontend dev, learn, level up, visuals, simplified visuals, web developer, Front-end development, HTML, CSS, JavaScript, React, visuals, webdevvisuals, web development visuals",
  openGraph: {
    title: "Ali Calimli - Front-end Engineer",
    description:
      "Focused on building high-quality websites that are also visually appealing and easy to use.",
    url: "https://alicalimli.com/",
    siteName: "Ali Calimli",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <body
        className={cn(
          "bg-background  font-sans antialiased ",
          poppins.variable
        )}
      >
        <MouseSpotlight />
        <BackgroundBricks
          className="pointer-events-none"
          patternColor="rgba(255,255,255,0.08)"
        />

        {children}

        <Toaster richColors closeButton />

        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="4a6bdf23-cee1-40f9-911e-f202315680cb"
        ></script>
      </body>
    </html>
  );
}
