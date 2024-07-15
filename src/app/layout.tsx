import type { Metadata } from "next";
import { inter } from '@/app/lib/fonts';
import "./globals.css";


export const metadata: Metadata = {
  title: "Home",
  description: "Prueba técnica del puesto de fullstack dev junior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased min-h-screen`}>{children}</body>
    </html>
  );
}
