import type { Metadata } from "next";
import "./globals.css";
import { type_second } from "@/functions/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductContextProvider } from "@/context/ProductContext";

export const metadata: Metadata = {
  title: "My Side Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={type_second.variable}>
        <div className="app">
          <Header />
          <ProductContextProvider>
            <main className="app-body">{children}</main>
          </ProductContextProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
