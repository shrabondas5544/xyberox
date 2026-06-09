"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-green-500/25 bg-black/90 py-12 backdrop-blur-md">
      {/* Decorative neon glow line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent shadow-[0_0_10px_rgba(0,255,65,0.4)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Main info branding */}
          <div className="md:col-span-2 space-y-4">
            <Link 
              href="/" 
              className="flex items-center gap-2 font-mono text-xl font-bold tracking-wider text-green-400"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-green-500 p-0.5 shadow-md shadow-green-500/20">
                <div className="flex h-full w-full items-center justify-center rounded-[4px] bg-black">
                  <span className="text-green-400 text-xs font-bold">X</span>
                </div>
              </div>
              <span>Xyberox</span>
            </Link>
            <p className="max-w-md font-mono text-xs text-zinc-500 leading-relaxed">
              // SECURE_UPLINK: ACTIVE // Autonomous robotics initiative specializing in Explainable AI, human-robot interaction, and decentralized control systems at Independent University Bangladesh.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-green-400 mb-4">
              // navigation
            </h4>
            <ul className="space-y-2 font-mono text-xs text-zinc-400">
              <li>
                <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/prototype" className="hover:text-green-400 transition-colors">Prototype Telemetry</Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-green-400 transition-colors">Project Team</Link>
              </li>
              <li>
                <Link href="/robotics" className="hover:text-green-400 transition-colors">Robotics</Link>
              </li>
            </ul>
          </div>

          {/* Project modules */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-green-400 mb-4">
              // project_logs
            </h4>
            <ul className="space-y-2 font-mono text-xs text-zinc-400">
              <li>
                <Link href="/project/vision-goals" className="hover:text-green-400 transition-colors">Vision & Goals</Link>
              </li>
              <li>
                <Link href="/project/methodology" className="hover:text-green-400 transition-colors">Methodology</Link>
              </li>
              <li>
                <Link href="/project/survey-data" className="hover:text-green-400 transition-colors">Survey Data</Link>
              </li>
              <li>
                <Link href="/project/weekly-updates" className="hover:text-green-400 transition-colors">Weekly Updates</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & status */}
        <div className="mt-12 pt-6 border-t border-green-500/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-[10px] text-zinc-500">
            © {new Date().getFullYear()} XYBEROX SYSTEMS. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex items-center gap-2 rounded-sm border border-green-500/20 bg-green-950/10 px-3 py-1 font-mono text-[10px] text-green-400">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            UPLINK_STATUS: ONLINE
          </div>
        </div>
      </div>
    </footer>
  );
}
