import type { Metadata } from "next";
import { Work_Sans, Taviraj } from "next/font/google";

import "./globals.css";

const worksans = Work_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
const taviraj = Taviraj({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-taviraj",
});

export const metadata: Metadata = {
  title: "Rodriguez",
  description: "Próximamente web",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${worksans.className} ${taviraj.variable} h-dvh bg-gradient-to-b from-neutral-50 to-white`}
      >
        {children}
      </body>
    </html>
  );
}
