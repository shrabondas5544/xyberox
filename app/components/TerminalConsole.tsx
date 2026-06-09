"use client";

import React, { useState, useEffect } from "react";

export default function TerminalConsole() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentTyping, setCurrentTyping] = useState("");
  const [step, setStep] = useState(0);

  const command = "npm install next";

  useEffect(() => {
    // Step 0: Display initial prompt line
    if (step === 0) {
      setLines(["xyberox@admin: ~ $"]);
      const timer = setTimeout(() => setStep(1), 800);
      return () => clearTimeout(timer);
    }

    // Step 1: Simulate typing "npm install next"
    if (step === 1) {
      let index = 0;
      const interval = setInterval(() => {
        setCurrentTyping((prev) => prev + command[index]);
        index++;
        if (index === command.length) {
          clearInterval(interval);
          const timer = setTimeout(() => {
            // Commit typed command to lines history
            setLines((prev) => [...prev, `$ ${command}`]);
            setCurrentTyping("");
            setStep(2);
          }, 600);
        }
      }, 75);
      return () => clearInterval(interval);
    }

    // Step 2: Show installation logs
    if (step === 2) {
      const timer = setTimeout(() => {
        setLines((prev) => [
          ...prev,
          "",
          "+ next@10.2.3",
          "added 1 package, and audited 2 packages in 3s",
          "",
          "xyberox@admin: ~ $"
        ]);
        setStep(3);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="w-full max-w-xl mx-auto rounded-sm border border-green-500/30 bg-black/85 text-left font-mono text-xs sm:text-sm text-green-400 p-4 shadow-[0_0_15px_rgba(0,255,65,0.08)] mb-8 overflow-hidden select-none">
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-green-500/15 pb-2 mb-3">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-green-500/40"></span>
          <span className="h-2 w-2 rounded-full bg-green-500/40"></span>
          <span className="h-2 w-2 rounded-full bg-green-500/40"></span>
        </div>
        <span className="text-[10px] text-green-500/50 tracking-wider">bash</span>
      </div>

      {/* Terminal Screen */}
      <div className="space-y-1 sm:space-y-1.5 leading-relaxed">
        {lines.map((line, idx) => {
          // If it's the last prompt line, render it on the same line as the cursor if we are at step 3
          if (idx === lines.length - 1 && line.includes("xyberox@admin: ~ $") && step === 3) {
            return (
              <div key={idx} className="flex items-center gap-1">
                <span>{line}</span>
                <span className="cursor-blink h-4 w-2 bg-green-400 inline-block align-middle"></span>
              </div>
            );
          }
          return <div key={idx}>{line}</div>;
        })}
        
        {/* Render current typing state */}
        {step === 1 && (
          <div className="flex items-center gap-1">
            <span>$ {currentTyping}</span>
            <span className="cursor-blink h-4 w-2 bg-green-400 inline-block align-middle"></span>
          </div>
        )}
      </div>

      {/* Custom step-blink CSS style */}
      <style>{`
        @keyframes customBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor-blink {
          animation: customBlink 1.2s step-end infinite;
        }
      `}</style>
    </div>
  );
}
