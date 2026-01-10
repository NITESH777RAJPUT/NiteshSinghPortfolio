import { Link } from "react-router-dom";
import { certificates } from "../data/certificates";

function Certificates() {
    const importantCertificates = certificates.slice(0, 4);

    return (
        <section id="certificates" className="space-y-6">
            <div className="flex items-center gap-3">
                {/* Section Number */}
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

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* 🔹 IMPORTANT CERTIFICATES */}
                {importantCertificates.map((cert, index) => (
                    <div
                        key={index}
                        className="border border-slate-800 rounded-xl overflow-hidden
              bg-slate-950/70 hover:scale-[1.02] transition"
                    >
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
                ))}

                {/* 🔥 VIEW ALL CARD (RIGHT SIDE) */}
                <Link
                    to="/certificates"
                    className="group flex flex-col items-center justify-center
            border-2 border-dashed border-emerald-500/40
            rounded-xl min-h-[240px]
            hover:border-emerald-400
            hover:bg-emerald-500/5
            transition"
                >
                    <div className="text-5xl text-emerald-400 group-hover:translate-x-2 transition">
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
