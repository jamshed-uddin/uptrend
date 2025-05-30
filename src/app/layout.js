import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/providers/StoreProvider";
import Header from "@/components/Header";
import { Toaster } from "sonner";
import SetProductsToState from "@/components/SetProductsToState";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "upTrend",
  description: "Trend Forward Stand Out Naturally.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-7xl mx-auto bg-white lg:!px-12 px-3`}
        >
          <Header />

          <main className="min-h-[80vh] !pt-5">{children}</main>
          <Toaster richColors />
          <SetProductsToState />
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}
