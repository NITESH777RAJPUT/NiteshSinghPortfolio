function CPSection() {
    return (
        <section id="cp" className="space-y-4">
            <h2 className="text-2xl font-semibold">
                <span className="bg-indigo-500/10 px-3 py-1 rounded-full text-sm mr-2">
                    03
                </span>
                Competitive Programming
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="card">
                    <p className="text-slate-300">
                        I regularly practice Data Structures and Algorithms on platforms like
                        CodeChef, LeetCode, and HackerRank to improve my logic, speed, and problem-solving.
                    </p>
                    <ul className="mt-2 space-y-1 text-slate-200">
                        <li>• 2★ rated coder on CodeChef with best rank around 26000</li>
                        <li>• Active on LeetCode – solving DSA problems consistently</li>
                        <li>• Strong in arrays, strings, loops, basic recursion, hashing</li>
                    </ul>
                </div>

                <div className="card flex flex-col gap-3">
                    <p className="text-xs text-slate-400">Profiles</p>
                    <div className="flex flex-wrap gap-3 text-xs">
                        <a
                            href="https://www.codechef.com/users/nsr_777"
                            target="_blank"
                            className="px-3 py-2 rounded-full bg-amber-900/60 border border-amber-500/50 hover:border-amber-300 transition"
                        >
                            CodeChef Profile
                        </a>
                        <a
                            href="https://leetcode.com/Nitesh_777"
                            target="_blank"
                            className="px-3 py-2 rounded-full bg-slate-900 border border-amber-400/60 hover:border-amber-200 transition"
                        >
                            LeetCode Profile
                        </a>
                        <a
                            href="https://www.hackerrank.com/niteshsingh57371"
                            target="_blank"
                            className="px-3 py-2 rounded-full bg-emerald-900/50 border border-emerald-500/60 hover:border-emerald-300 transition"
                        >
                            HackerRank Profile
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CPSection;
