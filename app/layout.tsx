"use client";

import "@/app/globals.css";
import { Barlow, Geom } from "next/font/google";

const barlow = Barlow({
    display: "swap",
    variable: "--font-title",
    subsets: ["latin"],
    weight: ["100", "300"],
});

const geom = Geom({
    display: "swap",
    variable: "--font-base",
    subsets: ["latin"],
    weight: ["300", "500"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${barlow.variable} ${geom.variable}`}>
            <body className="h-full bg-background">{children}</body>
        </html>
    );
}
