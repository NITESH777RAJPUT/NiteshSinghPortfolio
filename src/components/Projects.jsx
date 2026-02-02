import { motion } from "framer-motion";

const projects = [
    {
        title: "Pizza Delivery Website",
        description: "Pizza delivery platform with customizable pizza options, real-time order flow, and Razorpay integration.",
        tech: ["React", "Node", "Express", "MongoDB", "Razorpay"],
        year: "2025",
        live: "https://pizzato-mania.vercel.app",
        color: "from-orange-500/20",
    },
    {
        title: "GitHub Full-Stack Repositories",
        description: "Multiple production-ready full-stack projects with clean UI and scalable architecture.",
        tech: ["React", "Node", "Express", "Tailwind"],
        year: "2025",
        live: "https://github.com/NITESH777RAJPUT",
        color: "from-emerald-500/20",
    },
    {
        title: "Budget Tracker – Hackathon Winner",
        description: "Expense & profit tracking system with charts. Won 1st rank in TechFest hackathon.",
        tech: ["React", "Charts", "Product Dev"],
        year: "2025",
        color: "from-blue-500/20",
    },
    {
        title: "Finance Intelligent Management",
        description: "Automated finance manager with budgets, reports, and expense analysis.",
        tech: ["React", "LocalStorage", "Data Viz"],
        year: "2025",
        color: "from-purple-500/20",
    },
];

function Projects() {
    return (
        <section id="projects" className="py-20 space-y-12">
            {/* 🚀 Header with 3D Reveal */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
            >
                <h2 className="text-3xl md:text-5xl font-bold flex items-center gap-4">
                    <span className="text-emerald-500 font-mono text-2xl">02.</span>
                    Selected Projects
                </h2>
                <div className="h-1 w-24 bg-emerald-500 rounded-full" />
                <p className="text-slate-400 max-w-xl text-lg">
                    A collection of full-stack applications built with modern technologies.
                </p>
            </motion.div>

            {/* 🏗️ Projects Grid */}
            <div className="grid gap-8 md:grid-cols-2">
                {projects.map((p, index) => (
                    <motion.div
                        key={p.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
                        className="group relative rounded-3xl border border-slate-800 bg-slate-900/40 p-8 overflow-hidden backdrop-blur-md transition-all duration-500"
                        style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                    >
                        {/* 🌈 Dynamic Background Glow */}
                        <div className={`absolute -inset-px bg-gradient-to-br ${p.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                        {/* 💎 3D Elements */}
                        <div className="relative space-y-6" style={{ transform: "translateZ(50px)" }}>
                            <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                        {p.title}
                                    </h3>
                                    <span className="inline-block text-[10px] uppercase tracking-widest text-slate-500 font-bold bg-slate-800/50 px-2 py-1 rounded">
                                        Year: {p.year}
                                    </span>
                                </div>
                                {p.live && (
                                    <motion.a
                                        href={p.live}
                                        target="_blank"
                                        whileHover={{ scale: 1.1, rotateZ: 5 }}
                                        className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/20"
                                    >
                                        ↗
                                    </motion.a>
                                )}
                            </div>

                            <p className="text-slate-300 leading-relaxed text-sm lg:text-base">
                                {p.description}
                            </p>

                            {/* 🛠️ Tech Stack Badges */}
                            <div className="flex flex-wrap gap-2 pt-2">
                                {p.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-[11px] font-semibold px-3 py-1 rounded-lg bg-slate-950/50 border border-slate-800 text-slate-400 group-hover:border-emerald-500/30 transition-colors"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* ✨ Decorative Bottom Line */}
                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-500 group-hover:w-full transition-all duration-700 ease-out" />
                    </motion.div>
                ))}
            </div>

            {/* 🔗 GitHub CTA */}
            <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-3xl border border-dashed border-slate-700 flex flex-col items-center gap-4 text-center"
            >
                <p className="text-slate-400">Want to see more experimental builds?</p>
                <a href="https://github.com/NITESH777RAJPUT" target="_blank" className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-emerald-400 transition-colors">
                    Explore My GitHub
                </a>
            </motion.div>
        </section>
    );
}

export default Projects;