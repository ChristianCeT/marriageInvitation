import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invitación de boda",
  description:
    "Invitación de boda de Teodoro y Nicida generada por Christian Cervantes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
