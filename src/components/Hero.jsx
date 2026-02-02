import { motion } from "framer-motion";

function Hero() {
    return (
        <section
            id="hero"
            className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 min-h-[75vh] py-16"
        >
            {/* 🔹 LEFT TEXT COLUMN */}
            <div className="flex-1 space-y-6">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-bold"
                >
                    Full Stack Developer • Problem Solver
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight"
                >
                    <span className="block text-slate-400">Hi, I'm</span>
                    <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">
                        Nitesh Singh
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed"
                >
                    B.Tech Computer Engineering student at ISBM, Pune, passionate about
                    building <span className="text-emerald-400 font-medium">impactful full-stack applications</span> and solving real-world problems.
                </motion.p>

                {/* 🔘 CTA BUTTONS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-4 pt-4"
                >
                    <a href="/resume/Nitesh_Singh_Resume.pdf" download className="group relative px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 text-sm font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-emerald-500/60 transition-all">
                        Download Resume
                    </a>

                    <a href="https://github.com/NITESH777RAJPUT" target="_blank" className="px-6 py-3 rounded-xl border border-slate-700 bg-slate-900/50 backdrop-blur-sm text-sm font-medium hover:border-emerald-400 transition-all">
                        GitHub
                    </a>
                </motion.div>

                {/* 🔹 QUICK STATS */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-3 text-xs mt-8"
                >
                    <div className="px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>2★ CodeChef</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        <span>LeetCode Active</span>
                    </div>
                </motion.div>
            </div>

            {/* 🔹 RIGHT COLUMN */}
            <div className="flex-1 w-full md:w-auto space-y-6">

                {/* 👤 PROFILE IMAGE (FULL COLOR) */}
                <div className="flex justify-center md:justify-end">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        {/* Glow effect maintained */}
                        <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-[60px] animate-pulse"></div>
                        <img
                            src="/profile.jpg"
                            alt="Nitesh Singh"
                            // Removed grayscale and hover filters
                            className="relative w-52 h-52 md:w-64 md:h-64 rounded-3xl object-cover border-2 border-emerald-500/30 shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                        />
                    </motion.div>
                </div>

                {/* 📌 SNAPSHOT CARD */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800 shadow-2xl backdrop-blur-md"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Quick Snapshot</p>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex gap-2"><span>🎓</span> ISBM Pune (2024–2028)</li>
                        <li className="flex gap-2"><span>🏆</span> 1st Rank Hackathon</li>
                        <li className="flex gap-2"><span>💻</span> MERN Stack + SQL</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;