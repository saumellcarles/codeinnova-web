import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type PageLayoutProps = {
  children: ReactNode;
};

// Layout público de marketing: fondo blanco, Header sticky y Footer corporativo.
export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
