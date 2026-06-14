import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Etsy SEO Keyword Gap Analyzer – Find Untapped Keywords Your Competitors Miss",
  description: "Analyze competitor Etsy listings, identify keyword gaps, and discover low-competition high-traffic keywords to rank higher and sell more."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="785bdcf3-f3b4-4d08-994f-2e46aafe0f6c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
