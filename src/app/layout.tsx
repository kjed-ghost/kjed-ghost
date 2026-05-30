import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import NeuralBackground from "@/components/interactivity/NeuralBackground";
import CustomCursor from "@/components/interactivity/CustomCursor";

export const metadata: Metadata = {
  title: "Kaushik John Emmanuel Daniel | Full-Stack Developer & WordPress Specialist",
  description: "Freelance Full-Stack Web Developer and WordPress Specialist based in India. Custom web solutions and AI integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased dark"
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans overflow-x-hidden">
        <CustomCursor />
        <NeuralBackground />
        <Navbar />
        <main className="flex-grow pt-16 relative z-10">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
