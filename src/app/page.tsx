"use client";
import Terminal from "@/components/Terminal/Terminal";
import Navbar from "@/components/Navbar/Navbar";
import { Providers } from "./providers";

export default function Home() {
	return (
		<Providers>
			<Navbar/>
			<Terminal/>
		</Providers>
	);
}
