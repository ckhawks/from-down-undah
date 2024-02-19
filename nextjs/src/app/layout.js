import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "From Down Undah",
  description: "Made by two boys!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} center-column`}>{children}</body>
    </html>
  );
}
