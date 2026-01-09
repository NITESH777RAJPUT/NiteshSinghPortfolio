import { certificates } from "../data/certificates";

function Certificates() {
    return (
        <section
            id="certificates"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-6"
        >
            <div>
                <h2 className="text-2xl font-semibold">Certificates</h2>
                <p className="text-sm text-slate-400">
                    Verified certifications & achievements
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {certificates.map((cert, index) => (
                    <div
                        key={index}
                        className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/70 hover:scale-[1.02] transition"
                    >
                        {cert.image && (
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="h-40 w-full object-cover"
                            />
                        )}

                        <div className="p-4 space-y-1">
                            <h3 className="font-semibold text-slate-100">
                                {cert.title}
                            </h3>
                            <p className="text-sm text-slate-400">{cert.issuer}</p>
                            <p className="text-xs text-slate-500">
                                {cert.year} • {cert.type}
                            </p>

                            <a
                                href={cert.file}
                                target="_blank"
                                className="inline-block mt-3 text-teal-400 text-sm font-medium hover:underline"
                            >
                                View Certificate →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Certificates;   // 🔥 THIS LINE MUST BE THERE
