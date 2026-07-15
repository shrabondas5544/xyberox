"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function ResultsPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative flex-1 py-16 sm:py-24 overflow-hidden bg-black text-zinc-300 min-h-screen">
      {/* Cyberpunk background glow visual accents */}
      <div className="absolute top-0 right-1/4 -z-10 h-[350px] w-[500px] rounded-full bg-green-500/5 blur-3xl" />
      <div className="absolute bottom-10 left-1/4 -z-10 h-[300px] w-[450px] rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Console */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 rounded-sm border border-green-500/20 bg-green-950/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-green-400 mb-6 backdrop-blur-md">
            <span className="flex h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            DIRECTIVE: PROJECT_RESULTS_&_HARDWARE_UPGRADES
          </div>
          <h1 className="text-3xl font-extrabold tracking-wider sm:text-5xl font-mono uppercase text-white drop-shadow-[0_0_15px_rgba(34,197,94,0.15)]">
            // PROJECT_RESULTS
          </h1>
          <p className="mt-4 font-mono text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Latest operational milestones, hardware fabrication logs, and physical prototype results for the Xyberox autonomous system.
          </p>
        </div>

        {/* Chassis Showcase Section */}
        <div className="mx-auto max-w-5xl">
          <div className="group relative overflow-hidden rounded-sm border border-green-500/20 bg-black/75 p-6 sm:p-8 shadow-xl shadow-green-500/5 backdrop-blur-md mb-12">
            {/* Corner Tech Brackets */}
            <div className="absolute top-2 left-2 border-t border-l border-green-500/30 w-3 h-3" />
            <div className="absolute top-2 right-2 border-t border-r border-green-500/30 w-3 h-3" />
            <div className="absolute bottom-2 left-2 border-b border-l border-green-500/30 w-3 h-3" />
            <div className="absolute bottom-2 right-2 border-b border-r border-green-500/30 w-3 h-3" />

            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-green-500/10">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-green-950/30 border border-green-500/30 text-green-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <div>
                <span className="text-[9px] font-mono text-green-500/40 uppercase tracking-widest">Hardware_Release // v1.0.0</span>
                <h2 className="text-xl font-mono font-bold uppercase text-white tracking-wide">Physical Prototype Chassis</h2>
              </div>
            </div>

            <p className="font-mono text-sm text-zinc-300 mb-8 leading-relaxed">
              We have completed the baseline structural fabrication of the Xyberox mobile chassis. The custom-cut multi-deck design optimizes routing channels, guarantees structural robustness for rough terrain traversal, and houses our dual-bus power grid isolation system.
            </p>

            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Image 1: Top View */}
              <div className="relative overflow-hidden rounded-sm border border-zinc-800 bg-zinc-950/50 p-2 group-hover:border-green-500/30 transition-all duration-300">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black flex items-center justify-center">
                  <Image
                    src="/robot_chassis_top.jpg"
                    alt="Xyberox Chassis Top View"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
                <div className="mt-3 text-center border-t border-zinc-900 pt-2">
                  <span className="font-mono text-xs text-green-400">// FIG_01: TOP VIEW CHASSIS LAYOUT</span>
                </div>
              </div>

              {/* Image 2: Side View */}
              <div className="relative overflow-hidden rounded-sm border border-zinc-800 bg-zinc-950/50 p-2 group-hover:border-green-500/30 transition-all duration-300">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black flex items-center justify-center">
                  <Image
                    src="/robot_chassis_side.jpg"
                    alt="Xyberox Chassis Side Angle View"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
                <div className="mt-3 text-center border-t border-zinc-900 pt-2">
                  <span className="font-mono text-xs text-green-400">// FIG_02: COMPONENT MOUNTING BENT PROFILE</span>
                </div>
              </div>
            </div>

            {/* Technical Parameters */}
            <div className="border-t border-green-500/10 pt-6 font-mono">
              <h3 className="text-sm font-bold uppercase text-white mb-4">// TECHNICAL_SPECIFICATIONS:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">▶</span>
                  <div>
                    <span className="text-zinc-100 font-semibold">Chassis Geometry:</span> Precision-machined, multi-deck structure optimized for sensor mounting and battery integration.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">▶</span>
                  <div>
                    <span className="text-zinc-100 font-semibold">Actuation Grid:</span> 4WD configuration driven by high-torque yellow TT motors paired with high-traction rubber wheels.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">▶</span>
                  <div>
                    <span className="text-zinc-100 font-semibold">Wiring Channels:</span> Star venting cutouts and logic wire tunnels designed to minimize inductive EMI coupling.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">▶</span>
                  <div>
                    <span className="text-zinc-100 font-semibold">Sensor Rails:</span> Mounts for MPU9250 orientation array, HC-SR04 ultrasonic sensor, and Raspberry Pi Zero 2 W core module.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
