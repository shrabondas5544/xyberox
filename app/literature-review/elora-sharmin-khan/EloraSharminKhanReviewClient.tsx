"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Paper {
  title: string;
  year: string;
  venue: string;
  doi: string;
  summary: string;
  description: string;
  comparison: string;
  objectives: string;
  gaps: string[];
  questions: string[];
  rating?: string;
}

interface EloraSharminKhanReviewClientProps {
  papers: Paper[];
}

export default function EloraSharminKhanReviewClient({ papers }: EloraSharminKhanReviewClientProps) {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="relative flex-1 py-16 sm:py-24 overflow-hidden">
      {/* Cyberpunk background glow visual accents */}
      <div className="absolute top-0 left-1/3 -z-10 h-[350px] w-[500px] rounded-full bg-green-500/5 blur-3xl" />
      <div className="absolute bottom-10 right-1/4 -z-10 h-[250px] w-[400px] rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-sm border border-green-500/30 bg-green-950/20 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-green-400 mb-6">
            <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            telemetry: lit_review_loaded
          </div>
          <h1 className="text-3xl font-extrabold tracking-wider sm:text-5xl font-mono uppercase text-white">
            // LIT_REVIEW: ELORA_SHARMIN_KHAN
          </h1>
          <p className="mt-4 font-mono text-sm text-zinc-400">
            Educational Robotics, Voice Interactive Interfaces, Natural Language Processing, and Early Childhood Human-Robot Interaction research database.
          </p>
        </div>

        {/* Info Box */}
        <div className="max-w-5xl mx-auto mb-16 rounded-sm border border-green-500/20 bg-green-950/5 p-6 backdrop-blur-md">
          <div className="flex gap-3 items-start">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-green-950/50 border border-green-500/30 text-green-400 mt-0.5">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="font-mono">
              <h4 className="text-xs font-bold uppercase tracking-wider text-green-400">Voice-Interactive HRI & Educational Robotics Context</h4>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                The research compiled here investigates affordable, voice-interactive educational robots equipped with Natural Language Processing (NLP), Google Speech-to-Text, and multilingual capabilities (including Bengali). **Project Aegis / Xyberox** incorporates these foundational HRI methodologies to build interactive companion interfaces, voice command processing modules, and low-cost embedded hardware architectures.
              </p>
            </div>
          </div>
        </div>

        {/* Papers List */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {papers.map((paper, index) => {
            const isExpanded = !!expandedCards[index];
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-sm border border-green-500/20 bg-black/70 shadow-lg transition-all duration-300 hover:border-green-500/40"
              >
                {/* Terminal Window Header */}
                <div 
                  onClick={() => toggleCard(index)}
                  className="flex items-center justify-between border-b border-green-500/10 px-6 py-3 bg-green-950/10 cursor-pointer select-none"
                >
                  <div className="flex gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500/30 group-hover:bg-green-500/60 transition-colors"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500/30 group-hover:bg-green-500/60 transition-colors"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500/30 group-hover:bg-green-500/60 transition-colors"></span>
                  </div>
                  <span className="text-[9px] font-mono text-green-500/40 tracking-wider">
                    document_ref_{index + 1}.log {paper.rating ? `[RATING: ${paper.rating}]` : ""}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Title & Metadata */}
                  <div 
                    onClick={() => toggleCard(index)}
                    className="cursor-pointer"
                  >
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 mb-2">
                      <span className="rounded-sm bg-green-950/50 border border-green-500/30 px-2 py-0.5 text-green-400 font-bold">
                        {paper.year}
                      </span>
                      <span className="text-zinc-500">|</span>
                      <span className="text-zinc-300">{paper.venue}</span>
                    </div>

                    <h3 className="text-xl font-mono font-bold text-white group-hover:text-green-400 transition-colors leading-snug">
                      {paper.title}
                    </h3>
                  </div>

                  {/* DOI Link */}
                  {paper.doi && (
                    <div>
                      <Link
                        href={paper.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-green-400 hover:text-green-300 underline underline-offset-4"
                      >
                        <span>[VIEW_PUBLICATION_SOURCE]</span>
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </Link>
                    </div>
                  )}

                  {/* Abstract Summary */}
                  <div className="rounded-sm border border-zinc-800 bg-zinc-950/50 p-4 font-mono text-xs text-zinc-300 leading-relaxed">
                    <span className="text-green-400 font-bold uppercase block mb-1">// ABSTRACT_SUMMARY</span>
                    {paper.summary}
                  </div>

                  {/* Toggle Content Trigger */}
                  <button
                    onClick={() => toggleCard(index)}
                    className="w-full flex items-center justify-between py-2 border-t border-green-500/10 font-mono text-xs text-green-400 hover:text-green-300 transition-colors"
                  >
                    <span>{isExpanded ? "[- HIDE_DETAILED_ANALYSIS]" : "[+ SHOW_DETAILED_ANALYSIS]"}</span>
                    <span>{isExpanded ? "▲" : "▼"}</span>
                  </button>

                  {/* Expanded Sections */}
                  {isExpanded && (
                    <div className="space-y-6 pt-2 font-mono text-xs">
                      {/* Findings / What Researchers Did */}
                      <div className="space-y-2">
                        <span className="text-green-400 font-bold uppercase block">// WHAT_RESEARCHERS_DID & FINDINGS</span>
                        <div className="text-zinc-300 leading-relaxed whitespace-pre-line bg-black/40 p-4 rounded-sm border border-zinc-800">
                          {paper.description}
                        </div>
                      </div>

                      {/* Target Objective / Why Do */}
                      <div className="space-y-2">
                        <span className="text-green-400 font-bold uppercase block">// TARGET_OBJECTIVE (WHY DO)</span>
                        <p className="text-zinc-300 leading-relaxed bg-black/40 p-4 rounded-sm border border-zinc-800">
                          {paper.objectives}
                        </p>
                      </div>

                      {/* Problems Solved */}
                      <div className="space-y-2">
                        <span className="text-green-400 font-bold uppercase block">// PROBLEMS_SOLVED</span>
                        <div className="text-zinc-300 leading-relaxed bg-black/40 p-4 rounded-sm border border-zinc-800 space-y-2">
                          {paper.gaps.map((gap, gIdx) => (
                            <div key={gIdx} className="flex gap-2 items-start">
                              <span className="text-red-400 font-bold">▶</span>
                              <span>{gap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Xyberox Comparative Synthesis */}
                      <div className="space-y-2">
                        <span className="text-green-400 font-bold uppercase block">// XYBEROX_COMPARATIVE_SYNTHESIS</span>
                        <p className="text-green-300 leading-relaxed bg-green-950/20 p-4 rounded-sm border border-green-500/30">
                          {paper.comparison}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
