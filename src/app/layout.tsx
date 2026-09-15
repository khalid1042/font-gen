import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ThemeProvider } from "../components/ThemeProvider/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Letras Bonitas - Generador de Texto para Copiar y Pegar",
  description: "Genera letras bonitas, estilos de texto y letras especiales para copiar y pegar fácilmente en Instagram, WhatsApp, Facebook y más.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Letras Bonitas - Generador de Texto",
    description: "Genera letras bonitas y estilos de texto para copiar y pegar.",
    url: "https://letrasbonitas.example.com", // Placeholder domain
    siteName: "Letras Bonitas",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable}`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
