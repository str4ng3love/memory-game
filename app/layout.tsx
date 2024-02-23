import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Match 'em all!`,
  description: `A simple pokemon matching game`,
  keywords: [`pokemon`, `memory game`, `game`],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
