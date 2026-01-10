const projects = [
    {
        title: "Pizza Delivery Website",
        description:
            "Pizza delivery platform with customizable pizza options (base, sauce, cheese, veggies), real-time order flow, and Razorpay integration.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay"],
        year: "2025",
        live: "https://pizzato-mania.vercel.app",
    },
    {
        title: "GitHub Full-Stack Repositories",
        description:
            "Multiple full-stack projects using Node.js, React.js, Express.js, Tailwind CSS, and APIs, focusing on scalable architectures and clean UI.",
        tech: ["Node.js", "React.js", "Express.js", "Tailwind CSS"],
        year: "2025",
        live: "https://github.com/NITESH777RAJPUT",
    },
    {
        title: "Budget Tracker – Hackathon Winner",
        description:
            "Developed a web app to track product sales, purchase costs, and business expenses with automated profit/loss calculations and bar chart visualizations. Won 1st rank in a TechFest hackathon.",
        tech: ["React", "Charts", "Product Dev"],
        year: "2025",
    },
    {
        title: "Finance Intelligent Management Website",
        description:
            "An automated finance manager to track expenses, manage budgets, and generate financial reports with a user-friendly interface.",
        tech: ["React", "LocalStorage", "Data Visualization"],
        year: "2025",
    },
];

function Projects() {
    return (
        <section id="projects" className="space-y-4">
            <h2 className="text-2xl font-semibold">
                <span className="bg-cyan-500/10 px-3 py-1 rounded-full text-sm mr-2">
                    02
                </span>
                Projects
            </h2>

            <p className="text-sm text-slate-300">
                A few highlighted projects from my journey so far, including hackathon work,
                finance tools, and full-stack web apps deployed on Vercel and other platforms.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
                {projects.map((project) => (
                    <div key={project.title} className="card space-y-2">
                        <div className="flex items-center justify-between gap-2">
                            <h3 className="font-semibold">{project.title}</h3>
                            {project.year && (
                                <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                                    {project.year}
                                </span>
                            )}
                        </div>

                        <p className="text-sm text-slate-300">{project.description}</p>

                        <p className="text-xs text-slate-400">
                            Tech: {project.tech.join(", ")}
                        </p>

                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                className="text-xs underline hover:text-emerald-400 inline-block pt-1"
                            >
                                View
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
