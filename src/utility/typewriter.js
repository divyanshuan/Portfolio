import React from "react";
import ReactTypingEffect from "react-typing-effect";

const TypingEffect = () => {
  const lines = [
    "Just Getting started 📈",
    "Front-end developer 🌐",
    "Cross-Platform developer 📱💻",
  ];
  return (
    <>
      <ReactTypingEffect
        text={lines}
        eraseSpeed="100"
        eraseDelay="3000"
        speed="100"
      />
    </>
  );
};
export default TypingEffect;
