function Skills() {
    return (
        <section id="skills" className="space-y-4">
            <h2 className="text-2xl font-semibold">
                Tech <span className="text-sky-400">Skills</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 space-y-2">
                    <h3 className="font-semibold text-emerald-400">
                        Programming Languages
                    </h3>
                    <ul className="space-y-1 text-slate-200">
                        <li>C</li>
                        <li>C++</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>Java</li>
                    </ul>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 space-y-2">
                    <h3 className="font-semibold text-sky-400">Web Development</h3>
                    <ul className="space-y-1 text-slate-200">
                        <li>Full Stack Development</li>
                        <li>React.js, HTML, CSS, Tailwind CSS</li>
                        <li>Frontend &amp; Backend</li>
                        <li>Node.js, Express.js</li>
                        <li>REST APIs &amp; integration</li>
                    </ul>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 space-y-2">
                    <h3 className="font-semibold text-purple-400">Database & Soft Skills</h3>
                    <ul className="space-y-1 text-slate-200">
                        <li>MySQL, SQL, MongoDB</li>
                        <li>Database Management</li>
                        <li>Problem-Solving</li>
                        <li>Team Collaboration</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Skills;
