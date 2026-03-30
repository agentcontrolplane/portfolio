import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wejden Daoud — Chargée Marketing & Communication",
  description:
    "Portfolio de Wejden Daoud, spécialiste en marketing digital, SEO/GEO, stratégie de contenu et pilotage de la visibilité de marque.",
  openGraph: {
    title: "Wejden Daoud — Marketing & Communication",
    description: "Chargée marketing spécialisée en visibilité digitale, création de contenu et optimisation des conversions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}