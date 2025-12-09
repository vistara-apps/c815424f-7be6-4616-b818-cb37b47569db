import type { Metadata } from "next";
import { Providers } from "./components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "OkieLaunch - Launch Tokens on Base",
  description: "Launch tokens & fundraise directly from Farcaster on Base in minutes.",
  openGraph: {
    title: "OkieLaunch",
    description: "Launch tokens & fundraise directly from Farcaster on Base in minutes.",
    images: ["/ookie-icon-256x256.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
