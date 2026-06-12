"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface ChartDataPoint {
  label: string;
  value: number; // percentage
  count: number; // calculated response count
  color: string;
  glowColor: string;
}

export default function SurveyDataClient() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "security" | "features" | "utility" | "systems" | "environments" | "correlation" | "disturbances" | "occupation">("all");
  const [hoveredSegment, setHoveredSegment] = useState<{ chartId: string; index: number; label: string; value: number; count: number } | null>(null);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);

  useEffect(() => {
    setIsLoaded(true);
    addLog("SURVEY_DB: INITIALIZING SECURE LINK...");
    addLog("SYS_DECRYPT: PARSING SURVEY DIAGRAMS [36 RESPONSE ENTRIES]...");
    addLog("TELEMETRY: RENDER STACK ACTIVE");
  }, []);

  const addLog = (msg: string) => {
    const time = new Date().toLocaleTimeString();
    setConsoleLogs((prev) => [`[${time}] ${msg}`, ...prev.slice(0, 14)]);
  };

  // 1. Q1: Security Operations Improvement (Donut Chart)
  const q1Data: ChartDataPoint[] = [
    { label: "Strongly Agree", value: 61.5, count: 22, color: "#22c55e", glowColor: "rgba(34,197,94,0.4)" }, // Neon Green
    { label: "Agree", value: 23.1, count: 8, color: "#06b6d4", glowColor: "rgba(6,182,212,0.4)" },  // Neon Cyan
    { label: "Neutral", value: 15.4, count: 6, color: "#f59e0b", glowColor: "rgba(245,158,11,0.4)" },  // Neon Amber
  ];

  // 2. Q2: Feature Importance (Horizontal Bar Chart)
  const q2Data: ChartDataPoint[] = [
    { label: "Remote Control", value: 30.8, count: 11, color: "#3b82f6", glowColor: "rgba(59,130,246,0.4)" },
    { label: "Battery Life", value: 23.1, count: 8, color: "#a855f7", glowColor: "rgba(168,85,247,0.4)" },
    { label: "Mobility", value: 15.4, count: 6, color: "#22c55e", glowColor: "rgba(34,197,94,0.4)" },
    { label: "Detection Accuracy", value: 15.4, count: 6, color: "#eab308", glowColor: "rgba(234,179,8,0.4)" },
    { label: "Ease of Operation", value: 15.4, count: 5, color: "#ec4899", glowColor: "rgba(236,72,153,0.4)" },
  ];

  // 3. Q3: Utility for RF Detection in Restricted Areas (Pie Chart)
  const q3Data: ChartDataPoint[] = [
    { label: "Useful", value: 53.8, count: 19, color: "#06b6d4", glowColor: "rgba(6,182,212,0.4)" },
    { label: "Very Useful", value: 46.2, count: 17, color: "#22c55e", glowColor: "rgba(34,197,94,0.4)" },
  ];

  // 4. Q4: Mobile System vs Fixed Installation (Line / Area Curve)
  const q4Data: ChartDataPoint[] = [
    { label: "Strongly Agree", value: 23.1, count: 8, color: "#22c55e", glowColor: "rgba(34,197,94,0.4)" },
    { label: "Agree", value: 53.8, count: 19, color: "#06b6d4", glowColor: "rgba(6,182,212,0.4)" },
    { label: "Neutral", value: 23.1, count: 9, color: "#f59e0b", glowColor: "rgba(245,158,11,0.4)" },
    { label: "Disagree", value: 0, count: 0, color: "#ef4444", glowColor: "rgba(239,68,68,0.4)" },
    { label: "Strongly Disagree", value: 0, count: 0, color: "#ef4444", glowColor: "rgba(239,68,68,0.4)" },
  ];

  // 5. Q5: Target Environments (Radar/Spider Chart)
  const q5Data: ChartDataPoint[] = [
    { label: "Military / Security Zones", value: 46.2, count: 17, color: "#22c55e", glowColor: "rgba(34,197,94,0.4)" },
    { label: "Examination Halls", value: 30.8, count: 11, color: "#06b6d4", glowColor: "rgba(6,182,212,0.4)" },
    { label: "Hospitals", value: 15.4, count: 5, color: "#f59e0b", glowColor: "rgba(245,158,11,0.4)" },
    { label: "Meeting Rooms", value: 7.7, count: 3, color: "#ec4899", glowColor: "rgba(236,72,153,0.4)" },
    { label: "Religious Places", value: 0, count: 0, color: "#ef4444", glowColor: "rgba(239,68,68,0.4)" },
    { label: "Other", value: 0, count: 0, color: "#ef4444", glowColor: "rgba(239,68,68,0.4)" },
  ];

  // 6. System Parameter Correlation (Bubble Chart)
  // X: Features (0: Mobility, 1: Battery, 2: Remote, 3: Detection)
  // Y: Environments (0: Military, 1: Exam, 2: Hospital, 3: Meetings)
  const correlationBubbles = [
    { xLabel: "Mobility", yLabel: "Military", x: 60, y: 70, size: 24, overlap: 65, color: "#22c55e" },
    { xLabel: "Mobility", yLabel: "Exam Hall", x: 60, y: 150, size: 12, overlap: 30, color: "#06b6d4" },
    { xLabel: "Battery", yLabel: "Military", x: 160, y: 70, size: 30, overlap: 85, color: "#22c55e" },
    { xLabel: "Battery", yLabel: "Hospital", x: 160, y: 230, size: 22, overlap: 60, color: "#f59e0b" },
    { xLabel: "Remote Control", yLabel: "Military", x: 260, y: 70, size: 32, overlap: 90, color: "#22c55e" },
    { xLabel: "Remote Control", yLabel: "Exam Hall", x: 260, y: 150, size: 26, overlap: 70, color: "#06b6d4" },
    { xLabel: "Remote Control", yLabel: "Meetings", x: 260, y: 310, size: 18, overlap: 45, color: "#ec4899" },
    { xLabel: "Detection", yLabel: "Military", x: 360, y: 70, size: 28, overlap: 80, color: "#22c55e" },
    { xLabel: "Detection", yLabel: "Exam Hall", x: 360, y: 150, size: 34, overlap: 95, color: "#06b6d4" },
    { xLabel: "Detection", yLabel: "Hospital", x: 360, y: 230, size: 20, overlap: 50, color: "#f59e0b" },
  ];

  // 7. Q6: Disturbance Frequency (Dot Matrix/Waffle Chart) - mapped to 'q7'
  const q6Data: ChartDataPoint[] = [
    { label: "Occasionally", value: 53.8, count: 19, color: "#22c55e", glowColor: "rgba(34,197,94,0.4)" },
    { label: "Frequently", value: 46.2, count: 17, color: "#06b6d4", glowColor: "rgba(6,182,212,0.4)" },
  ];

  // 8. Q7: Respondent Occupation (Radial Concentric Gauge Chart) - mapped to 'q8'
  const q7Data: ChartDataPoint[] = [
    { label: "Student", value: 53.8, count: 19, color: "#22c55e", glowColor: "rgba(34,197,94,0.4)" },
    { label: "Engineer / IT Professional", value: 46.2, count: 17, color: "#06b6d4", glowColor: "rgba(6,182,212,0.4)" },
  ];

  // DONUT CHART CALCULATIONS (Circumference = 2 * PI * r)
  const donutRadius = 50;
  const donutCirc = 2 * Math.PI * donutRadius; // 314.159

  // PIE CHART CALCULATIONS (Using strokeWidth = radius of circle for full slice rendering)
  const pieRadius = 35;
  const pieCirc = 2 * Math.PI * pieRadius; // 219.911

  // RADAR CHART CONFIG
  const radarCenter = 150;
  const radarMaxRadius = 100;
  const radarAxes = ["Military", "Exam Hall", "Hospitals", "Meetings", "Religious", "Other"];

  const getRadarPoint = (index: number, valPercentage: number) => {
    const angle = (index * 2 * Math.PI) / 6 - Math.PI / 2; // offset -90deg so 1st axis is up
    const r = (valPercentage / 100) * radarMaxRadius;
    const x = radarCenter + r * Math.cos(angle);
    const y = radarCenter + r * Math.sin(angle);
    return { x, y };
  };

  const getRadarPath = () => {
    const points = q5Data.map((d, i) => {
      const pt = getRadarPoint(i, d.value);
      return `${pt.x},${pt.y}`;
    });
    return points.join(" ");
  };

  return (
    <div className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8 font-mono text-zinc-300 relative overflow-hidden select-none">
      {/* Background Matrix/Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.95),rgba(0,0,0,0.99))] z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(0deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:100%_4px,32px_32px,32px_32px] pointer-events-none z-0" />

      {/* SVG Neon Glow Filters */}
      <svg className="hidden">
        <defs>
          <filter id="cyber-glow-green" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="cyber-glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="cyber-glow-amber" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Terminal Header */}
        <div className="border border-green-500/30 bg-black/60 p-4 mb-6 rounded-sm flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_0_15px_rgba(34,197,94,0.05)] border-b-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
              <h1 className="text-xl sm:text-2xl font-bold tracking-widest bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                SURVEY TELEMETRY CONSOLE
              </h1>
            </div>
            <p className="text-xs text-zinc-500 mt-1">
              SECURE DECRYPT // PROJECT AEGIS OPERATIONAL FEASIBILITY DATABASE
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-[10px] text-zinc-400 border-l border-green-500/20 pl-0 md:pl-6 w-full md:w-auto justify-between md:justify-start">
            <div>
              <span className="text-zinc-600 block">ENTRIES:</span>
              <span className="text-green-400 font-bold">36 RESPONDENTS</span>
            </div>
            <div>
              <span className="text-zinc-600 block">SECTOR:</span>
              <span className="text-cyan-400 font-bold">OPERATIONAL_FEEDBACK</span>
            </div>
            <div>
              <span className="text-zinc-600 block">STATUS:</span>
              <span className="text-amber-400 font-bold animate-pulse">DECRYPTED</span>
            </div>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-green-500/10 pb-4">
          {[
            { id: "all", label: "[ALL METRICS]" },
            { id: "security", label: "[Q1: OPERATIONAL FEASIBILITY]" },
            { id: "features", label: "[Q2: FEATURES PRIORITY]" },
            { id: "utility", label: "[Q3: COVERT DETECTION]" },
            { id: "systems", label: "[Q4: INFRASTRUCTURE TYPE]" },
            { id: "environments", label: "[Q5: TARGET ZONES]" },
            { id: "correlation", label: "[SYS: PARAM CORRELATION]" },
            { id: "disturbances", label: "[Q6: DISTURBANCE FREQ]" },
            { id: "occupation", label: "[Q7: DEMOGRAPHICS]" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                addLog(`FILTER: Shifted to ${tab.label}`);
              }}
              className={`px-3 py-1.5 text-xs font-mono border transition-all duration-200 cursor-pointer rounded-sm ${
                activeTab === tab.id
                  ? "bg-green-500/10 border-green-500 text-green-400 shadow-[0_0_8px_rgba(34,197,94,0.2)]"
                  : "border-zinc-800 text-zinc-500 hover:border-green-500/40 hover:text-green-500/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left / Middle: Charts Grid */}
          <div className="lg:col-span-2 space-y-6">

            {/* Q1: Donut Chart */}
            {(activeTab === "all" || activeTab === "security") && (
              <div className="border border-green-500/20 bg-black/40 p-6 rounded-sm relative group hover:border-green-500/40 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                {/* Tech corner accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-400" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-green-400" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-green-400" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-green-400" />
                
                <span className="text-[10px] text-green-500/40 block mb-2 font-semibold">Q1 // FEASIBILITY_INDEX</span>
                <h2 className="text-sm sm:text-base font-semibold text-zinc-100 mb-6 tracking-wide uppercase">
                  Do you think autonomous robots can improve security operations?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  {/* SVG Donut */}
                  <div className="flex justify-center relative py-4">
                    <svg width="200" height="200" viewBox="0 0 120 120" className="transform -rotate-90">
                      {/* Base shadow circle */}
                      <circle cx="60" cy="60" r={donutRadius} fill="transparent" stroke="#121214" strokeWidth="10" />
                      
                      {/* Chained donut segments */}
                      {q1Data.map((d, index) => {
                        // Cumulative offset calculation
                        const previousTotal = q1Data.slice(0, index).reduce((acc, curr) => acc + curr.value, 0);
                        const offset = donutCirc - (donutCirc * previousTotal) / 100;
                        const dashArray = `${(donutCirc * d.value) / 100} ${donutCirc}`;

                        return (
                          <circle
                            key={d.label}
                            cx="60"
                            cy="60"
                            r={donutRadius}
                            fill="transparent"
                            stroke={d.color}
                            strokeWidth={hoveredSegment?.chartId === "q1" && hoveredSegment?.index === index ? "14" : "10"}
                            strokeDasharray={dashArray}
                            strokeDashoffset={isLoaded ? offset : donutCirc}
                            className="transition-all duration-700 ease-out cursor-pointer"
                            onMouseEnter={() => {
                              setHoveredSegment({ chartId: "q1", index, label: d.label, value: d.value, count: d.count });
                              addLog(`INSPECT: Q1 -> ${d.label} [${d.value}%]`);
                            }}
                            onMouseLeave={() => setHoveredSegment(null)}
                            style={{ filter: `drop-shadow(0 0 4px ${d.color}33)` }}
                          />
                        );
                      })}
                    </svg>

                    {/* Central Text Value */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      {hoveredSegment?.chartId === "q1" ? (
                        <>
                          <span className="text-xl sm:text-2xl font-bold text-zinc-100" style={{ textShadow: `0 0 8px ${hoveredSegment.count > 10 ? '#22c55e' : '#06b6d4'}` }}>
                            {hoveredSegment.value}%
                          </span>
                          <span className="text-[9px] text-zinc-500 uppercase tracking-widest mt-0.5">
                            {hoveredSegment.count} Resp
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-lg font-bold text-green-400">61.5%</span>
                          <span className="text-[8px] text-green-500/50 uppercase tracking-widest mt-0.5">
                            STRONGLY AGREE
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Interactive Legends */}
                  <div className="space-y-3">
                    {q1Data.map((d, index) => {
                      const isHovered = hoveredSegment?.chartId === "q1" && hoveredSegment?.index === index;
                      return (
                        <div
                          key={d.label}
                          onMouseEnter={() => setHoveredSegment({ chartId: "q1", index, label: d.label, value: d.value, count: d.count })}
                          onMouseLeave={() => setHoveredSegment(null)}
                          className={`p-2.5 rounded-sm border transition-all duration-150 cursor-pointer ${
                            isHovered
                              ? "bg-green-500/5 border-green-500/40 shadow-[inset_0_0_8px_rgba(34,197,94,0.1)] translate-x-1"
                              : "border-zinc-800 bg-zinc-950/20 hover:border-zinc-700"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className="h-2.5 w-2.5 rounded-xs" style={{ backgroundColor: d.color, boxShadow: `0 0 6px ${d.color}` }} />
                              <span className="text-xs font-semibold text-zinc-300">{d.label}</span>
                            </div>
                            <div className="text-right">
                              <span className="text-xs font-bold text-zinc-100">{d.value}%</span>
                              <span className="text-[9px] text-zinc-500 block">({d.count} Res)</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Q2: Horizontal Bar Chart */}
            {(activeTab === "all" || activeTab === "features") && (
              <div className="border border-green-500/20 bg-black/40 p-6 rounded-sm relative group hover:border-green-500/40 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-400" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-green-400" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-green-400" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-green-400" />

                <span className="text-[10px] text-green-500/40 block mb-2 font-semibold">Q2 // PARAMETER_RANKINGS</span>
                <h2 className="text-sm sm:text-base font-semibold text-zinc-100 mb-6 tracking-wide uppercase">
                  Which feature is most important in such a robot?
                </h2>

                <div className="space-y-5 relative">
                  {/* Grid Lines */}
                  <div className="absolute inset-y-0 left-[140px] right-0 flex justify-between pointer-events-none opacity-20">
                    <span className="h-full w-[1px] border-l border-dashed border-zinc-700" />
                    <span className="h-full w-[1px] border-l border-dashed border-zinc-700" />
                    <span className="h-full w-[1px] border-l border-dashed border-zinc-700" />
                    <span className="h-full w-[1px] border-l border-dashed border-zinc-700" />
                    <span className="h-full w-[1px] border-l border-dashed border-zinc-700" />
                  </div>

                  {q2Data.map((d, index) => {
                    const isHovered = hoveredSegment?.chartId === "q2" && hoveredSegment?.index === index;
                    return (
                      <div
                        key={d.label}
                        onMouseEnter={() => {
                          setHoveredSegment({ chartId: "q2", index, label: d.label, value: d.value, count: d.count });
                          addLog(`INSPECT: Q2 -> ${d.label} [${d.value}%]`);
                        }}
                        onMouseLeave={() => setHoveredSegment(null)}
                        className="flex flex-col sm:flex-row sm:items-center gap-2 cursor-pointer group/bar"
                      >
                        <span className="w-[140px] text-xs font-semibold text-zinc-400 truncate group-hover/bar:text-zinc-200 transition-colors">
                          {d.label}
                        </span>

                        <div className="flex-1 h-6 bg-zinc-950/80 border border-zinc-800 rounded-sm relative overflow-hidden group-hover/bar:border-zinc-700 transition-all flex items-center pr-3">
                          {/* Pulsing glow background bar */}
                          <div
                            className="h-full transition-all duration-1000 ease-out"
                            style={{
                              width: isLoaded ? `${d.value}%` : "0%",
                              backgroundColor: d.color,
                              boxShadow: isHovered ? `0 0 12px ${d.color}` : `0 0 4px ${d.color}22`,
                              opacity: isHovered ? 0.95 : 0.8
                            }}
                          />
                          
                          {/* Absolute readout text inside bar if space permits, else next to it */}
                          <span className="absolute right-3 text-[10px] font-bold text-zinc-100 flex items-center gap-2">
                            <span>{d.value}%</span>
                            <span className="text-zinc-500 font-normal">({d.count} Res)</span>
                          </span>
                        </div>
                      </div>
                    );
                  })}
                  
                  {/* Grid labels */}
                  <div className="flex justify-between text-[9px] text-zinc-600 pl-[140px] pt-2">
                    <span>0%</span>
                    <span>10%</span>
                    <span>20%</span>
                    <span>30%</span>
                    <span>40%</span>
                  </div>
                </div>
              </div>
            )}

            {/* Q3: Pie Chart */}
            {(activeTab === "all" || activeTab === "utility") && (
              <div className="border border-green-500/20 bg-black/40 p-6 rounded-sm relative group hover:border-green-500/40 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-400" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-green-400" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-green-400" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-green-400" />

                <span className="text-[10px] text-green-500/40 block mb-2 font-semibold">Q3 // UTILITY_SCORE</span>
                <h2 className="text-sm sm:text-base font-semibold text-zinc-100 mb-6 tracking-wide uppercase">
                  How useful would a mobile robot be for detecting communication devices in restricted areas?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="flex justify-center relative py-4">
                    <svg width="180" height="180" viewBox="0 0 100 100" className="transform -rotate-90">
                      {/* Base shadow */}
                      <circle cx="50" cy="50" r={pieRadius} fill="transparent" stroke="#121214" strokeWidth={pieRadius * 2} />
                      
                      {/* Render slices using nested stroke circles (Radius 35, stroke-width 70 fills the whole circle) */}
                      {q3Data.map((d, index) => {
                        const previousTotal = q3Data.slice(0, index).reduce((acc, curr) => acc + curr.value, 0);
                        const offset = pieCirc - (pieCirc * previousTotal) / 100;
                        const dashArray = `${(pieCirc * d.value) / 100} ${pieCirc}`;
                        const isHovered = hoveredSegment?.chartId === "q3" && hoveredSegment?.index === index;

                        return (
                          <circle
                            key={d.label}
                            cx="50"
                            cy="50"
                            r={pieRadius}
                            fill="transparent"
                            stroke={d.color}
                            strokeWidth={isHovered ? 76 : 70}
                            strokeDasharray={dashArray}
                            strokeDashoffset={isLoaded ? offset : pieCirc}
                            className="transition-all duration-700 ease-out cursor-pointer origin-center hover:scale-[1.03]"
                            onMouseEnter={() => {
                              setHoveredSegment({ chartId: "q3", index, label: d.label, value: d.value, count: d.count });
                              addLog(`INSPECT: Q3 -> ${d.label} [${d.value}%]`);
                            }}
                            onMouseLeave={() => setHoveredSegment(null)}
                            style={{ filter: `drop-shadow(0 0 4px ${d.color}22)` }}
                          />
                        );
                      })}
                    </svg>

                    {/* Telemetry Center Hover Text overlay */}
                    {hoveredSegment?.chartId === "q3" && (
                      <div className="absolute bottom-2 bg-black/90 border border-green-500/20 px-2 py-0.5 rounded-sm text-[9px] text-green-400">
                        {hoveredSegment.label}: {hoveredSegment.value}%
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    {q3Data.map((d, index) => {
                      const isHovered = hoveredSegment?.chartId === "q3" && hoveredSegment?.index === index;
                      return (
                        <div
                          key={d.label}
                          onMouseEnter={() => setHoveredSegment({ chartId: "q3", index, label: d.label, value: d.value, count: d.count })}
                          onMouseLeave={() => setHoveredSegment(null)}
                          className={`p-3 rounded-sm border transition-all duration-150 cursor-pointer ${
                            isHovered
                              ? "bg-green-500/5 border-green-500/40 shadow-[inset_0_0_8px_rgba(34,197,94,0.1)] translate-x-1"
                              : "border-zinc-800 bg-zinc-950/20 hover:border-zinc-700"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: d.color, boxShadow: `0 0 6px ${d.color}` }} />
                              <span className="text-xs font-semibold text-zinc-300">{d.label}</span>
                            </div>
                            <div className="text-right">
                              <span className="text-xs font-bold text-zinc-100">{d.value}%</span>
                              <span className="text-[9px] text-zinc-500 block">({d.count} Res)</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Q4: Line / Area Chart */}
            {(activeTab === "all" || activeTab === "systems") && (
              <div className="border border-green-500/20 bg-black/40 p-6 rounded-sm relative group hover:border-green-500/40 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-400" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-green-400" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-green-400" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-green-400" />

                <span className="text-[10px] text-green-500/40 block mb-2 font-semibold">Q4 // DEPLOYMENT_PREFERENCE</span>
                <h2 className="text-sm sm:text-base font-semibold text-zinc-100 mb-6 tracking-wide uppercase">
                  Do you believe a mobile robotic system could improve monitoring and control compared to fixed installations?
                </h2>

                <div className="relative pt-4 overflow-x-auto">
                  <svg width="550" height="220" className="mx-auto block">
                    {/* Area fill gradient definition */}
                    <defs>
                      <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Horizontal Faint grid lines */}
                    <line x1="50" y1="30" x2="500" y2="30" stroke="#27272a" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="50" y1="80" x2="500" y2="80" stroke="#27272a" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="50" y1="130" x2="500" y2="130" stroke="#27272a" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="50" y1="180" x2="500" y2="180" stroke="#27272a" strokeWidth="1" />

                    {/* Grid values */}
                    <text x="25" y="34" className="fill-zinc-600 text-[8px] font-bold">60%</text>
                    <text x="25" y="84" className="fill-zinc-600 text-[8px] font-bold">40%</text>
                    <text x="25" y="134" className="fill-zinc-600 text-[8px] font-bold">20%</text>
                    <text x="25" y="184" className="fill-zinc-600 text-[8px] font-bold">0%</text>

                    {/* Shaded Area under the path */}
                    <path
                      d="M 50 180 L 50 122.25 L 162.5 45.5 L 275 122.25 L 387.5 180 L 500 180 Z"
                      fill="url(#areaGrad)"
                      className="transition-all duration-1000 ease-out"
                      style={{ opacity: isLoaded ? 1 : 0 }}
                    />

                    {/* Glowing Connection Line */}
                    <path
                      d="M 50 122.25 L 162.5 45.5 L 275 122.25 L 387.5 180 L 500 180"
                      fill="none"
                      stroke="#06b6d4"
                      strokeWidth="3"
                      strokeDasharray="1000"
                      strokeDashoffset={isLoaded ? 0 : 1000}
                      className="transition-all duration-[1200ms] ease-in-out"
                      style={{ filter: "drop-shadow(0 0 6px rgba(6,182,212,0.6))" }}
                    />

                    {/* Interactive Plot Nodes (Circles) */}
                    {[
                      { label: "Strongly Agree", val: 23.1, count: 8, x: 50, y: 122.25, color: "#22c55e" },
                      { label: "Agree", val: 53.8, count: 19, x: 162.5, y: 45.5, color: "#06b6d4" },
                      { label: "Neutral", val: 23.1, count: 9, x: 275, y: 122.25, color: "#f59e0b" },
                      { label: "Disagree", val: 0, count: 0, x: 387.5, y: 180, color: "#ef4444" },
                      { label: "Strongly Disagree", val: 0, count: 0, x: 500, y: 180, color: "#ef4444" }
                    ].map((pt, i) => {
                      const isHovered = hoveredSegment?.chartId === "q4" && hoveredSegment?.index === i;
                      return (
                        <g key={pt.label} className="cursor-pointer">
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r={isHovered ? 8 : 5}
                            fill="#000000"
                            stroke={pt.color}
                            strokeWidth="3"
                            className="transition-all duration-200"
                            onMouseEnter={() => {
                              setHoveredSegment({ chartId: "q4", index: i, label: pt.label, value: pt.val, count: pt.count });
                              addLog(`INSPECT: Q4 -> ${pt.label} [${pt.val}%]`);
                            }}
                            onMouseLeave={() => setHoveredSegment(null)}
                            style={{ filter: `drop-shadow(0 0 8px ${pt.color})` }}
                          />
                          
                          {/* Pulsing node background ring */}
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r={isHovered ? 14 : 0}
                            fill="transparent"
                            stroke={pt.color}
                            strokeWidth="1"
                            className="animate-ping opacity-30 pointer-events-none"
                          />
                        </g>
                      );
                    })}

                    {/* X-Axis Labels */}
                    <text x="50" y="202" textAnchor="middle" className="fill-zinc-400 text-[8px] font-mono">STRONGLY AGREE</text>
                    <text x="162" y="202" textAnchor="middle" className="fill-zinc-400 text-[8px] font-mono">AGREE</text>
                    <text x="275" y="202" textAnchor="middle" className="fill-zinc-400 text-[8px] font-mono">NEUTRAL</text>
                    <text x="387" y="202" textAnchor="middle" className="fill-zinc-400 text-[8px] font-mono">DISAGREE</text>
                    <text x="500" y="202" textAnchor="middle" className="fill-zinc-400 text-[8px] font-mono">STRONGLY DISAGREE</text>
                  </svg>
                </div>

                {/* Legend Console readout */}
                <div className="mt-4 bg-zinc-950/50 border border-zinc-800/60 p-3 rounded-sm text-xs flex flex-wrap gap-4 justify-between items-center">
                  <div className="flex gap-4">
                    <span className="text-zinc-500">CURVE DETECTOR:</span>
                    <span className="text-cyan-400 font-bold">LIP-GAUSSIAN PROFILE</span>
                  </div>
                  {hoveredSegment?.chartId === "q4" ? (
                    <div className="text-green-400 font-bold animate-pulse">
                      {hoveredSegment.label.toUpperCase()}: {hoveredSegment.value}% ({hoveredSegment.count} RESPONDENTS)
                    </div>
                  ) : (
                    <div className="text-zinc-500">HOVER DATA NODES TO PLOT READOUTS</div>
                  )}
                </div>
              </div>
            )}

            {/* Q5: Spider/Radar Chart */}
            {(activeTab === "all" || activeTab === "environments") && (
              <div className="border border-green-500/20 bg-black/40 p-6 rounded-sm relative group hover:border-green-500/40 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-400" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-green-400" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-green-400" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-green-400" />

                <span className="text-[10px] text-green-500/40 block mb-2 font-semibold">Q5 // OPERATIONAL_SECTORS</span>
                <h2 className="text-sm sm:text-base font-semibold text-zinc-100 mb-6 tracking-wide uppercase">
                  In which environments do you think communication control is most important?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="flex justify-center relative">
                    <svg width="300" height="300" viewBox="0 0 300 300" className="block">
                      {/* Hexagonal grid lines (25%, 50%, 75%, 100%) */}
                      {[25, 50, 75, 100].map((radiusPct) => {
                        const pts = radarAxes.map((_, idx) => {
                          const pt = getRadarPoint(idx, radiusPct);
                          return `${pt.x},${pt.y}`;
                        }).join(" ");
                        return (
                          <polygon
                            key={radiusPct}
                            points={pts}
                            fill="transparent"
                            stroke="#27272a"
                            strokeWidth="1"
                            strokeDasharray="2 2"
                          />
                        );
                      })}

                      {/* Radar axes lines */}
                      {radarAxes.map((axis, idx) => {
                        const endPt = getRadarPoint(idx, 100);
                        return (
                          <line
                            key={axis}
                            x1={radarCenter}
                            y1={radarCenter}
                            x2={endPt.x}
                            y2={endPt.y}
                            stroke="#27272a"
                            strokeWidth="1"
                          />
                        );
                      })}

                      {/* Radar polygon shape */}
                      <polygon
                        points={getRadarPath()}
                        fill="rgba(34,197,94,0.15)"
                        stroke="#22c55e"
                        strokeWidth="2.5"
                        className="transition-all duration-1000 ease-out origin-center"
                        style={{
                          transform: isLoaded ? "scale(1)" : "scale(0)",
                          transformOrigin: "150px 150px",
                          filter: "drop-shadow(0 0 6px rgba(34,197,94,0.4))"
                        }}
                      />

                      {/* Radar vertices indicators */}
                      {q5Data.map((d, idx) => {
                        const pt = getRadarPoint(idx, d.value);
                        const isHovered = hoveredSegment?.chartId === "q5" && hoveredSegment?.index === idx;
                        return (
                          <g key={d.label} className="cursor-pointer">
                            <circle
                              cx={pt.x}
                              cy={pt.y}
                              r={isHovered ? 6 : 4}
                              fill="#000"
                              stroke={d.color}
                              strokeWidth="2"
                              onMouseEnter={() => {
                                setHoveredSegment({ chartId: "q5", index: idx, label: d.label, value: d.value, count: d.count });
                                addLog(`INSPECT: Q5 -> ${d.label} [${d.value}%]`);
                              }}
                              onMouseLeave={() => setHoveredSegment(null)}
                            />
                          </g>
                        );
                      })}

                      {/* Vertex labels */}
                      <text x="150" y="32" textAnchor="middle" className="fill-zinc-500 text-[8px] font-mono font-bold">MILITARY</text>
                      <text x="245" y="90" textAnchor="start" className="fill-zinc-500 text-[8px] font-mono font-bold">EXAMS</text>
                      <text x="245" y="215" textAnchor="start" className="fill-zinc-500 text-[8px] font-mono font-bold">HOSPITALS</text>
                      <text x="150" y="276" textAnchor="middle" className="fill-zinc-500 text-[8px] font-mono font-bold">MEETINGS</text>
                      <text x="55" y="215" textAnchor="end" className="fill-zinc-500 text-[8px] font-mono font-bold">RELIGIOUS</text>
                      <text x="55" y="90" textAnchor="end" className="fill-zinc-500 text-[8px] font-mono font-bold">OTHER</text>
                    </svg>
                  </div>

                  <div className="space-y-2.5">
                    {q5Data.map((d, index) => {
                      const isHovered = hoveredSegment?.chartId === "q5" && hoveredSegment?.index === index;
                      return (
                        <div
                          key={d.label}
                          onMouseEnter={() => setHoveredSegment({ chartId: "q5", index, label: d.label, value: d.value, count: d.count })}
                          onMouseLeave={() => setHoveredSegment(null)}
                          className={`p-2 rounded-sm border transition-all duration-150 cursor-pointer ${
                            isHovered
                              ? "bg-green-500/5 border-green-500/40 shadow-[inset_0_0_8px_rgba(34,197,94,0.1)] translate-x-1"
                              : "border-zinc-800 bg-zinc-950/20 hover:border-zinc-700"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-semibold text-zinc-300 truncate max-w-[140px]">{d.label}</span>
                            <div className="text-right">
                              <span className="text-xs font-bold text-zinc-100">{d.value}%</span>
                              <span className="text-[9px] text-zinc-500 block">({d.count} Res)</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Bubble Chart: Parameter Correlation */}
            {(activeTab === "all" || activeTab === "correlation") && (
              <div className="border border-green-500/20 bg-black/40 p-6 rounded-sm relative group hover:border-green-500/40 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-400" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-green-400" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-green-400" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-green-400" />

                <span className="text-[10px] text-green-500/40 block mb-2 font-semibold">SYS // CORRELATION_MATRIX</span>
                <h2 className="text-sm sm:text-base font-semibold text-zinc-100 mb-6 tracking-wide uppercase">
                  Cross-Telemetry: Feature Relevance vs. Operational Target Sectors
                </h2>

                <div className="relative overflow-x-auto pt-4">
                  <svg width="450" height="380" className="mx-auto block">
                    {/* Matrix vertical grid lines */}
                    <line x1="60" y1="40" x2="60" y2="330" stroke="#1f1f23" strokeWidth="1" />
                    <line x1="160" y1="40" x2="160" y2="330" stroke="#1f1f23" strokeWidth="1" />
                    <line x1="260" y1="40" x2="260" y2="330" stroke="#1f1f23" strokeWidth="1" />
                    <line x1="360" y1="40" x2="360" y2="330" stroke="#1f1f23" strokeWidth="1" />

                    {/* Matrix horizontal grid lines */}
                    <line x1="40" y1="70" x2="420" y2="70" stroke="#1f1f23" strokeWidth="1" />
                    <line x1="40" y1="150" x2="420" y2="150" stroke="#1f1f23" strokeWidth="1" />
                    <line x1="40" y1="230" x2="420" y2="230" stroke="#1f1f23" strokeWidth="1" />
                    <line x1="40" y1="310" x2="420" y2="310" stroke="#1f1f23" strokeWidth="1" />

                    {/* Plot Bubbles */}
                    {correlationBubbles.map((bubble, i) => {
                      const isHovered = hoveredSegment?.chartId === "q6" && hoveredSegment?.index === i;
                      return (
                        <g key={i} className="cursor-pointer">
                          <circle
                            cx={bubble.x}
                            cy={bubble.y}
                            r={isLoaded ? (isHovered ? bubble.size + 4 : bubble.size) : 0}
                            fill={bubble.color}
                            fillOpacity="0.25"
                            stroke={bubble.color}
                            strokeWidth={isHovered ? "3" : "1.5"}
                            className="transition-all duration-500 ease-out"
                            onMouseEnter={() => {
                              setHoveredSegment({
                                chartId: "q6",
                                index: i,
                                label: `${bubble.xLabel} @ ${bubble.yLabel}`,
                                value: bubble.overlap,
                                count: Math.round(bubble.overlap * 0.36)
                              });
                              addLog(`INSPECT: Matrix -> ${bubble.xLabel} * ${bubble.yLabel} [Score: ${bubble.overlap}]`);
                            }}
                            onMouseLeave={() => setHoveredSegment(null)}
                            style={{ filter: `drop-shadow(0 0 ${isHovered ? '10px' : '4px'} ${bubble.color})` }}
                          />
                          
                          {/* Value label text inside bubble */}
                          <text
                            x={bubble.x}
                            y={bubble.y + 3}
                            textAnchor="middle"
                            className="fill-zinc-100 text-[8px] font-mono font-extrabold select-none pointer-events-none"
                          >
                            {bubble.overlap}
                          </text>
                        </g>
                      );
                    })}

                    {/* Columns headers (X axis) */}
                    <text x="60" y="354" textAnchor="middle" className="fill-zinc-400 text-[8px] font-mono">MOBILITY</text>
                    <text x="160" y="354" textAnchor="middle" className="fill-zinc-400 text-[8px] font-mono">BATTERY</text>
                    <text x="260" y="354" textAnchor="middle" className="fill-zinc-400 text-[8px] font-mono">REMOTE_CTRL</text>
                    <text x="360" y="354" textAnchor="middle" className="fill-zinc-400 text-[8px] font-mono">DETECTION</text>

                    {/* Rows headers (Y axis - rotated for technical look) */}
                    <text x="44" y="73" textAnchor="end" className="fill-zinc-400 text-[8px] font-mono">MILITARY</text>
                    <text x="44" y="153" textAnchor="end" className="fill-zinc-400 text-[8px] font-mono">EXAM_HALL</text>
                    <text x="44" y="233" textAnchor="end" className="fill-zinc-400 text-[8px] font-mono">HOSPITAL</text>
                    <text x="44" y="313" textAnchor="end" className="fill-zinc-400 text-[8px] font-mono">MEETINGS</text>
                  </svg>
                </div>

                <div className="mt-4 bg-zinc-950/70 border border-zinc-800 p-3 rounded-sm flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-zinc-500">CORRELATION FACTOR:</span>
                  </div>
                  {hoveredSegment?.chartId === "q6" ? (
                    <span className="text-cyan-400 font-bold animate-pulse">
                      {hoveredSegment.label.toUpperCase()} // INDEX: {hoveredSegment.value}
                    </span>
                  ) : (
                    <span className="text-zinc-600">HOVER INTERSECT NODES TO DECRYPT STRENGTHS</span>
                  )}
                </div>
              </div>
            )}

            {/* Q6: Disturbance Frequency (Cyber Waffle / Dot Matrix Chart) */}
            {(activeTab === "all" || activeTab === "disturbances") && (
              <div className="border border-green-500/20 bg-black/40 p-6 rounded-sm relative group hover:border-green-500/40 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-400" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-green-400" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-green-400" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-green-400" />

                <span className="text-[10px] text-green-500/40 block mb-2 font-semibold">Q6 // DISTURBANCE_FREQUENCY</span>
                <h2 className="text-sm sm:text-base font-semibold text-zinc-100 mb-6 tracking-wide uppercase">
                  Have you ever experienced situations where unauthorized mobile phone use caused disturbances?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="py-2">
                    {/* 6x6 Waffle grid of 36 respondents */}
                    <div className="grid grid-cols-6 gap-2.5 w-full max-w-[210px] mx-auto">
                      {Array.from({ length: 36 }).map((_, i) => {
                        const isFrequently = i < 17; // 46.2% of 36 is ~17
                        const item = isFrequently ? q6Data[1] : q6Data[0];
                        const isHovered = hoveredSegment?.chartId === "q7" && hoveredSegment?.index === i;
                        return (
                          <div
                            key={i}
                            className="aspect-square border rounded-xs relative cursor-pointer transition-all duration-200"
                            style={{
                              backgroundColor: isFrequently ? "rgba(6,182,212,0.15)" : "rgba(34,197,94,0.15)",
                              borderColor: isHovered 
                                ? (isFrequently ? "#06b6d4" : "#22c55e") 
                                : (isFrequently ? "rgba(6,182,212,0.3)" : "rgba(34,197,94,0.3)"),
                              boxShadow: isHovered 
                                ? `0 0 10px ${isFrequently ? "#06b6d4" : "#22c55e"}` 
                                : "none",
                              transform: isHovered ? "scale(1.1)" : "scale(1)"
                            }}
                            onMouseEnter={() => {
                              setHoveredSegment({
                                chartId: "q7",
                                index: i,
                                label: `Respondent #${String(i + 1).padStart(2, "0")} (${item.label})`,
                                value: item.value,
                                count: item.count
                              });
                              addLog(`INSPECT: Q6 -> Resp #${i + 1} experienced disturbances [${item.label}]`);
                            }}
                            onMouseLeave={() => setHoveredSegment(null)}
                          >
                            <span className="absolute inset-0 flex items-center justify-center text-[7px] font-bold text-zinc-500">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {q6Data.map((d, idx) => {
                      const isHoveredCategory = hoveredSegment?.chartId === "q7" && 
                        ((d.label === "Frequently" && hoveredSegment.index < 17) || 
                         (d.label === "Occasionally" && hoveredSegment.index >= 17));

                      return (
                        <div
                          key={d.label}
                          className={`p-2.5 rounded-sm border transition-all duration-150 cursor-pointer ${
                            isHoveredCategory
                              ? "bg-green-500/5 border-green-500/40 shadow-[inset_0_0_8px_rgba(34,197,94,0.1)] translate-x-1"
                              : "border-zinc-800 bg-zinc-950/20 hover:border-zinc-700"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="h-2.5 w-2.5 rounded-xs" style={{ backgroundColor: d.color, boxShadow: `0 0 6px ${d.color}` }} />
                              <span className="text-xs font-semibold text-zinc-300">{d.label}</span>
                            </div>
                            <div className="text-right">
                              <span className="text-xs font-bold text-zinc-100">{d.value}%</span>
                              <span className="text-[9px] text-zinc-500 block">({d.count} Res)</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Q7: Occupation (Concentric Ring Chart) */}
            {(activeTab === "all" || activeTab === "occupation") && (
              <div className="border border-green-500/20 bg-black/40 p-6 rounded-sm relative group hover:border-green-500/40 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-400" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-green-400" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-green-400" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-green-400" />

                <span className="text-[10px] text-green-500/40 block mb-2 font-semibold">Q7 // DEMOGRAPHIC_SURVEY</span>
                <h2 className="text-sm sm:text-base font-semibold text-zinc-100 mb-6 tracking-wide uppercase">
                  What is your occupation?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="flex justify-center relative py-4">
                    <svg width="180" height="180" viewBox="0 0 150 150" className="block transform -rotate-90">
                      {/* Grid track rings */}
                      <circle cx="75" cy="75" r="50" fill="none" stroke="#121214" strokeWidth="8" />
                      <circle cx="75" cy="75" r="35" fill="none" stroke="#121214" strokeWidth="8" />

                      {/* Outer ring (Student - 53.8%) */}
                      <circle
                        cx="75"
                        cy="75"
                        r="50"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth={hoveredSegment?.chartId === "q8" && hoveredSegment?.index === 0 ? "11" : "8"}
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 50}
                        strokeDashoffset={isLoaded ? (2 * Math.PI * 50) * (1 - 0.538) : 2 * Math.PI * 50}
                        className="transition-all duration-1000 ease-out cursor-pointer"
                        onMouseEnter={() => {
                          setHoveredSegment({ chartId: "q8", index: 0, label: "Student", value: 53.8, count: 19 });
                          addLog("INSPECT: Q7 -> Student [53.8%]");
                        }}
                        onMouseLeave={() => setHoveredSegment(null)}
                        style={{ filter: "drop-shadow(0 0 4px rgba(34,197,94,0.3))" }}
                      />

                      {/* Inner ring (Engineer / IT - 46.2%) */}
                      <circle
                        cx="75"
                        cy="75"
                        r="35"
                        fill="none"
                        stroke="#06b6d4"
                        strokeWidth={hoveredSegment?.chartId === "q8" && hoveredSegment?.index === 1 ? "11" : "8"}
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 35}
                        strokeDashoffset={isLoaded ? (2 * Math.PI * 35) * (1 - 0.462) : 2 * Math.PI * 35}
                        className="transition-all duration-1000 ease-out cursor-pointer"
                        onMouseEnter={() => {
                          setHoveredSegment({ chartId: "q8", index: 1, label: "Engineer / IT Professional", value: 46.2, count: 17 });
                          addLog("INSPECT: Q7 -> Engineer / IT Professional [46.2%]");
                        }}
                        onMouseLeave={() => setHoveredSegment(null)}
                        style={{ filter: "drop-shadow(0 0 4px rgba(6,182,212,0.3))" }}
                      />
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <span className="text-[8px] text-zinc-500 uppercase tracking-widest">N = 36</span>
                      <span className="text-xs text-green-400 font-bold mt-0.5">TARGETS</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {q7Data.map((d, index) => {
                      const isHovered = hoveredSegment?.chartId === "q8" && hoveredSegment?.index === index;
                      return (
                        <div
                          key={d.label}
                          onMouseEnter={() => setHoveredSegment({ chartId: "q8", index, label: d.label, value: d.value, count: d.count })}
                          onMouseLeave={() => setHoveredSegment(null)}
                          className={`p-2.5 rounded-sm border transition-all duration-150 cursor-pointer ${
                            isHovered
                              ? "bg-green-500/5 border-green-500/40 shadow-[inset_0_0_8px_rgba(34,197,94,0.1)] translate-x-1"
                              : "border-zinc-800 bg-zinc-950/20 hover:border-zinc-700"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: d.color, boxShadow: `0 0 6px ${d.color}` }} />
                              <span className="text-xs font-semibold text-zinc-300 truncate max-w-[130px]">{d.label}</span>
                            </div>
                            <div className="text-right">
                              <span className="text-xs font-bold text-zinc-100">{d.value}%</span>
                              <span className="text-[9px] text-zinc-500 block">({d.count} Res)</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Console Diagnostics & Summary Panel */}
          <div className="space-y-6">

            {/* Live Inspection Screen */}
            <div className="border border-green-500/20 bg-black/60 p-6 rounded-sm relative shadow-[0_0_15px_rgba(0,0,0,0.6)]">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-400" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-green-400" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-green-400" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-green-400" />

              <div className="flex items-center justify-between border-b border-green-500/20 pb-3 mb-4">
                <span className="text-xs font-bold text-zinc-100 tracking-wider">INSPECTION READER</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded-sm bg-green-500/10 text-green-400 border border-green-500/20">LIVE</span>
              </div>

              {hoveredSegment ? (
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] text-zinc-600 block">METRIC PARAMETER:</span>
                    <span className="text-sm font-bold text-zinc-100 tracking-wide uppercase">{hoveredSegment.label}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-zinc-800 p-2.5 rounded-sm bg-zinc-950/40">
                      <span className="text-[9px] text-zinc-600 block">PERCENTAGE:</span>
                      <span className="text-lg font-mono font-bold text-green-400">{hoveredSegment.value}%</span>
                    </div>
                    <div className="border border-zinc-800 p-2.5 rounded-sm bg-zinc-950/40">
                      <span className="text-[9px] text-zinc-600 block">RESP RESPONSES:</span>
                      <span className="text-lg font-mono font-bold text-cyan-400">{hoveredSegment.count} / 36</span>
                    </div>
                  </div>

                  <div className="border border-green-500/20 bg-green-500/5 p-3 rounded-sm text-xs text-green-400/90 leading-relaxed">
                    {hoveredSegment.chartId === "q1" && "Strong support indicates deep operational demand for robot integration in security operations."}
                    {hoveredSegment.chartId === "q2" && "Points out crucial payload requirements. Controls and hardware durability are high priorities."}
                    {hoveredSegment.chartId === "q3" && "Proves that mobile nodes are preferred for scanning networks compared to traditional setups."}
                    {hoveredSegment.chartId === "q4" && "Reflects substantial demand for flexible robotic systems over static base station setups."}
                    {hoveredSegment.chartId === "q5" && "Highlights that high-risk zones (Military, Exam rooms) take precedence for jamming devices."}
                    {hoveredSegment.chartId === "q6" && "Correlates environmental urgency with hardware subsystems for strategic product blueprints."}
                    {hoveredSegment.chartId === "q7" && "Tracks individual user responses to examine unauthorized mobile phone disturbances."}
                    {hoveredSegment.chartId === "q8" && "Categorizes respondent profiles, mapping robotics interests across developers and students."}
                  </div>
                </div>
              ) : (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                  <svg className="h-8 w-8 text-zinc-700 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  <p className="text-xs text-zinc-500 max-w-[200px]">
                    Hover over any chart segment or coordinate node to extract live database telemetries.
                  </p>
                </div>
              )}
            </div>

            {/* Simulated Live System Logs */}
            <div className="border border-green-500/20 bg-black/60 p-6 rounded-sm relative shadow-[0_0_15px_rgba(0,0,0,0.6)]">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-400" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-green-400" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-green-400" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-green-400" />

              <div className="flex items-center justify-between border-b border-green-500/20 pb-3 mb-4">
                <span className="text-xs font-bold text-zinc-100 tracking-wider">SYSTEM DIAGNOSTICS</span>
                <span className="text-[8px] font-bold text-green-500/60 font-mono">CON_STREAM</span>
              </div>

              <div className="space-y-1 h-[220px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 pr-1 text-[10px] font-mono">
                {consoleLogs.map((log, idx) => (
                  <div key={idx} className="truncate text-zinc-400/80 leading-5">
                    <span className="text-green-500/60 font-semibold">{log.slice(0, 11)}</span>
                    <span className="text-zinc-300 ml-1">{log.slice(11)}</span>
                  </div>
                ))}
                {consoleLogs.length === 0 && (
                  <div className="text-zinc-600 text-center py-12">Console initializing...</div>
                )}
              </div>
            </div>

            {/* Strategic Summary */}
            <div className="border border-green-500/20 bg-black/60 p-6 rounded-sm relative shadow-[0_0_15px_rgba(0,0,0,0.6)]">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-400" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-green-400" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-green-400" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-green-400" />

              <h3 className="text-xs font-bold text-zinc-100 tracking-wider mb-4 border-b border-green-500/20 pb-3">
                FEASIBILITY REPORT SUMMARY
              </h3>

              <div className="text-xs text-zinc-400 space-y-3 leading-relaxed">
                <p>
                  1. **Universal Demand**: Over <span className="text-green-400 font-bold">84.6%</span> of security professionals strongly agree or agree that mobile robotics will enhance edge-security performance compared to static networks.
                </p>
                <p>
                  2. **Subsystem Priority**: Dynamic <span className="text-cyan-400 font-bold">Remote Control</span> capability and long-lasting <span className="text-purple-400 font-bold">Battery Life</span> represent the two core operational priorities for the rover's design scope.
                </p>
                <p>
                  3. **Strategic Sectors**: Security rovers must focus payload operations on <span className="text-amber-400 font-bold">Military/Tactical Zones</span> and <span className="text-pink-400 font-bold">Examination halls</span> to mitigate unauthorized communications where fixed installations fail.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-800 flex justify-between">
                <Link
                  href="/project/vision-goals"
                  className="text-[10px] text-green-500 hover:text-green-400 hover:underline flex items-center gap-1"
                >
                  &lt;&lt; BACK TO MISSION
                </Link>
                <Link
                  href="/project/methodology"
                  className="text-[10px] text-green-500 hover:text-green-400 hover:underline flex items-center gap-1"
                >
                  SYSTEM METHODOLOGY &gt;&gt;
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
