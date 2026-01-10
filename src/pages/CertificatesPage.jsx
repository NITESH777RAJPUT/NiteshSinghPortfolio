import { certificates } from "../data/certificates";
import { useNavigate } from "react-router-dom";

function CertificatesPage() {
    const navigate = useNavigate();

    return (
        <main className="max-w-6xl mx-auto px-4 pt-24 pb-16 space-y-8">

            {/* Header + Back */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">All Certificates</h1>
                    <p className="text-slate-400">
                        Verified certifications & achievements
                    </p>
                </div>

                {/* 🔙 BACK BUTTON */}
                <button
                    onClick={() => navigate(-1)}
                    className="px-4 py-2 rounded-full border border-slate-700
            text-sm hover:border-emerald-400 hover:text-emerald-300 transition"
                >
                    ← Back
                </button>
            </div>

            {/* Certificates Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {certificates.map((cert, index) => (
                    <div
                        key={index}
                        className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/70 hover:scale-[1.02] transition"
                    >
                        <img
                            src={cert.image}
                            alt={cert.title}
                            className="h-40 w-full object-cover"
                        />

                        <div className="p-4 space-y-1">
                            <h3 className="font-semibold">{cert.title}</h3>
                            <p className="text-sm text-slate-400">{cert.issuer}</p>
                            <p className="text-xs text-slate-500">
                                {cert.year} • {cert.type}
                            </p>

                            <a
                                href={cert.file}
                                target="_blank"
                                className="inline-block mt-2 text-emerald-400 text-sm hover:underline"
                            >
                                View Certificate →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default CertificatesPage;
