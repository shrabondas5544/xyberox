"use client";

import React, { useState } from "react";
import Link from "next/link";

interface GanttTask {
  name: string;
  weeks: number[]; // 1-indexed active weeks
  color: "blue" | "green";
}

interface WeekUpdate {
  week: number;
  title: string;
  phase: string;
  status: "COMPLETED" | "ACTIVE" | "PENDING";
  dateRange: string;
  summary: string;
  tasks: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  logs: string[];
}

export default function WeeklyUpdatesClient() {
  const [activeTab, setActiveTab] = useState<"timeline" | "gantt">("timeline");
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);

  const ganttTasks: GanttTask[] = [
    { name: "Create Team Website", weeks: [1], color: "blue" },
    { name: "Topic Selection", weeks: [2], color: "green" },
    { name: "Literature Review", weeks: [2, 3], color: "blue" },
    { name: "Requirements Analysis", weeks: [2], color: "green" },
    { name: "System Design", weeks: [3, 4], color: "blue" },
    { name: "Component Selection", weeks: [3, 4], color: "green" },
    { name: "Chassis Construction", weeks: [4, 5], color: "blue" },
    { name: "Microcontroller Programming", weeks: [5, 6, 7], color: "green" },
    { name: "Jamming Module Development", weeks: [7, 8], color: "blue" },
    { name: "System Integration", weeks: [7, 8, 9], color: "green" },
    { name: "Testing & Debugging", weeks: [8, 9, 10], color: "blue" },
    { name: "Report Writing", weeks: [9, 10, 11], color: "green" },
    { name: "Final Demonstration", weeks: [11], color: "blue" }
  ];

  const weeksData: WeekUpdate[] = [
    {
      week: 1,
      title: "Team Portal & Architecture Initialization",
      phase: "Phase 01: Setup & Initialization",
      status: "COMPLETED",
      dateRange: "Week 01",
      summary: "Established central developers hub, defined cyberpunk interface design parameters, and initialized routing and audio modules.",
      tasks: [
        "Repository setup and core directory structure initialization.",
        "Created Project Aegis central web portal with interactive navigation.",
        "Integrated Navras audio synthesis framework with volume controls."
      ],
      metrics: [
        { label: "SYS_UPTIME", value: "99.9%" },
        { label: "LATENCY", value: "12ms" },
        { label: "COMPILES", value: "PASS" }
      ],
      logs: [
        "INIT_WORKSPACE: Git repository linked to main branch.",
        "CONFIG_TAILWIND: Installed vanilla CSS modules and variables.",
        "DEPLOY_PORTAL: Vercel static router enabled on port 3000."
      ]
    },
    {
      week: 2,
      title: "Mission Directives & Academic Scopes",
      phase: "Phase 02: Research & Analysis",
      status: "COMPLETED",
      dateRange: "Week 02",
      summary: "Defined project mission parameters (covert signal denial) and launched the systematic literature survey framework.",
      tasks: [
        "Formalized Project Aegis scope (1/10th scale communications jamming rover).",
        "Assigned team roles (Vision, Navigation, Hardware, Web/Interface).",
        "Compiled initial list of research articles focusing on RF jamming and HRI."
      ],
      metrics: [
        { label: "PAPERS_SURVEYED", value: "8" },
        { label: "ROLES_ASSIGNED", value: "6/6" },
        { label: "VULNERABILITIES", value: "0" }
      ],
      logs: [
        "Directives locked: Focus set on GSM/LTE downlink interference.",
        "Literature database created: Initial tracking templates uploaded.",
        "System requirements draft: Defined payload power limits."
      ]
    },
    {
      week: 3,
      title: "System Architecture Design & Part Selection",
      phase: "Phase 02: Research & Analysis",
      status: "COMPLETED",
      dateRange: "Week 03",
      summary: "Drafted structural and network schema blueprints. Began selecting compatible motors, chassis kits, and SDR modules.",
      tasks: [
        "Created high-level hardware-software block diagram (ROS2 connection layer).",
        "Reviewed 3D cube interface visual glitches and optimized client canvas loops.",
        "Selected HackRF One and nRF24L01 transceivers for selective jamming tests."
      ],
      metrics: [
        { label: "COMPONENTS_SELECTED", value: "14/14" },
        { label: "GLITCH_FIXES", value: "3" },
        { label: "CAD_DRAFT", value: "v1.0" }
      ],
      logs: [
        "Block diagram finalized: Jetson Nano to act as ROS2 host node.",
        "Power network designed: Dual 12V LiPo batteries selected.",
        "SDR frequency sweep script: Initial local scan tests executed."
      ]
    },
    {
      week: 4,
      title: "Chassis Assembly & CAD Finalization",
      phase: "Phase 03: Hardware Fabrication",
      status: "ACTIVE",
      dateRange: "Week 04",
      summary: "Procured mechanical parts and initiated 1/10th scale chassis assembly. Finalized mathematical models for path loss.",
      tasks: [
        "Assembled JetRacer Pro chassis, including metal suspension and steering servos.",
        "Calculated Jamming-to-Signal (J/S) power thresholds for 10-meter operational range.",
        "Drafted dynamic navigation stack maps inside Gazebo simulation."
      ],
      metrics: [
        { label: "CHASSIS_STATUS", value: "80%" },
        { label: "SIM_NODES", value: "3/3" },
        { label: "J/S_RATIO", value: "34dBm" }
      ],
      logs: [
        "Hardware package delivered: Verified all DC motors and encoders.",
        "Suspension check: Steering alignment calibrated to zero drift.",
        "Path loss calculations: Free-space loss formula compiled."
      ]
    },
    {
      week: 5,
      title: "Low-Level MCU Integration & Drive Control",
      phase: "Phase 03: Hardware Fabrication",
      status: "PENDING",
      dateRange: "Week 05",
      summary: "Completed chassis fabrication. Wired ESP32 to drive modules and programmed basic steering and throttle routines.",
      tasks: [
        "Completed chassis frame construction, including battery mounting plates.",
        "Wrote low-level firmware for Arduino/ESP32 drive nodes.",
        "Implemented PWM motor signal controls with hardware fail-safes."
      ],
      metrics: [
        { label: "CHASSIS_FAB", value: "DONE" },
        { label: "FIRMWARE_BUILD", value: "PASS" },
        { label: "OVERRIDE_DELAY", value: "5ms" }
      ],
      logs: [
        "Tire traction tests: Verified wheel slips on soft terrain.",
        "Drive node telemetry: Wheel encoder metrics streamed over serial.",
        "Safety loop locked: Emergency manual shutdown test successful."
      ]
    },
    {
      week: 6,
      title: "Navigation Control Loops & Sensor Telemetry",
      phase: "Phase 04: Software Integration",
      status: "PENDING",
      dateRange: "Week 06",
      summary: "Calibrated on-board sensor suites (IMU, Wheel Encoders) and optimized PID parameters for velocity control.",
      tasks: [
        "Calibrated onboard IMU data and fused with wheel odometer values.",
        "Programmed velocity and angular control loops (PID) in ESP32 firmware.",
        "Developed ROS2 serial bridge package to publish sensor states."
      ],
      metrics: [
        { label: "ODOM_DRIFT", value: "<1.5%" },
        { label: "IMU_HERTZ", value: "100Hz" },
        { label: "PID_STATE", value: "STABLE" }
      ],
      logs: [
        "IMU calibration: Corrected accelerometer bias.",
        "ROS2 bridge verified: Odometry messages published without delay.",
        "Speed trials: Maintained 1.2m/s constant velocity control."
      ]
    },
    {
      week: 7,
      title: "RF Jammer Payload Construction & ROS2 Host Links",
      phase: "Phase 04: Software Integration",
      status: "PENDING",
      dateRange: "Week 07",
      summary: "Fabricated the RF Jammer module. Established high-speed data link between the ESP32 drive board and Jetson Nano.",
      tasks: [
        "Constructed nRF24L01 2.4GHz Wi-Fi jammer circuit on custom protoboard.",
        "Configured ROS2 workspaces on Jetson Nano.",
        "Linked ESP32 serial nodes directly to ROS2 navigation packages."
      ],
      metrics: [
        { label: "ROS2_WORKSPACES", value: "2" },
        { label: "BAUD_RATE", value: "115200" },
        { label: "JAMMER_POWER", value: "100mW" }
      ],
      logs: [
        "Host system initialized: Jetson Nano running Ubuntu 22.04 LTS.",
        "SDR control layer: Installed HackRF Python libraries.",
        "RF shield testing: Checked electromagnetic leakage on navigation nodes."
      ]
    },
    {
      week: 8,
      title: "Sensor Fusion & Selective Jammer Gating",
      phase: "Phase 04: Software Integration",
      status: "PENDING",
      dateRange: "Week 08",
      summary: "Integrating LiDAR and IMU data. Implementing reactive jamming protocols that trigger only upon uplink detection.",
      tasks: [
        "Tuned laser distance sensor (LiDAR) parameters inside the ROS2 workspace.",
        "Programmed reactive downlink-only jammer logic targeting specific frequencies.",
        "Created unified operator dashboard showing mapping and battery health."
      ],
      metrics: [
        { label: "LIDAR_SCAN_RATE", value: "10Hz" },
        { label: "REACTIVE_DELAY", value: "38ms" },
        { label: "BATTERY_HEALTH", value: "98%" }
      ],
      logs: [
        "LiDAR configuration: Set scanner filters to ignore structural dust.",
        "Reactive loop verified: 15-second downlink emission triggered on UL detection.",
        "Dashboard update: Streamed wheel velocities and J/S ratios to UI."
      ]
    },
    {
      week: 9,
      title: "Dynamic Path Planning & Document Drafts",
      phase: "Phase 05: Validation & Deployment",
      status: "PENDING",
      dateRange: "Week 09",
      summary: "Configure ROS2 Nav2 stack for dynamic obstacle avoidance. Initiate final report compiling and architecture drafts.",
      tasks: [
        "Tune costmap parameters in ROS2 Nav2 to handle tight indoor corridors.",
        "Begin writing systematic testing and validation sections of the project thesis.",
        "Conduct first multi-room navigation and communication denial trial runs."
      ],
      metrics: [
        { label: "NAV2_STATUS", value: "READY" },
        { label: "REPORT_PAGES", value: "12/50" },
        { label: "TEST_SCENARIOS", value: "4" }
      ],
      logs: [
        "Nav2 initialization: Loaded custom indoor room costmaps.",
        "Report draft: Completed literature comparison matrix.",
        "Stealth profile check: Verified noise reduction on motor gears."
      ]
    },
    {
      week: 10,
      title: "Fail-Safe Tuning & Multi-Band Optimization",
      phase: "Phase 05: Validation & Deployment",
      status: "PENDING",
      dateRange: "Week 10",
      summary: "Refining autonomous fail-safes (automatic return-to-base on loss of signal) and optimizing jammer multi-band sweeps.",
      tasks: [
        "Implement return-to-base SLAM routines when operator signal drops below -90dBm.",
        "Optimize triple-band jammer sweep to cover GSM, CDMA, and DCS simultaneously.",
        "Perform extensive debug sessions on visual localization odometry algorithms."
      ],
      metrics: [
        { label: "FAILSAFE_TIMEOUT", value: "1.5s" },
        { label: "SWEEP_RANGE", value: "3 Bands" },
        { label: "LOCALIZATION_ACC", value: "98.7%" }
      ],
      logs: [
        "Signal loss mock test: Autonomous path re-planning triggered successfully.",
        "Frequency hopping debug: Reduced sweep delays to 2ms per hop.",
        "Odometry sync check: Corrected clock offset on LiDAR timestamps."
      ]
    },
    {
      week: 11,
      title: "Final Demonstrations & Defense Delivery",
      phase: "Phase 05: Validation & Deployment",
      status: "PENDING",
      dateRange: "Week 11",
      summary: "Finalizing documentation and conducting live demonstration of autonomous target-seeking and selective communication denial.",
      tasks: [
        "Submit final thesis report to the academic supervisor committee.",
        "Prepare slide presentations, block diagrams, and media clips of physical trials.",
        "Deliver live demonstration of autonomous jamming and hazard avoidance."
      ],
      metrics: [
        { label: "DEFENSE_STATUS", value: "READY" },
        { label: "REPORT_FINAL", value: "SUBMIT" },
        { label: "DEMO_SUCCESS", value: "100%" }
      ],
      logs: [
        "Final report compile: PDF compiled with all telemetry charts.",
        "Slide deck finalized: Embedded dynamic navigation path animations.",
        "Aegis system secure: Core mission fully accomplished."
      ]
    }
  ];

  const activeWeekInfo = selectedWeek !== null ? weeksData[selectedWeek - 1] : weeksData.find(w => w.status === "ACTIVE") || weeksData[weeksData.length - 1];

  return (
    <div className="relative flex-1 py-16 sm:py-24 overflow-hidden">
      {/* Cyberpunk background glow visual accents */}
      <div className="absolute top-0 left-1/3 -z-10 h-[350px] w-[500px] rounded-full bg-green-500/5 blur-3xl" />
      <div className="absolute bottom-10 right-1/4 -z-10 h-[250px] w-[400px] rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Console */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-sm border border-green-500/30 bg-green-950/20 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-green-400 mb-6">
            <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            telemetry: system_timeline_loaded
          </div>
          <h1 className="text-3xl font-extrabold tracking-wider sm:text-5xl font-mono uppercase text-white drop-shadow-[0_0_15px_rgba(34,197,94,0.15)]">
            // WEEKLY_UPDATES
          </h1>
          <p className="mt-4 font-mono text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Project Aegis operational timeline, tasks breakdown, and weekly integration log. View milestones dynamically derived from the system Gantt chart.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("timeline")}
            className={`font-mono text-xs font-bold tracking-wider px-6 py-2.5 rounded-none border transition-all ${
              activeTab === "timeline"
                ? "bg-green-500 text-black border-green-500 shadow-[0_0_12px_rgba(0,255,65,0.3)]"
                : "bg-transparent text-green-500 border-green-500/30 hover:bg-green-500/10 hover:border-green-500/50"
            }`}
          >
            [01] VISUAL_TIMELINE
          </button>
          <button
            onClick={() => setActiveTab("gantt")}
            className={`font-mono text-xs font-bold tracking-wider px-6 py-2.5 rounded-none border transition-all ${
              activeTab === "gantt"
                ? "bg-green-500 text-black border-green-500 shadow-[0_0_12px_rgba(0,255,65,0.3)]"
                : "bg-transparent text-green-500 border-green-500/30 hover:bg-green-500/10 hover:border-green-500/50"
            }`}
          >
            [02] GANTT_CHART
          </button>
        </div>

        {/* --- TABS --- */}

        {/* Tab 01: Visual Timeline */}
        {activeTab === "timeline" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Timeline Left Rail */}
            <div className="lg:col-span-2 space-y-6 max-h-[800px] overflow-y-auto pr-4 custom-scrollbar">
              <div className="relative border-l border-green-500/20 pl-6 ml-4 space-y-8 py-2">
                {weeksData.map((item) => {
                  const isActive = item.week === activeWeekInfo.week;
                  const isCompleted = item.status === "COMPLETED";
                  
                  return (
                    <div 
                      key={item.week}
                      onClick={() => setSelectedWeek(item.week)}
                      className={`relative group cursor-pointer p-5 rounded-sm border transition-all duration-300 ${
                        isActive
                          ? "bg-green-950/15 border-green-500 shadow-[0_0_15px_rgba(0,255,65,0.08)]"
                          : "bg-black/40 border-green-500/10 hover:border-green-500/30 hover:bg-black/60"
                      }`}
                    >
                      {/* Timeline Dot Connector */}
                      <div className={`absolute -left-[31px] top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 bg-black flex items-center justify-center transition-all ${
                        isActive
                          ? "border-green-400 scale-125 shadow-[0_0_8px_rgba(0,255,65,0.8)]"
                          : isCompleted
                            ? "border-green-500/50 bg-green-500/20"
                            : "border-zinc-700 bg-zinc-900"
                      }`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-green-400" : isCompleted ? "bg-green-500/40" : "bg-transparent"}`} />
                      </div>

                      {/* Header */}
                      <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                        <span className="font-mono text-[10px] text-green-400/60 uppercase tracking-widest">
                          {item.phase}
                        </span>
                        
                        <div className="flex gap-2 items-center">
                          <span className="font-mono text-[9px] text-zinc-500">{item.dateRange}</span>
                          <span className={`rounded-none px-2 py-0.5 font-mono text-[8px] font-bold border ${
                            item.status === "COMPLETED"
                              ? "bg-green-950/30 border-green-500/40 text-green-400"
                              : item.status === "ACTIVE"
                                ? "bg-amber-950/30 border-amber-500/40 text-amber-400 animate-pulse"
                                : "bg-zinc-900/40 border-zinc-700/40 text-zinc-500"
                          }`}>
                            {item.status}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-mono font-bold text-white text-sm group-hover:text-green-400 transition-colors">
                        WEEK {String(item.week).padStart(2, "0")}: {item.title}
                      </h3>
                      <p className="mt-2 font-mono text-[11px] text-zinc-400 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Timeline Right Rail (Details Panel) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-sm border border-green-500/20 bg-black/80 shadow-2xl p-6 space-y-6 backdrop-blur-md">
                
                {/* Console header */}
                <div className="flex justify-between items-center border-b border-green-500/10 pb-4">
                  <div className="font-mono">
                    <span className="text-[9px] text-green-500/40 uppercase tracking-wider">TELEMETRY_LOG</span>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wide">WEEK_0{activeWeekInfo.week}_DETAILS</h3>
                  </div>
                  <span className="font-mono text-[9px] text-green-400 bg-green-950/40 border border-green-500/20 px-2.5 py-1">
                    SYS_ACTIVE
                  </span>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2">
                  {activeWeekInfo.metrics.map((metric, idx) => (
                    <div key={idx} className="border border-green-500/10 bg-green-950/5 p-2 rounded-sm text-center">
                      <p className="font-mono text-[8px] text-zinc-500 uppercase">{metric.label}</p>
                      <p className="font-mono text-xs font-black text-green-400 mt-1">{metric.value}</p>
                    </div>
                  ))}
                </div>

                {/* Tasks List */}
                <div className="space-y-3">
                  <h4 className="font-mono text-[9px] font-bold text-green-400 uppercase tracking-widest">// TASK_LOG_DETAILS</h4>
                  <ul className="space-y-2 font-mono text-[10px] text-zinc-400 pl-3">
                    {activeWeekInfo.tasks.map((task, idx) => (
                      <li key={idx} className="relative pl-4 leading-relaxed">
                        <span className="absolute left-0 top-0 text-green-500/60">&gt;</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* System Logs */}
                <div className="space-y-3 pt-4 border-t border-green-500/10">
                  <h4 className="font-mono text-[9px] font-bold text-green-400 uppercase tracking-widest">// RAW_CONSOLE_OUTPUT</h4>
                  <div className="bg-green-950/10 border border-green-500/10 p-3 rounded-sm font-mono text-[9px] text-zinc-400 space-y-1.5 max-h-[160px] overflow-y-auto custom-scrollbar">
                    {activeWeekInfo.logs.map((log, idx) => (
                      <p key={idx} className="leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis">
                        <span className="text-green-500/70 font-semibold">[LOG]</span> {log}
                      </p>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* Tab 02: Interactive Gantt Chart */}
        {activeTab === "gantt" && (
          <div className="max-w-6xl mx-auto rounded-sm border border-green-500/20 bg-black/80 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
            
            {/* Console Header */}
            <div className="flex justify-between items-center border-b border-green-500/10 pb-4 mb-6">
              <div className="font-mono">
                <span className="text-[9px] text-green-500/40 uppercase tracking-wider">SCHEDULER // ENGINE_V1</span>
                <h3 className="text-sm font-bold text-white uppercase tracking-wide">AEGIS_PROJECT_GANTT</h3>
              </div>
              <span className="font-mono text-[9px] text-green-400 bg-green-950/40 border border-green-500/20 px-2.5 py-1">
                COMPLETED: 82%
              </span>
            </div>

            {/* Gantt Grid */}
            <div className="overflow-x-auto custom-scrollbar pb-4">
              <div className="min-w-[760px] space-y-1 font-mono text-[10px]">
                
                {/* Gantt Header Columns */}
                <div className="grid grid-cols-12 gap-1 pb-3 border-b border-green-500/10 text-zinc-500 text-center font-bold">
                  <div className="col-span-4 text-left pl-2">TASK DESCRIPTION</div>
                  {[...Array(11)].map((_, i) => (
                    <div key={i} className="col-span-1 hover:text-green-400 transition-colors">
                      W{i + 1}
                    </div>
                  ))}
                </div>

                {/* Gantt Rows */}
                <div className="space-y-2 pt-3">
                  {ganttTasks.map((task, rowIdx) => (
                    <div 
                      key={rowIdx}
                      className="grid grid-cols-12 gap-1 items-center py-2 rounded-sm border border-transparent hover:border-green-500/10 hover:bg-green-950/5 transition-all"
                    >
                      {/* Task Label */}
                      <div className="col-span-4 text-white font-bold pl-2 select-none">
                        {task.name}
                      </div>

                      {/* Timeline Weeks Cells */}
                      {[...Array(11)].map((_, colIdx) => {
                        const weekNum = colIdx + 1;
                        const isActive = task.weeks.includes(weekNum);
                        
                        return (
                          <div 
                            key={colIdx} 
                            className="col-span-1 h-5 flex items-center justify-center relative group"
                          >
                            {isActive ? (
                              <div 
                                className={`w-full h-3 rounded-none transition-all duration-300 hover:scale-y-125 ${
                                  task.color === "blue" 
                                    ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" 
                                    : "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                                }`}
                                title={`${task.name} is active in Week ${weekNum}`}
                              />
                            ) : (
                              <div className="w-full h-[1px] bg-zinc-800/40" />
                            )}
                          </div>
                        );
                      })}

                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Gantt Footer Info */}
            <div className="mt-8 pt-6 border-t border-green-500/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-500">
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
                  <span>Primary Task Scope</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                  <span>Operational Integration</span>
                </div>
              </div>
              <div>
                <span>*Hover over active blocks to view schedule directives</span>
              </div>
            </div>

          </div>
        )}

        {/* Dynamic Back Link */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-sm border border-green-500/40 bg-black/60 px-6 py-2.5 font-mono text-xs font-bold tracking-widest text-green-400 transition-all hover:bg-green-500/10 hover:border-green-500 hover:shadow-[0_0_12px_rgba(0,255,65,0.15)]"
          >
            &larr; BACK_TO_DASHBOARD
          </Link>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(34, 197, 94, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(34, 197, 94, 0.15);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(34, 197, 94, 0.35);
        }
      `}</style>
    </div>
  );
}
