import Link from "next/link";
import TerminalConsole from "./components/TerminalConsole";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden py-16 sm:py-24">
      {/* Cyberpunk Neon Glow Accents */}
      <div className="absolute top-0 right-1/4 -z-10 h-[350px] w-[500px] rounded-full bg-green-500/5 blur-3xl" />
      <div className="absolute bottom-10 left-1/4 -z-10 h-[250px] w-[400px] rounded-full bg-emerald-500/5 blur-3xl" />

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Cyberpunk Status Badge */}
        <div className="inline-flex items-center gap-2 rounded-sm border border-green-500/30 bg-green-950/20 px-4 py-1.5 text-xs font-mono font-semibold tracking-wider text-green-400 backdrop-blur-md shadow-[0_0_10px_rgba(0,255,65,0.05)]">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#00ff41]" />
          SYS_STATUS: ACTIVE_DEVELOPMENT
        </div>

        {/* Hero Section */}
        <h1 className="mt-8 max-w-4xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-mono uppercase leading-[1.1]">
          An Edge-AI Terrestrial rover <br />
          <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,255,65,0.2)]">
            with autonomous offline state recovery
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base sm:text-lg font-mono text-zinc-400 leading-relaxed">
          // ACCESSING DATABASE...<br />
          Welcome to the official repository and documentation platform for Xyberox, our edge-computed autonomous robotic platform. Dive into its system architecture, analyze real-time operational telemetry, and inspect the decentralized deep learning methodologies driving its navigation.
        </p>

        {/* Interactive Terminal Console */}
        <div className="mt-8 w-full max-w-2xl">
          <TerminalConsole />
        </div>

        {/* CTA Buttons (Cyberpunk Style) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/prototype"
            className="flex h-12 items-center justify-center rounded-sm bg-green-500 px-8 font-mono text-xs font-bold tracking-widest text-black shadow-[0_0_15px_rgba(0,255,65,0.3)] transition-all duration-300 hover:bg-green-400 hover:shadow-[0_0_25px_rgba(0,255,65,0.6)]"
          >
            [EXPLORE_PROTOTYPE]
          </Link>
          <a
            href="/xyberox.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center gap-2 rounded-sm border border-emerald-400/60 bg-emerald-950/30 px-8 font-mono text-xs font-bold tracking-widest text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            [RESEARCH_PAPER_PDF]
          </a>
          <Link
            href="/project/methodology"
            className="flex h-12 items-center justify-center rounded-sm border border-green-500/40 bg-black/60 px-8 font-mono text-xs font-bold tracking-widest text-green-400 transition-all duration-300 hover:bg-green-500/10 hover:border-green-500 hover:shadow-[0_0_12px_rgba(0,255,65,0.15)]"
          >
            [METHODOLOGY]
          </Link>
        </div>

        {/* Research Paper Feature Banner */}
        <div className="mt-12 w-full max-w-4xl rounded-sm border border-emerald-500/30 bg-emerald-950/10 p-6 sm:p-8 backdrop-blur-md text-left relative overflow-hidden group shadow-[0_0_20px_rgba(16,185,129,0.08)]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-sm border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                DOCUMENTATION // RESEARCH_PAPER
              </div>
              <h3 className="text-xl font-mono font-bold uppercase text-white tracking-wide">
                Xyberox Autonomous Systems Research Paper
              </h3>
              <p className="font-mono text-xs text-zinc-400 max-w-xl leading-relaxed">
                Access the complete published research document (xyberox.pdf) detailing system architecture, dual-bus power grid isolation, edge-AI computer vision, and offline state recovery.
              </p>
            </div>
            <a
              href="/xyberox.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 h-11 items-center gap-2 rounded-sm bg-emerald-500 px-6 font-mono text-xs font-bold tracking-widest text-black shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.7)]"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              VIEW_PAPER [PDF]
            </a>
          </div>
        </div>

        {/* Cyberpunk Grid */}
        <div className="mx-auto mt-20 max-w-5xl sm:mt-24 lg:mt-32">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            
            {/* Card 1 */}
            <div className="group relative flex flex-col rounded-sm border border-green-500/20 bg-black/60 overflow-hidden text-left backdrop-blur-xs transition-all duration-300 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(0,255,65,0.1)] hover:-translate-y-1">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-green-500/10 px-4 py-2.5 bg-green-950/10">
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500/30 group-hover:bg-green-500/60 transition-colors"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500/30 group-hover:bg-green-500/60 transition-colors"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500/30 group-hover:bg-green-500/60 transition-colors"></span>
                </div>
                <span className="text-[9px] font-mono text-green-500/50 tracking-wider select-none">system_architecture.sh</span>
              </div>
              
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-green-950/40 border border-green-500/30 text-green-400 shadow-sm shadow-green-500/10 transition-transform group-hover:scale-105">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.982-11.795H14l1-6.109-8.982 11.795H9.813z" />
                    </svg>
                  </div>
                  <dt className="mt-4 font-mono font-bold tracking-wider uppercase text-green-400">01 / Methodology</dt>
                  <dd className="mt-2 font-mono text-xs leading-5 text-zinc-400">
                    Core architecture specifications and system schemas describing real-time sensor processing pipelines.
                  </dd>
                </div>
                <Link href="/project/methodology" className="mt-6 text-[10px] font-mono font-bold tracking-widest text-green-400 hover:text-green-300 flex items-center gap-1">
                  ACCESS_LINK <span>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative flex flex-col rounded-sm border border-green-500/20 bg-black/60 overflow-hidden text-left backdrop-blur-xs transition-all duration-300 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(0,255,65,0.1)] hover:-translate-y-1">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-green-500/10 px-4 py-2.5 bg-green-950/10">
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500/30 group-hover:bg-green-500/60 transition-colors"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500/30 group-hover:bg-green-500/60 transition-colors"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500/30 group-hover:bg-green-500/60 transition-colors"></span>
                </div>
                <span className="text-[9px] font-mono text-green-500/50 tracking-wider select-none">literature_review.log</span>
              </div>
              
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-green-950/40 border border-green-500/30 text-green-400 shadow-sm shadow-green-500/10 transition-transform group-hover:scale-105">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <dt className="mt-4 font-mono font-bold tracking-wider uppercase text-green-400">02 / Lit Review</dt>
                  <dd className="mt-2 font-mono text-xs leading-5 text-zinc-400">
                    Detailed literature survey exploring modern robotic platforms, kinematics, and HCI feedback loops.
                  </dd>
                </div>
                <Link href="/literature-review" className="mt-6 text-[10px] font-mono font-bold tracking-widest text-green-400 hover:text-green-300 flex items-center gap-1">
                  ACCESS_LINK <span>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative flex flex-col rounded-sm border border-green-500/20 bg-black/60 overflow-hidden text-left backdrop-blur-xs transition-all duration-300 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(0,255,65,0.1)] hover:-translate-y-1">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-green-500/10 px-4 py-2.5 bg-green-950/10">
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500/30 group-hover:bg-green-500/60 transition-colors"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500/30 group-hover:bg-green-500/60 transition-colors"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500/30 group-hover:bg-green-500/60 transition-colors"></span>
                </div>
                <span className="text-[9px] font-mono text-green-550 text-green-500/50 tracking-wider select-none">system_telemetry.io</span>
              </div>
              
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-green-950/40 border border-green-500/30 text-green-400 shadow-sm shadow-green-500/10 transition-transform group-hover:scale-105">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                  </div>
                  <dt className="mt-4 font-mono font-bold tracking-wider uppercase text-green-400">03 / Telemetry</dt>
                  <dd className="mt-2 font-mono text-xs leading-5 text-zinc-400">
                    Observe live telemetry feeds, system logs, sensor signals, and dynamic charts for the prototype system.
                  </dd>
                </div>
                <Link href="/prototype" className="mt-6 text-[10px] font-mono font-bold tracking-widest text-green-400 hover:text-green-300 flex items-center gap-1">
                  ACCESS_LINK <span>&rarr;</span>
                </Link>
              </div>
            </div>

          </dl>
        </div>
      </div>
    </div>
  );
}
