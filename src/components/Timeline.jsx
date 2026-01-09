const items = [
    {
        type: "Education",
        title: "B.E. Computer Engineering – ISBM",
        period: "2023 – Present",
        details:
            "Currently in 2nd year, focusing on core CS subjects, web development and problem-solving.",
    },
    {
        type: "Education",
        title: "12th – Periwinkle College",
        period: "Completed",
        details:
            "Completed higher secondary with a focus on science and mathematics.",
    },
    {
        type: "Education",
        title: "10th – Dynamic English Medium School",
        period: "Completed",
        details:
            "Built a strong foundation in academics and started exploring computers.",
    },
    {
        type: "Internship",
        title: "Web Development Intern",
        period: "Year – (add month/year)",
        details:
            "Worked on building and improving responsive websites, including a TO-DO app and other UI pages.",
    },
];

function Timeline() {
    return (
        <section id="timeline" className="space-y-4">
            <h2 className="text-2xl font-semibold">Journey</h2>
            <p className="text-sm text-slate-400">
                A quick timeline of my education and internship experience.
            </p>

            <div className="relative border-l border-slate-800 ml-2 pl-4 space-y-6">
                {items.map((item, index) => (
                    <div key={index} className="relative">
                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950" />
                        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 space-y-1">
                            <div className="flex items-center justify-between gap-3">
                                <span className="text-xs uppercase tracking-wide text-emerald-400">
                                    {item.type}
                                </span>
                                <span className="text-xs text-slate-400">{item.period}</span>
                            </div>
                            <h3 className="text-sm font-semibold text-slate-100">
                                {item.title}
                            </h3>
                            <p className="text-xs text-slate-400">{item.details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Timeline;
