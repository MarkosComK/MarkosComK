"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import * as Term from "./styles";

const Terminal = () => {
  const outputRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [history, setHistory] = useState<string[]>([
    'Welcome to my portfolio! Type "help" for available commands.',
  ]);
  const [input, setInput] = useState("");

  const handleCommand = (cmd: string) => {
    const commands: { [key: string]: string | (() => void) } = {
      help: "Available commands: about, work, cv, blog, clear, goto [page]",
      about:
        "I am a software developer passionate about creating amazing web experiences.",
      work: "Here are some of my projects: [Your projects will be listed here]",
      cv: "You can find my CV at: [Your CV link]",
      blog: "Recent posts: [Your blog posts will be listed here]",
      clear: () => setHistory([]),
      goto: (page: string) => router.push(`/${page}`),
    };

    const [mainCmd, ...args] = cmd.toLowerCase().split(" ");
    const command = commands[mainCmd];

    if (mainCmd === "clear") {
      setHistory([]);
      return;
    }

    if (mainCmd === "goto" && args[0]) {
      router.push(`/${args[0]}`);
      return;
    }

    const output =
      typeof command === "string" ? command : `Command not found: ${cmd}`;

    setHistory((prev) => [...prev, `$ ${cmd}`, output]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input.trim());
      setInput("");
    }
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);
  return (
    <Term.Wrapper>
      <Term.Header>term</Term.Header>
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
          <Term.input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
        </Term.Input>
      </form>
    </Term.Wrapper>
  );
};

export default Terminal;
