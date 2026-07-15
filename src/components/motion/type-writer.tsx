"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface TypeWriterProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export function TypeWriter({
  words,
  speed = 80,
  deleteSpeed = 40,
  pauseDuration = 2000,
  className,
}: TypeWriterProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      setText(currentWord.substring(0, text.length - 1));
    } else {
      setText(currentWord.substring(0, text.length + 1));
    }
  }, [text, wordIndex, isDeleting, words]);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting && text === currentWord) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(tick, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, speed, deleteSpeed, pauseDuration, tick]);

  return (
    <span className={cn("inline-block", className)}>
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-brand-400 ml-0.5 align-middle animate-pulse" />
    </span>
  );
}
