"use client";

import React, { useState } from "react";

interface CoreValue {
  title: string;
  cfg: string;
  icon: React.ReactNode;
  description: string;
}

export default function VisionGoalsClient() {
  const [activeIndex, setActiveIndex] = useState(0);

  const coreValues: CoreValue[] = [
    {
      title: "Resilient Autonomy",
      cfg: "autonomy.cfg",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      description: "We believe true independence means engineering systems that can think, adapt, and recover on their own. Our architecture is built to withstand extreme network denial and severe environmental interference without compromise."
    },
    {
      title: "Deceptive Design",
      cfg: "adaptability.cfg",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
        </svg>
      ),
      description: "Innovation requires strategic flexibility. We integrate advanced human-robot interaction and \"companion\" capabilities into our platforms, allowing them to adapt their persona from helpful social interfaces to secure, mission-critical assets."
    },
    {
      title: "Ethical Safeguards",
      cfg: "determinism.cfg",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      description: "Power requires absolute control. We are committed to building hardwired, time-deterministic fail-safes into our software state machines, ensuring our platforms execute tasks predictably and return safely to their operators without exception."
    },
    {
      title: "Edge-First Efficiency",
      cfg: "edge.cfg",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4M9 9h6v6H9z" />
        </svg>
      ),
      description: "We maximize performance on low-resource hardware. By prioritizing highly optimized, quantized local AI models over cloud dependency, we deliver faster processing, lower energy consumption, and total radio-silent operational security."
    }
  ];

  return (
    <div className="relative flex-1 py-16 sm:py-24 overflow-hidden">
      {/* Cyberpunk background glow visual accents */}
      <div className="absolute top-0 right-1/4 -z-10 h-[350px] w-[500px] rounded-full bg-green-500/5 blur-3xl" />
      <div className="absolute bottom-10 left-1/4 -z-10 h-[300px] w-[450px] rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Console */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-24">
          {/* Cyberpunk Status Tag */}
          <div className="inline-flex items-center gap-2 rounded-sm border border-green-500/20 bg-green-950/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-green-400 mb-6 backdrop-blur-md">
            <span className="flex h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            DIRECTIVE: SECURE_CORE_PHILOSOPHY
          </div>
          <h1 className="text-3xl font-extrabold tracking-wider sm:text-5xl font-mono uppercase text-white drop-shadow-[0_0_15px_rgba(34,197,94,0.15)]">
            // VISION_&_GOALS
          </h1>
          <p className="mt-4 font-mono text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Accessing core mission parameters, target operating models, and foundational principles for Project Aegis radio-silent edge computing.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {/* Mission Card */}
          <div className="group relative overflow-hidden rounded-sm border border-green-500/20 bg-black/75 p-6 sm:p-8 shadow-xl shadow-green-500/5 backdrop-blur-md transition-all duration-300 hover:border-green-500/50 hover:shadow-green-500/10">
            {/* Corner Tech Brackets */}
            <div className="absolute top-2 left-2 border-t border-l border-green-500/30 w-3 h-3 group-hover:border-green-400 transition-colors" />
            <div className="absolute top-2 right-2 border-t border-r border-green-500/30 w-3 h-3 group-hover:border-green-400 transition-colors" />
            <div className="absolute bottom-2 left-2 border-b border-l border-green-500/30 w-3 h-3 group-hover:border-green-400 transition-colors" />
            <div className="absolute bottom-2 right-2 border-b border-r border-green-500/30 w-3 h-3 group-hover:border-green-400 transition-colors" />
            
            {/* Scanning line indicator */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/20 to-transparent animate-[pulse_2s_infinite]" />

            {/* Card Header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-green-500/10">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-green-950/30 border border-green-500/30 text-green-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="text-[9px] font-mono text-green-500/40 uppercase tracking-widest">Database_File // 01</span>
                <h2 className="text-lg font-mono font-bold uppercase text-white tracking-wide">Mission Statement</h2>
              </div>
            </div>

            <div className="font-mono text-zinc-300 space-y-4">
              <p className="text-sm font-semibold text-green-400 border-l-2 border-green-500/50 pl-3 leading-relaxed">
                To pioneer resilient, edge-computed robotic solutions that safeguard operational integrity and human lives in communication-denied environments.
              </p>
              <p className="text-xs leading-relaxed text-zinc-400">
                Project Aegis design leverages localized intelligence and autonomous hardware control to navigate absolute network blackouts, ensuring safety, reliability, and precision where traditional systems fail.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative overflow-hidden rounded-sm border border-emerald-500/20 bg-black/75 p-6 sm:p-8 shadow-xl shadow-emerald-500/5 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/50 hover:shadow-emerald-500/10">
            {/* Corner Tech Brackets */}
            <div className="absolute top-2 left-2 border-t border-l border-emerald-500/30 w-3 h-3 group-hover:border-emerald-400 transition-colors" />
            <div className="absolute top-2 right-2 border-t border-r border-emerald-500/30 w-3 h-3 group-hover:border-emerald-400 transition-colors" />
            <div className="absolute bottom-2 left-2 border-b border-l border-emerald-500/30 w-3 h-3 group-hover:border-emerald-400 transition-colors" />
            <div className="absolute bottom-2 right-2 border-b border-r border-emerald-500/30 w-3 h-3 group-hover:border-emerald-400 transition-colors" />
            
            {/* Scanning line indicator */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent animate-[pulse_2s_infinite]" />

            {/* Card Header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-500/10">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-emerald-950/30 border border-emerald-500/30 text-emerald-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.754C2.302 5.417 9 2 12 2s9.698 3.417 10 9.58a1.002 1.002 0 010 .753c-.304 6.163-9.7 9.58-10 9.58s-9.698-3.417-10-9.58z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div>
                <span className="text-[9px] font-mono text-emerald-500/40 uppercase tracking-widest">Database_File // 02</span>
                <h2 className="text-lg font-mono font-bold uppercase text-white tracking-wide">Vision Statement</h2>
              </div>
            </div>

            <div className="font-mono text-zinc-300 space-y-4">
              <p className="text-sm font-semibold text-emerald-400 border-l-2 border-emerald-500/50 pl-3 leading-relaxed">
                To redefine the boundaries of autonomous robotics by making decentralized, radio-silent edge computing the benchmark for security and tactical operations worldwide.
              </p>
              <p className="text-xs leading-relaxed text-zinc-400">
                We envision a future where intelligent systems do not rely on vulnerable external networks, but instead possess the complete localized processing power and human-robot interaction capabilities needed to operate independently under any constraint.
              </p>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="flex flex-col items-center justify-center my-16 sm:my-20">
          <div className="h-[1px] w-full max-w-4xl bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
        </div>

        {/* Core Values Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-mono font-bold tracking-widest text-green-400 uppercase text-center mb-12">
            // CORE_OPERATING_VALUES
          </h2>
          
          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <div 
                key={idx}
                className="group relative flex flex-col rounded-sm border border-green-500/20 bg-black/60 overflow-hidden text-left backdrop-blur-xs transition-all duration-300 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(0,255,65,0.08)] hover:-translate-y-1"
              >
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-green-500/10 px-4 py-2 bg-green-950/10">
                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500/30 group-hover:bg-green-500/60 transition-colors"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500/30 group-hover:bg-green-500/60 transition-colors"></span>
                  </div>
                  <span className="text-[8px] font-mono text-green-500/50 tracking-wider">{value.cfg}</span>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-green-950/30 border border-green-500/30 text-green-400 shadow-sm shadow-green-500/10 transition-transform group-hover:scale-105">
                    {value.icon}
                  </div>
                  
                  <h3 className="mt-4 font-mono font-bold tracking-wider uppercase text-green-400 text-sm">{value.title}</h3>
                  <p className="mt-3 font-mono text-[11px] leading-relaxed text-zinc-400 flex-1">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel Layout */}
          <div className="block lg:hidden max-w-md mx-auto">
            {/* Active Card */}
            <div className="group relative flex flex-col rounded-sm border border-green-500/30 bg-black/65 overflow-hidden text-left backdrop-blur-md min-h-[290px] transition-all duration-300 shadow-[0_0_15px_rgba(0,255,65,0.05)]">
              {/* Corner Tech Brackets */}
              <div className="absolute top-2 left-2 border-t border-l border-green-500/30 w-3 h-3" />
              <div className="absolute top-2 right-2 border-t border-r border-green-500/30 w-3 h-3" />
              <div className="absolute bottom-2 left-2 border-b border-l border-green-500/30 w-3 h-3" />
              <div className="absolute bottom-2 right-2 border-b border-r border-green-500/30 w-3 h-3" />
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-green-500/10 px-4 py-3 bg-green-950/20">
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500/50"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500/50"></span>
                </div>
                <span className="text-[9px] font-mono text-green-400 tracking-wider">
                  {coreValues[activeIndex].cfg} (ACTIVE)
                </span>
              </div>
              
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-green-950/40 border border-green-500/30 text-green-400">
                    {coreValues[activeIndex].icon}
                  </div>
                  
                  <h3 className="mt-4 font-mono font-bold tracking-wider uppercase text-green-400 text-sm">
                    {coreValues[activeIndex].title}
                  </h3>
                  <p className="mt-3 font-mono text-xs leading-relaxed text-zinc-400">
                    {coreValues[activeIndex].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Slider Navigation */}
            <div className="flex items-center justify-between mt-6 px-2">
              <button
                onClick={() => setActiveIndex((prev) => (prev === 0 ? coreValues.length - 1 : prev - 1))}
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-green-500/30 bg-green-950/10 text-green-400 hover:bg-green-500 hover:text-black hover:border-green-500 transition-all font-bold"
                title="Previous Slide"
              >
                &larr;
              </button>

              {/* Slide Indicators */}
              <div className="flex gap-1.5">
                {coreValues.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-6 rounded-none font-mono text-[9px] px-2 border flex items-center justify-center transition-all ${
                      activeIndex === idx
                        ? "bg-green-500 text-black border-green-500 shadow-[0_0_8px_rgba(0,255,65,0.4)] font-bold"
                        : "bg-transparent text-green-500/50 border-green-500/20 hover:border-green-500/40"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setActiveIndex((prev) => (prev === coreValues.length - 1 ? 0 : prev + 1))}
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-green-500/30 bg-green-950/10 text-green-400 hover:bg-green-500 hover:text-black hover:border-green-500 transition-all font-bold"
                title="Next Slide"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
