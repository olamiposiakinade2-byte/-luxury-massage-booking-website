import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Mysa House — Private Massage Therapy", description: "A considered massage therapy ritual, brought to your space." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }