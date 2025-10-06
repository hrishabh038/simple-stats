import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

const Typewriter = ({
  words = [],
  className,
  typingSpeed = 100,
  deletingSpeed = 100,
  pauseTime = 1000,
}) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText((prev) => currentWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <span
      className={twMerge(
        "inline-flex items-center text-xl sm:text-2xl md:text-3xl lg:text-4xl",
        className
      )}
    >
      <span>{text}</span>
      <span className="ml-1 w-[1ch] animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;
