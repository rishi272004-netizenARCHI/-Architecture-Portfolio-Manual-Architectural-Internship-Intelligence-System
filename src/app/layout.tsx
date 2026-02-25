import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Architectural Internship Intelligence System",
  description:
    "A structured digital platform integrating architectural portfolio development, firm intelligence, and AI-assisted research.",
  keywords: [
    "Architecture Internship",
    "Architectural Portfolio",
    "Architecture Firms India",
    "Internship Intelligence System",
    "Architecture Research Platform",
  ],
  authors: [{ name: "Rishi" }],
  openGraph: {
    title: "Architectural Internship Intelligence System",
    description:
      "Integrated platform for architectural portfolio strategy and firm research intelligence.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Architectural Internship Intelligence System",
    description:
      "Digital system for architectural internship preparation and firm intelligence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}