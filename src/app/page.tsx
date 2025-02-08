"use client";
import Terminal from "@/components/Terminal/Terminal";
import Navbar from "@/components/Navbar/Navbar";
import Content from "@/components/Content/Content";
import { Providers } from "./providers";

export default function Home() {
	return (
		<Providers>
			<Navbar/>
			<Content/>
			<Terminal/>
		</Providers>
	);
}
