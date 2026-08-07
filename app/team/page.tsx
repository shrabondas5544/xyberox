import React from "react";
import Link from "next/link";
import Image from "next/image";

// Import Team pictures
import nijumPic from "./Nijum baruya.png";
import ashrafulPic from "./Ashraful.png";
import fahimPic from "./Fahim.png";
import shrabonPic from "./Shrabon_Das .png";
import mahadiPic from "./mahadi_shakkhor .png";
import eloraPic from "./Elora_Sharmin_Khan .png";
import supervisorPic from "./Dr.webp";

interface TeamMember {
  name: string;
  id: string;
  program: string;
  semester: string;
  responsibilities: string[];
  linkedin: string;
  github: string;
  email: string;
  researchgate: string;
}

export const metadata = {
  title: "Meet the Team | Xyberox Robotics",
  description: "Meet the brilliant minds and supervisors behind the Xyberox Autonomous Robotics initiative at Independent University Bangladesh.",
};

// CyberAvatar HUD graphics for members without photos
function CyberAvatar({ name, index, id }: { name: string; index: number; id: string }) {
  const initials = name.split(" ").map(n => n[0]).join("").substring(0, 2);
  const authNum = String(index + 1).padStart(2, "0");
  
  return (
    <svg className="w-full h-full p-4 font-mono text-[9px] text-green-400 select-none" viewBox="0 0 200 200">
      <defs>
        <pattern id={`grid-${index}`} width="15" height="15" patternUnits="userSpaceOnUse">
          <path d="M 15 0 L 0 0 0 15" fill="none" stroke="rgba(34, 197, 94, 0.05)" strokeWidth="1" />
        </pattern>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect width="100%" height="100%" fill={`url(#grid-${index})`} />

      {/* Rotating outer compass ring */}
      <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(34, 197, 94, 0.15)" strokeWidth="1" />
      <circle 
        cx="100" 
        cy="100" 
        r="80" 
        fill="none" 
        stroke="#00ff41" 
        strokeWidth="1.5" 
        strokeDasharray="20 40 10 10 30 10" 
        filter="url(#glow)" 
        className="animate-[spin_40s_linear_infinite]" 
        style={{ transformOrigin: "100px 100px" }} 
      />

      {/* Target scope crosshairs */}
      <path d="M 100 10 L 100 30 M 100 170 L 100 190 M 10 100 L 30 100 M 170 100 L 190 100" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="1" />
      
      {/* Corner brackets */}
      <path d="M 20 40 L 20 20 L 40 20 M 160 20 L 180 20 L 180 40 M 180 160 L 180 180 L 160 180 M 40 180 L 20 180 L 20 160" fill="none" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="1.5" />

      {/* HUD digital readings */}
      <text x="25" y="35" fill="rgba(34, 197, 94, 0.5)">SYS_OK</text>
      <text x="135" y="35" fill="rgba(34, 197, 94, 0.5)">UPLINK_ON</text>
      <text x="25" y="175" fill="rgba(34, 197, 94, 0.5)">{`ID_${id}`}</text>
      <text x="130" y="175" fill="rgba(34, 197, 94, 0.5)">{`DEV_AUTH_${authNum}`}</text>

      {/* Center Digital Avatar Core */}
      <g filter="url(#glow)">
        <polygon points="100,60 135,80 135,120 100,140 65,120 65,80" fill="rgba(0, 255, 65, 0.03)" stroke="#00ff41" strokeWidth="1.5" />
        
        <circle cx="100" cy="60" r="3" fill="#00ff41" />
        <circle cx="135" cy="80" r="3" fill="#00ff41" />
        <circle cx="135" cy="120" r="3" fill="#00ff41" />
        <circle cx="100" cy="140" r="3" fill="#00ff41" />
        <circle cx="65" cy="120" r="3" fill="#00ff41" />
        <circle cx="65" cy="80" r="3" fill="#00ff41" />

        <text 
          x="100" 
          y="108" 
          textAnchor="middle" 
          fill="#00ff41" 
          className="text-2xl font-black tracking-wider" 
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {initials}
        </text>
      </g>

      <line x1="10" y1="100" x2="190" y2="100" stroke="rgba(0, 255, 65, 0.15)" strokeWidth="2" className="animate-[pulse_2s_infinite]" />
    </svg>
  );
}

export default function TeamPage() {
  const supervisor = {
    name: "MOHAMMAD SHIDUJAMAN, PHD",
    title: "Project Supervisor",
    department: "Assistant Professor, Dept. of Computer Science & Engineering",
    institution: "Independent University Bangladesh",
    bio: "Assistant Professor at the Department of Computer Science & Engineering, Independent University Bangladesh, specializing in XAI, Robotics, and HCI.",
    researchFocus: [
      "Explainable Artificial Intelligence and Robotics",
      "Human Computer Interaction",
      "Human Robot Interaction",
    ],
    email: "shidujaman@iub.edu.bd",
    linkedin: "https://www.linkedin.com/",
    researchgate: "https://www.researchgate.net/",
  };

  const teamMembers: TeamMember[] = [
    {
      name: "Shrabon Das",
      id: "2230827",
      program: "B.Sc. in Computer Science & Engineering (CSE)",
      semester: "11th Semester",
      responsibilities: [
        "Project Architecture",
        "Frontend & UI Development",
        "Control Interface Integration",
        "AI Integration",
      ],
      linkedin: "https://linkedin.com/",
      github: "https://github.com/shrabondas5544",
      email: "mailto:shrabon.das@example.com",
      researchgate: "https://researchgate.net/",
    },
    {
      name: "Nijum Barua",
      id: "2231368",
      program: "B.Sc. in Computer Science & Engineering (CSE)",
      semester: "12th Semester",
      responsibilities: [
        "Hardware Implementation",
        "Technical Documentation",
        "Research Analysis",
      ],
      linkedin: "https://www.linkedin.com/in/nijum-barua-b7a159257",
      github: "https://github.com/NijumBarua",
      email: "mailto:nijum@gmail.com",
      researchgate: "https://www.researchgate.net/profile/Nijum-Barua?ev=hdr_xprf",
    },
    {
      name: "SM Mahadi Bhuiyan",
      id: "2221486",
      program: "B.Sc. in Computer Science & Engineering (CSE)",
      semester: "14th Semester",
      responsibilities: [
        "Research Analysis",
        "Mathematical Equation Research",
      ],
      linkedin: "https://www.linkedin.com/in/mahadi-shakkhor-334911275/",
      github: "https://github.com/mahadi-shakkor",
      email: "mailto:smmahadi01910048684@gmail.com",
      researchgate: "https://www.researchgate.net/profile/Mahadi-Bhuiyan?ev=hdr_xprf",
    },
    {
      name: "Mohd Ashraful Islam",
      id: "2010192",
      program: "B.Sc. in Computer Science (CS)",
      semester: "13th Semester",
      responsibilities: [
        "Hardware Implementation",
        "Software Integration",
        "Algorithm Development",
        "RAG Implementation",
      ],
      linkedin: "https://www.linkedin.com/in/ashraful-islam-6710203a7",
      github: "https://github.com/ashrafulcs",
      email: "mailto:ashrafulislamcsdev@gmail.com",
      researchgate: "https://www.researchgate.net/profile/Mohd-Islam-16",
    },
    {
      name: "Fahim Awal Faisal",
      id: "2221506",
      program: "B.Sc. in Computer Science & Engineering (CSE)",
      semester: "14th Semester",
      responsibilities: [
        "Hardware Implementation",
        "Technical Documentation",
      ],
      linkedin: "https://www.linkedin.com/in/fahim-faisal-b63419415/",
      github: "https://github.com/Fahim396",
      email: "mailto:fahimfaisal1148@gmail.com",
      researchgate: "https://www.researchgate.net/profile/Fahim-Faisal-37?ev=hdr_xprf",
    },
    {
      name: "Elora Sharmin Khan",
      id: "2231368",
      program: "B.Sc. in Computer Science & Engineering (CSE)",
      semester: "12th Semester",
      responsibilities: [
        "Hardware Implementation",
        "Hardware Architecture Design",
        "Web Architecture Analysis",
      ],
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/elora5",
      email: "mailto:elorakhan033@gmail.com",
      researchgate: "https://www.researchgate.net/profile/Elora-Khan-2",
    },
  ];

  return (
    <div className="relative flex-1 py-16 sm:py-24 overflow-hidden">
      {/* Cyberpunk background glow visual accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[300px] w-[500px] rounded-full bg-green-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Page Title */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <h1 className="text-3xl font-extrabold tracking-wider sm:text-5xl font-mono uppercase text-white">
            // MEET_THE_TEAM
          </h1>
          <p className="mt-4 font-mono text-sm text-zinc-400">
            Dedicated researchers, software engineers, and developers collaborating on the Xyberox autonomous robotics initiative.
          </p>
        </div>

        {/* Supervisor Section */}
        <div className="mx-auto max-w-4xl mb-28">
          <h2 className="text-sm font-mono font-bold tracking-widest text-green-400 uppercase text-center mb-6">
            // PROJECT_SUPERVISOR
          </h2>
          <div className="relative overflow-hidden rounded-sm border border-green-500/30 bg-black/75 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:border-green-500/60 shadow-green-500/5">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between border-b border-green-500/10 px-6 py-3 bg-green-950/15">
              <div className="flex gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500/40"></span>
                <span className="h-2 w-2 rounded-full bg-green-500/40"></span>
                <span className="h-2 w-2 rounded-full bg-green-500/40"></span>
              </div>
              <span className="text-[10px] font-mono text-green-500/50 tracking-wider select-none">supervisor_profile.root</span>
            </div>

            {/* Design accents */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-green-500/10 to-transparent pointer-events-none" />

            <div className="p-6 sm:p-10 flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Supervisor Avatar */}
              <div className="relative group shrink-0">
                <div className="absolute -inset-1 rounded-sm bg-gradient-to-r from-green-500 to-emerald-500 opacity-15 blur-sm group-hover:opacity-45 transition duration-500" />
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 bg-black border border-green-500/30 rounded-sm overflow-hidden flex items-center justify-center shadow-lg shadow-green-500/10">
                  <div className="relative w-full h-full">
                    {/* Glowing back background effect */}
                    <div className="absolute -inset-2 bg-gradient-to-t from-green-500/20 via-green-500/10 to-green-500/0 blur-xl rounded-full" />
                    <div className="absolute -inset-1 bg-emerald-500/10 blur-md rounded-full animate-pulse" />

                    <Image 
                      src={supervisorPic}
                      alt={supervisor.name}
                      fill
                      sizes="(max-width: 640px) 192px, 224px"
                      className="object-cover animate-cyber-glitch"
                      priority
                    />

                    {/* Faded vignette below */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none z-10" />
                    
                    {/* High-tech border overlays */}
                    <div className="absolute top-2 left-2 border-t border-l border-green-500/50 w-3 h-3 z-20" />
                    <div className="absolute top-2 right-2 border-t border-r border-green-500/50 w-3 h-3 z-20" />
                    <div className="absolute bottom-2 left-2 border-b border-l border-green-500/50 w-3 h-3 z-20" />
                    <div className="absolute bottom-2 right-2 border-b border-r border-green-500/50 w-3 h-3 z-20" />
                  </div>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-mono font-extrabold text-white">
                  {supervisor.name}
                </h3>
                <p className="text-xs font-mono font-semibold text-green-400 mt-1 uppercase tracking-wide">
                  {supervisor.title}
                </p>
                <p className="text-xs font-mono text-zinc-400 mt-1">
                  {supervisor.department}
                </p>
                <p className="text-[10px] font-mono font-medium text-zinc-500">
                  {supervisor.institution}
                </p>

                <blockquote className="mt-4 border-l-2 border-green-500/50 pl-4 italic font-mono text-xs text-zinc-400 text-left">
                  "{supervisor.bio}"
                </blockquote>

                {/* Core Research Focus */}
                <div className="mt-6 text-left">
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500 mb-2">
                    Core Research Focus
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {supervisor.researchFocus.map((focus) => (
                      <span
                        key={focus}
                        className="rounded-sm bg-green-500/10 px-3 py-1 text-[10px] font-mono font-semibold text-green-400 border border-green-500/20"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contacts */}
                <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4 pt-6 border-t border-green-500/10">
                  <a
                    href={`mailto:${supervisor.email}`}
                    className="inline-flex items-center gap-2 font-mono text-xs text-zinc-300 hover:text-green-400 transition-colors"
                  >
                    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    {supervisor.email}
                  </a>

                  <a
                    href={supervisor.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500 hover:text-green-400 transition-colors"
                  >
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>

                  <a
                    href={supervisor.researchgate}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500 hover:text-green-400 transition-colors"
                  >
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 0c-.39 0-.74.15-1 .41L15.3 3.7c-.52.54-.74 1.25-.56 1.95l1.64 6.27a.99.99 0 0 0 1.05.74h2.15a1 1 0 0 0 .97-.76l1.43-5.5a1 1 0 0 0-.25-.9L19.59 0zM7.34 3.78a5.66 5.66 0 1 0 5.67 5.66 5.67 5.67 0 0 0-5.67-5.66zm0 9.07a3.41 3.41 0 1 1 3.41-3.41 3.41 3.41 0 0 1-3.41 3.41z"/>
                    </svg>
                    ResearchGate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Student Team Grid */}
        <div>
          <h2 className="text-sm font-mono font-bold tracking-widest text-green-400 uppercase text-center mb-16">
            // RESEARCH_ASSISTANTS_AND_DEVELOPERS
          </h2>
          
          <div className="space-y-16 sm:space-y-24">
            {teamMembers.map((member, index) => {
              const isLeft = index % 2 === 0;

              // Check if member has a profile photo
              let memberPic = null;
              if (member.name === "Nijum Barua") {
                memberPic = nijumPic;
              } else if (member.name === "Mohd Ashraful Islam") {
                memberPic = ashrafulPic;
              } else if (member.name === "Fahim Faisal") {
                memberPic = fahimPic;
              } else if (member.name === "Shrabon Das") {
                memberPic = shrabonPic;
              } else if (member.name === "SM Mahadi Bhuiyan") {
                memberPic = mahadiPic;
              } else if (member.name === "Elora Sharmin Khan") {
                memberPic = eloraPic;
              }
              
              return (
                <div
                  key={`${member.name.toLowerCase().replace(/\s+/g, "-")}-${member.id}-${index}`}
                  className={`flex flex-col ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8 md:gap-16 max-w-5xl mx-auto`}
                >
                  {/* Photo/Avatar Side */}
                  <div className="w-full md:w-2/5 flex justify-center shrink-0">
                    <div className="relative group">
                      {/* Cyberpunk neon glowing box */}
                      <div className="absolute -inset-1 rounded-sm bg-gradient-to-r from-green-500 to-emerald-500 opacity-15 blur-sm group-hover:opacity-45 transition duration-500" />
                      
                      {/* Avatar frame */}
                      <div className="relative w-60 h-60 sm:w-64 sm:h-64 bg-black border border-green-500/30 rounded-sm overflow-hidden flex items-center justify-center">
                        {memberPic ? (
                          <div className="relative w-full h-full">
                            {/* Glowing back background effect */}
                            <div className="absolute -inset-2 bg-gradient-to-t from-green-500/20 via-green-500/10 to-green-500/0 blur-xl rounded-full" />
                            <div className="absolute -inset-1 bg-emerald-500/10 blur-md rounded-full animate-pulse" />

                            {/* Cyberpunk glitching image */}
                            <Image 
                              src={memberPic}
                              alt={member.name}
                              fill
                              sizes="(max-width: 640px) 240px, 256px"
                              className="object-cover animate-cyber-glitch"
                              priority
                            />

                            {/* Faded vignette below */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none z-10" />
                            
                            {/* High-tech border overlays */}
                            <div className="absolute top-2 left-2 border-t border-l border-green-500/50 w-4 h-4 z-20" />
                            <div className="absolute top-2 right-2 border-t border-r border-green-500/50 w-4 h-4 z-20" />
                            <div className="absolute bottom-2 left-2 border-b border-l border-green-500/50 w-4 h-4 z-20" />
                            <div className="absolute bottom-2 right-2 border-b border-r border-green-500/50 w-4 h-4 z-20" />
                          </div>
                        ) : (
                          /* Interactive scanline and grid background */
                          <CyberAvatar name={member.name} index={index} id={member.id} />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Information Card Side */}
                  <div className="w-full md:w-3/5">
                    <div className="group relative overflow-hidden rounded-sm border border-green-500/10 bg-black/65 p-6 sm:p-8 shadow-md backdrop-blur-xs transition-all duration-300 hover:shadow-xl hover:border-green-500/40 hover:shadow-green-500/5">
                      {/* Terminal Window Header */}
                      <div className="flex items-center justify-between border-b border-green-500/10 px-4 py-2 bg-green-950/10 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6">
                        <div className="flex gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500/30 group-hover:bg-green-500/60 transition-colors"></span>
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500/30 group-hover:bg-green-500/60 transition-colors"></span>
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500/30 group-hover:bg-green-500/60 transition-colors"></span>
                        </div>
                        <span className="text-[9px] font-mono text-green-500/50 tracking-wider select-none">
                          {member.name.toLowerCase().replace(" ", "_")}.cfg
                        </span>
                      </div>

                      <div className="flex justify-between items-start">
                        {/* Name & Academic details */}
                        <div>
                          <h3 className="text-xl sm:text-2xl font-mono font-bold text-white group-hover:text-green-400 transition-colors">
                            {member.name}
                          </h3>
                          <p className="font-mono text-[10px] sm:text-xs text-zinc-500 mt-1">
                            ID: {member.id} • {member.program.includes("Engineering") ? "CSE" : "CS"}
                          </p>
                        </div>
                        
                        {/* Semester Badge */}
                        <span className="rounded-sm bg-green-950/20 border border-green-500/25 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-green-400">
                          {member.semester}
                        </span>
                      </div>

                      <p className="font-mono text-xs sm:text-sm font-medium text-zinc-400 mt-4 leading-relaxed">
                        {member.program}
                      </p>

                      {/* Responsibilities */}
                      <div className="mt-6 pt-4 border-t border-green-500/10">
                        <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500 mb-2">
                          Responsibilities
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.responsibilities.map((resp) => (
                            <span
                              key={resp}
                              className="rounded-sm bg-green-950/10 px-3 py-1 font-mono text-[10px] text-green-400 border border-green-500/10"
                            >
                              {resp}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="mt-6 pt-4 border-t border-green-500/10 flex items-center justify-start gap-3">
                        {/* LinkedIn */}
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-sm bg-green-500/5 border border-green-500/10 hover:border-green-500 hover:bg-green-500/15 text-zinc-500 hover:text-green-400 transition-all"
                          title="LinkedIn Profile"
                        >
                          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>

                        {/* GitHub */}
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-sm bg-green-500/5 border border-green-500/10 hover:border-green-500 hover:bg-green-500/15 text-zinc-500 hover:text-green-400 transition-all"
                          title="GitHub Profile"
                        >
                          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
                          </svg>
                        </a>

                        {/* ResearchGate */}
                        <a
                          href={member.researchgate}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-sm bg-green-500/5 border border-green-500/10 hover:border-green-500 hover:bg-green-500/15 text-zinc-500 hover:text-green-400 transition-all"
                          title="ResearchGate Profile"
                        >
                          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.59 0c-.39 0-.74.15-1 .41L15.3 3.7c-.52.54-.74 1.25-.56 1.95l1.64 6.27a.99.99 0 0 0 1.05.74h2.15a1 1 0 0 0 .97-.76l1.43-5.5a1 1 0 0 0-.25-.9L19.59 0zM7.34 3.78a5.66 5.66 0 1 0 5.67 5.66 5.67 5.67 0 0 0-5.67-5.66zm0 9.07a3.41 3.41 0 1 1 3.41-3.41 3.41 3.41 0 0 1-3.41 3.41z"/>
                          </svg>
                        </a>

                        {/* Email */}
                        <a
                          href={member.email}
                          className="p-2 rounded-sm bg-green-500/5 border border-green-500/10 hover:border-green-500 hover:bg-green-500/15 text-zinc-500 hover:text-green-400 transition-all"
                          title="Send Email"
                        >
                          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                        </a>

                        {/* Literature Survey Link */}
                        <Link
                          href={`/literature-review/${member.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className="ml-auto inline-flex items-center gap-1.5 rounded-sm border border-green-500/30 bg-green-500/5 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-green-400 hover:bg-green-500/20 hover:border-green-500 transition-all"
                          title="View Literature Survey"
                        >
                          <span>[LIT_SURVEY]</span>
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Cyberpunk Glitch & Core CSS Animations */}
      <style>{`
        @keyframes cyber-glitch {
          0%, 88%, 100% {
            transform: none;
            filter: none;
            clip-path: none;
          }
          89% {
            transform: translate(-4px, 2px) skewX(2deg);
            filter: hue-rotate(60deg) saturate(1.5) contrast(1.2);
            clip-path: inset(10% 0 80% 0);
          }
          90% {
            transform: translate(4px, -2px) skewX(-2deg);
            filter: hue-rotate(-60deg) saturate(2) brightness(1.2);
            clip-path: inset(70% 0 5% 0);
          }
          91% {
            transform: translate(-2px, 3px);
            filter: invert(0.05) contrast(1.3);
            clip-path: inset(40% 0 40% 0);
          }
          92% {
            transform: none;
            filter: none;
            clip-path: none;
          }
        }
        .animate-cyber-glitch {
          animation: cyber-glitch 2s infinite linear;
        }
      `}</style>
    </div>
  );
}
