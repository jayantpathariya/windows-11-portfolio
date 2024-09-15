import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const segoeUI = localFont({
  src: "./fonts/SegoeUI-VF.ttf",
  variable: "--font-segoe-ui",
  weight: "100 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Windows 11 Portfolio",
  description:
    "Windows 11 is a modern, sleek, and lightweight operating system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${segoeUI.variable} antialiased`}>{children}</body>
    </html>
  );
}
