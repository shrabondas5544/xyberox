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

interface FahimFaisalReviewClientProps {
  papers: Paper[];
}

export default function FahimFaisalReviewClient({ papers }: FahimFaisalReviewClientProps) {
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
            // LIT_REVIEW: FAHIM_FAISAL
          </h1>
          <p className="mt-4 font-mono text-sm text-zinc-400">
            Navigation Stack, SLAM Simulation, and Trajectory Planning lead research database. Exploring space network intelligence, Edge-AI TinyML classifiers, adaptive locomotion wheels, and GNSS deceptive jammer detection.
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
              <h4 className="text-xs font-bold uppercase tracking-wider text-green-400">Communication Security & Navigation Context</h4>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                The analyzed literature explores intelligent satellite network routing, low-cost Wi-Fi interference vulnerability, neuro-fuzzy GSM jammer detectors, TinyML edge classifiers, adaptive wheel locomotion via vacuum/granular jamming, and GNSS/LPI deceptive jamming classifiers. **Project Aegis** leverages these findings—integrating TinyML edge inferences, robust multi-sensor GNSS security shields, and custom simulation packages—to build an autonomous, terrain-resilient, and communications-hardened exploration rover.
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
                    <span className="font-mono text-[10px] text-green-400 uppercase tracking-widest">
                      {paper.venue} // {paper.year}
                    </span>
                    <h3 className="mt-2 text-lg sm:text-xl font-mono font-bold text-white group-hover:text-green-400 transition-colors leading-snug">
                      {paper.title}
                    </h3>
                  </div>

                  {/* Abstract Summary (Always Visible) */}
                  <div className="font-mono text-xs sm:text-sm text-zinc-400 border-l-2 border-green-500/30 pl-4 leading-relaxed">
                    <p className="font-bold text-zinc-300 uppercase text-[9px] tracking-wider mb-1 text-green-500/70">ABSTRACT SUMMARY</p>
                    {paper.summary}
                  </div>

                  {/* Collapsible Section */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? "max-h-[2000px] opacity-100 mt-6 pt-6 border-t border-green-500/10 space-y-6" : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    {/* DOI Reference Link */}
                    {paper.doi && (
                      <div>
                        <a
                          href={paper.doi}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-xs text-green-500 hover:text-green-300 hover:underline"
                        >
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                          </svg>
                          Reference Link
                        </a>
                      </div>
                    )}

                    {/* Grid Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
                      {/* Objectives & Description */}
                      <div className="space-y-4">
                        {paper.objectives && (
                          <div>
                            <h4 className="text-[10px] font-bold text-green-400 uppercase tracking-wider mb-1.5">// TARGET_OBJECTIVE</h4>
                            <p className="text-zinc-400 leading-relaxed">{paper.objectives}</p>
                          </div>
                        )}
                        {paper.description && (
                          <div>
                            <h4 className="text-[10px] font-bold text-green-400 uppercase tracking-wider mb-1.5">// FINDINGS_OVERVIEW</h4>
                            <p className="text-zinc-400 leading-relaxed whitespace-pre-line">{paper.description}</p>
                          </div>
                        )}
                      </div>

                      {/* Research Gaps / Challenges */}
                      {paper.gaps && paper.gaps.length > 0 && (
                        <div className="rounded-sm border border-red-500/15 bg-red-950/5 p-4">
                          <h4 className="text-[10px] font-bold text-red-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-red-500" />
                            IDENTIFIED RESEARCH GAPS
                          </h4>
                          <ul className="space-y-2 list-none">
                            {paper.gaps.map((gap, i) => (
                              <li key={i} className="text-zinc-400 pl-3 relative leading-relaxed">
                                <span className="absolute left-0 top-1 text-red-500/60">&gt;</span>
                                {gap}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Research Questions & Comparative Synthesis */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-green-500/10 font-mono text-xs">
                      {/* Research Questions */}
                      {paper.questions && paper.questions.length > 0 && (
                        <div>
                          <h4 className="text-[10px] font-bold text-green-400 uppercase tracking-wider mb-2.5">// RESEARCH_QUESTIONS</h4>
                          <div className="space-y-2.5">
                            {paper.questions.map((rq, i) => (
                              <div key={i} className="bg-green-950/10 border border-green-500/10 p-2.5 rounded-sm">
                                <p className="text-[10px] text-green-400/70 font-bold mb-1">QUESTION 0{i + 1}</p>
                                <p className="text-zinc-400 leading-relaxed">{rq.includes("RQ") ? rq.substring(5) : rq}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Comparative Synthesis */}
                      {paper.comparison && (
                        <div className="rounded-sm border border-green-500/15 bg-green-950/5 p-4 flex flex-col justify-between">
                          <div>
                            <h4 className="text-[10px] font-bold text-green-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                              <span className="flex h-1.5 w-1.5 rounded-full bg-green-400" />
                              AEGIS COMPARATIVE SYNTHESIS
                            </h4>
                            <p className="text-zinc-400 leading-relaxed mt-1">
                              {paper.comparison}
                            </p>
                          </div>
                          <div className="mt-4 pt-4 border-t border-green-500/10 flex items-center justify-between text-[9px] text-green-500/50">
                            <span>STATUS: CONTRASTED_OK</span>
                            <span>SECURE_DB_LINK</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Toggle Button */}
                  <div className="pt-2 flex justify-start">
                    <button
                      onClick={() => toggleCard(index)}
                      className="font-mono text-[10px] font-bold tracking-widest text-green-400 bg-transparent border border-green-500/30 px-4 py-2 hover:bg-green-500 hover:text-black hover:border-green-500 transition-all duration-200"
                    >
                      {isExpanded ? "[SECURE_MINIMIZE]" : "[DECRYPT_FULL_SCHEMA]"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Back Link */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 rounded-sm border border-green-500/40 bg-black/60 px-6 py-2.5 font-mono text-xs font-bold tracking-widest text-green-400 transition-all hover:bg-green-500/10 hover:border-green-500 hover:shadow-[0_0_12px_rgba(0,255,65,0.15)]"
          >
            &larr; BACK_TO_TEAM
          </Link>
        </div>
      </div>
    </div>
  );
}
