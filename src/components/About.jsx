function About() {
    return (
        <section id="about" className="space-y-4">
            <h2 className="text-2xl font-semibold">
                <span className="bg-emerald-500/10 px-3 py-1 rounded-full text-sm mr-2">
                    01
                </span>
                About Me
            </h2>

            <p className="text-sm text-slate-300">
                I&apos;m a passionate Computer Engineering student eager to turn ideas into
                impactful software solutions. I enjoy full-stack development, problem solving,
                and working in collaborative tech environments where I can keep learning and building.
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
                {/* Education */}
                <div className="card">
                    <h3 className="text-emerald-400 font-medium mb-2">Education</h3>
                    <ul className="space-y-2 text-slate-200">
                        <li>
                            <b>Bachelor of Technology – Computer Engineering</b>
                            <br />
                            ISBM, Pune • 2024 – 2028
                        </li>
                        <li>
                            <b>Higher Secondary Certificate (Science – PCM)</b>
                            <br />
                            Periwinkle College • 2023 – 2024
                        </li>
                    </ul>
                </div>

                {/* Languages & Soft skills */}
                <div className="card">
                    <h3 className="text-emerald-400 font-medium mb-2">Languages & Soft Skills</h3>
                    <div className="mb-3">
                        <p className="text-xs text-slate-400 mb-1">Languages I speak:</p>
                        <div className="flex flex-wrap gap-2">
                            {["Hindi", "English", "Bhojpuri", "Marathi"].map((lang) => (
                                <span
                                    key={lang}
                                    className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs"
                                >
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-xs text-slate-400 mb-1">Soft skills:</p>
                        <ul className="text-slate-200 space-y-1">
                            <li>• Problem Solving</li>
                            <li>• Team Collaboration</li>
                            <li>• Continuous Learning</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
