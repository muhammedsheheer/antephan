import "@/styles/globals.css";

import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { Oswald, Roboto, Playfair_Display, Bai_Jamjuree, Forum, Josefin_Sans, Poppins, Joan, Mrs_Saint_Delafield, Montserrat, Cormorant } from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Antepehan",
  description:
    "Welcome to Antepehan, Where Every Moment Sparkles",
  icons: [{ rel: "icon", url: "/images/logo.png" }],
};

const mrs_saint = Mrs_Saint_Delafield({
  subsets: ["latin"],
  variable: "--font-mrs_saint",
  weight: ["400"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom flex min-h-screen font-montserrat antialiased",
          montserrat.variable,
          poppins.variable,
          mrs_saint.variable,
          cormorant.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html >
  );
}
