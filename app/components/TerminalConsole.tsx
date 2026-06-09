"use client";

import React, { useState, useEffect, useRef } from "react";

interface KeyConfig {
  label: string;
  type?: string;
  value?: string;
  shiftValue?: string;
}

const rows: KeyConfig[][] = [
  [
    { label: "esc", type: "function" },
    { label: "F1", type: "function" },
    { label: "F2", type: "function" },
    { label: "F3", type: "function" },
    { label: "F4", type: "function" },
    { label: "F5", type: "function" },
    { label: "F6", type: "function" },
    { label: "F7", type: "function" },
    { label: "F8", type: "function" },
    { label: "F9", type: "function" },
    { label: "F10", type: "function" },
    { label: "F11", type: "function" },
    { label: "F12", type: "function" },
    { label: "⏏", type: "eject" }
  ],
  [
    { label: "`", value: "`", shiftValue: "~" },
    { label: "1", value: "1", shiftValue: "!" },
    { label: "2", value: "2", shiftValue: "@" },
    { label: "3", value: "3", shiftValue: "#" },
    { label: "4", value: "4", shiftValue: "$" },
    { label: "5", value: "5", shiftValue: "%" },
    { label: "6", value: "6", shiftValue: "^" },
    { label: "7", value: "7", shiftValue: "&" },
    { label: "8", value: "8", shiftValue: "*" },
    { label: "9", value: "9", shiftValue: "(" },
    { label: "0", value: "0", shiftValue: ")" },
    { label: "-", value: "-", shiftValue: "_" },
    { label: "=", value: "=", shiftValue: "+" },
    { label: "delete", type: "delete" }
  ],
  [
    { label: "tab", type: "tab" },
    { label: "Q", value: "q", shiftValue: "Q" },
    { label: "W", value: "w", shiftValue: "W" },
    { label: "E", value: "e", shiftValue: "E" },
    { label: "R", value: "r", shiftValue: "R" },
    { label: "T", value: "t", shiftValue: "T" },
    { label: "Y", value: "y", shiftValue: "Y" },
    { label: "U", value: "u", shiftValue: "U" },
    { label: "I", value: "i", shiftValue: "I" },
    { label: "O", value: "o", shiftValue: "O" },
    { label: "P", value: "p", shiftValue: "P" },
    { label: "[", value: "[", shiftValue: "{" },
    { label: "]", value: "]", shiftValue: "}" },
    { label: "\\", value: "\\", shiftValue: "|" }
  ],
  [
    { label: "caps lock", type: "capslock" },
    { label: "A", value: "a", shiftValue: "A" },
    { label: "S", value: "s", shiftValue: "S" },
    { label: "D", value: "d", shiftValue: "D" },
    { label: "F", value: "f", shiftValue: "F" },
    { label: "G", value: "g", shiftValue: "G" },
    { label: "H", value: "h", shiftValue: "H" },
    { label: "J", value: "j", shiftValue: "J" },
    { label: "K", value: "k", shiftValue: "K" },
    { label: "L", value: "l", shiftValue: "L" },
    { label: ";", value: ";", shiftValue: ":" },
    { label: "'", value: "'", shiftValue: "\"" },
    { label: "return", type: "return" }
  ],
  [
    { label: "shift", type: "shift" },
    { label: "Z", value: "z", shiftValue: "Z" },
    { label: "X", value: "x", shiftValue: "X" },
    { label: "C", value: "c", shiftValue: "C" },
    { label: "V", value: "v", shiftValue: "V" },
    { label: "B", value: "b", shiftValue: "B" },
    { label: "N", value: "n", shiftValue: "N" },
    { label: "M", value: "m", shiftValue: "M" },
    { label: ",", value: ",", shiftValue: "<" },
    { label: ".", value: ".", shiftValue: ">" },
    { label: "/", value: "/", shiftValue: "?" },
    { label: "shift", type: "shift" }
  ],
  [
    { label: "fn", type: "fn" },
    { label: "ctrl", type: "ctrl" },
    { label: "⌥", type: "alt" },
    { label: "⌘", type: "cmd" },
    { label: "", type: "space" },
    { label: "⌘", type: "cmd" },
    { label: "⌥", type: "alt" },
    { label: "◀", type: "arrow-left" },
    { label: "▼", type: "arrow-down" },
    { label: "▲", type: "arrow-up" },
    { label: "▶", type: "arrow-right" }
  ]
];

export default function TerminalConsole() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [capsLock, setCapsLock] = useState(false);
  const [shiftActive, setShiftActive] = useState(false);
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());

  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on input/history changes
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollTop = terminalEndRef.current.scrollHeight;
    }
  }, [lines, currentInput]);

  // Execute terminal command
  const executeCommand = () => {
    const trimmed = currentInput.trim();
    const commandLine = `xyberox@admin: ~ $ ${currentInput}`;

    if (!trimmed) {
      setLines((prev) => [...prev, commandLine]);
      setCurrentInput("");
      return;
    }

    const parts = trimmed.split(" ");
    const cmd = parts[0].toLowerCase();
    
    let output: string[] = [];

    switch (cmd) {
      case "help":
        output = [
          "Available Commands:",
          "  help         Show list of available commands",
          "  about        Display information about the Xyberox initiative",
          "  skills       Display supervisor research focus area",
          "  members      List team members",
          "  matrix       Initialize cyberpunk neural uplink",
          "  clear        Clear the terminal console screen",
          "  sysinfo      Check hardware and software status telemetry"
        ];
        break;
      case "about":
        output = [
          "XYBEROX SYSTEM PROTOCOL v4.9.0",
          "--------------------------------",
          "An autonomous robotics initiative specializing in Explainable AI (XAI),",
          "human-robot interaction models, and decentralized robotics telemetry.",
          "Supervised by Dr. Mohammad Shidujaman at IUB."
        ];
        break;
      case "skills":
        output = [
          "Supervisor Core Research Focus:",
          "  [1] Explainable Artificial Intelligence & Robotics",
          "  [2] Human-Computer Interaction (HCI)",
          "  [3] Human-Robot Interaction (HRI)"
        ];
        break;
      case "members":
        output = [
          "Project Team Members:",
          "  - Shrabon Das (Lead Dev & Research)",
          "  - Nijum Barua",
          "  - SM Mahadi Bhuiyan",
          "  - Mohd Ashraful Islam",
          "  - Fahim Faisal",
          "  - Elora Sharmin Khan"
        ];
        break;
      case "matrix":
        output = [
          "CONNECTING TO THE MATRIX NEURAL GRID...",
          "  [████████████████████] 100% SECURE UPLINK",
          "Uplink established. Look around you, the rain is everywhere."
        ];
        break;
      case "clear":
        setLines([]);
        setCurrentInput("");
        return;
      case "sysinfo":
        output = [
          "HOST: xyberox-mainframe-iub",
          "OS: CyberOS v3.8-NextJS",
          "UPTIME: 3 hours, 22 minutes",
          "KERNEL: Autonomous_Telemetry_Engine_v4.1",
          "CPU: Quantum Core X-800 @ 5.4GHz",
          "RAM: 64 GB HBM3 Holographic Memory",
          "DISK: 1.2 PB Neuromorphic SSD",
          "STATUS: ONLINE / OPTIMAL"
        ];
        break;
      default:
        output = [
          `bash: command not found: ${cmd}`,
          "Type 'help' to see list of valid commands."
        ];
        break;
    }

    setLines((prev) => [...prev, commandLine, ...output]);
    setCurrentInput("");
  };

  // Virtual keyboard key click handler
  const handleKeyClick = (key: KeyConfig) => {
    const keyId = key.label || key.type || "";
    
    // Animate key press feedback
    setPressedKeys((prev) => {
      const next = new Set(prev);
      next.add(keyId);
      setTimeout(() => {
        setPressedKeys((curr) => {
          const updated = new Set(curr);
          updated.delete(keyId);
          return updated;
        });
      }, 120);
      return next;
    });

    if (key.type === "delete") {
      setCurrentInput((prev) => prev.slice(0, -1));
    } else if (key.type === "return") {
      executeCommand();
    } else if (key.type === "space") {
      setCurrentInput((prev) => prev + " ");
    } else if (key.type === "tab") {
      setCurrentInput((prev) => prev + "    ");
    } else if (key.type === "capslock") {
      setCapsLock((prev) => !prev);
    } else if (key.type === "shift") {
      setShiftActive((prev) => !prev);
    } else if (key.value !== undefined) {
      let char = key.value;
      if (shiftActive) {
        char = key.shiftValue || char.toUpperCase();
        setShiftActive(false); // reset shift
      } else if (capsLock) {
        char = char.toUpperCase();
      }
      setCurrentInput((prev) => prev + char);
    }
  };

  // Synchronize physical keyboard interactions
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid capturing default hotkeys unless we want to control input typing
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      let matchedKey: KeyConfig | null = null;
      let keyId = "";

      const physicalKey = e.key;

      if (physicalKey === "Backspace") {
        matchedKey = { type: "delete", label: "delete" };
        keyId = "delete";
        e.preventDefault();
      } else if (physicalKey === "Enter") {
        matchedKey = { type: "return", label: "return" };
        keyId = "return";
        e.preventDefault();
      } else if (physicalKey === " ") {
        matchedKey = { type: "space", label: "" };
        keyId = "";
        e.preventDefault();
      } else if (physicalKey === "Tab") {
        matchedKey = { type: "tab", label: "tab" };
        keyId = "tab";
        e.preventDefault();
      } else if (physicalKey === "CapsLock") {
        matchedKey = { type: "capslock", label: "caps lock" };
        keyId = "caps lock";
      } else if (physicalKey === "Shift") {
        matchedKey = { type: "shift", label: "shift" };
        keyId = "shift";
      } else if (physicalKey === "Escape") {
        matchedKey = { type: "function", label: "esc" };
        keyId = "esc";
      } else if (physicalKey === "ArrowLeft") {
        matchedKey = { type: "arrow-left", label: "◀" };
        keyId = "◀";
      } else if (physicalKey === "ArrowRight") {
        matchedKey = { type: "arrow-right", label: "▶" };
        keyId = "▶";
      } else if (physicalKey === "ArrowUp") {
        matchedKey = { type: "arrow-up", label: "▲" };
        keyId = "▲";
      } else if (physicalKey === "ArrowDown") {
        matchedKey = { type: "arrow-down", label: "▼" };
        keyId = "▼";
      } else {
        // Search virtual rows to find character match
        for (const row of rows) {
          const found = row.find(
            (k) =>
              (k.value && k.value.toLowerCase() === physicalKey.toLowerCase()) ||
              (k.shiftValue && k.shiftValue === physicalKey) ||
              (k.label && k.label.toLowerCase() === physicalKey.toLowerCase())
          );
          if (found) {
            matchedKey = found;
            keyId = found.label || found.type || "";
            break;
          }
        }
      }

      if (matchedKey) {
        if (keyId !== undefined) {
          setPressedKeys((prev) => {
            const next = new Set(prev);
            next.add(keyId);
            return next;
          });
        }

        // Handle text state changes
        if (physicalKey === "Backspace") {
          setCurrentInput((prev) => prev.slice(0, -1));
        } else if (physicalKey === "Enter") {
          executeCommand();
        } else if (physicalKey === " ") {
          setCurrentInput((prev) => prev + " ");
        } else if (physicalKey === "Tab") {
          setCurrentInput((prev) => prev + "    ");
        } else if (physicalKey === "CapsLock") {
          setCapsLock((prev) => !prev);
        } else if (physicalKey === "Shift") {
          setShiftActive(true);
        } else if (matchedKey.value !== undefined) {
          let char = matchedKey.value;
          if (e.shiftKey) {
            char = matchedKey.shiftValue || char.toUpperCase();
          } else if (capsLock) {
            char = char.toUpperCase();
          }
          setCurrentInput((prev) => prev + char);
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const physicalKey = e.key;
      let keyId = "";

      if (physicalKey === "Backspace") keyId = "delete";
      else if (physicalKey === "Enter") keyId = "return";
      else if (physicalKey === " ") keyId = "";
      else if (physicalKey === "Tab") keyId = "tab";
      else if (physicalKey === "CapsLock") keyId = "caps lock";
      else if (physicalKey === "Shift") {
        keyId = "shift";
        setShiftActive(false);
      } else if (physicalKey === "Escape") keyId = "esc";
      else if (physicalKey === "ArrowLeft") keyId = "◀";
      else if (physicalKey === "ArrowRight") keyId = "▶";
      else if (physicalKey === "ArrowUp") keyId = "▲";
      else if (physicalKey === "ArrowDown") keyId = "▼";
      else {
        for (const row of rows) {
          const found = row.find(
            (k) =>
              (k.value && k.value.toLowerCase() === physicalKey.toLowerCase()) ||
              (k.shiftValue && k.shiftValue === physicalKey) ||
              (k.label && k.label.toLowerCase() === physicalKey.toLowerCase())
          );
          if (found) {
            keyId = found.label || found.type || "";
            break;
          }
        }
      }

      if (keyId) {
        setPressedKeys((prev) => {
          const next = new Set(prev);
          next.delete(keyId);
          return next;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [capsLock, shiftActive, currentInput, lines]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Terminal Display Card */}
      <div className="w-full rounded-sm border border-green-500/30 bg-black/85 text-left font-mono text-xs sm:text-sm text-green-400 p-4 shadow-[0_0_15px_rgba(0,255,65,0.08)] mb-6 overflow-hidden select-none">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-green-500/15 pb-2 mb-3">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-green-500/40"></span>
            <span className="h-2 w-2 rounded-full bg-green-500/40"></span>
            <span className="h-2 w-2 rounded-full bg-green-500/40"></span>
          </div>
          <span className="text-[10px] text-green-500/50 tracking-wider">bash</span>
        </div>

        {/* Scrollable Terminal Screen */}
        <div 
          ref={terminalEndRef}
          className="h-44 overflow-y-auto pr-1 space-y-1 sm:space-y-1.5 leading-relaxed scrollbar-thin scrollbar-thumb-green-500/20"
        >
          {lines.map((line, idx) => (
            <div key={idx} className="whitespace-pre-wrap">{line}</div>
          ))}
          <div className="flex items-center flex-wrap">
            <span className="text-green-500 mr-2">xyberox@admin: ~ $</span>
            <span className="whitespace-pre-wrap text-white">{currentInput}</span>
            <span className="cursor-blink h-4 w-2 bg-green-400 inline-block align-middle ml-1"></span>
          </div>
        </div>
      </div>

      {/* Cyberpunk Interactive Virtual Keyboard */}
      <div className="keyboard-container w-full">
        <div className="keyboard mx-auto">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((key, keyIndex) => {
                let keyClass = "key";
                if (key.type === "function") keyClass += " function-key";
                else if (key.type === "eject") keyClass += " eject-key";
                else if (key.type === "delete") keyClass += " delete-key";
                else if (key.type === "tab") keyClass += " tab-key";
                else if (key.type === "capslock") keyClass += " caps-lock-key";
                else if (key.type === "return") keyClass += " return-key";
                else if (key.type === "shift") keyClass += " shift-key";
                else if (key.type === "space") keyClass += " space-key";
                else if (key.type === "cmd") keyClass += " command-key";
                else if (key.type === "alt") keyClass += " alt-key";
                else if (key.type && key.type.startsWith("arrow")) keyClass += " arrow-key";
                else if (key.label === "\\") keyClass += " backslash-key";

                const keyId = key.label || key.type || "";
                const isPressed = pressedKeys.has(keyId) || (key.type === "space" && pressedKeys.has(""));
                const isCapsActive = key.type === "capslock" && capsLock;
                const isShiftActive = key.type === "shift" && shiftActive;

                if (isPressed || isCapsActive || isShiftActive) {
                  keyClass += " key-active";
                }

                return (
                  <button
                    key={keyIndex}
                    className={keyClass}
                    onClick={() => handleKeyClick(key)}
                    type="button"
                  >
                    {key.label}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Custom Scopes for Keyboard & Blink Animation */}
      <style>{`
        .keyboard-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        .keyboard {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 16px;
          padding-bottom: 19px;
          border-radius: 16px;
          background-color: #666666;
          background-image: linear-gradient(to bottom, #383838, #1f1f1f);
          box-shadow:
            rgba(0, 0, 0, 0.76) 0px 2px 4px,
            rgba(0, 0, 0, 0.39) 0px 7px 13px -3px,
            rgba(0, 0, 0, 0.247) 0px -3px 0px inset;
          width: 100%;
          max-width: 600px;
          user-select: none;
          border: 1px solid rgba(0, 255, 191, 0.2);
        }

        .row {
          display: flex;
          gap: 3px;
          width: 100%;
        }

        .key {
          background-color: #1f1e1e;
          border: 1px solid rgb(0, 59, 32);
          border-radius: 6px;
          box-shadow:
            rgba(0, 0, 0, 0.801) 0px 2px 4px,
            rgba(1, 255, 213, 0.288) 0px 7px 13px -3px,
            rgba(9, 255, 202, 0.247) 0px -1px 0px inset;
          min-width: 25px;
          text-align: center;
          padding: 8px 2px;
          font-size: 9px;
          font-family: var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          color: #00ffbf;
          cursor: pointer;
          transition:
            box-shadow 0.2s,
            background-color 0.2s,
            transform 0.1s;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          outline: none;
        }

        .key:hover {
          background-color: #2e2e2e;
          transform: translateY(-2px);
          box-shadow:
            rgba(0, 0, 0, 0.4) 0px 2px 5px,
            rgba(0, 0, 0, 0.3) 0px 7px 16px -3px,
            rgba(0, 0, 0, 0.2) 0px -1px 0px inset;
        }

        .key:active, .key.key-active {
          transform: translateY(1px) !important;
          background-color: #2e2e2e !important;
          box-shadow:
            rgba(0, 255, 191, 0.644) 0px 2px 3px,
            rgb(0, 0, 0) 0px 5px 10px -3px,
            rgba(0, 255, 191, 0.973) 0px -1px 0px inset !important;
        }

        .function-key {
          max-height: 25px;
          padding: 4px;
          font-size: 7px;
        }

        .eject-key {
          margin-left: 8px;
          padding: 4px 12px;
        }

        .delete-key {
          padding: 8px 12px;
          flex: 2;
        }

        .tab-key,
        .backslash-key,
        .caps-lock-key,
        .return-key {
          flex: 2;
        }

        .shift-key {
          flex: 3;
        }

        .space-key {
          flex: 6;
          padding: 8px;
          min-width: 140px;
        }

        .command-key,
        .alt-key {
          min-width: 25px;
          padding: 2px;
          font-size: 11px;
        }

        .arrow-key {
          min-width: 22px;
        }

        @keyframes customBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor-blink {
          animation: customBlink 1.2s step-end infinite;
        }

        @media (max-w: 640px) {
          .keyboard {
            padding: 8px;
            border-radius: 8px;
            gap: 3px;
          }
          .row {
            gap: 2px;
          }
          .key {
            min-width: 12px;
            padding: 4px 1px;
            font-size: 7px;
            border-radius: 3px;
          }
          .function-key {
            max-height: 18px;
            padding: 2px;
            font-size: 5px;
          }
          .space-key {
            min-width: 70px;
          }
          .command-key,
          .alt-key {
            font-size: 7px;
            min-width: 15px;
          }
          .eject-key {
            margin-left: 4px;
            padding: 2px 6px;
          }
        }
      `}</style>
    </div>
  );
}
"
