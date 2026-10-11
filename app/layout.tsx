import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Mysa House — Nashville Massage Therapy", description: "A premium in-home massage therapy demo for Nashville, Tennessee." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }