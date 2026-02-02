import { motion } from "framer-motion";
import { useState } from "react";
import { certificates } from "../data/certificates";

function FlipCard({ cert }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative h-[280px] w-full cursor-pointer"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            style={{ perspective: "1200px" }}
        >
            <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-full h-full"
            >
                {/* --- FRONT SIDE --- */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/90 shadow-xl"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    {cert.image ? (
                        <img
                            src={cert.image}
                            alt={cert.title}
                            className="h-40 w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    ) : (
                        <div className="h-40 w-full bg-slate-800 flex items-center justify-center text-4xl">🎓</div>
                    )}
                    <div className="p-5 space-y-1">
                        <h3 className="font-bold text-slate-100 text-sm line-clamp-1">
                            {cert.title}
                        </h3>
                        <p className="text-xs text-emerald-500 font-medium uppercase tracking-wider">{cert.issuer}</p>
                        <div className="pt-4 flex justify-between items-center">
                            <span className="text-[10px] text-slate-500 uppercase font-bold">Ref: #2025</span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Hover to flip</span>
                        </div>
                    </div>
                </div>

                {/* --- BACK SIDE --- */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden rounded-2xl border-2 border-emerald-500/30 bg-slate-950 p-6 flex flex-col justify-center items-center text-center shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)]"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)"
                    }}
                >
                    {/* Holographic Pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#10b981_0%,transparent_70%)]" />

                    <h3 className="font-bold text-white text-lg mb-2 z-10">
                        {cert.title}
                    </h3>
                    <p className="text-xs text-slate-400 mb-6 z-10 italic">
                        Verified achievement by {cert.issuer}
                    </p>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={cert.file}
                        target="_blank"
                        rel="noreferrer"
                        className="relative z-10 px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold shadow-lg shadow-emerald-500/20 hover:bg-white transition-colors"
                    >
                        View Credential ↗
                    </motion.a>
                </div>
            </motion.div>
        </div>
    );
}

function CertificatesHighlights() {
    const featuredCertificates = certificates
        ?.filter((cert) => cert.featured)
        .slice(0, 3) || [];

    return (
        <section className="relative py-10 space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        Certifications
                    </h2>
                    <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">Global recognized validations</p>
                </div>

                <motion.a
                    whileHover={{ x: 5 }}
                    href="#certificates"
                    className="group flex items-center gap-2 text-sm font-semibold text-emerald-400"
                >
                    All Certificates
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </motion.a>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {featuredCertificates.map((cert, index) => (
                    <FlipCard key={index} cert={cert} />
                ))}
            </div>

            {/* Background Glow */}
            <div className="absolute -left-20 top-1/2 -z-10 h-40 w-40 bg-emerald-500/5 blur-[100px]" />
        </section>
    );
}

export default CertificatesHighlights;