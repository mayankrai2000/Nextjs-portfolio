import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CustomThemeProvider from "@/theme";
import { Bebas_Neue, Public_Sans } from "next/font/google";
import Header from "@/components/Header";

const bebasNeue = Bebas_Neue({
 subsets: ["latin"],
 weight: "400",
 variable: "--display-font",
});

const publicSans = Public_Sans({
 subsets: ["latin"],
 variable: "--body-font",
});

export const metadata: Metadata = {
 title: "Simon | Portfolio",
 description: "Welcome to my portfolio",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en" className={`${publicSans.variable} ${bebasNeue.variable}`}>
   <body>
    <AppRouterCacheProvider>
     <CustomThemeProvider>
      <div className="bg-[var(--foreground)] text-[var(--text)] relative">
       <Header />
       {children}
      </div>
     </CustomThemeProvider>
    </AppRouterCacheProvider>
   </body>
  </html>
 );
}
