import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Nero - Advanced Photo Editing",
  description: "Convert your photos to stunning monochrome with Nero's sophisticated algorithms. Drag and drop for real-time conversion.",
  openGraph: {
    title: "Nero - Photo Editing App",
    description: "Drop a photo, reveal its essence. Nero's conversion algorithm extracts emotion from your images.",
    url: "https://nero-website.com",
    siteName: "Nero",
    images: [
      {
        url: "/cover-image-canvas.png",
        width: 1200,
        height: 630,
        alt: "Nero Photo Editing Interface",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nero - Advanced Photo Editing",
    description: "Convert your photos to stunning monochrome with Nero's sophisticated algorithms.",
    images: ["/cover-image-canvas.png"],
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <main className="fixed">
          <div className="border-b border-neutral-500 w-screen h-24">
            <div className="flex justify-center items-center w-24 border-r border-b h-24 border-neutral-500">
              <Image
                src="/logo.png"
                alt="Nero Logo"
                width={160}
                height={40}
                className="size-24"
              />
            </div>
          </div>
          <div className="border-r border-neutral-500 h-screen w-24 bg-neutral-950"></div>
        </main>
        <div className="pl-24 pt-24">{children}</div>
      </body>
    </html>
  );
}
