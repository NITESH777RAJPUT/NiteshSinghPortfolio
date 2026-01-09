function Stats() {
    const stats = [
        {
            label: "Web Projects",
            value: "10+",
            info: "Portfolio, pizza website, TO-DO, resume builder, finance system & more",
        },
        {
            label: "Internships",
            value: "2+",
            info: "Web development internships with real-world tasks",
        },
        {
            label: "Certificates & Badges",
            value: "15+",
            info: "Courses, hackathons, platform badges & completion certificates",
        },
        {
            label: "Competitive Programming",
            value: "2★",
            info: "CodeChef (rank ~40k) + active LeetCode practice",
        },
    ];

    return (
        <section className="space-y-4" id="stats">
            <h2 className="text-2xl font-semibold">Highlights</h2>
            <p className="text-sm text-slate-400">
                Some quick stats about my journey in development, internships and competitive
                programming.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((item) => (
                    <div
                        key={item.label}
                        className="rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg shadow-emerald-500/5 p-4 flex flex-col gap-1"
                    >
                        <div className="text-2xl font-semibold text-emerald-400">
                            {item.value}
                        </div>
                        <div className="text-sm font-medium text-slate-100">{item.label}</div>
                        <p className="text-xs text-slate-400">{item.info}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Stats;
