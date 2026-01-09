function Languages() {
    const langs = ["Hindi", "English", "Bhojpuri", "Marathi"];

    return (
        <section id="languages" className="space-y-4">
            <h2 className="text-2xl font-semibold">
                Spoken <span className="text-purple-400">Languages</span>
            </h2>
            <p className="text-sm text-slate-300">
                Comfortable communicating in multiple languages, which helps in
                teamwork and collaboration with diverse people.
            </p>

            <div className="flex flex-wrap gap-3 text-sm">
                {langs.map((l) => (
                    <span
                        key={l}
                        className="px-4 py-2 rounded-full border border-slate-700 bg-slate-900/70 text-slate-100"
                    >
                        {l}
                    </span>
                ))}
            </div>
        </section>
    );
}

export default Languages;
