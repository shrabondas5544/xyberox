import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Literature Reviews | Xyberox Robotics",
  description: "Comprehensive literature survey database for Project Aegis & Xyberox autonomous systems.",
};

const reviewers = [
  { name: "Shrabon Das", href: "/literature-review/shrabon-das", focus: "Testing Methodologies, HRI Emotional Interaction, Computer Vision" },
  { name: "Nijum Barua", href: "/literature-review/nijum-barua", focus: "SLAM Simulation, ROS2 Middleware, Sensor Fusion & Path Planning" },
  { name: "SM Mahadi Bhuiyan", href: "/literature-review/sm-mahadi-bhuiyan", focus: "DC Motor Controllers, Embedded Power Systems & Kinematics" },
  { name: "Mohd Ashraful Islam", href: "/literature-review/mohd-ashraful-islam", focus: "Radio Frequency Countermeasures, Signal Jamming & Edge AI" },
  { name: "Fahim Faisal", href: "/literature-review/fahim-faisal", focus: "AI Space Networks, TinyML Jamming Classifiers, Navigation Stack" },
  { name: "Elora Sharmin Khan", href: "/literature-review/elora-sharmin-khan", focus: "Voice Interactive Children Educational Robots (TINY), NLP, Google Speech-to-Text & HRI" },
];

export default function LiteratureReviewOverviewPage() {
  return (
    <div className="relative flex-1 py-16 sm:py-24 overflow-hidden">
      <div className="absolute top-0 right-1/4 -z-10 h-[350px] w-[500px] rounded-full bg-green-500/5 blur-3xl" />
      <div className="absolute bottom-10 left-1/4 -z-10 h-[250px] w-[400px] rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-sm border border-green-500/30 bg-green-950/20 px-4 py-1.5 font-mono text-xs font-semibold tracking-wider text-green-400 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            RESEARCH_DATABASE: ALL_REVIEWS
          </div>

          <h1 className="mt-8 text-3xl font-extrabold tracking-wider sm:text-5xl font-mono uppercase text-white">
            // LITERATURE_REVIEWS
          </h1>
          <p className="mt-4 font-mono text-sm text-zinc-400 leading-relaxed">
            Select a team member to access their curated academic literature survey, research gap analyses, and comparative synthesis for Xyberox.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviewers.map((reviewer, idx) => (
            <Link
              key={idx}
              href={reviewer.href}
              className="group relative flex flex-col rounded-sm border border-green-500/20 bg-black/60 overflow-hidden p-6 text-left backdrop-blur-xs transition-all duration-300 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(0,255,65,0.1)] hover:-translate-y-1"
            >
              <div className="flex items-center justify-between border-b border-green-500/10 pb-3 mb-4">
                <span className="text-[10px] font-mono text-green-500/50 tracking-wider">MEMBER // 0{idx + 1}</span>
                <span className="text-xs font-mono text-green-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
              <h2 className="font-mono font-bold text-lg text-white group-hover:text-green-400 transition-colors">
                {reviewer.name}
              </h2>
              <p className="mt-2 font-mono text-xs text-zinc-400 leading-relaxed flex-1">
                {reviewer.focus}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
