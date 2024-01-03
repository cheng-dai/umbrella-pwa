import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/app/ui/components/Nav";
import "./ui/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Umbrella",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-slate-200`}>
        <h1 className="m-20  text-2xl text-center tracking-wider font-bold ">
          The Umbrella PWA
        </h1>
        <Nav />
        {children}
      </body>
    </html>
  );
}
