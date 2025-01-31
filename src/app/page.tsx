"use client";
import Terminal from "@/components/Terminal/Terminal";
import { Providers } from "./providers";

export default function Home() {
  return (
    <Providers>
      <Terminal />
    </Providers>
  );
}
