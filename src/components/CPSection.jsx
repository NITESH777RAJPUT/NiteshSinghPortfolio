import { SiCodechef, SiLeetcode, SiHackerrank } from "react-icons/si";
import { motion } from "framer-motion";

function CPSection() {
    const stats = [
        {
            platform: "CodeChef",
            rank: "2★ Coder",
            detail: "Global Rank: ~26,000",
            icon: SiCodechef,
            color: "from-amber-700 to-amber-900",
            borderColor: "border-amber-500/30",
            link: "https://www.codechef.com/users/nsr_777"
        },
        {
            platform: "LeetCode",
            rank: "Active Solver",
            detail: "Consistent DSA Practice",
            icon: SiLeetcode,
            color: "from-orange-500/20 to-orange-600/10",
            borderColor: "border-orange-500/30",
            link: "https://leetcode.com/Nitesh_777"
        },
        {
            platform: "HackerRank",
            rank: "Gold Badge",
            detail: "Problem Solving & Python",
            icon: SiHackerrank,
            color: "from-emerald-600/20 to-emerald-700/10",
            borderColor: "border-emerald-500/30",
            link: "https://www.hackerrank.com/niteshsingh57371"
        }
    ];

    return (
        <section id="cp" className="py-12 space-y-8">
            {/* Header */}
            <div className="flex items-center gap-4">
                <h2 className="text-3xl font-bold text-white">
                    <span className="text-emerald-500 font-mono text-xl mr-2">03.</span>
                    Competitive Programming
                </h2>
                <div className="h-[1px] flex-1 bg-slate-800"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* 🔹 Left: Coding Philosophy */}
                <div className="lg:col-span-1 space-y-4">
                    <div className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm h-full flex flex-col justify-center">
                        <p className="text-slate-300 leading-relaxed italic">
                            "I regularly practice Data Structures and Algorithms to sharpen my logic, speed, and analytical thinking."
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {["Arrays", "Strings", "Recursion", "Hashing", "Greedy"].map(skill => (
                                <span key={skill} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-400 rounded-lg border border-slate-700">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 🔹 Right: Platform Cards */}
                <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {stats.map((item, index) => (
                        <motion.a
                            key={item.platform}
                            href={item.link}
                            target="_blank"
                            whileHover={{ y: -5 }}
                            className={`p-5 rounded-3xl bg-gradient-to-br ${item.color} border ${item.borderColor} flex flex-col items-center text-center gap-3 transition-all group`}
                        >
                            <item.icon className="text-3xl text-white group-hover:scale-110 transition-transform" />
                            <div>
                                <h3 className="text-white font-bold">{item.platform}</h3>
                                <p className="text-emerald-400 text-xs font-bold">{item.rank}</p>
                            </div>
                            <p className="text-[11px] text-slate-400 mt-2">{item.detail}</p>
                            <span className="mt-2 text-[10px] text-white/40 group-hover:text-white transition-colors underline">View Profile</span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CPSection;