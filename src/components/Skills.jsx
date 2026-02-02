import { motion } from "framer-motion";

function Skills() {
    const skillsData = [
        {
            title: "Programming Languages",
            color: "text-emerald-400",
            shadow: "shadow-emerald-500/10",
            items: ["C", "C++", "Python", "JavaScript", "Java"],
            icon: "💻"
        },
        {
            title: "Web Development",
            color: "text-sky-400",
            shadow: "shadow-sky-500/10",
            items: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "REST APIs"],
            icon: "🌐"
        },
        {
            title: "Database & Tools",
            color: "text-purple-400",
            shadow: "shadow-purple-500/10",
            items: ["MySQL", "MongoDB", "SQL", "Git & GitHub", "Vercel/Render"],
            icon: "📊"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, rotateX: 15 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { type: "spring", stiffness: 100, damping: 12 }
        }
    };

    return (
        <section id="skills" className="py-20 space-y-12">
            {/* 🔹 Heading with 3D Reveal */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
            >
                <h2 className="text-3xl md:text-4xl font-bold">
                    Technical <span className="text-emerald-500">Arsenal</span>
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
            </motion.div>

            {/* 🔹 Interactive Skill Cards Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
                {skillsData.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{
                            y: -10,
                            rotateY: 5,
                            rotateX: -5,
                            scale: 1.02
                        }}
                        className={`relative group rounded-2xl border border-slate-800 bg-slate-900/40 p-1 bg-gradient-to-br from-slate-800/50 to-transparent backdrop-blur-xl ${skill.shadow} transition-all duration-300`}
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* Glow Effect on Hover */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="relative p-6 space-y-4" style={{ transform: "translateZ(30px)" }}>
                            <div className="flex justify-between items-start">
                                <span className="text-3xl" style={{ transform: "translateZ(50px)" }}>{skill.icon}</span>
                                <div className={`h-2 w-2 rounded-full animate-ping bg-current ${skill.color}`} />
                            </div>

                            <h3 className={`text-xl font-bold ${skill.color}`} style={{ transform: "translateZ(40px)" }}>
                                {skill.title}
                            </h3>

                            <ul className="space-y-2">
                                {skill.items.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        whileHover={{ x: 5, color: "#fff" }}
                                        className="flex items-center gap-2 text-slate-400 text-sm font-medium"
                                        style={{ transform: "translateZ(20px)" }}
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-slate-700 group-hover:bg-emerald-500 transition-colors" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Bottom 3D Decorative Bar */}
                        <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent blur-sm" />
                    </motion.div>
                ))}
            </motion.div>

            {/* 🔹 Background Decoration */}
            <div className="absolute right-0 top-1/2 -z-10 h-64 w-64 bg-emerald-500/5 blur-[120px] rounded-full" />
        </section>
    );
}

export default Skills;