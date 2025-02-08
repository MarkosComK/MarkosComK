"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import * as Term from "./styles";

interface Command {
  [key: string]: string | ((args?: string) => void);
}

const Terminal = () => {
	const outputRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const router = useRouter();
	const [mounted, setMounted] = useState(false);
	const [history, setHistory] = useState<string[]>([
		'Welcome to my portfolio! Type "help" for available commands.',
	]);
	const [input, setInput] = useState("");

	const commands: Command = {
		help: "Available commands: about, work, cv, blog, clear, goto [page]",
		about: "I am a software developer passionate about creating amazing web experiences.",
		work: "Here are some of my projects: [Your projects will be listed here]",
		cv: "You can find my CV at: [Your CV link]",
		blog: "Recent posts: [Your blog posts will be listed here]",
		clear: () => setHistory([]),
		goto: (page: string) => router.push(`/${page}`),
	};

	const handleCommand = (cmd: string) => {
		const [mainCmd, ...args] = cmd.toLowerCase().trim().split(" ");
		
		if (mainCmd === "clear") {
			setHistory([]);
			return;
		}
		if (mainCmd === "goto" && args[0]) {
			router.push(`/${args[0]}`);
			return;
		}
		const command = commands[mainCmd];
		const output = typeof command === "string"
			? command 
			: `Command not found: ${cmd}`;
		setHistory(prev => [...prev, `$ ${cmd}`, output]);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (input.trim()) {
			handleCommand(input.trim());
			setInput("");
		}
	};

	useEffect(() => {
		setMounted(true);
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	useEffect(() => {
		if (outputRef.current) {
			outputRef.current.scrollTop = outputRef.current.scrollHeight;
		}
	}, [history]);

	if (!mounted) {
		return null;
	}

	return (
		<Term.Wrapper>
			<Term.Header>terminal</Term.Header>
			<Term.Output ref={outputRef}>
				<Term.HistoryContainer>
					{history.map((line, i) => (
					<div key={i}>{line}</div>
					))}
				</Term.HistoryContainer>
			</Term.Output>
			<form onSubmit={handleSubmit}>
				<Term.Input>
				<Term.Prompt>$</Term.Prompt>
				<Term.InputField
					ref={inputRef}
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				</Term.Input>
			</form>
		</Term.Wrapper>
	);
};

export default Terminal;
