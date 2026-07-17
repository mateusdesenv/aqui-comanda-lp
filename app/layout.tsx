import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aqui Comanda | Seu negócio no comando",
  description: "Pedidos, mesas, estoque e caixa em um só lugar. Gestão simples para bares, lanchonetes e restaurantes.",
  icons: {
    icon: "/brand/aqui-comanda-app-icon.png",
    shortcut: "/brand/aqui-comanda-app-icon.png",
    apple: "/brand/aqui-comanda-app-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
