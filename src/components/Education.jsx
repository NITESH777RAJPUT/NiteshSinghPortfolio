function Education() {
    return (
        <section id="education" className="space-y-4">
            <h2 className="text-2xl font-semibold">Education &amp; Highlights</h2>

            <div className="grid md:grid-cols-2 gap-4">
                <div className="card space-y-2">
                    <h3 className="font-medium">Bachelor of Technology – Computer Engineering</h3>
                    <p className="text-xs text-emerald-400">ISBM, Pune • 2024 – 2028</p>
                    <p className="text-sm text-slate-300">
                        Pursuing B.Tech in Computer Engineering with focus on full-stack development,
                        algorithms, computer architecture and embedded systems.
                    </p>
                </div>

                <div className="card space-y-2">
                    <h3 className="font-medium">Higher Secondary Certificate (Science)</h3>
                    <p className="text-xs text-emerald-400">Periwinkle College • 2023 – 2024</p>
                    <p className="text-sm text-slate-300">
                        HSC in Science with Physics, Chemistry and Mathematics, building strong analytical
                        and problem-solving skills for engineering and technology.
                    </p>
                </div>

                <div className="card space-y-2">
                    <h3 className="font-medium">Hackathon – TechFest, ISBM Pune</h3>
                    <p className="text-xs text-emerald-400">1st Rank – Budget Tracker</p>
                    <p className="text-sm text-slate-300">
                        Developed a Budget Tracker / Finance Intelligent Management Website with profit/loss
                        calculations and dynamic visualizations, winning 1st place in the hackathon.
                    </p>
                </div>

                <div className="card space-y-2">
                    <h3 className="font-medium">Languages</h3>
                    <p className="text-sm text-slate-300">
                        Hindi, English, Bhojpuri, Marathi
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Education;
