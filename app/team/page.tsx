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
    title: "Assistant Professor",
    department: "Department of Computer Science & Engineering",
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
      {/* Background visual accents */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-35 dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.zinc.900),theme(colors.zinc.950))] dark:opacity-85" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[350px] w-[600px] rounded-full bg-gradient-to-tr from-purple-500/10 to-indigo-500/15 blur-3xl dark:from-purple-500/5 dark:to-indigo-500/5" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Page Title */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">
            Meet the Team
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            The dedicated researchers, developers, and visionaries collaborating on the Xyberox autonomous robotics project.
          </p>
        </div>

        {/* Supervisor Section */}
        <div className="mx-auto max-w-4xl mb-24">
          <h2 className="text-xl font-bold tracking-wider text-purple-600 dark:text-purple-400 uppercase text-center mb-6">
            Project Supervisor
          </h2>
          <div className="relative overflow-hidden rounded-3xl border border-purple-200/50 bg-white/60 p-6 sm:p-10 shadow-xl backdrop-blur-md dark:border-purple-900/30 dark:bg-zinc-900/60 transition-all duration-300 hover:shadow-2xl hover:border-purple-300/60 dark:hover:border-purple-800/50">
            
            {/* Design accents */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Initials Avatar */}
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-purple-500/20">
                <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-white dark:bg-zinc-900 text-3xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-indigo-500 to-pink-500">
                  MS
                </div>
              </div>

              {/* Bio & Details */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-50">
                  {supervisor.name}
                </h3>
                <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mt-1">
                  {supervisor.title}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  {supervisor.department}
                </p>
                <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                  {supervisor.institution}
                </p>

                <blockquote className="mt-4 border-l-2 border-purple-500/50 pl-4 italic text-sm text-zinc-600 dark:text-zinc-300 text-left">
                  "{supervisor.bio}"
                </blockquote>

                {/* Core Research Focus */}
                <div className="mt-6 text-left">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                    Core Research Focus
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {supervisor.researchFocus.map((focus) => (
                      <span
                        key={focus}
                        className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600 dark:bg-purple-950/30 dark:text-purple-400 border border-purple-100/30 dark:border-purple-900/20"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contacts */}
                <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4 pt-6 border-t border-zinc-100 dark:border-zinc-800/80">
                  <a
                    href={`mailto:${supervisor.email}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-purple-600 dark:text-zinc-300 dark:hover:text-purple-400 transition-colors"
                  >
                    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    {supervisor.email}
                  </a>

                  <a
                    href={supervisor.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>

                  <a
                    href={supervisor.researchgate}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
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
          <h2 className="text-xl font-bold tracking-wider text-purple-600 dark:text-purple-400 uppercase text-center mb-10">
            Research Assistants & Developers
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative overflow-hidden rounded-3xl border border-zinc-200/50 bg-white/60 p-6 shadow-md backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-900/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-purple-300/30 dark:hover:border-purple-900/30"
              >
                {/* Decorative hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/0 via-purple-500/0 to-indigo-500/0 opacity-0 group-hover:opacity-10 group-hover:from-purple-500/5 group-hover:to-indigo-500/10 transition-opacity duration-500 pointer-events-none" />

                <div className="flex justify-between items-start">
                  {/* Name & Initials Avatar */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 text-indigo-600 dark:from-purple-950/30 dark:to-indigo-950/30 dark:text-purple-400 group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    <span className="text-base font-extrabold tracking-tight">
                      {member.name.split(" ").map(n => n[0]).join("").substring(0, 2)}
                    </span>
                  </div>
                  {/* Semester Badge */}
                  <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                    {member.semester}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">
                    ID: {member.id} • {member.program.includes("Engineering") ? "CSE" : "CS"}
                  </p>
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 leading-snug mt-1">
                    {member.program}
                  </p>
                </div>

                {/* Responsibilities */}
                <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                    Responsibilities
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {member.responsibilities.map((resp) => (
                      <span
                        key={resp}
                        className="rounded-lg bg-zinc-50 dark:bg-zinc-800/40 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:text-zinc-300 border border-zinc-100/50 dark:border-zinc-800/30"
                      >
                        {resp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-start gap-3">
                  {/* LinkedIn */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-zinc-50 hover:bg-indigo-50 text-zinc-400 hover:text-indigo-600 dark:bg-zinc-800/30 dark:hover:bg-indigo-950/20 dark:hover:text-indigo-400 transition-colors"
                    title="LinkedIn Profile"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-zinc-50 hover:bg-zinc-900 hover:text-white text-zinc-400 dark:bg-zinc-800/30 dark:hover:bg-zinc-100 dark:hover:text-zinc-950 transition-colors"
                    title="GitHub Profile"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>

                  {/* ResearchGate */}
                  <a
                    href={member.researchgate}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-zinc-50 hover:bg-pink-50 text-zinc-400 hover:text-pink-600 dark:bg-zinc-800/30 dark:hover:bg-pink-950/20 dark:hover:text-pink-400 transition-colors"
                    title="ResearchGate Profile"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 0c-.39 0-.74.15-1 .41L15.3 3.7c-.52.54-.74 1.25-.56 1.95l1.64 6.27a.99.99 0 0 0 1.05.74h2.15a1 1 0 0 0 .97-.76l1.43-5.5a1 1 0 0 0-.25-.9L19.59 0zM7.34 3.78a5.66 5.66 0 1 0 5.67 5.66 5.67 5.67 0 0 0-5.67-5.66zm0 9.07a3.41 3.41 0 1 1 3.41-3.41 3.41 3.41 0 0 1-3.41 3.41z"/>
                    </svg>
                  </a>

                  {/* Email */}
                  <a
                    href={member.email}
                    className="p-2 rounded-lg bg-zinc-50 hover:bg-purple-50 text-zinc-400 hover:text-purple-600 dark:bg-zinc-800/30 dark:hover:bg-purple-950/20 dark:hover:text-purple-400 transition-colors"
                    title="Send Email"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
