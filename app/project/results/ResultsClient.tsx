"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Import Team Images from app/team
import shrabonPic from "../../team/Shrabon_Das .png";
import nijumPic from "../../team/Nijum baruya.png";
import mahadiPic from "../../team/mahadi_shakkhor .png";
import ashrafulPic from "../../team/Ashraful.png";
import fahimPic from "../../team/Fahim_Awal_Faisal.png";
import eloraPic from "../../team/Elora_Sharmin_Khan .png";

interface MemberResultCard {
  indexNumber: number;
  id: string;
  name: string;
  role: string;
  program: string;
  image: any;
  slug: string;
  badgeText: string;
  summary: string;
  sectionsAvailable: string[];
}

export default function ResultsClient() {
  const members: MemberResultCard[] = [
    {
      indexNumber: 1,
      id: "2230827",
      name: "Shrabon Das",
      role: "Project Architecture & AI Integration",
      program: "B.Sc. CSE",
      image: shrabonPic,
      slug: "shrabon-das",
      badgeText: "Member 01",
      summary: "Project architecture, frontend & UI development, control interface & AI integration.",
      sectionsAvailable: ["Video Demonstration", "Video Presentation", "IEEE Report (PDF)", "Springer Report"],
    },
    {
      indexNumber: 2,
      id: "2231368",
      name: "Nijum Barua",
      role: "Technical Documentation & Research Analysis",
      program: "B.Sc. CSE",
      image: nijumPic,
      slug: "nijum-barua",
      badgeText: "Member 02",
      summary: "Hardware implementation, technical documentation, research analysis, and sensor telemetry.",
      sectionsAvailable: ["Video Demonstration", "Video Presentation", "IEEE Report (PDF)", "Springer Report"],
    },
    {
      indexNumber: 3,
      id: "2221486",
      name: "SM Mahadi Bhuiyan",
      role: "Research Analysis & Mathematical Research",
      program: "B.Sc. CSE",
      image: mahadiPic,
      slug: "sm-mahadi-bhuiyan",
      badgeText: "Member 03",
      summary: "Research analysis, mathematical equation research, IEEE Report (PDF), and Springer Report.",
      sectionsAvailable: ["Video Demonstration", "Video Presentation", "IEEE Report (PDF)", "Springer Report"],
    },
    {
      indexNumber: 4,
      id: "2010192",
      name: "Mohd Ashraful Islam",
      role: "Software Integration & RAG Implementation",
      program: "B.Sc. CS",
      image: ashrafulPic,
      slug: "mohd-ashraful-islam",
      badgeText: "Member 04",
      summary: "Hardware implementation, software integration, algorithm development, and RAG.",
      sectionsAvailable: ["Video Demonstration", "Video Presentation", "IEEE Report (PDF)", "Springer Report"],
    },
    {
      indexNumber: 5,
      id: "2221506",
      name: "Fahim Awal Faisal",
      role: "Hardware Implementation & Documentation",
      program: "B.Sc. CSE",
      image: fahimPic,
      slug: "fahim-awal-faisal",
      badgeText: "Member 05",
      summary: "Hardware implementation, technical documentation, locomotion chassis, and video demo/presentation.",
      sectionsAvailable: ["Video Demonstration", "Video Presentation", "IEEE Report (PDF)", "Springer Report"],
    },
    {
      indexNumber: 6,
      id: "2231368",
      name: "Elora Sharmin Khan",
      role: "Hardware Architecture & Web Analysis",
      program: "B.Sc. CSE",
      image: eloraPic,
      slug: "elora-sharmin-khan",
      badgeText: "Member 06",
      summary: "Hardware implementation, hardware architecture design, and web architecture analysis.",
      sectionsAvailable: ["Video Demonstration", "Video Presentation", "IEEE Report (PDF)", "Springer Report"],
    },
  ];

  return (
    <div className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black text-white font-mono">
      {/* Background Cyber Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-[800px] rounded-full bg-green-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 -z-10 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-sm border border-green-500/30 bg-green-950/20 px-3 py-1 text-xs text-green-400 mb-4 shadow-[0_0_12px_rgba(34,197,94,0.15)]">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span>XYBEROX // EXPERIMENTAL EVALUATION & RESULTS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-wider text-white uppercase">
            PROJECT <span className="text-green-400">RESULTS</span> & SUBMISSIONS
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Exploratory testing data, hardware benchmarks, and individual researcher submission packages. Select any member below to access their full 4-part portfolio (1. Video Demonstration, 2. Video Presentation, 3. IEEE Report PDF View, and 4. Springer Report).
          </p>
        </div>

        {/* Global Key Results Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="rounded-sm border border-green-500/20 bg-black/60 p-4 shadow-lg backdrop-blur-md hover:border-green-500/40 transition-colors">
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Navigation Accuracy</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-green-400 mt-1">98.4%</div>
            <div className="text-[10px] text-zinc-400 mt-1">SLAM trajectory variance &lt; 2cm</div>
          </div>
          <div className="rounded-sm border border-green-500/20 bg-black/60 p-4 shadow-lg backdrop-blur-md hover:border-green-500/40 transition-colors">
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Edge AI Latency</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1">24.5 ms</div>
            <div className="text-[10px] text-zinc-400 mt-1">Inference speed on Pi Zero 2W</div>
          </div>
          <div className="rounded-sm border border-green-500/20 bg-black/60 p-4 shadow-lg backdrop-blur-md hover:border-green-500/40 transition-colors">
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Obstacle Avoidance</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-green-400 mt-1">100%</div>
            <div className="text-[10px] text-zinc-400 mt-1">50/50 test matrix passes</div>
          </div>
          <div className="rounded-sm border border-green-500/20 bg-black/60 p-4 shadow-lg backdrop-blur-md hover:border-green-500/40 transition-colors">
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Academic Reports</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-green-400 mt-1">IEEE & Springer</div>
            <div className="text-[10px] text-zinc-400 mt-1">Peer-reviewed publications</div>
          </div>
        </div>

        {/* Section Header for Members */}
        <div className="border-b border-green-500/20 pb-4 mb-8">
          <h2 className="text-xl font-bold tracking-wider text-white uppercase flex items-center gap-2">
            <span className="text-green-400 font-extrabold">//</span> TEAM MEMBERS & RESEARCH SUBMISSIONS
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            Select any member card to view their complete video demonstrations, slides, IEEE PDF report, and Springer report.
          </p>
        </div>

        {/* Members Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <Link
              key={member.slug}
              href={`/project/results/${member.slug}`}
              className="group relative flex flex-col rounded-sm border transition-all duration-300 overflow-hidden bg-black/80 backdrop-blur-md border-green-500/20 hover:border-green-500/60 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]"
            >
              {/* Header terminal strip */}
              <div className="flex items-center justify-between px-4 py-2 border-b text-[10px] bg-green-950/20 border-green-500/10 text-zinc-400">
                <span className="flex items-center gap-1.5 font-bold text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  {member.badgeText}
                </span>
                <span>ID: {member.id}</span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                {/* Photo & Member Info */}
                <div className="flex gap-4 items-center">
                  <div className="relative h-20 w-20 shrink-0 rounded-sm overflow-hidden border border-green-500/30 bg-black">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="80px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[11px] text-green-500/80 font-semibold">{member.role}</p>
                    <p className="text-[10px] text-zinc-500 mt-0.5">{member.program}</p>
                  </div>
                </div>

                <p className="mt-4 text-xs text-zinc-400 leading-normal flex-1">
                  {member.summary}
                </p>

                {/* Available Submission Sections */}
                <div className="mt-4 pt-3 border-t border-green-500/10">
                  <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">
                    4 SUBMISSION SECTIONS
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {member.sectionsAvailable.map((sec, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 text-[10px] text-zinc-300 bg-green-950/15 border border-green-500/10 rounded-xs px-2 py-1 group-hover:border-green-500/30"
                      >
                        <span className="text-green-400 font-bold">›</span>
                        <span className="truncate">{sec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA Button */}
                <div className="mt-5">
                  <div className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-sm font-bold text-xs uppercase tracking-wider transition-all bg-green-500/10 text-green-400 border border-green-500/30 group-hover:bg-green-500 group-hover:text-black">
                    <span>OPEN SUBMISSIONS PORTFOLIO</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l7.5-7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
