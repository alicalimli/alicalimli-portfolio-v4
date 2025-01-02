import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/sections/footer/footer";
import Profile from "@/sections/profile/Profile";
import BackgroundBricks from "@/components/ui/bg-bricks";
import MouseSpotlight from "@/components/ui/mouse-spotlight";

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
        className={cn("bg-background font-sans antialiased ", poppins.variable)}
      >
        <MouseSpotlight />
        <BackgroundBricks
          className="pointer-events-none"
          patternColor="rgba(255,255,255,0.08)"
        />

        <div className="grid xl:grid-cols-2 max-w-[1600px] mx-auto min-h-screen">
          {/* Sidebar */}
          <aside className="xl:sticky xl:top-0 xl:h-screen text-white p-16 pt-24 pb-0 max-w-4xl mx-auto xl:max-w-[auto]">
            <Profile />
          </aside>

          {/* Main Content */}
          <main className=" overflow-y-auto p-16 pt-4 xl:pt-24 max-w-4xl mx-auto xl:max-w-[auto]">
            {children}
            <Footer />
            <Toaster richColors closeButton />
          </main>
        </div>
      </body>
    </html>
  );
}
