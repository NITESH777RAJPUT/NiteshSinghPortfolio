import { motion, useScroll, useTransform } from "framer-motion";
import { SiCodechef, SiLeetcode, SiHackerrank, SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
    const { scrollY } = useScroll();
    const navigate = useNavigate();
    const location = useLocation();

    // 🔹 Scroll Animations (Dynamic Header)
    const height = useTransform(scrollY, [0, 100], ["90px", "65px"]);
    const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(2, 6, 23, 0)", "rgba(15, 23, 42, 0.85)"]);
    const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"]);

    const socialLinks = [
        { name: "CodeChef", href: "https://www.codechef.com/users/nsr_777", icon: SiCodechef, color: "text-[#D7AF82]" },
        { name: "LeetCode", href: "https://leetcode.com/Nitesh_777", icon: SiLeetcode, color: "text-[#FFA116]" },
        { name: "HackerRank", href: "https://www.hackerrank.com/niteshsingh57371", icon: SiHackerrank, color: "text-[#00EA64]" },
        { name: "GitHub", href: "https://github.com/NITESH777RAJPUT", icon: SiGithub, color: "text-white" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/nitesh-singh-rajput-58a200338", icon: SiLinkedin, color: "text-[#0A66C2]" },
        { name: "Instagram", href: "https://www.instagram.com/niteshsingh.777", icon: SiInstagram, color: "text-white" },
    ];

    // 🔹 Intelligent Scrolling Logic
    const handleNavClick = (e, sectionId) => {
        e.preventDefault();

        if (location.pathname !== "/") {
            // Agar kisi aur page par ho (like /certificates), pehle home jao
            navigate("/");
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
            }, 300);
        } else {
            // Agar pehle se home par ho, direct scroll karo
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.header
            style={{ height, backgroundColor, backdropFilter: backdropBlur }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 transition-all duration-300"
        >
            <nav className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between gap-4">

                {/* 🚀 Logo Section */}
                <Link to="/" className="group flex items-center gap-3 shrink-0">
                    <motion.div
                        whileHover={{ rotateY: 180, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="h-10 w-10 flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-slate-950 font-black shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                    >
                        N
                    </motion.div>
                    <div className="hidden sm:block leading-tight">
                        <p className="text-sm font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">Nitesh Singh</p>
                        <p className="text-[10px] text-slate-500 font-medium uppercase tracking-tighter">Web Developer</p>
                    </div>
                </Link>

                {/* 🧭 Middle Navigation (Glass Capsule) */}
                <div className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-slate-900/50 border border-white/10 backdrop-blur-xl">
                    {["About", "Skills", "Projects", "Certificates", "Contact"].map((item) => {
                        const isCertPage = item === "Certificates";
                        return isCertPage ? (
                            <Link
                                key={item}
                                to="/certificates"
                                className="px-5 py-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
                            >
                                {item}
                            </Link>
                        ) : (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                                className="px-5 py-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
                            >
                                {item}
                            </a>
                        );
                    })}
                </div>

                {/* 📱 Social Icons */}
                <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                    {socialLinks.map(({ name, href, icon: Icon, color }, index) => (
                        <motion.a
                            key={name}
                            href={href}
                            target="_blank"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -4, scale: 1.2, rotate: 5 }}
                            title={name}
                            className={`text-xl sm:text-2xl ${color} transition-all duration-300 drop-shadow-md`}
                        >
                            {name === "Instagram" ? (
                                <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px] rounded-lg">
                                    <Icon className="text-white bg-slate-900 rounded-[6px] p-[1px]" />
                                </div>
                            ) : (
                                <Icon />
                            )}
                        </motion.a>
                    ))}
                </div>
            </nav>
        </motion.header>
    );
}

export default Navbar;