import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: {
    default: "MedDoc - Üroloji & Androloji'de Mükemmeliyet",
    template: "%s | MedDoc Üroloji",
  },
  description: "Üroloji ve androloji hastalıkları için profesyonel tıbbi bakım. Uzman doktorlar tarafından ileri düzey tedaviler ve cerrahiler.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="premium"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <WhatsAppButton />
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
