import type { Metadata } from "next";
import { inter } from '@/app/lib/fonts';
import { SearchHistoryProvider } from "./context/searchHistoryContext";
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
      <body className={`${inter.className} min-h-screen`}>
        <SearchHistoryProvider>
          {children}
        </SearchHistoryProvider>
      </body>
    </html>
  );
}
