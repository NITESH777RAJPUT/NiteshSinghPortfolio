function Achievements() {
    return (
        <section id="achievements" className="space-y-4">
            <h2 className="text-2xl font-semibold">Achievements & Highlights</h2>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="card space-y-2">
                    <h3 className="font-medium text-emerald-400">Hackathon – 1st Rank</h3>
                    <p className="text-sm text-slate-300">
                        Won 1st place in a Hackathon TechFest at ISBM, Pune for building a smart{" "}
                        <span className="font-semibold">Budget Tracker</span> that tracks sales, purchase
                        cost, expenses and visualises profit/loss with charts.
                    </p>
                </div>
                <div className="card space-y-2">
                    <h3 className="font-medium text-emerald-400">Active GitHub Contributor</h3>
                    <p className="text-sm text-slate-300">
                        Pushed multiple full stack projects and experiments using Node.js, React.js,
                        Express.js, HTML, CSS, Tailwind CSS, JavaScript and Python with proper version control.
                    </p>
                    <a
                        href="https://github.com/NITESH777RAJPUT"
                        target="_blank"
                        className="text-xs underline hover:text-emerald-400"
                    >
                        Visit my GitHub profile
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Achievements;
