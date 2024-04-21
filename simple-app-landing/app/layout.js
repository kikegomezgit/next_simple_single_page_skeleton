"use client";
import { Inter } from "next/font/google";
import AntdStyledComponentsRegistry from "@/components/AntdStyledComponentsRegistry";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Next kike app",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ padding: 0, margin: 0, boxSizing: "borderbox" }}>
        <AntdStyledComponentsRegistry>
          <Header/>
          {children}
          <Footer title={'Created by kike, for testing purposes. 🕵🏻‍♂️'}/>
          </AntdStyledComponentsRegistry>
      </body>
    </html>
  );
}