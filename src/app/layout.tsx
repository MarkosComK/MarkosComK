"use client";
import { Source_Code_Pro } from "next/font/google";
import { Providers } from "./providers";
import StyledComponentsRegistry from "@/lib/registry";

const sourceCode = Source_Code_Pro({ 
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sourceCode.className}>
      <body suppressHydrationWarning={true} className={sourceCode.className}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
