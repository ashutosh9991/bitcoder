import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "bitcoder",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className={`${inter.className} h-full`}>{children}</body>
    </html>
  );
}
