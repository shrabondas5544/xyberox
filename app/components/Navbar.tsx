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
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-zinc-200/50 bg-white/80 backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-950/80 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                className="group flex items-center gap-2 font-sans text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-md shadow-purple-500/20 transition-transform group-hover:scale-105 duration-300">
                  <div className="flex h-full w-full items-center justify-center rounded-[6px] bg-white dark:bg-zinc-950">
                    <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-sm font-extrabold text-transparent">
                      X
                    </span>
                  </div>
                </div>
                <span className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 bg-clip-text text-transparent dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300 group-hover:opacity-80 transition-opacity">
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
                        className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                          isDropdownOpen
                            ? "bg-zinc-100/80 text-purple-600 dark:bg-zinc-800/80 dark:text-purple-400"
                            : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
                        }`}
                      >
                        {item.label}
                        <svg
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isDropdownOpen ? "rotate-180 text-purple-500" : "text-zinc-400"
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
                        className={`absolute left-0 mt-1 w-56 origin-top-left rounded-2xl border border-zinc-200/50 bg-white p-2 shadow-xl backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-900 transition-all duration-300 ${
                          isDropdownOpen
                            ? "visible scale-100 opacity-100 translate-y-0"
                            : "invisible scale-95 opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                      >
                        <div className="grid gap-1">
                          {item.dropdownItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="group flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-zinc-600 transition-all hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-indigo-500/10 hover:text-purple-600 dark:text-zinc-300 dark:hover:text-purple-400"
                            >
                              <span>{subItem.label}</span>
                              <svg
                                className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
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
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-full px-4 py-2 text-sm font-medium text-zinc-600 transition-all duration-200 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Right Action Button */}
            <div className="hidden md:flex md:items-center">
              <Link
                href="/prototype"
                className="relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 text-sm font-semibold transition-all hover:scale-[1.02] focus:outline-none"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                <span className="relative rounded-full bg-white px-5 py-1.5 text-zinc-900 transition-all duration-200 group-hover:bg-opacity-0 dark:bg-zinc-950 dark:text-zinc-50">
                  Launch Demo
                </span>
              </Link>
            </div>

            {/* Mobile menu button (Hamburger) */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                type="button"
                className="inline-flex items-center justify-center rounded-xl p-2.5 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100 focus:outline-none transition-colors duration-200"
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
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm border-l border-zinc-200/50 bg-white p-6 shadow-2xl backdrop-blur-xl dark:border-zinc-850 dark:bg-zinc-950/95 transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-zinc-100 pb-5 dark:border-zinc-800/80">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 font-sans text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-md shadow-purple-500/20">
              <div className="flex h-full w-full items-center justify-center rounded-[6px] bg-white dark:bg-zinc-950">
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-xs font-extrabold text-transparent">
                  X
                </span>
              </div>
            </div>
            <span>Xyberox</span>
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100 transition-colors"
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
          <div className="-my-6 divide-y divide-zinc-500/10">
            <div className="space-y-2 py-6">
              {navItems.map((item) => {
                if (item.dropdownItems) {
                  const isMobileDropdownOpen = openMobileDropdown === item.label;
                  return (
                    <div key={item.label} className="space-y-1">
                      <button
                        onClick={() => setOpenMobileDropdown(isMobileDropdownOpen ? null : item.label)}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-zinc-900 hover:bg-zinc-50 dark:text-zinc-100 dark:hover:bg-zinc-900 transition-colors duration-200"
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`h-5 w-5 text-zinc-500 transition-transform duration-350 ${
                            isMobileDropdownOpen ? "rotate-180 text-purple-500" : ""
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
                        <div className="border-l border-zinc-100 pl-4 py-1 space-y-1 dark:border-zinc-800">
                          {item.dropdownItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className="block rounded-lg py-2 px-3 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-purple-600 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-purple-400 transition-all"
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
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-zinc-900 hover:bg-zinc-50 dark:text-zinc-100 dark:hover:bg-zinc-900 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            
            <div className="py-6">
              <Link
                href="/prototype"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 text-center text-base font-semibold text-white shadow-lg shadow-purple-500/20 hover:opacity-95 transition-all"
              >
                Launch Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
