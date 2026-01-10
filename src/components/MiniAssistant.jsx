import { useState, useRef, useEffect } from "react";

/* 🔹 Clean & useful suggestions */
const suggestedQuestions = [
    "Tell me about yourself",
    "Why should we hire you?",
    "Show me projects",
    "Summarize skills",
];

/* 🔹 Scroll helper */
function scrollToSection(id) {
    setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }, 300);
}

/* 🔹 AI Brain */
function getAnswer(text) {
    const lower = text.toLowerCase();
    const isSummary =
        lower.includes("summary") || lower.includes("summarize");

    /* ===== INTERVIEW QUESTIONS ===== */

    if (lower.includes("tell me about yourself") || lower.includes("about yourself")) {
        scrollToSection("hero");
        return "I’m Nitesh Singh, a Computer Engineering student passionate about full-stack development and problem solving. I enjoy building real-world applications using React, Node.js, and modern tools, and I focus on writing clean, scalable code.";
    }

    if (lower.includes("why should we hire") || lower.includes("why hire")) {
        return "You should hire me because I combine strong fundamentals, hands-on project experience, internships, and a continuous learning mindset. I am adaptable, consistent, and ready to contribute from day one.";
    }

    if (lower.includes("strength")) {
        return "My strengths include strong problem-solving skills, consistency, quick learning, teamwork, and the ability to convert ideas into working products.";
    }

    if (lower.includes("weakness")) {
        return "One of my weaknesses is spending extra time perfecting details, but I am improving by managing priorities better and focusing on deadlines.";
    }

    if (lower.includes("pressure") || lower.includes("stress")) {
        return "I handle pressure by breaking tasks into smaller parts, prioritizing effectively, and staying calm while focusing on solutions.";
    }

    if (lower.includes("five years") || lower.includes("5 years")) {
        return "In five years, I see myself as a skilled full-stack developer working on impactful products, continuously learning, and contributing to a strong engineering team.";
    }

    if (lower.includes("fresher")) {
        return "Yes, I am a fresher, but I have strong practical exposure through internships, projects, hackathons, and certifications, which makes me industry-ready.";
    }

    /* ===== PORTFOLIO SECTIONS ===== */

    if (lower.includes("project")) {
        scrollToSection("projects");

        if (isSummary) {
            return "Projects Summary: Built real-world applications including a Pizza Delivery Website, a Hackathon-winning Budget Tracker, and a Finance Management system.";
        }

        return "Nitesh’s projects include a Pizza Delivery Website with online ordering, a Hackathon-winning Budget Tracker, and an Intelligent Finance Management system built using React, Node.js, and MongoDB.";
    }

    if (lower.includes("skill") || lower.includes("technical")) {
        scrollToSection("skills");

        if (isSummary) {
            return "Skills Summary: React, JavaScript, Tailwind CSS, Node.js, MongoDB, SQL, Git, and strong DSA fundamentals.";
        }

        return "Nitesh’s technical skills include React, JavaScript, Tailwind CSS, Node.js, Express, MongoDB, SQL, Git, and Data Structures & Algorithms.";
    }

    if (lower.includes("certificate") || lower.includes("certification")) {
        scrollToSection("certificates");

        if (isSummary) {
            return "Certificates Summary: 15+ verified certifications including Microsoft AI, Deloitte & TATA job simulations, internships, and hackathons.";
        }

        return "Nitesh has earned 15+ verified certifications including Microsoft AI and Cloud certifications, Deloitte and TATA job simulations, internships, and hackathon achievements.";
    }

    if (lower.includes("cp") || lower.includes("codechef") || lower.includes("leetcode")) {
        scrollToSection("cp");

        if (isSummary) {
            return "CP Summary: Active on CodeChef, LeetCode, and HackerRank with consistent DSA practice.";
        }

        return "Nitesh actively practices Competitive Programming on CodeChef, LeetCode, and HackerRank, focusing on DSA and problem-solving consistency.";
    }

    /* ===== FALLBACK ===== */
    return "You can ask interview questions (like *Why should we hire you?*) or ask me to *show* or *summarize* any section 🙂";
}

export default function MiniAssistant() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            from: "bot",
            text: "Hi 👋 I’m Nitesh’s AI assistant. You can ask interview questions or ask me to show/summarize any section."
        }
    ]);
    const [input, setInput] = useState("");
    const [typing, setTyping] = useState(false);

    const messagesEndRef = useRef(null);

    /* 🔽 Auto scroll */
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, typing]);

    const sendMessage = (text = input) => {
        if (!text.trim()) return;

        setMessages(prev => [...prev, { from: "user", text }]);
        setInput("");
        setTyping(true);

        setTimeout(() => {
            setMessages(prev => [...prev, { from: "bot", text: getAnswer(text) }]);
            setTyping(false);
        }, 700);
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-6 right-6 z-50
        bg-emerald-500 hover:bg-emerald-400
        text-slate-900 font-semibold
        px-4 py-2 rounded-full shadow-lg"
            >
                💬 Ask Me
            </button>

            {/* Chat Box */}
            {open && (
                <div className="fixed bottom-20 right-6 z-50 w-80
        rounded-2xl border border-slate-800
        bg-slate-900 text-slate-100 shadow-xl">

                    {/* Header */}
                    <div className="flex justify-between items-center px-4 py-2 border-b border-slate-800">
                        <h3 className="font-semibold text-sm">AI Assistant</h3>
                        <button
                            onClick={() => setOpen(false)}
                            className="text-slate-400 hover:text-slate-200"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="h-56 overflow-y-auto p-3 space-y-2 text-sm whitespace-pre-line">
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={`px-3 py-2 rounded-lg max-w-[90%]
                ${m.from === "user"
                                        ? "ml-auto bg-emerald-500 text-slate-900"
                                        : "bg-slate-800 text-slate-100"
                                    }`}
                            >
                                {m.text}
                            </div>
                        ))}

                        {typing && (
                            <div className="bg-slate-800 px-3 py-2 rounded-lg text-xs text-slate-400 w-fit">
                                Typing…
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Suggestions */}
                    <div className="p-2 border-t border-slate-800 flex flex-wrap gap-2">
                        {suggestedQuestions.map((q, i) => (
                            <button
                                key={i}
                                onClick={() => sendMessage(q)}
                                className="text-xs px-2 py-1 rounded-full
                bg-slate-800 hover:bg-slate-700 text-slate-200"
                            >
                                {q}
                            </button>
                        ))}
                    </div>

                    {/* Input */}
                    <div className="flex gap-2 p-2 border-t border-slate-800">
                        <input
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={e => e.key === "Enter" && sendMessage()}
                            placeholder="Ask interview or portfolio questions..."
                            className="flex-1 bg-slate-800 text-sm px-3 py-2 rounded-lg outline-none"
                        />
                        <button
                            onClick={() => sendMessage()}
                            className="bg-emerald-500 px-3 rounded-lg text-slate-900 font-semibold"
                        >
                            ➤
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
