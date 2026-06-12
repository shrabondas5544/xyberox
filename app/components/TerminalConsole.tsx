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
  const [decryptGame, setDecryptGame] = useState<{
    isActive: boolean;
    word: string;
    scrambled: string;
    hint: string;
    attempts: number;
  } | null>(null);

  const [scale, setScale] = useState(1);
  const [keyboardHeight, setKeyboardHeight] = useState(240);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const keyboardRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on input/history changes
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollTop = terminalEndRef.current.scrollHeight;
    }
  }, [lines, currentInput]);

  // Handle responsive keyboard scaling via ResizeObserver (highly reliable on mobile mount)
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const parentWidth = entry.contentRect.width;
        const naturalWidth = 600; // design width of the keyboard

        if (parentWidth < naturalWidth && parentWidth > 0) {
          const newScale = parentWidth / naturalWidth;
          setScale(newScale);
        } else {
          setScale(1);
        }

        if (keyboardRef.current) {
          setKeyboardHeight(keyboardRef.current.offsetHeight || 240);
        }
      }
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Execute terminal command
  const executeCommand = () => {
    const trimmed = currentInput.trim();
    const commandLine = `xyberox@admin: ~ $ ${currentInput}`;

    if (!trimmed) {
      setLines((prev) => [...prev, commandLine]);
      setCurrentInput("");
      return;
    }

    // Intercept input for Decryption Hacker game
    if (decryptGame && decryptGame.isActive) {
      const guess = trimmed.toLowerCase();
      const target = decryptGame.word.toLowerCase();
      
      if (guess === target) {
        setLines((prev) => [
          ...prev,
          commandLine,
          `>> VERIFYING ACCESS CODE: [${trimmed.toUpperCase()}]...`,
          ">> STATUS: ACCESS GRANTED. DECRYPTING DATA...",
          "=========================================",
          "CLASSIFIED DATA ENVELOPE [PROJECT AEGIS]:",
          "  Rover Payload Frequency: 2.412 GHz - 2.472 GHz",
          "  Signal Cancellation Type: Downlink DOS Jamming",
          "  Navigation Engine: Edge-computed Deep Reinforcement Learning",
          "  Hardware SoC: Jetson Nano Core + Custom RF Synthesizer",
          "=========================================",
          "GAME COMPLETED. SYSTEM SECURED."
        ]);
        setDecryptGame(null);
      } else {
        const nextAttempts = decryptGame.attempts - 1;
        if (nextAttempts <= 0) {
          setLines((prev) => [
            ...prev,
            commandLine,
            `>> VERIFYING ACCESS CODE: [${trimmed.toUpperCase()}]...`,
            ">> STATUS: DECRYPTION CRITICAL FAILURE. LOCKOUT TRIGGERED.",
            "Type 'decrypt' to reboot decryption algorithm."
          ]);
          setDecryptGame(null);
        } else {
          setLines((prev) => [
            ...prev,
            commandLine,
            `>> VERIFYING ACCESS CODE: [${trimmed.toUpperCase()}]...`,
            `>> STATUS: INVALID CODE. ATTEMPTS REMAINING: ${nextAttempts}`,
            `HINT: ${decryptGame.hint} (Scrambled: ${decryptGame.scrambled})`
          ]);
          setDecryptGame((curr) => curr ? { ...curr, attempts: nextAttempts } : null);
        }
      }
      setCurrentInput("");
      return;
    }

    const parts = trimmed.split(" ");
    const cmd = parts[0].toLowerCase();
    const normalizedInput = trimmed.toLowerCase();
    
    let output: string[] = [];

    // Team Member Search Queries
    if (normalizedInput === "shrabon" || normalizedInput === "shrabon das" || normalizedInput === "das") {
      output = [
        "MEMBER FOUND: Shrabon Das [ID: 2121644]",
        "----------------------------------------",
        "PROGRAM: B.Sc. in Computer Science & Engineering (CSE)",
        "SEMESTER: 11th Semester",
        "ROLES / RESPONSIBILITIES:",
        "  - Project Architecture",
        "  - Frontend & UI Development",
        "  - Control Interface Integration",
        "CONTACT / SOCIALS:",
        "  - Email: mailto:shrabon.das@example.com",
        "  - Github: github.com/shrabondas5544",
        "  - Lit Survey: /literature-review/shrabon-das"
      ];
    } else if (normalizedInput === "nijum" || normalizedInput === "nijum barua" || normalizedInput === "barua") {
      output = [
        "MEMBER FOUND: Nijum Barua [ID: 2231066]",
        "----------------------------------------",
        "PROGRAM: B.Sc. in Computer Science & Engineering (CSE)",
        "SEMESTER: 12th Semester",
        "ROLES / RESPONSIBILITIES:",
        "  - Hardware Implementation",
        "  - Technical Documentation",
        "  - Research Analysis",
        "  - Algorithm Development",
        "CONTACT / SOCIALS:",
        "  - Email: mailto:nijum@gmail.com",
        "  - Github: github.com/NijumBarua",
        "  - Lit Survey: /literature-review/nijum-barua"
      ];
    } else if (
      normalizedInput === "mahadi" ||
      normalizedInput === "sm mahadi bhuiyan" ||
      normalizedInput === "mahadi bhuiyan" ||
      normalizedInput === "bhuiyan" ||
      normalizedInput === "sm mahadi"
    ) {
      output = [
        "MEMBER FOUND: SM Mahadi Bhuiyan [ID: 2221486]",
        "---------------------------------------------",
        "PROGRAM: B.Sc. in Computer Science & Engineering (CSE)",
        "SEMESTER: 14th Semester",
        "ROLES / RESPONSIBILITIES:",
        "  - Hardware Implementation",
        "  - Research Analysis",
        "  - Software Integration",
        "  - Algorithm Development",
        "CONTACT / SOCIALS:",
        "  - Email: mailto:smmahadi01910048684@gmail.com",
        "  - Github: github.com/mahadi-shakkor",
        "  - Lit Survey: /literature-review/sm-mahadi-bhuiyan"
      ];
    } else if (
      normalizedInput === "ashraful" ||
      normalizedInput === "mohd ashraful islam" ||
      normalizedInput === "ashraful islam" ||
      normalizedInput === "islam"
    ) {
      output = [
        "MEMBER FOUND: Mohd Ashraful Islam [ID: 2010192]",
        "-----------------------------------------------",
        "PROGRAM: B.Sc. in Computer Science (CS)",
        "SEMESTER: 13th Semester",
        "ROLES / RESPONSIBILITIES:",
        "  - Hardware Implementation",
        "  - Technical Documentation",
        "  - Research Analysis",
        "  - Software Integration",
        "  - Algorithm Development",
        "CONTACT / SOCIALS:",
        "  - Email: mailto:ashrafulislamcsdev@gmail.com",
        "  - Github: github.com/ashrafulcs",
        "  - Lit Survey: /literature-review/mohd-ashraful-islam"
      ];
    } else if (normalizedInput === "fahim" || normalizedInput === "fahim faisal" || normalizedInput === "faisal") {
      output = [
        "MEMBER FOUND: Fahim Faisal [ID: 2221506]",
        "----------------------------------------",
        "PROGRAM: B.Sc. in Computer Science & Engineering (CSE)",
        "SEMESTER: 14th Semester",
        "ROLES / RESPONSIBILITIES:",
        "  - Hardware Implementation",
        "CONTACT / SOCIALS:",
        "  - Email: mailto:fahimfaisal1148@gmail.com",
        "  - Github: github.com/Fahim396",
        "  - Lit Survey: /literature-review/fahim-faisal"
      ];
    } else if (
      normalizedInput === "elora" ||
      normalizedInput === "elora sharmin khan" ||
      normalizedInput === "elora sharmin" ||
      normalizedInput === "khan"
    ) {
      output = [
        "MEMBER FOUND: Elora Sharmin Khan [ID: 2231368]",
        "-----------------------------------------------",
        "PROGRAM: B.Sc. in Computer Science & Engineering (CSE)",
        "SEMESTER: 12th Semester",
        "ROLES / RESPONSIBILITIES:",
        "  - Logistics Management",
        "CONTACT / SOCIALS:",
        "  - Email: mailto:elorakhan033@gmail.com",
        "  - Github: github.com/elora5",
        "  - Lit Survey: /literature-review/elora-sharmin-khan"
      ];
    } else if (
      normalizedInput === "shidujaman" ||
      normalizedInput === "mohammad shidujaman" ||
      normalizedInput === "dr. mohammad shidujaman" ||
      normalizedInput === "supervisor" ||
      normalizedInput === "dr. shidujaman"
    ) {
      output = [
        "SUPERVISOR FOUND: MOHAMMAD SHIDUJAMAN, PHD",
        "------------------------------------------",
        "ROLE: Project Supervisor",
        "DEPARTMENT: Assistant Professor, Dept. of Computer Science & Engineering",
        "INSTITUTION: Independent University Bangladesh",
        "RESEARCH FOCUS FOCUS:",
        "  - Explainable Artificial Intelligence and Robotics",
        "  - Human Computer Interaction",
        "  - Human Robot Interaction",
        "CONTACT:",
        "  - Email: shidujaman@iub.edu.bd"
      ];
    } else {
      switch (cmd) {
        case "help":
          output = [
            "Available Commands:",
            "  help         Show list of available commands",
            "  about        Display information about the Xyberox initiative",
            "  skills       Display supervisor research focus area",
            "  members      List team members",
            "  aegis        Display ASCII mainframe specifications & stats",
            "  scan         Execute active RF channel/radar scan",
            "  decrypt      Initialize tactical telemetry decryption game",
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
        case "aegis":
          output = [
            "      __  __                      ",
            "      \\ \\/ /_  ______  ___  _________",
            "       \\  / / / / __ \\/ _ \\/ ___/ __ \\",
            "       / / /_/ / /_/ /  __/ /  / /_/ /",
            "      /_/\\__,_/_.___/\\___/_/   \\____/",
            "      ---------------------------------",
            "      HOST: xyberox-rover-mainframe",
            "      UPLINK: SECURE WIRELESS (LoRa/868MHz)",
            "      CORE_TEMP: 42.6°C // BATTERY: 87.2%",
            "      ACTIVE_PAYLOADS: RF_JAMMER, CV_AVOIDANCE",
            "      CURRENT_ZONE: IUB_LAB_SECTOR_4",
            "      DRIVE_SYSTEM: 4WD Mecanum Suspension",
            "      FIRMWARE: Aegis-RTOS-v4.1"
          ];
          break;
        case "scan":
          setLines((prev) => [...prev, commandLine, "Scanning active frequencies [2.4GHz / 5.8GHz / Sub-GHz]..."]);
          setCurrentInput("");
          setTimeout(() => {
            setLines((prev) => [...prev, ">> SEARCH_BEACON: Sweeping channels... [ 22% ]"]);
          }, 500);
          setTimeout(() => {
            setLines((prev) => [...prev, ">> ANALYZING: Demodulating signal peaks... [ 64% ]"]);
          }, 1000);
          setTimeout(() => {
            setLines((prev) => [...prev, ">> COMPLETE: Decoding packet headers... [ 100% ]"]);
          }, 1500);
          setTimeout(() => {
            setLines((prev) => [
              ...prev,
              "=========================================",
              "TARGETS DETECTED IN ACTIVE SECTOR:",
              "  [01] Wi-Fi Access Point (SSID: IUB-Guest)   -72dBm",
              "  [02] Bluetooth Beacon (UUID: 8a4c)        -85dBm",
              "  [03] Covert Jammer Core (Aegis-Rover-01)  -34dBm [STRONG]",
              "========================================="
            ]);
          }, 2000);
          return;
        case "decrypt":
          const words = [
            { word: "AEGIS", scrambled: "SAGEI", hint: "The shield and code name of our edge computing payload." },
            { word: "XYBEROX", scrambled: "REBOXXY", hint: "The name of our autonomous robotic platform." },
            { word: "JAMMER", scrambled: "REMMJA", hint: "The service denial RF interference module." },
            { word: "ROBOTICS", scrambled: "SITOBORC", hint: "The scientific discipline of designing and operating rovers." }
          ];
          const selected = words[Math.floor(Math.random() * words.length)];
          setDecryptGame({
            isActive: true,
            word: selected.word,
            scrambled: selected.scrambled,
            hint: selected.hint,
            attempts: 3
          });
          output = [
            "INITIALIZING DECRYPTION ALGORITHM...",
            "=========================================",
            `SCRAMBLED VECTOR: [ ${selected.scrambled} ]`,
            `HINT: ${selected.hint}`,
            "=========================================",
            "ENTER DECIPHERED KEY VALUE (3 ATTEMPTS REMAINING):"
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
            "Type 'help' or enter a member name to view info."
          ];
          break;
      }
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
    <div className="w-full flex flex-col items-center" ref={containerRef}>
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

      {/* Cyberpunk Interactive Virtual Keyboard Container */}
      <div 
        className="keyboard-container w-full relative overflow-hidden"
        style={{ 
          height: `${keyboardHeight * scale}px`
        }}
      >
        <div 
          ref={keyboardRef}
          className="keyboard"
          style={{ 
            position: "absolute",
            left: "50%",
            transform: `translateX(-50%) scale(${scale})`, 
            transformOrigin: "top center",
            width: "600px",
            maxWidth: "none"
          }}
        >
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
          width: 600px;
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
      `}</style>
    </div>
  );
}
