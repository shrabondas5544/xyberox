"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdownItems?: DropdownItem[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);

  // Sync volume state with HTML5 audio properties
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  // Handle autoplay and fallback interaction listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.muted = isMuted;

    const attemptPlay = () => {
      audio.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("Autoplay blocked. Adding user interaction listener.", error);
          
          const startAudioOnInteraction = () => {
            audio.play()
              .then(() => {
                setIsPlaying(true);
                cleanupListeners();
              })
              .catch((err) => console.log("Failed to play on interaction:", err));
          };

          const cleanupListeners = () => {
            document.removeEventListener("click", startAudioOnInteraction);
            document.removeEventListener("keydown", startAudioOnInteraction);
            document.removeEventListener("touchstart", startAudioOnInteraction);
          };

          document.addEventListener("click", startAudioOnInteraction);
          document.addEventListener("keydown", startAudioOnInteraction);
          document.addEventListener("touchstart", startAudioOnInteraction);
        });
    };

    attemptPlay();

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      const nextMute = !isMuted;
      setIsMuted(nextMute);
      if (!nextMute && audioRef.current.paused) {
        audioRef.current.play().catch((e) => console.log(e));
      }
    }
  };

  const adjustVolume = (amount: number) => {
    setVolume((prev) => {
      const newVol = Math.min(Math.max(0, prev + amount), 1);
      if (audioRef.current) {
        audioRef.current.volume = newVol;
        if (newVol > 0 && isMuted) {
          setIsMuted(false);
        }
        if (audioRef.current.paused) {
          audioRef.current.play().catch((e) => console.log(e));
        }
      }
      return newVol;
    });
  };

  const handleVolumeBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newVolume = Math.min(Math.max(0, clickX / rect.width), 1);
    setVolume(newVolume);
    setIsMuted(false);
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch((e) => console.log(e));
    }
  };

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    {
      label: "Project",
      href: "#",
      dropdownItems: [
        { label: "Vision & Goals", href: "/project/vision-goals" },
        { label: "Methodology", href: "/project/methodology" },
        { label: "Survey Data", href: "/project/survey-data" },
        { label: "Results", href: "/project/results" },
        { label: "Future Work", href: "/project/future-work" },
        { label: "Components List", href: "/project/components-list" },
        { label: "Weekly Updates", href: "/project/weekly-updates" },
      ],
    },
    {
      label: "Literature Review",
      href: "#",
      dropdownItems: [
        { label: "Shrabon Das", href: "/literature-review/shrabon-das" },
        { label: "Nijum Barua", href: "/literature-review/nijum-barua" },
        { label: "SM Mahadi Bhuiyan", href: "/literature-review/sm-mahadi-bhuiyan" },
        { label: "Mohd Ashraful Islam", href: "/literature-review/mohd-ashraful-islam" },
        { label: "Fahim Faisal", href: "/literature-review/fahim-faisal" },
        { label: "Elora Sharmin Khan", href: "/literature-review/elora-sharmin-khan" },
      ],
    },
    { label: "Prototype", href: "/prototype" },
    { label: "Team", href: "/team" },
    { label: "Robotics", href: "/robotics" },
  ];

  return (
    <>
      <audio
        ref={audioRef}
        src="https://archive.org/download/matrix-soundtrack-collection/Matrix%20Revolutions/1.Soundtrack/16.%20Navras%20(by%20Juno%20Reactor%20Vs.%20Don%20Davis).mp3"
        loop
        preload="auto"
      />
      <nav className="sticky top-0 z-50 w-full border-b border-green-500/20 bg-black/80 backdrop-blur-md transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                className="group flex items-center gap-2 font-mono text-xl font-bold tracking-wider text-green-400"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500 p-0.5 shadow-md shadow-green-500/20 transition-transform group-hover:scale-105 duration-300">
                  <div className="flex h-full w-full items-center justify-center rounded-[6px] bg-black">
                    <span className="font-extrabold text-green-400 text-sm">
                      X
                    </span>
                  </div>
                </div>
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent group-hover:opacity-85 transition-opacity">
                  Xyberox
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex md:items-center md:gap-x-1" ref={dropdownRef}>
              {navItems.map((item) => {
                if (item.dropdownItems) {
                  const isDropdownOpen = openDropdown === item.label;
                  return (
                    <div 
                      key={item.label} 
                      className="relative" 
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        onClick={() => setOpenDropdown(isDropdownOpen ? null : item.label)}
                        className={`flex items-center gap-1 rounded-md px-4 py-2 text-sm font-mono tracking-wide transition-all duration-200 ${
                          isDropdownOpen
                            ? "bg-green-500/10 text-green-400 border border-green-500/30"
                            : "text-zinc-300 hover:bg-green-500/5 hover:text-green-400 border border-transparent"
                        }`}
                      >
                        {item.label}
                        <svg
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isDropdownOpen ? "rotate-180 text-green-400" : "text-zinc-500"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Dropdown Panel */}
                      <div
                        className={`absolute left-0 top-full pt-2 w-56 origin-top-left transition-all duration-300 ${
                          isDropdownOpen
                            ? "visible scale-100 opacity-100 translate-y-0"
                            : "invisible scale-95 opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                      >
                        <div className="rounded-lg border border-green-500/30 bg-black p-2 shadow-2xl shadow-green-500/5 backdrop-blur-xl">
                          <div className="grid gap-1">
                            {item.dropdownItems.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className="group flex items-center justify-between rounded-md px-3 py-2 text-xs font-mono text-zinc-400 transition-all hover:bg-green-500/10 hover:text-green-400"
                              >
                                <span>{subItem.label}</span>
                                <svg
                                  className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-md px-4 py-2 text-sm font-mono tracking-wide text-zinc-300 border border-transparent transition-all duration-200 hover:bg-green-500/5 hover:text-green-400"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Right Action Button (Matrix Audio Player & Speaker Controls) */}
            <div className="hidden md:flex md:items-center">
              <div className="flex items-center gap-3 rounded-md border border-green-500/30 bg-black/60 px-3 py-1.5 font-mono text-xs shadow-[0_0_8px_rgba(34,197,94,0.15)] transition-all duration-300 hover:border-green-500/50 hover:shadow-[0_0_12px_rgba(34,197,94,0.25)]">
                {/* Speaker Toggle */}
                <button
                  onClick={toggleMute}
                  className={`flex h-7 w-7 items-center justify-center rounded-sm border transition-all duration-200 ${
                    isMuted 
                      ? "border-red-500/30 bg-red-950/20 text-red-400 hover:bg-red-950/40 hover:border-red-500/50" 
                      : "border-green-500/30 bg-green-950/20 text-green-400 hover:bg-green-950/40 hover:border-green-500/50"
                  }`}
                  title={isMuted ? "Unmute Audio" : "Mute Audio"}
                >
                  {isMuted ? (
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <line x1="23" y1="9" x2="17" y2="15" />
                      <line x1="17" y1="9" x2="23" y2="15" />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                  )}
                </button>

                {/* Vol Down */}
                <button
                  onClick={() => adjustVolume(-0.1)}
                  className="flex h-5 w-5 items-center justify-center rounded-sm border border-green-500/30 bg-green-950/10 text-green-400 hover:bg-green-950/30 hover:text-green-300 font-bold"
                  title="Volume Down"
                >
                  <span className="leading-none">-</span>
                </button>

                {/* Volume Slider Bar */}
                <div 
                  onClick={handleVolumeBarClick}
                  className="group relative h-2.5 w-16 cursor-pointer rounded-sm border border-green-500/20 bg-zinc-950"
                  title={`Volume: ${Math.round(volume * 100)}%`}
                >
                  <div 
                    className="h-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.7)] transition-all duration-100" 
                    style={{ width: `${isMuted ? 0 : volume * 100}%` }}
                  />
                  {/* Subtle visual notches */}
                  <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-between pointer-events-none px-1 opacity-20">
                    <span className="h-full w-[1px] bg-green-500" />
                    <span className="h-full w-[1px] bg-green-500" />
                    <span className="h-full w-[1px] bg-green-500" />
                  </div>
                </div>

                {/* Vol Up */}
                <button
                  onClick={() => adjustVolume(0.1)}
                  className="flex h-5 w-5 items-center justify-center rounded-sm border border-green-500/30 bg-green-950/10 text-green-400 hover:bg-green-950/30 hover:text-green-300 font-bold"
                  title="Volume Up"
                >
                  <span className="leading-none">+</span>
                </button>

                {/* Mini track title/indicator */}
                <span className="text-[10px] tracking-wider text-green-500/70 select-none animate-pulse">
                  NAVRAS
                </span>
              </div>
            </div>

            {/* Mobile menu button (Hamburger) */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-green-500/10 hover:text-green-400 focus:outline-none transition-colors duration-200"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs border-l border-green-500/30 bg-black p-6 shadow-2xl backdrop-blur-md transition-all duration-350 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-green-500/20 pb-5">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 font-mono text-xl font-bold tracking-wider text-green-400">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-green-500 p-0.5 shadow-md shadow-green-500/20">
              <div className="flex h-full w-full items-center justify-center rounded-[4px] bg-black">
                <span className="text-green-400 text-xs font-bold">X</span>
              </div>
            </div>
            <span>Xyberox</span>
          </Link>
          <button
            type="button"
            className="rounded-md p-2 text-zinc-400 hover:bg-green-500/10 hover:text-green-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-green-500/10">
            <div className="space-y-2 py-6">
              {navItems.map((item) => {
                if (item.dropdownItems) {
                  const isMobileDropdownOpen = openMobileDropdown === item.label;
                  return (
                    <div key={item.label} className="space-y-1">
                      <button
                        onClick={() => setOpenMobileDropdown(isMobileDropdownOpen ? null : item.label)}
                        className="flex w-full items-center justify-between rounded-md px-4 py-3 text-base font-mono font-medium text-zinc-300 hover:bg-green-500/5 hover:text-green-400 transition-colors duration-200"
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`h-5 w-5 text-zinc-500 transition-transform duration-350 ${
                            isMobileDropdownOpen ? "rotate-180 text-green-400" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Dropdown Items in Mobile Accordion */}
                      <div
                        className={`overflow-hidden transition-all duration-350 ease-in-out pl-4 ${
                          isMobileDropdownOpen ? "max-h-96 opacity-100 mt-1" : "max-h-0 opacity-0 pointer-events-none"
                        }`}
                      >
                        <div className="border-l border-green-500/20 pl-4 py-1 space-y-1">
                          {item.dropdownItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className="block rounded-md py-2 px-3 text-sm font-mono text-zinc-400 hover:bg-green-500/5 hover:text-green-400 transition-all"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-md px-4 py-3 text-base font-mono font-medium text-zinc-300 hover:bg-green-500/5 hover:text-green-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            
            <div className="py-6 border-t border-green-500/10">
              <div className="flex flex-col gap-4 rounded-md border border-green-500/30 bg-black/40 p-4 font-mono text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-wider text-green-400">AUDIO SYSTEM</span>
                  <span className="text-xs tracking-widest text-green-500/70 animate-pulse">NAVRAS.MP3</span>
                </div>
                
                <div className="flex items-center justify-between gap-4">
                  {/* Speaker Toggle */}
                  <button
                    onClick={toggleMute}
                    className={`flex h-10 w-10 items-center justify-center rounded-sm border transition-all duration-200 ${
                      isMuted 
                        ? "border-red-500/30 bg-red-950/20 text-red-400" 
                        : "border-green-500/30 bg-green-950/20 text-green-400"
                    }`}
                  >
                    {isMuted ? (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <line x1="23" y1="9" x2="17" y2="15" />
                        <line x1="17" y1="9" x2="23" y2="15" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                      </svg>
                    )}
                  </button>

                  <div className="flex flex-1 items-center gap-2">
                    {/* Vol Down */}
                    <button
                      onClick={() => adjustVolume(-0.1)}
                      className="flex h-8 w-8 items-center justify-center rounded-sm border border-green-500/30 bg-green-950/10 text-green-400 hover:bg-green-950/30 font-bold"
                    >
                      -
                    </button>

                    {/* Volume Slider Bar */}
                    <div 
                      onClick={handleVolumeBarClick}
                      className="group relative h-4 flex-1 cursor-pointer rounded-sm border border-green-500/20 bg-zinc-950"
                    >
                      <div 
                        className="h-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.7)] transition-all duration-100" 
                        style={{ width: `${isMuted ? 0 : volume * 100}%` }}
                      />
                      <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-between pointer-events-none px-2 opacity-20">
                        <span className="h-full w-[1px] bg-green-500" />
                        <span className="h-full w-[1px] bg-green-500" />
                        <span className="h-full w-[1px] bg-green-500" />
                        <span className="h-full w-[1px] bg-green-500" />
                      </div>
                    </div>

                    {/* Vol Up */}
                    <button
                      onClick={() => adjustVolume(0.1)}
                      className="flex h-8 w-8 items-center justify-center rounded-sm border border-green-500/30 bg-green-950/10 text-green-400 hover:bg-green-950/30 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
