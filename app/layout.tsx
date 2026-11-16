import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mare Nostrum — A taste of Brazil's Northeast",
  description: "A restaurant concept celebrating the flavors, warmth and generous spirit of Brazil's Northeast.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
