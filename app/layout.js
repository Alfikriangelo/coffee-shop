import { Jost } from "next/font/google";
import "./globals.css";

const jsot = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Angelo Coffee",
  description: "Angelo Coffee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jsot.className}>{children}</body>
    </html>
  );
}
