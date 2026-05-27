import type { Metadata } from "next";
import { Bebas_Neue, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const hankenGrotesk = Hanken_Grotesk({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
});

export const metadata: Metadata = {
  title: "FitLink UK | Unleash Your Potential",
  description: "The UK's premier performance platform. Connecting ambition with expertise across the nation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <style>{`
          .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          }
        `}</style>
      </head>
      <body
        className={`${bebasNeue.variable} ${hankenGrotesk.variable} font-body-md bg-background text-on-background min-h-screen`}
      >
        {/* We will inject <TopAppBar /> here in Phase 2 */}
        {children}
        {/* We will inject <Footer /> and <MobileBottomNav /> here in Phase 2 */}
      </body>
    </html>
  );
}