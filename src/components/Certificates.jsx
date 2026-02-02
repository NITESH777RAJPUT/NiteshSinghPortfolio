import { Link } from "react-router-dom";
import { certificates } from "../data/certificates";
import { useRef } from "react";

function CertificateCard({ cert }) {
    const ref = useRef(null);

    const onMove = (e) => {
        const card = ref.current;
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const px = Math.round((x / rect.width) * 100);
        const py = Math.round((y / rect.height) * 100);

        card.style.setProperty("--x", `${px}%`);
        card.style.setProperty("--y", `${py}%`);
    };

    const reset = () => {
        const card = ref.current;
        card.style.setProperty("--x", `50%`);
        card.style.setProperty("--y", `50%`);
    };

    return (
        <>
            {/* 🖥️ Desktop – 3D parallax */}
            <div
                ref={ref}
                onMouseMove={onMove}
                onMouseLeave={reset}
                className="hidden md:block relative overflow-hidden rounded-xl
        border border-slate-800 bg-slate-950/70
        shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)]
        transition"
                style={{ perspective: "1200px" }}
            >
                {/* light */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-70"
                    style={{
                        background:
                            "radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(16,185,129,0.18), transparent 45%)",
                    }}
                />

                {/* image */}
                <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-40 w-full object-cover"
                    style={{ transform: "translateZ(30px)" }}
                />

                {/* content */}
                <div
                    className="relative p-4 space-y-1"
                    style={{ transform: "translateZ(40px)" }}
                >
                    <h3 className="font-semibold text-slate-100">
                        {cert.title}
                    </h3>
                    <p className="text-sm text-slate-400">{cert.issuer}</p>
                </div>
            </div>

            {/* 📱 Mobile – flat clean */}
            <div className="md:hidden border border-slate-800 rounded-xl overflow-hidden bg-slate-950/70">
                <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-40 w-full object-cover"
                />
                <div className="p-4 space-y-1">
                    <h3 className="font-semibold text-slate-100">
                        {cert.title}
                    </h3>
                    <p className="text-sm text-slate-400">{cert.issuer}</p>
                </div>
            </div>
        </>
    );
}

function Certificates() {
    const importantCertificates = certificates.slice(0, 4);

    return (
        <section id="certificates" className="space-y-6">
            {/* Heading */}
            <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full
          bg-slate-800 text-sm font-semibold text-slate-300">
                    04
                </span>

                <div>
                    <h2 className="text-2xl font-semibold">Certificates</h2>
                    <p className="text-sm text-slate-400">
                        Some of my important certifications
                    </p>
                </div>
            </div>

            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {importantCertificates.map((cert, index) => (
                    <CertificateCard key={index} cert={cert} />
                ))}

                {/* 🔥 VIEW ALL */}
                <Link
                    to="/certificates"
                    className="group relative flex flex-col items-center justify-center
          rounded-xl border-2 border-dashed border-emerald-500/40
          min-h-[240px] transition
          hover:border-emerald-400 hover:bg-emerald-500/5"
                >
                    <div className="text-5xl text-emerald-400 transition-transform group-hover:translate-x-2">
                        →
                    </div>
                    <p className="mt-3 text-sm font-semibold text-emerald-300">
                        View All Certificates
                    </p>
                </Link>
            </div>
        </section>
    );
}

export default Certificates;
