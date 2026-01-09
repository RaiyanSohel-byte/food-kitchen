import { Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import CartProvider from "@/contexts/CartProvider";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: {
    default: "FoodKitchen",
    template: "%s | FoodKitchen",
  },
  description: "A food restaurant app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} antialiased`}>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
