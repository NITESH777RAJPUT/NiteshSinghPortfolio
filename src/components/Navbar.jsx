import {
    SiCodechef,
    SiLeetcode,
    SiHackerrank,
    SiGithub,
    SiLinkedin,
    SiInstagram,
} from "react-icons/si";
import { Link } from "react-router-dom";

function Navbar() {
    const socialLinks = [
        {
            name: "CodeChef",
            href: "https://www.codechef.com/users/nsr_777",
            icon: SiCodechef,
            colorClass: "text-[#D7AF82]",
        },
        {
            name: "LeetCode",
            href: "https://leetcode.com/Nitesh_777",
            icon: SiLeetcode,
            colorClass: "text-[#FFA116]",
        },
        {
            name: "HackerRank",
            href: "https://www.hackerrank.com/niteshsingh57371",
            icon: SiHackerrank,
            colorClass: "text-[#00EA64]",
        },
        {
            name: "GitHub",
            href: "https://github.com/NITESH777RAJPUT",
            icon: SiGithub,
            colorClass: "text-slate-100",
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/nitesh-singh-rajput-58a200338",
            icon: SiLinkedin,
            colorClass: "text-[#0A66C2]",
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/niteshsingh.777",
            icon: SiInstagram,
            colorClass:
                "text-white bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full p-[3px]",
        },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 bg-slate-950/80 backdrop-blur border-b border-slate-800 z-20">
            <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

                {/* Logo / Name */}
                <Link to="/" className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 font-bold shadow-lg">
                        N
                    </span>
                    <div className="leading-tight">
                        <p className="text-sm font-semibold">Nitesh Singh</p>
                        <p className="text-[11px] text-slate-400">
                            Computer Engineer & Web Developer
                        </p>
                    </div>
                </Link>

                {/* Center nav links */}
                <div className="hidden md:flex gap-6 text-xs font-medium">
                    <Link to="/#about" className="hover:text-emerald-400 transition">
                        About
                    </Link>
                    <Link to="/#skills" className="hover:text-emerald-400 transition">
                        Skills
                    </Link>
                    <Link to="/#projects" className="hover:text-emerald-400 transition">
                        Projects
                    </Link>
                    <Link to="/#cp" className="hover:text-emerald-400 transition">
                        CP
                    </Link>

                    {/* ✅ FULL CERTIFICATES PAGE */}
                    <Link to="/certificates" className="hover:text-emerald-400 transition">
                        Certificates
                    </Link>

                    <Link to="/#contact" className="hover:text-emerald-400 transition">
                        Contact
                    </Link>
                </div>

                {/* Right – social icons */}
                <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                    {socialLinks.map(({ name, href, icon: Icon, colorClass }) => (
                        <a
                            key={name}
                            href={href}
                            target="_blank"
                            title={name}
                            className={`text-xl hover:scale-110 hover:brightness-110 transition-transform ${colorClass}`}
                        >
                            <Icon />
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
