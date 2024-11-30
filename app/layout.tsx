import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MenuBar from "./components/MenuBar";
import { Toaster } from "@/components/ui/toaster"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Todo List AJE DEV",
  description: "Es un ejemplo de todo list en ajedev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="w-full p-6 mx-auto border border-b-orange-600">
        <MenuBar />

        </header>
        <main>
        {children}
        </main>
        <Toaster />
        <footer>
          Footer del app
        </footer>
      </body>
    </html>
  );
}
