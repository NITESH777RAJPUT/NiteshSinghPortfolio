function Hero() {
    return (
        <section
            id="hero"
            className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12"
        >
            {/* Left text column */}
            <div className="flex-1 space-y-4">
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-400">
                    Full Stack Developer • Problem Solver
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                    <span className="block">Hi, I&apos;m</span>
                    <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                        Nitesh Singh
                    </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 max-w-xl">
                    B.Tech Computer Engineering student at ISBM, Pune, passionate about
                    building impactful full-stack web applications and solving real-world problems.
                </p>

                <p className="text-sm text-slate-400 max-w-xl">
                    I&apos;ve worked with React, Node.js, Express, Tailwind CSS, MongoDB, and more –
                    deploying multiple production-ready projects on GitHub, Vercel, and Render,
                    including finance managers, pizza delivery systems, and budget trackers.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                    <a
                        href="https://github.com/NITESH777RAJPUT"
                        target="_blank"
                        className="px-5 py-2.5 rounded-full bg-emerald-500 text-slate-950 text-sm font-semibold shadow-lg hover:bg-emerald-400 hover:translate-y-0.5 transition"
                    >
                        View GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME"
                        target="_blank"
                        className="px-5 py-2.5 rounded-full border border-slate-700 text-sm font-medium hover:border-emerald-400 hover:text-emerald-300 transition"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="#projects"
                        className="px-5 py-2.5 rounded-full border border-slate-700 text-sm font-medium hover:border-cyan-400 hover:text-cyan-300 transition"
                    >
                        View Projects
                    </a>
                </div>

                {/* Quick stats badges */}
                <div className="flex flex-wrap gap-3 text-xs mt-3">
                    <div className="card flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                        <span>2★ CodeChef • ~40K rank</span>
                    </div>
                    <div className="card flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                        <span>Active on LeetCode & HackerRank</span>
                    </div>
                    <div className="card flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-indigo-400"></span>
                        <span>Multiple full-stack projects live</span>
                    </div>
                </div>
            </div>

            {/* Right column (Profile + Snapshot) */}
            <div className="flex-1 w-full md:w-auto space-y-6">
                {/* Profile Image */}
                <div className="flex justify-center md:justify-end">
                    <div className="relative">
                        {/* Glow */}
                        <div className="absolute inset-0 rounded-full bg-emerald-500/30 blur-2xl"></div>

                        {/* Image */}
                        <img
                            src="/profile.jpg"
                            alt="Nitesh Singh"
                            className="relative w-48 h-48 md:w-56 md:h-56
                rounded-full object-cover
                border-4 border-slate-800
                shadow-xl
                hover:scale-105 transition"
                        />
                    </div>
                </div>

                {/* Quick Snapshot card */}
                <div className="card h-full bg-gradient-to-br from-slate-900/90 via-slate-900 to-slate-950 border border-emerald-500/20">
                    <p className="text-xs text-slate-400 mb-2">Quick Snapshot</p>
                    <ul className="space-y-2 text-sm text-slate-200">
                        <li>🎓 B.Tech Computer Engineering • ISBM Pune (2024–2028)</li>
                        <li>📚 HSC (Science – PCM) • Periwinkle College</li>
                        <li>💻 Full-stack: React, Node.js, Express, Tailwind, MongoDB, SQL</li>
                        <li>🏆 1st rank in Hackathon for Budget Tracker / Product Dev</li>
                        <li>📊 Finance Intelligent Management & Pizza Delivery systems</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Hero;
