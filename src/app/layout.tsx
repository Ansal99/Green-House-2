import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/ui/smooth-scroll";

export const metadata: Metadata = {
  title: "Green House | Luxury Boutique Hotel · Dharamkot, Himachal Pradesh",
  description:
    "An intimate Himalayan sanctuary in Dharamkot, Himachal Pradesh, hosted by Rahul Kapoor. Experience quiet elegance, mindful luxury, and breathtaking mountain views.",
  keywords: [
    "Green House",
    "Green House Dharamkot",
    "Luxury Hotel Dharamkot",
    "Boutique Hotel Himachal Pradesh",
    "Rahul Kapoor Green House",
    "Himachal Luxury Stay",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-[#F8F5EF] text-[#18221E] min-h-screen">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
