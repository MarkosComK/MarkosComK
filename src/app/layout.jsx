import { Inter, Press_Start_2P} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const custom_font = Press_Start_2P({
  weight: ['400'],
  subsets: ["latin"],
  variable: '--custom',
});

export const metadata = {
  title: "Portfolio",
  description: "Powered by Markos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={custom_font.variable}>{children}</body>
    </html>
  );
}
