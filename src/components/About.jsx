import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function About() {
    const cardRef = useRef(null);

    // 1. Motion Values for Rotation
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // 2. Smooth Spring physics
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    // 3. Transformation to rotation degrees
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);

        // Update CSS variables for the spotlight effect
        cardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
        cardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section id="about" className="space-y-10 relative">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
            >
                <h2 className="text-3xl font-bold flex items-center gap-3">
                    <span className="text-emerald-500 font-mono text-xl">01.</span>
                    About Me
                </h2>
                <p className="text-base text-slate-400 max-w-3xl leading-relaxed">
                    I'm a passionate Computer Engineering student eager to turn ideas into
                    impactful software solutions. I enjoy <span className="text-emerald-400">full-stack development</span>,
                    problem solving, and working in collaborative tech environments.
                </p>
            </motion.div>

            {/* 🔥 HIGH-END 3D PARALLAX CARD */}
            <motion.div
                ref={cardRef}
                onMouseMove={handleMove}
                onMouseLeave={reset}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="group relative hidden md:block rounded-3xl border border-slate-800/50 bg-slate-900/40 p-10 overflow-hidden backdrop-blur-sm shadow-2xl"
            >
                {/* 🌈 DYNAMIC SPOTLIGHT EFFECT */}
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300"
                    style={{
                        background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(16,185,129,0.15), transparent 40%)`
                    }}
                />

                <div className="relative grid md:grid-cols-2 gap-12">
                    {/* LEFT CONTENT */}
                    <div className="space-y-6" style={{ transform: "translateZ(50px)" }}>
                        <div className="flex items-center gap-2">
                            <div className="h-px w-8 bg-emerald-500"></div>
                            <h3 className="text-emerald-400 font-bold uppercase tracking-widest text-xs">Education</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="group/item">
                                <h4 className="text-slate-100 font-semibold text-lg group-hover/item:text-emerald-400 transition-colors">B.Tech – Computer Engineering</h4>
                                <p className="text-slate-400 text-sm">ISBM, Pune • 2024–2028</p>
                            </div>
                            <div className="group/item">
                                <h4 className="text-slate-100 font-semibold text-lg group-hover/item:text-emerald-400 transition-colors">HSC (Science – PCM)</h4>
                                <p className="text-slate-400 text-sm">Periwinkle College • 2023–2024</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="space-y-6" style={{ transform: "translateZ(30px)" }}>
                        <div className="flex items-center gap-2">
                            <div className="h-px w-8 bg-emerald-500"></div>
                            <h3 className="text-emerald-400 font-bold uppercase tracking-widest text-xs">Expertise</h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {["Hindi", "English", "Marathi", "Bhojpuri"].map((lang) => (
                                <span key={lang} className="px-4 py-1.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 text-xs font-medium">
                                    {lang}
                                </span>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 gap-3 pt-2">
                            {[
                                { title: "Problem Solving", desc: "Algorithmic thinking" },
                                { title: "Collaboration", desc: "Team-driven mindset" },
                                { title: "Adaptability", desc: "Fast learner" }
                            ].map((skill, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-emerald-500/30 transition-all">
                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                                    <div>
                                        <p className="text-sm font-medium text-slate-200">{skill.title}</p>
                                        <p className="text-xs text-slate-500">{skill.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 📱 MOBILE FLAT VERSION */}
            <div className="md:hidden space-y-4">
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                    <h3 className="text-emerald-400 font-bold text-sm mb-4 uppercase">Education</h3>
                    <p className="text-slate-200 text-sm font-semibold">B.Tech – ISBM Pune</p>
                    <p className="text-slate-400 text-xs">2024–2028</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                    <h3 className="text-emerald-400 font-bold text-sm mb-4 uppercase">Core Focus</h3>
                    <p className="text-slate-200 text-sm font-medium">Problem Solving • Full Stack • Collaboration</p>
                </div>
            </div>
        </section>
    );
}

export default About;