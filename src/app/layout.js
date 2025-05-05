import "./globals.css";
import { Inter } from "next/font/google"; // ✅ Add this import!
const inter = Inter({ subsets: ["latin"], display: "swap" }); // ✅ `display: 'swap'` added to avoid timeout

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { ThemeContextProvider } from "../context/ThemeContext";
import ThemeProvider from "../providers/ThemeProvider";

export const metadata = {
  title: "Blog App", // ✅ Fixed formatting
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
