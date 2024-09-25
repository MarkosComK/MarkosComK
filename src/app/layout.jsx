import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const pressStart2P = Press_Start_2P({
  weight: ['400'],
  subsets: ["latin"],
  variable: '--font-primary',
});

export const metadata = {
  title: "Portfolio",
  description: "Powered by Markos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pressStart2P.variable} font-press flex justify-center items-center`}>
		<div className="w-screen lg:max-w-screen-xl">
			{children}
		</div>
      </body>
    </html>
  );
}
