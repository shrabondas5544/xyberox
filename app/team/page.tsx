import React from "react";

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
      id: "2121644",
      program: "B.Sc. in Computer Science & Engineering (CSE)",
      semester: "11th Semester",
      responsibilities: [
        "Project Architecture",
        "Frontend & UI Development",
        "Control Interface Integration",
      ],
      linkedin: "https://linkedin.com/",
      github: "https://github.com/shrabondas5544",
      email: "mailto:shrabon.das@example.com",
      researchgate: "https://researchgate.net/",
    },
    {
      name: "Nijum Barua",
      id: "2121703",
      program: "B.Sc. in Computer Science & Engineering (CSE)",
      semester: "11th Semester",
      responsibilities: [
        "Embedded Systems Design",
        "Microcontroller Programming (ESP32/Arduino)",
        "Hardware Integration",
      ],
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      email: "mailto:nijum.barua@example.com",
      researchgate: "https://researchgate.net/",
    },
    {
      name: "SM Mahadi Bhuiyan",
      id: "2120895",
      program: "B.Sc. in Computer Science (CS)",
      semester: "12th Semester",
      responsibilities: [
        "Computer Vision & Perception",
        "Camera Calibration",
        "Object Detection Algorithms",
      ],
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      email: "mailto:mahadi.bhuiyan@example.com",
      researchgate: "https://researchgate.net/",
    },
    {
      name: "Mohd Ashraful Islam",
      id: "2121345",
      program: "B.Sc. in Computer Science & Engineering (CSE)",
      semester: "11th Semester",
      responsibilities: [
        "ROS2 Workspace Management",
        "Kinematic Modeling",
        "Sensor Fusion (LIDAR, IMU)",
      ],
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      email: "mailto:ashraful.islam@example.com",
      researchgate: "https://researchgate.net/",
    },
    {
      name: "Fahim Faisal",
      id: "2121994",
      program: "B.Sc. in Computer Science (CS)",
      semester: "11th Semester",
      responsibilities: [
        "Navigation Stack Configuration",
        "Simulation Environment (Gazebo)",
        "SLAM Algorithms Implementation",
      ],
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      email: "mailto:fahim.faisal@example.com",
      researchgate: "https://researchgate.net/",
    },
    {
      name: "Elora Sharmin Khan",
      id: "2122102",
      program: "B.Sc. in Computer Science & Engineering (CSE)",
      semester: "10th Semester",
      responsibilities: [
        "Literature Survey Coordination",
        "Data Analysis & Visualization",
        "Documentation & Paper Drafts",
      ],
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      email: "mailto:elora.sharmin@example.com",
      researchgate: "https://researchgate.net/",
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
        <div className="mx-auto max-w-4xl mb-24">
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
              {/* Initials Avatar */}
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-sm bg-green-500 p-0.5 shadow-lg shadow-green-500/20">
                <div className="flex h-full w-full items-center justify-center rounded-sm bg-black text-3xl font-mono font-black text-green-400">
                  MS
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
          <h2 className="text-sm font-mono font-bold tracking-widest text-green-400 uppercase text-center mb-10">
            // RESEARCH_ASSISTANTS_AND_DEVELOPERS
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative overflow-hidden rounded-sm border border-green-500/10 bg-black/65 shadow-md backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-green-500/40 hover:shadow-green-500/5"
              >
                {/* Terminal Window Header */}
                <div className="flex items-center justify-between border-b border-green-500/10 px-4 py-2 bg-green-950/10">
                  <div className="flex gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500/30 group-hover:bg-green-500/60 transition-colors"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500/30 group-hover:bg-green-500/60 transition-colors"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500/30 group-hover:bg-green-500/60 transition-colors"></span>
                  </div>
                  <span className="text-[9px] font-mono text-green-500/50 tracking-wider select-none">
                    {member.name.toLowerCase().replace(" ", "_")}.cfg
                  </span>
                </div>

                {/* Decorative hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-10 group-hover:from-green-500/5 group-hover:to-emerald-500/10 transition-opacity duration-500 pointer-events-none" />

                <div className="p-6">
                  <div className="flex justify-between items-start">
                    {/* Name & Initials Avatar */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-green-500/10 border border-green-500/35 text-green-400 group-hover:bg-green-500 group-hover:text-black transition-all duration-300">
                      <span className="text-sm font-mono font-bold">
                        {member.name.split(" ").map(n => n[0]).join("").substring(0, 2)}
                      </span>
                    </div>
                    {/* Semester Badge */}
                    <span className="rounded-sm bg-green-950/20 border border-green-500/25 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-green-400">
                      {member.semester}
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-mono font-bold text-white group-hover:text-green-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="font-mono text-[10px] text-zinc-500 mt-0.5">
                      ID: {member.id} • {member.program.includes("Engineering") ? "CSE" : "CS"}
                    </p>
                    <p className="font-mono text-xs font-medium text-zinc-400 mt-1">
                      {member.program}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  <div className="mt-5 pt-4 border-t border-green-500/10">
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500 mb-2">
                      Responsibilities
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {member.responsibilities.map((resp) => (
                        <span
                          key={resp}
                          className="rounded-sm bg-green-950/10 px-2.5 py-0.5 font-mono text-[10px] text-green-400 border border-green-500/10"
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
