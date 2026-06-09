import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden py-16 sm:py-24">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-40 dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.zinc.900),theme(colors.zinc.950))] dark:opacity-80" />
      <div className="absolute top-0 right-1/4 -z-10 h-[400px] w-[600px] rounded-full bg-gradient-to-tr from-purple-500/10 to-indigo-500/20 blur-3xl dark:from-purple-500/5 dark:to-indigo-500/10" />
      <div className="absolute bottom-10 left-1/4 -z-10 h-[300px] w-[500px] rounded-full bg-gradient-to-br from-pink-500/10 to-purple-500/15 blur-3xl dark:from-pink-500/5 dark:to-purple-500/5" />

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/50 px-4 py-1.5 text-xs font-semibold text-indigo-600 dark:border-purple-900/30 dark:bg-purple-950/20 dark:text-purple-300 backdrop-blur-md animate-pulse">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 dark:bg-purple-400" />
          Project Status: Active Development
        </div>

        {/* Hero Section */}
        <h1 className="mt-8 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-r from-zinc-900 via-purple-950 to-indigo-950 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent leading-[1.15]">
          Autonomous Robotics <br />
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Perfected with Xyberox
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Welcome to the official repository and documentation platform for the Xyberox autonomous systems initiative. Explore our research, track weekly updates, review prototype components, and analyze our findings.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/prototype"
            className="flex h-12 items-center justify-center rounded-full bg-zinc-900 px-6 font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] dark:bg-zinc-100 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200"
          >
            Explore Prototype
          </Link>
          <Link
            href="/project/methodology"
            className="flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white/50 px-6 font-semibold text-zinc-900 shadow-sm backdrop-blur-sm transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            View Methodology
          </Link>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-20 max-w-5xl sm:mt-24 lg:mt-32">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            
            {/* Feature 1 */}
            <div className="group relative flex flex-col rounded-3xl border border-zinc-200/50 bg-white/60 p-6 text-left shadow-md backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800/50 dark:bg-zinc-900/60">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-md shadow-indigo-500/20">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.982-11.795H14l1-6.109-8.982 11.795H9.813z" />
                </svg>
              </div>
              <dt className="mt-4 font-bold text-zinc-900 dark:text-zinc-50">Robust Methodology</dt>
              <dd className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Read our core architecture plan and how our autonomous software interfaces with real-time sensors.
              </dd>
              <Link href="/project/methodology" className="mt-4 text-xs font-semibold text-purple-600 dark:text-purple-400 group-hover:underline flex items-center gap-1">
                Learn more <span>&rarr;</span>
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="group relative flex flex-col rounded-3xl border border-zinc-200/50 bg-white/60 p-6 text-left shadow-md backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800/50 dark:bg-zinc-900/60">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-500 to-pink-500 text-white shadow-md shadow-purple-500/20">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <dt className="mt-4 font-bold text-zinc-900 dark:text-zinc-50">Literature Review</dt>
              <dd className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Our exhaustive deep dive into state-of-the-art robotic platforms, kinematic models, and existing control frameworks.
              </dd>
              <Link href="/literature-review" className="mt-4 text-xs font-semibold text-purple-600 dark:text-purple-400 group-hover:underline flex items-center gap-1">
                Learn more <span>&rarr;</span>
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="group relative flex flex-col rounded-3xl border border-zinc-200/50 bg-white/60 p-6 text-left shadow-md backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800/50 dark:bg-zinc-900/60">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-pink-500 to-indigo-500 text-white shadow-md shadow-pink-500/20">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <dt className="mt-4 font-bold text-zinc-900 dark:text-zinc-50">Interactive Prototype</dt>
              <dd className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Witness our interactive robotic prototype live. Track sensory inputs, actuators status, and real-world system telemetry.
              </dd>
              <Link href="/prototype" className="mt-4 text-xs font-semibold text-purple-600 dark:text-purple-400 group-hover:underline flex items-center gap-1">
                Learn more <span>&rarr;</span>
              </Link>
            </div>

          </dl>
        </div>
      </div>
    </div>
  );
}
