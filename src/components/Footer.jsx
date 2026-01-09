import {
    SiCodechef,
    SiLeetcode,
    SiHackerrank,
    SiGithub,
    SiLinkedin,
} from "react-icons/si";

function Footer() {
    const footerLinks = [
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
            name: "CodeChef",
            href: "https://www.codechef.com/users/nsr_777",
            icon: SiCodechef,
            colorClass: "text-[#FFA116]",
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
    ];

    return (
        <footer className="border-t border-slate-800 bg-slate-950/90">
            <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-[11px] text-slate-500">
                    © {new Date().getFullYear()} Nitesh Singh. All rights reserved.
                </p>

                <div className="flex items-center gap-3">
                    {footerLinks.map(({ name, href, icon: Icon, colorClass }) => (
                        <a
                            key={name}
                            href={href}
                            target="_blank"
                            title={name}
                            className={`text-lg hover:scale-110 hover:brightness-110 transition-transform ${colorClass}`}
                        >
                            <Icon />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
