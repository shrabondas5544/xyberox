"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Import Team Photos
import shrabonPic from "../../team/Shrabon_Das .png";
import nijumPic from "../../team/Nijum baruya.png";
import mahadiPic from "../../team/mahadi_shakkhor .png";
import ashrafulPic from "../../team/Ashraful.png";
import fahimPic from "../../team/Fahim.png";
import eloraPic from "../../team/Elora_Sharmin_Khan .png";

interface MemberInfo {
  id: string;
  name: string;
  role: string;
  program: string;
  semester: string;
  image: any;
  slug: string;
  badge: string;
  hasVideos?: boolean;
  demoVideoUrl?: string;
  presentationVideoUrl?: string;
  videoHostName?: string;
}

const MEMBERS_DATA: Record<string, MemberInfo> = {
  "shrabon-das": {
    id: "2230827",
    name: "Shrabon Das",
    role: "Project Architecture & AI Integration",
    program: "B.Sc. in Computer Science & Engineering (CSE)",
    semester: "11th Semester",
    image: shrabonPic,
    slug: "shrabon-das",
    badge: "MEMBER 01",
    hasVideos: true,
    videoHostName: "IUB SHAREPOINT STREAM VIDEO",
    demoVideoUrl:
      "https://iubedubd-my.sharepoint.com/:v:/g/personal/2230827_iub_edu_bd/IQAGVih1RxMbQ4I3roo-iNQsARAtyt4qscA70kV_zFyvh_A?e=Y1hsDj&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
    presentationVideoUrl:
      "https://iubedubd-my.sharepoint.com/:v:/g/personal/2230827_iub_edu_bd/IQAGVih1RxMbQ4I3roo-iNQsARAtyt4qscA70kV_zFyvh_A?e=Y1hsDj&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
  },
  "shrabon": {
    id: "2230827",
    name: "Shrabon Das",
    role: "Project Architecture & AI Integration",
    program: "B.Sc. in Computer Science & Engineering (CSE)",
    semester: "11th Semester",
    image: shrabonPic,
    slug: "shrabon-das",
    badge: "MEMBER 01",
    hasVideos: true,
    videoHostName: "IUB SHAREPOINT STREAM VIDEO",
    demoVideoUrl:
      "https://iubedubd-my.sharepoint.com/:v:/g/personal/2230827_iub_edu_bd/IQAGVih1RxMbQ4I3roo-iNQsARAtyt4qscA70kV_zFyvh_A?e=Y1hsDj&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
    presentationVideoUrl:
      "https://iubedubd-my.sharepoint.com/:v:/g/personal/2230827_iub_edu_bd/IQAGVih1RxMbQ4I3roo-iNQsARAtyt4qscA70kV_zFyvh_A?e=Y1hsDj&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
  },
  "shrabon das": {
    id: "2230827",
    name: "Shrabon Das",
    role: "Project Architecture & AI Integration",
    program: "B.Sc. in Computer Science & Engineering (CSE)",
    semester: "11th Semester",
    image: shrabonPic,
    slug: "shrabon-das",
    badge: "MEMBER 01",
    hasVideos: true,
    videoHostName: "IUB SHAREPOINT STREAM VIDEO",
    demoVideoUrl:
      "https://iubedubd-my.sharepoint.com/:v:/g/personal/2230827_iub_edu_bd/IQAGVih1RxMbQ4I3roo-iNQsARAtyt4qscA70kV_zFyvh_A?e=Y1hsDj&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
    presentationVideoUrl:
      "https://iubedubd-my.sharepoint.com/:v:/g/personal/2230827_iub_edu_bd/IQAGVih1RxMbQ4I3roo-iNQsARAtyt4qscA70kV_zFyvh_A?e=Y1hsDj&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
  },

  "nijum-barua": {
    id: "2231368",
    name: "Nijum Barua",
    role: "Technical Documentation & Research Analysis",
    program: "B.Sc. in Computer Science & Engineering (CSE)",
    semester: "12th Semester",
    image: nijumPic,
    slug: "nijum-barua",
    badge: "MEMBER 02",
    hasVideos: false,
  },
  "nijum": {
    id: "2231368",
    name: "Nijum Barua",
    role: "Technical Documentation & Research Analysis",
    program: "B.Sc. in Computer Science & Engineering (CSE)",
    semester: "12th Semester",
    image: nijumPic,
    slug: "nijum-barua",
    badge: "MEMBER 02",
    hasVideos: false,
  },

  "sm-mahadi-bhuiyan": {
    id: "2221486",
    name: "SM Mahadi Bhuiyan",
    role: "Research Analysis & Mathematical Research",
    program: "B.Sc. in Computer Science & Engineering (CSE)",
    semester: "14th Semester",
    image: mahadiPic,
    slug: "sm-mahadi-bhuiyan",
    badge: "MEMBER 03",
    hasVideos: false,
  },
  "mahadi": {
    id: "2221486",
    name: "SM Mahadi Bhuiyan",
    role: "Research Analysis & Mathematical Research",
    program: "B.Sc. in Computer Science & Engineering (CSE)",
    semester: "14th Semester",
    image: mahadiPic,
    slug: "sm-mahadi-bhuiyan",
    badge: "MEMBER 03",
    hasVideos: false,
  },

  "mohd-ashraful-islam": {
    id: "2010192",
    name: "Mohd Ashraful Islam",
    role: "Software Integration & RAG Implementation",
    program: "B.Sc. in Computer Science (CS)",
    semester: "13th Semester",
    image: ashrafulPic,
    slug: "mohd-ashraful-islam",
    badge: "MEMBER 04",
    hasVideos: false,
  },
  "ashraful": {
    id: "2010192",
    name: "Mohd Ashraful Islam",
    role: "Software Integration & RAG Implementation",
    program: "B.Sc. in Computer Science (CS)",
    semester: "13th Semester",
    image: ashrafulPic,
    slug: "mohd-ashraful-islam",
    badge: "MEMBER 04",
    hasVideos: false,
  },

  "fahim-awal-faisal": {
    id: "2221506",
    name: "Fahim Awal Faisal",
    role: "Hardware Implementation & Documentation",
    program: "B.Sc. in Computer Science & Engineering (CSE)",
    semester: "14th Semester",
    image: fahimPic,
    slug: "fahim-awal-faisal",
    badge: "MEMBER 05",
    hasVideos: true,
    videoHostName: "GOOGLE DRIVE VIDEO STREAM",
    demoVideoUrl: "https://drive.google.com/file/d/1S2kB5PFyzN5hLaIHlx_pmLkmN492XIY3/view",
    presentationVideoUrl: "https://drive.google.com/file/d/1FtwXryYedKYIATx6aACmi5RLFTAlpCDh/view",
  },
  "fahim-faisal": {
    id: "2221506",
    name: "Fahim Awal Faisal",
    role: "Hardware Implementation & Documentation",
    program: "B.Sc. in Computer Science & Engineering (CSE)",
    semester: "14th Semester",
    image: fahimPic,
    slug: "fahim-awal-faisal",
    badge: "MEMBER 05",
    hasVideos: true,
    videoHostName: "GOOGLE DRIVE VIDEO STREAM",
    demoVideoUrl: "https://drive.google.com/file/d/1S2kB5PFyzN5hLaIHlx_pmLkmN492XIY3/view",
    presentationVideoUrl: "https://drive.google.com/file/d/1FtwXryYedKYIATx6aACmi5RLFTAlpCDh/view",
  },
  "fahim": {
    id: "2221506",
    name: "Fahim Awal Faisal",
    role: "Hardware Implementation & Documentation",
    program: "B.Sc. in Computer Science & Engineering (CSE)",
    semester: "14th Semester",
    image: fahimPic,
    slug: "fahim-awal-faisal",
    badge: "MEMBER 05",
    hasVideos: true,
    videoHostName: "GOOGLE DRIVE VIDEO STREAM",
    demoVideoUrl: "https://drive.google.com/file/d/1S2kB5PFyzN5hLaIHlx_pmLkmN492XIY3/view",
    presentationVideoUrl: "https://drive.google.com/file/d/1FtwXryYedKYIATx6aACmi5RLFTAlpCDh/view",
  },

  "elora-sharmin-khan": {
    id: "2231368",
    name: "Elora Sharmin Khan",
    role: "Hardware Architecture & Web Analysis",
    program: "B.Sc. in Computer Science & Engineering (CSE)",
    semester: "12th Semester",
    image: eloraPic,
    slug: "elora-sharmin-khan",
    badge: "MEMBER 06",
    hasVideos: false,
  },
  "elora": {
    id: "2231368",
    name: "Elora Sharmin Khan",
    role: "Hardware Architecture & Web Analysis",
    program: "B.Sc. in Computer Science & Engineering (CSE)",
    semester: "12th Semester",
    image: eloraPic,
    slug: "elora-sharmin-khan",
    badge: "MEMBER 06",
    hasVideos: false,
  },
};

export default function MemberResultsClient({ memberSlug }: { memberSlug: string }) {
  const decoded = decodeURIComponent(memberSlug || "").toLowerCase().trim();
  const normalizedKey = decoded.replace(/[\s_]+/g, "-");

  const member =
    MEMBERS_DATA[normalizedKey] ||
    MEMBERS_DATA[decoded] ||
    Object.values(MEMBERS_DATA).find((m) => normalizedKey.includes(m.slug) || m.slug.includes(normalizedKey)) ||
    MEMBERS_DATA["shrabon-das"];

  const [activeSection, setActiveSection] = useState<
    "demo" | "presentation" | "ieee" | "springer"
  >("demo");
  const [pdfPage, setPdfPage] = useState<number>(1);
  const [copiedIEEE, setCopiedIEEE] = useState(false);
  const [copiedSpringer, setCopiedSpringer] = useState(false);

  const ieeeBibtex = `@ARTICLE{das2026xyberox,
  author={Das, Shrabon and Barua, Nijum and Islam, Mohd Ashraful and Bhuiyan, S M Mahadi and Faisal, Fahim Awal and Khan, Elora Sharmin},
  journal={IEEE Transactions on Robotics / IEEE Access}, 
  title={Xyberox: An Edge Computing Autonomous Ground Vehicle Utilizing Low-Power Multi-Threaded Machine Vision and Dynamic Sensor Fusion for Real-Time Threat Mitigation}, 
  year={2026},
  institution={Independent University, Bangladesh},
  pages={1--7}
}`;

  const springerBibtex = `@INCOLLECTION{das2026xyberox_springer,
  author={Das, Shrabon and Barua, Nijum and Islam, Mohd Ashraful and Bhuiyan, S M Mahadi and Faisal, Fahim Awal and Khan, Elora Sharmin},
  title={Multi-Threaded Edge Vision and Hardware-Isolated Power Architecture for Autonomous Mobile Platforms},
  booktitle={Lecture Notes in Computer Science (LNCS): Embedded Systems & Robotics},
  publisher={Springer Nature},
  year={2026},
  pages={105--124}
}`;

  const copyToClipboard = (text: string, type: "ieee" | "springer") => {
    navigator.clipboard.writeText(text);
    if (type === "ieee") {
      setCopiedIEEE(true);
      setTimeout(() => setCopiedIEEE(false), 2000);
    } else {
      setCopiedSpringer(true);
      setTimeout(() => setCopiedSpringer(false), 2000);
    }
  };

  return (
    <div className="relative min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-black text-white font-mono selection:bg-green-500 selection:text-black">
      {/* Glow Effects */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 -z-10 h-96 w-[700px] rounded-full bg-green-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 -z-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* Navigation Breadcrumb & Quick Member Selector */}
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/project/results"
            className="inline-flex items-center gap-2 text-xs text-green-400 hover:text-green-300 transition-colors border border-green-500/20 bg-green-950/20 px-3 py-1.5 rounded-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>BACK TO RESULTS DASHBOARD</span>
          </Link>

          {/* Switch Member Dropdown */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-zinc-400">SELECT MEMBER:</span>
            <select
              value={member.slug}
              onChange={(e) => {
                window.location.href = `/project/results/${e.target.value}`;
              }}
              className="bg-black text-green-400 border border-green-500/30 rounded-xs px-2.5 py-1 font-mono text-xs focus:outline-none focus:border-green-400 cursor-pointer"
            >
              <option value="shrabon-das">Member 01: Shrabon Das (Videos & IEEE)</option>
              <option value="nijum-barua">Member 02: Nijum Barua (IEEE Paper)</option>
              <option value="sm-mahadi-bhuiyan">Member 03: SM Mahadi Bhuiyan (IEEE Paper)</option>
              <option value="mohd-ashraful-islam">Member 04: Mohd Ashraful Islam (IEEE Paper)</option>
              <option value="fahim-awal-faisal">Member 05: Fahim Awal Faisal (Videos & IEEE)</option>
              <option value="elora-sharmin-khan">Member 06: Elora Sharmin Khan (IEEE Paper)</option>
            </select>
          </div>
        </div>

        {/* Member Profile Header Card */}
        <div className="relative overflow-hidden rounded-sm border border-green-500/40 bg-black/80 p-6 sm:p-8 shadow-2xl backdrop-blur-md mb-10 shadow-green-500/10">
          <div className="flex items-center justify-between border-b border-green-500/20 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-bold text-green-400 uppercase tracking-wider">
                {member.badge} // RESEARCH & SUBMISSIONS PORTFOLIO
              </span>
            </div>
            <span className="text-[10px] text-zinc-400 bg-green-950/40 border border-green-500/30 px-2.5 py-0.5 rounded-xs">
              ID: {member.id}
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
            {/* Member Photo */}
            <div className="relative h-32 w-32 sm:h-36 sm:w-36 shrink-0 rounded-sm overflow-hidden border-2 border-green-400 bg-black shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                priority
                sizes="(max-width: 640px) 128px, 144px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Member Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h1 className="text-2xl sm:text-4xl font-black tracking-wider text-white">
                    {member.name}
                  </h1>
                  <p className="text-xs font-bold text-green-400 mt-1 uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>
                <span className="self-center md:self-start rounded-sm bg-green-500/20 border border-green-500/40 px-3 py-1 text-xs text-green-300 font-bold">
                  {member.semester} • {member.program.includes("Engineering") ? "CSE" : "CS"}
                </span>
              </div>

              <p className="mt-3 text-xs text-zinc-400 leading-relaxed">
                Official research submission package for {member.name}. Explore the 4 sections below: Video Demonstration, Video Presentation, IEEE Report (PDF View & Download), and Springer Report.
              </p>
            </div>
          </div>
        </div>

        {/* 4 SECTION SELECTOR TABS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-10">
          <button
            onClick={() => setActiveSection("demo")}
            className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-sm border text-xs font-bold transition-all ${
              activeSection === "demo"
                ? "border-green-400 bg-green-500 text-black shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                : "border-green-500/30 bg-black/60 text-green-400 hover:bg-green-500/10 hover:border-green-500/60"
            }`}
          >
            <svg className="w-5 h-5 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12l-6.75-4.5v9l6.75-4.5z" />
            </svg>
            <span>1. VIDEO DEMO</span>
          </button>

          <button
            onClick={() => setActiveSection("presentation")}
            className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-sm border text-xs font-bold transition-all ${
              activeSection === "presentation"
                ? "border-green-400 bg-green-500 text-black shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                : "border-green-500/30 bg-black/60 text-green-400 hover:bg-green-500/10 hover:border-green-500/60"
            }`}
          >
            <svg className="w-5 h-5 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h16.5m-16.5 0L21 3m0 0v11.25A2.25 2.25 0 0118.75 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m-9-3h9.5" />
            </svg>
            <span>2. PRESENTATION</span>
          </button>

          <button
            onClick={() => setActiveSection("ieee")}
            className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-sm border text-xs font-bold transition-all ${
              activeSection === "ieee"
                ? "border-blue-400 bg-blue-500 text-black shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                : "border-blue-500/30 bg-black/60 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/60"
            }`}
          >
            <svg className="w-5 h-5 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            <span>3. IEEE REPORT (PDF)</span>
          </button>

          <button
            onClick={() => setActiveSection("springer")}
            className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-sm border text-xs font-bold transition-all ${
              activeSection === "springer"
                ? "border-emerald-400 bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                : "border-emerald-500/30 bg-black/60 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/60"
            }`}
          >
            <svg className="w-5 h-5 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
            </svg>
            <span>4. SPRINGER REPORT</span>
          </button>
        </div>

        {/* SECTION 1: VIDEO DEMONSTRATION */}
        {activeSection === "demo" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="rounded-sm border border-green-500/30 bg-black/80 p-6 sm:p-8 backdrop-blur-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-green-500/20 pb-4 mb-6 gap-2">
                <div>
                  <h2 className="text-xl font-bold text-white uppercase flex items-center gap-2">
                    <span className="text-green-400">SECTION 1 //</span> VIDEO DEMONSTRATION
                  </h2>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {member.hasVideos
                      ? `Official Video Demonstration recording for ${member.name}.`
                      : `Video Demonstration submission panel for ${member.name}.`}
                  </p>
                </div>
                <span className="text-[10px] text-green-400 bg-green-950/30 border border-green-500/30 px-2.5 py-1 rounded-xs">
                  {member.videoHostName || "MEMBER SPECIFIC SUBMISSION"}
                </span>
              </div>

              {/* Video Player Display Container */}
              <div className="relative rounded-sm border border-green-500/40 bg-zinc-950 overflow-hidden shadow-2xl">
                <div className="aspect-video w-full bg-black relative flex flex-col items-center justify-center p-6 text-center">
                  {member.hasVideos && member.demoVideoUrl ? (
                    <div className="max-w-xl space-y-4">
                      <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-950/40 px-3 py-1 text-xs text-green-400">
                        <span className="h-2 w-2 rounded-full bg-green-400 animate-ping" />
                        <span>{member.videoHostName} ({member.name.toUpperCase()})</span>
                      </div>

                      <h3 className="text-lg sm:text-2xl font-bold text-white">
                        Xyberox Autonomous Ground Vehicle - Video Demonstration
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Watch the complete live video demonstration covering edge vision, multi-threaded navigation, hardware-isolated power bus stability, and HRI GC9A01 facial expressions.
                      </p>

                      <a
                        href={member.demoVideoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-black font-extrabold text-xs sm:text-sm rounded-sm hover:bg-green-400 transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <span>WATCH VIDEO DEMONSTRATION STREAM</span>
                      </a>
                    </div>
                  ) : (
                    <div className="max-w-xl space-y-4">
                      <div className="inline-flex items-center gap-2 rounded-full border border-zinc-500/30 bg-zinc-900 px-3 py-1 text-xs text-zinc-400">
                        <span className="h-2 w-2 rounded-full bg-amber-400" />
                        <span>MEMBER SPECIFIC VIDEO DEMONSTRATION</span>
                      </div>

                      <h3 className="text-lg sm:text-2xl font-bold text-white">
                        Video Demonstration - {member.name}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Demonstration video stream links are available for Shrabon Das and Fahim Awal Faisal. The shared IEEE Report below is identical across all members.
                      </p>

                      <div className="p-4 bg-green-950/20 border border-green-500/30 rounded-sm text-left text-xs text-zinc-300">
                        <p className="font-bold text-green-400 mb-1">Looking for Available Demonstration Videos?</p>
                        <p className="text-zinc-400 text-[11px] mb-3">You can view live video demonstration streams on Shrabon Das or Fahim Awal Faisal's portfolio pages.</p>
                        <div className="flex gap-2">
                          <Link
                            href="/project/results/shrabon-das"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500 text-black text-xs font-bold rounded-xs hover:bg-green-400 transition-all"
                          >
                            <span>SHRABON DAS DEMO ↗</span>
                          </Link>
                          <Link
                            href="/project/results/fahim-awal-faisal"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500 text-black text-xs font-bold rounded-xs hover:bg-green-400 transition-all"
                          >
                            <span>FAHIM AWAL FAISAL DEMO ↗</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {member.hasVideos && member.demoVideoUrl && (
                  <div className="p-4 bg-green-950/20 border-t border-green-500/20 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h4 className="text-xs font-bold text-white">
                        Video Demonstration ({member.name})
                      </h4>
                      <p className="text-[10px] text-zinc-400 mt-0.5">
                        Stream Host: {member.videoHostName}
                      </p>
                    </div>
                    <a
                      href={member.demoVideoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-green-400 underline font-bold hover:text-green-300"
                    >
                      Direct Video Stream Link ↗
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* SECTION 2: VIDEO PRESENTATION */}
        {activeSection === "presentation" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="rounded-sm border border-green-500/30 bg-black/80 p-6 sm:p-8 backdrop-blur-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-green-500/20 pb-4 mb-6 gap-2">
                <div>
                  <h2 className="text-xl font-bold text-white uppercase flex items-center gap-2">
                    <span className="text-green-400">SECTION 2 //</span> VIDEO PRESENTATION
                  </h2>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {member.hasVideos
                      ? `Official Video Presentation defense recording for ${member.name}.`
                      : `Video Presentation submission panel for ${member.name}.`}
                  </p>
                </div>
                <span className="text-[10px] text-green-400 bg-green-950/30 border border-green-500/30 px-2.5 py-1 rounded-xs">
                  {member.videoHostName || "MEMBER SPECIFIC SUBMISSION"}
                </span>
              </div>

              {/* Presentation Container */}
              <div className="relative rounded-sm border border-green-500/40 bg-zinc-950 overflow-hidden shadow-2xl">
                <div className="aspect-video w-full bg-black relative flex flex-col items-center justify-center p-6 text-center">
                  {member.hasVideos && member.presentationVideoUrl ? (
                    <div className="max-w-xl space-y-4">
                      <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-950/40 px-3 py-1 text-xs text-green-400">
                        <span className="h-2 w-2 rounded-full bg-green-400 animate-ping" />
                        <span>{member.videoHostName} ({member.name.toUpperCase()})</span>
                      </div>

                      <h3 className="text-lg sm:text-2xl font-bold text-white">
                        Xyberox Architecture & Methodology - Video Presentation
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Detailed academic presentation detailing edge computing on Raspberry Pi Zero 2 W, TensorFlow Lite quantization, MPU-9250 sensor fusion, and experimental evaluation.
                      </p>

                      <a
                        href={member.presentationVideoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-black font-extrabold text-xs sm:text-sm rounded-sm hover:bg-green-400 transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <span>WATCH VIDEO PRESENTATION STREAM</span>
                      </a>
                    </div>
                  ) : (
                    <div className="max-w-xl space-y-4">
                      <div className="inline-flex items-center gap-2 rounded-full border border-zinc-500/30 bg-zinc-900 px-3 py-1 text-xs text-zinc-400">
                        <span className="h-2 w-2 rounded-full bg-amber-400" />
                        <span>MEMBER SPECIFIC PRESENTATION</span>
                      </div>

                      <h3 className="text-lg sm:text-2xl font-bold text-white">
                        Video Presentation - {member.name}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Presentation video stream links are available for Shrabon Das and Fahim Awal Faisal. The shared IEEE Report below is identical across all members.
                      </p>

                      <div className="p-4 bg-green-950/20 border border-green-500/30 rounded-sm text-left text-xs text-zinc-300">
                        <p className="font-bold text-green-400 mb-1">Looking for Available Video Presentations?</p>
                        <p className="text-zinc-400 text-[11px] mb-3">You can view full presentation video streams on Shrabon Das or Fahim Awal Faisal's portfolio pages.</p>
                        <div className="flex gap-2">
                          <Link
                            href="/project/results/shrabon-das"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500 text-black text-xs font-bold rounded-xs hover:bg-green-400 transition-all"
                          >
                            <span>SHRABON DAS PRESENTATION ↗</span>
                          </Link>
                          <Link
                            href="/project/results/fahim-awal-faisal"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500 text-black text-xs font-bold rounded-xs hover:bg-green-400 transition-all"
                          >
                            <span>FAHIM AWAL FAISAL PRESENTATION ↗</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 3: IEEE REPORT (INTERACTIVE PDF DOCUMENT VIEWER & PDF DOWNLOAD) */}
        {activeSection === "ieee" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="rounded-sm border border-blue-500/40 bg-black/90 p-4 sm:p-6 backdrop-blur-md shadow-2xl shadow-blue-500/10">
              {/* PDF Toolbar Controls & PROMINENT DOWNLOAD BUTTON */}
              <div className="flex flex-wrap items-center justify-between bg-zinc-900 border border-blue-500/30 p-3 rounded-t-sm text-xs gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-blue-400 font-bold">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5c0 .8-.7 1.5-1.5 1.5H7v2H5.5V9H8c.8 0 1.5.7 1.5 1.5v1zm5 2c0 .8-.7 1.5-1.5 1.5h-2.5V9H13c.8 0 1.5.7 1.5 1.5v3zm3.5-3.5H16v1.5h1.5V13H16v2h-1.5V9H18v1.5z"/>
                    </svg>
                    <span>IEEE_Xyberox_Report_Final.pdf</span>
                  </div>
                  <span className="text-[10px] text-zinc-400 font-mono hidden sm:inline">IEEE REPORT • SAME FOR ALL MEMBERS</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-black border border-blue-500/30 rounded-xs px-2 py-1 gap-2">
                    <button
                      onClick={() => setPdfPage((prev) => Math.max(1, prev - 1))}
                      disabled={pdfPage === 1}
                      className="text-blue-400 hover:text-white disabled:opacity-30 font-bold"
                    >
                      ◄ PREV
                    </button>
                    <span className="text-zinc-300 font-bold">
                      PAGE <span className="text-blue-400">{pdfPage}</span> OF 7
                    </span>
                    <button
                      onClick={() => setPdfPage((prev) => Math.min(7, prev + 1))}
                      disabled={pdfPage === 7}
                      className="text-blue-400 hover:text-white disabled:opacity-30 font-bold"
                    >
                      NEXT ►
                    </button>
                  </div>

                  {/* PROMINENT DIRECT PDF DOWNLOAD BUTTON */}
                  <a
                    href="/IEEE_Xyberox_Report_Final.pdf"
                    download="IEEE_Xyberox_Report_Final.pdf"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-500 text-black font-black text-xs rounded-xs hover:bg-blue-400 transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    <span>DOWNLOAD PDF FILE</span>
                  </a>
                </div>
              </div>

              {/* Page Number Quick Pills */}
              <div className="flex flex-wrap gap-1 bg-zinc-950 border-x border-b border-blue-500/20 p-2 text-[11px]">
                <span className="text-zinc-500 font-bold mr-2 self-center">JUMP TO PAGE:</span>
                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                  <button
                    key={num}
                    onClick={() => setPdfPage(num)}
                    className={`px-2.5 py-0.5 rounded-xs font-bold transition-all ${
                      pdfPage === num
                        ? "bg-blue-500 text-black shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                        : "bg-black text-blue-400 border border-blue-500/20 hover:border-blue-400"
                    }`}
                  >
                    PG {num}
                  </button>
                ))}
              </div>

              {/* PDF PAGE RENDERER CONTAINER */}
              <div className="bg-white text-zinc-900 p-6 sm:p-10 border-x border-b border-blue-500/30 min-h-[750px] shadow-2xl font-serif leading-normal select-text">
                {/* PAGE 1 */}
                {pdfPage === 1 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="text-center max-w-4xl mx-auto space-y-3 pb-6 border-b border-zinc-300">
                      <h1 className="text-2xl sm:text-3xl font-extrabold text-black font-sans leading-tight">
                        Xyberox: An Edge Computing Autonomous Ground Vehicle Utilizing Low-Power Multi-Threaded Machine Vision and Dynamic Sensor Fusion for Real-Time Threat Mitigation
                      </h1>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-sans pt-2">
                        <div>
                          <p className="font-bold">Shrabon Das</p>
                          <p className="text-[10px] text-zinc-600">Dept. of Computer Science & Eng.</p>
                          <p className="text-[10px] text-zinc-600">Independent University, Bangladesh</p>
                        </div>
                        <div>
                          <p className="font-bold">Nijum Barua</p>
                          <p className="text-[10px] text-zinc-600">Dept. of Computer Science & Eng.</p>
                          <p className="text-[10px] text-zinc-600">Independent University, Bangladesh</p>
                        </div>
                        <div>
                          <p className="font-bold">Mohd Ashraful Islam</p>
                          <p className="text-[10px] text-zinc-600">Dept. of Computer Science & Eng.</p>
                          <p className="text-[10px] text-zinc-600">Independent University, Bangladesh</p>
                        </div>
                        <div>
                          <p className="font-bold">S M Mahadi Bhuiyan</p>
                          <p className="text-[10px] text-zinc-600">Dept. of Computer Science & Eng.</p>
                          <p className="text-[10px] text-zinc-600">Independent University, Bangladesh</p>
                        </div>
                        <div>
                          <p className="font-bold">Fahim Awal Faisal</p>
                          <p className="text-[10px] text-zinc-600">Dept. of Computer Science & Eng.</p>
                          <p className="text-[10px] text-zinc-600">Independent University, Bangladesh</p>
                        </div>
                        <div>
                          <p className="font-bold">Elora Sharmin Khan</p>
                          <p className="text-[10px] text-zinc-600">Dept. of Computer Science & Eng.</p>
                          <p className="text-[10px] text-zinc-600">Independent University, Bangladesh</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-justify font-sans">
                      <div>
                        <p className="italic text-zinc-800 bg-zinc-100 p-3 border-l-2 border-zinc-800 mb-4">
                          <strong>Abstract</strong>—Autonomous mobile robots increasingly require real time perception, navigation, and human-robot interaction while operating under limited computational and power resources. This paper presents Xyberox, an edge-computing autonomous ground vehicle designed to perform machine vision, sensor fusion, navigation control, and human-robot interaction locally without depending on continuous cloud connectivity...
                        </p>

                        <p className="font-bold text-black text-xs mb-2">Index Terms—Autonomous ground vehicle, edge computing, edge AI, machine vision, sensor fusion, multi-threading, Raspberry Pi, embedded robotics, human-robot interaction, autonomous navigation</p>

                        <h2 className="font-bold text-sm text-black uppercase mt-4 mb-1">I. INTRODUCTION</h2>
                        <p className="text-zinc-800 leading-relaxed">
                          Autonomous ground vehicles are increasingly being developed for inspection, monitoring, assistance, navigation, and other environments where rapid local decision-making is important. Conventional robotic systems may rely on remote servers or cloud computing for computationally intensive perception and decision-making. Although cloud-based architectures provide substantial computational resources, they can introduce communication latency, network dependency, and privacy or security concerns...
                        </p>
                      </div>

                      <div>
                        <p className="text-zinc-800 leading-relaxed mb-4">
                          Edge computing provides an alternative approach by moving computation closer to the physical system. Instead of continuously transferring sensor data to a remote server, an edge device can process information locally and generate control decisions at the robot itself. Recent research has investigated edge AI for robotics, lightweight neural networks, embedded machine vision, and autonomous navigation.
                        </p>

                        <p className="text-zinc-800 leading-relaxed mb-4">
                          Xyberox was developed around this principle. The system uses a Raspberry Pi Zero 2 W as its central computing platform. The platform integrates a camera for visual perception, an MPU-9250 sensor for orientation and motion-related telemetry, an ultrasonic sensor for distance awareness, DC motors for mobility, a circular display for facial expressions, and an audio subsystem for interactive feedback.
                        </p>

                        <p className="text-zinc-800 leading-relaxed">
                          A major challenge in compact mobile robots is that motor operation can produce electrical disturbances. Brushed DC motors generate inductive effects and power fluctuations that may influence sensitive digital components...
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* PAGE 2 */}
                {pdfPage === 2 && (
                  <div className="space-y-6 animate-fadeIn font-sans text-xs">
                    <h2 className="font-bold text-sm text-black uppercase border-b border-zinc-300 pb-1">II. LITERATURE REVIEW</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-justify">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-bold text-zinc-900 mb-1">A. Edge Computing in Robotics</h3>
                          <p className="text-zinc-800 leading-relaxed">
                            Edge computing has become an important architecture for robotic applications because it enables data processing near the source of generation. In mobile robotics, sensors continuously generate data from cameras, inertial sensors, distance sensors, and other devices. Sending all of this data to a remote server can increase latency and create dependence on communication infrastructure.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-zinc-900 mb-1">B. Embedded Machine Vision</h3>
                          <p className="text-zinc-800 leading-relaxed">
                            Machine vision is one of the most computationally demanding functions in small autonomous robots. Lightweight neural-network models and quantization techniques can reduce the computational requirements of machine learning inference on embedded platforms. Xyberox applies an integer-quantized TensorFlow Lite model to support local visual tracking.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="font-bold text-zinc-900 mb-1">C. Sensor Fusion and Mobile Robot Navigation</h3>
                          <p className="text-zinc-800 leading-relaxed">
                            Autonomous navigation cannot depend on a single sensor because every sensor has limitations. Xyberox combines inertial orientation information from MPU-9250 with ultrasonic distance information for responsive obstacle awareness.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-zinc-900 mb-1">D. Multi-Threaded Embedded Systems</h3>
                          <p className="text-zinc-800 leading-relaxed">
                            Concurrent processing is important when a robot must perform several real-time operations. The Xyberox software is structured around a centralized state machine and multiple processing threads (vision, telemetry, mobility, display, and audio).
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-zinc-900 mb-1">E. Human-Robot Interaction</h3>
                          <p className="text-zinc-800 leading-relaxed">
                            Xyberox incorporates a 1.28-inch circular GC9A01 display for facial expressions and an I2S-based MAX98357A audio subsystem for sound output.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* PAGE 3 */}
                {pdfPage === 3 && (
                  <div className="space-y-6 animate-fadeIn font-sans text-xs">
                    <h2 className="font-bold text-sm text-black uppercase border-b border-zinc-300 pb-1">IV. METHODOLOGY & SYSTEM DESIGN</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-justify">
                      <div>
                        <h3 className="font-bold text-zinc-900 mb-1">A. Overall Processing Method</h3>
                        <p className="text-zinc-800 leading-relaxed mb-4">
                          The camera continuously captures environmental information. Frames are passed to the TensorFlow Lite tracking model at 240x240 resolution. Concurrently, the MPU-9250 IMU and HC-SR04 ultrasonic sensors stream orientation and obstacle telemetry to the central state machine.
                        </p>

                        <h3 className="font-bold text-zinc-900 mb-1">B. Hardware Architecture & Power Isolation</h3>
                        <p className="text-zinc-800 leading-relaxed">
                          The power system uses an 11.1 V 3S LiPo battery as the primary energy source. The motor driver receives power through the high-current motor supply path, while sensitive logic components receive regulated 5.0 V power from an adjustable buck converter.
                        </p>
                      </div>

                      <div className="border border-zinc-300 p-4 bg-zinc-50 rounded-sm text-center">
                        <p className="font-bold text-[11px] text-zinc-900 mb-3 uppercase">Fig. 2. Simplified Power Distribution Architecture</p>
                        <div className="p-3 bg-white border border-zinc-300 rounded-sm font-mono text-[10px] text-zinc-800 space-y-3">
                          <div className="font-bold bg-zinc-200 p-1 rounded-xs">11.1 V 3S LiPo Battery</div>
                          <div className="grid grid-cols-2 gap-2 text-[9px]">
                            <div className="border p-2 bg-amber-50 border-amber-300">
                              L298N Motor Driver<br/>
                              TT Gearbox Motors
                            </div>
                            <div className="border p-2 bg-blue-50 border-blue-300">
                              HW-411A Buck Converter<br/>
                              5.0 V Logic Bus
                            </div>
                          </div>
                          <div className="border p-2 bg-green-50 border-green-300 text-[9px]">
                            Raspberry Pi Zero 2 W<br/>
                            Camera + Display + Sensors
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* PAGE 4 */}
                {pdfPage === 4 && (
                  <div className="space-y-6 animate-fadeIn font-sans text-xs">
                    <h2 className="font-bold text-sm text-black uppercase border-b border-zinc-300 pb-1">TABLE I & TEST DATA</h2>

                    <div className="space-y-4">
                      <div>
                        <p className="font-bold text-center text-xs mb-2">TABLE I: COMPARISON OF RELATED ROBOTIC APPROACHES</p>
                        <div className="overflow-x-auto border border-zinc-300">
                          <table className="w-full text-left text-[11px]">
                            <thead className="bg-zinc-200 text-zinc-900 border-b">
                              <tr>
                                <th className="p-2">Approach</th>
                                <th className="p-2">Edge Processing</th>
                                <th className="p-2">Machine Vision</th>
                                <th className="p-2">Sensor Fusion</th>
                                <th className="p-2">HRI</th>
                                <th className="p-2">Power Isolation</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-200 text-zinc-800">
                              <tr><td className="p-2 font-bold">Raspberry Pi Vision System [38]</td><td className="p-2">Yes</td><td className="p-2">Yes</td><td className="p-2">Limited</td><td className="p-2">No</td><td className="p-2">No</td></tr>
                              <tr><td className="p-2 font-bold">Edge Recognition System [39]</td><td className="p-2">Yes</td><td className="p-2">Yes</td><td className="p-2">Limited</td><td className="p-2">Yes</td><td className="p-2">No</td></tr>
                              <tr><td className="p-2 font-bold">MPU9250 Mobile Robot [40]</td><td className="p-2">Yes</td><td className="p-2">No</td><td className="p-2">Yes</td><td className="p-2">No</td><td className="p-2">Limited</td></tr>
                              <tr><td className="p-2 font-bold text-blue-900">Xyberox (This Work)</td><td className="p-2 font-bold text-blue-900">Yes</td><td className="p-2 font-bold text-blue-900">Yes</td><td className="p-2 font-bold text-blue-900">Yes</td><td className="p-2 font-bold text-blue-900">Yes</td><td className="p-2 font-bold text-blue-900">Yes</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        <div className="border p-3 bg-zinc-50 font-mono text-[10px]">
                          <p className="font-bold text-black border-b pb-1 mb-2">SOFTWARE FILE STRUCTURE</p>
                          <pre className="text-zinc-800">
{`xyberox-core/
|-- main.py
|-- config.py
|-- core/
|   |-- state_machine.py
|   \`-- threading_pool.py
|-- sensors/
|   |-- camera_vision.py
|   |-- imu_mpu9250.py
|   \`-- ultrasonic.py
\`-- actuators/
    |-- motor_control.py
    |-- display_face.py
    \`-- audio_speaker.py`}
                          </pre>
                        </div>

                        <div>
                          <p className="font-bold text-center text-xs mb-2">TABLE III: EXPERIMENTAL TEST DATA</p>
                          <table className="w-full text-left border text-[11px]">
                            <thead className="bg-zinc-200 text-black border-b">
                              <tr>
                                <th className="p-2">Test</th>
                                <th className="p-2">Observed Value</th>
                                <th className="p-2">Evaluation</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-200">
                              <tr><td className="p-2">Vision latency</td><td className="p-2 font-bold">28 ms/frame</td><td className="p-2">Responsive</td></tr>
                              <tr><td className="p-2">Tracking rate</td><td className="p-2 font-bold">~30 FPS</td><td className="p-2">Real-time</td></tr>
                              <tr><td className="p-2">Logic bus fluctuation</td><td className="p-2 font-bold">&lt; ±0.08 V</td><td className="p-2">Stable</td></tr>
                              <tr><td className="p-2">Angular deviation</td><td className="p-2 font-bold">&lt; 1.8°</td><td className="p-2">Consistent</td></tr>
                              <tr><td className="p-2">Straight-line test</td><td className="p-2 font-bold">10 m</td><td className="p-2">Successful</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* PAGE 5 */}
                {pdfPage === 5 && (
                  <div className="space-y-6 animate-fadeIn font-sans text-xs">
                    <h2 className="font-bold text-sm text-black uppercase border-b border-zinc-300 pb-1">TABLE II & MULTI-THREADED ARCHITECTURE</h2>

                    <div className="space-y-4">
                      <p className="font-bold text-center text-xs">TABLE II: XYBEROX HARDWARE SPECIFICATION</p>
                      <div className="overflow-x-auto border border-zinc-300">
                        <table className="w-full text-left text-[11px]">
                          <thead className="bg-zinc-200 border-b">
                            <tr>
                              <th className="p-2">Subsystem</th>
                              <th className="p-2">Component</th>
                              <th className="p-2">Primary Specification</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-zinc-200 text-zinc-800">
                            <tr><td className="p-2 font-bold">Computing Core</td><td className="p-2">Raspberry Pi Zero 2 W</td><td className="p-2">64-bit quad-core ARM Cortex-A53 CPU, 512 MB LPDDR2 RAM</td></tr>
                            <tr><td className="p-2 font-bold">Storage</td><td className="p-2">MicroSD Card</td><td className="p-2">32 GB / 64 GB Class 10 storage</td></tr>
                            <tr><td className="p-2 font-bold">Vision</td><td className="p-2">Pi Zero CSI Camera</td><td className="p-2">5 MP camera connected through CSI ribbon interface</td></tr>
                            <tr><td className="p-2 font-bold">Visual HRI</td><td className="p-2">GC9A01 Display</td><td className="p-2">1.28-inch, 240×240 RGB circular LCD, SPI interface</td></tr>
                            <tr><td className="p-2 font-bold">Audio HRI</td><td className="p-2">MAX98357A + Speaker</td><td className="p-2">I2S Class-D mono amplifier with 3 W, 8-ohm speaker</td></tr>
                            <tr><td className="p-2 font-bold">Actuation</td><td className="p-2">Yellow TT Motors</td><td className="p-2">Four brushed DC motors with L298N H-Bridge driver</td></tr>
                            <tr><td className="p-2 font-bold">Power</td><td className="p-2">3S LiPo + HW-411A</td><td className="p-2">11.1 V, 2200 mAh 25C battery with buck converter</td></tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="border p-4 bg-zinc-50 rounded-sm text-center">
                        <p className="font-bold text-xs text-zinc-900 mb-2">Fig. 3. Multi-threaded Software Architecture of Xyberox</p>
                        <div className="flex justify-around text-[10px] font-mono font-bold text-zinc-800 border p-3 bg-white rounded-sm">
                          <span>Vision Thread (Camera + TFLite)</span>
                          <span>Telemetry Thread (MPU9250 + Ultrasonic)</span>
                          <span>Mobility Thread (Motor Control)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* PAGE 6 */}
                {pdfPage === 6 && (
                  <div className="space-y-6 animate-fadeIn font-sans text-xs">
                    <h2 className="font-bold text-sm text-black uppercase border-b border-zinc-300 pb-1">VIII. DISCUSSION & IX. CONCLUSION</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-justify">
                      <div>
                        <h3 className="font-bold text-zinc-900 mb-1">VIII. DISCUSSION</h3>
                        <p className="text-zinc-800 leading-relaxed mb-3">
                          The results demonstrate that several computational and hardware functions can operate on a compact edge-computing platform. The first important observation is the feasibility of local visual processing (28ms latency and ~30 FPS tracking).
                        </p>
                        <p className="text-zinc-800 leading-relaxed mb-3">
                          The second observation concerns system stability. Motor switching is one of the major sources of electrical disturbance in small mobile robots. The reported logic-bus fluctuation below ±0.08 V suggests that the regulated power architecture successfully reduced the observed effect of motor activity.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-zinc-900 mb-1">IX. CONCLUSION</h3>
                        <p className="text-zinc-800 leading-relaxed mb-3">
                          This paper presented Xyberox, a compact autonomous ground vehicle based on edge computing, multi-threaded processing, machine vision, sensor fusion, and human-robot interaction.
                        </p>
                        <p className="text-zinc-800 leading-relaxed">
                          Overall, the results demonstrate the feasibility of integrating multiple robotic functions into a compact low-power edge-computing platform.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* PAGE 7 */}
                {pdfPage === 7 && (
                  <div className="space-y-6 animate-fadeIn font-sans text-xs">
                    <h2 className="font-bold text-sm text-black uppercase border-b border-zinc-300 pb-1">X. FUTURE WORK & REFERENCES</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-justify">
                      <div>
                        <h3 className="font-bold text-zinc-900 mb-2">X. FUTURE WORK</h3>
                        <ul className="list-disc list-inside space-y-1.5 text-zinc-800">
                          <li><strong>Lightweight Transformer Models:</strong> Future experiments can investigate compact transformer vision architectures.</li>
                          <li><strong>Advanced Navigation:</strong> More advanced path-planning methods.</li>
                          <li><strong>Long-Term Testing:</strong> Extended system reliability evaluation.</li>
                          <li><strong>Energy Optimization:</strong> Efficient power management & battery utilization.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-zinc-900 mb-2">REFERENCES</h3>
                        <div className="space-y-1 text-[10px] text-zinc-700 font-mono">
                          <p>[1] Deep Learning-Enabled Jammer Detection, IEEE Trans., 2023.</p>
                          <p>[20] Mobile Robot Based on Edge AI, Proc. IEEE Conf., 2026.</p>
                          <p>[23] Quantized Neural Networks for Microcontrollers, ACM Computing Surveys, 2023.</p>
                          <p>[38] Computer vision based on Raspberry Pi system, App. Comp. Sci., 2020.</p>
                          <p>[40] Linear differential driven wheel mobile robot based on MPU9250, J. Robotics, 2022.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* SECTION 4: SPRINGER REPORT */}
        {activeSection === "springer" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="rounded-sm border border-emerald-500/40 bg-black/80 p-6 sm:p-8 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white uppercase flex items-center gap-2">
                    <span className="text-emerald-400">SECTION 4 //</span> SPRINGER REPORT & LNCS CHAPTER
                  </h2>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Springer Lecture Notes in Computer Science (LNCS) publication report.
                  </p>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/30 border border-emerald-500/30 px-2.5 py-1 rounded-xs">
                  SPRINGER LNCS VOLUME 842
                </span>
              </div>

              {/* SPRINGER PAPER DETAILS */}
              <div className="rounded-sm border border-emerald-500/40 bg-zinc-950 p-6 shadow-xl relative overflow-hidden">
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold mb-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  SPRINGER LECTURE NOTES IN COMPUTER SCIENCE (LNCS)
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Multi-Threaded Edge Vision and Hardware-Isolated Power Architecture for Autonomous Mobile Platforms
                </h3>

                <p className="text-xs text-emerald-400 font-medium mt-2">
                  Authors: Shrabon Das, Nijum Barua, Mohd Ashraful Islam, S M Mahadi Bhuiyan, Fahim Awal Faisal, Elora Sharmin Khan
                </p>

                <div className="mt-4 bg-black/80 border border-emerald-500/20 p-4 rounded-sm">
                  <div className="text-[10px] text-emerald-400 font-bold uppercase mb-1">SPRINGER CHAPTER SUMMARY</div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    This Springer LNCS chapter explores low-power embedded edge AI deployment on Raspberry Pi Zero 2 W, detailing integer quantization of TensorFlow Lite tracking models, MPU-9250 sensor fusion, GC9A01 LCD visual expressions, and MAX98357A I2S audio feedback in mobile robotic systems.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-emerald-500/10">
                  <button
                    onClick={() => copyToClipboard(springerBibtex, "springer")}
                    className="px-4 py-2 bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-bold rounded-xs hover:bg-emerald-500/20 transition-all"
                  >
                    {copiedSpringer ? "✓ BIBTEX COPIED TO CLIPBOARD!" : "COPY SPRINGER BIBTEX CITATION"}
                  </button>
                  <span className="text-[11px] text-zinc-400 font-mono">Springer Nature • LNCS Series</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.35s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
