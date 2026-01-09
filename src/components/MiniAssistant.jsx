import { useState } from "react";

const suggestedQuestions = [
    "Tell me about yourself",
    "Why should we hire you?",
    "Tell me about your projects",
    "What are your technical skills?",
    "What certifications do you have?",
    "What are your strengths?",
    "How do you learn new technologies?",
    "Are you a fresher?"
];

const qaMap = [
    {
        q: ["tell me about yourself", "about"],
        a: "I’m Nitesh Singh, a Computer Engineering student with strong interest in frontend development, full-stack projects, and problem solving. I enjoy building real-world applications using React, Node.js, and modern tools."
    },
    {
        q: ["projects"],
        a: "I have worked on multiple real-world projects such as a Budget Tracker, Intelligent Finance Management System, Pizza Delivery Website, and other full-stack applications using React, Node.js, MongoDB, and Tailwind CSS."
    },
    {
        q: ["skills", "technical"],
        a: "My technical skills include React, JavaScript, Tailwind CSS, HTML, CSS, Node.js, MongoDB, SQL, Git, and Data Structures & Algorithms."
    },
    {
        q: ["certificates", "certifications"],
        a: "I have earned 15+ verified certifications including Microsoft AI, Deloitte job simulations, Hackathons, and multiple internships from recognized platforms."
    },
    {
        q: ["why should we hire you", "hire"],
        a: "You should hire me because I combine strong fundamentals with real project experience, hands-on internships, and a continuous learning mindset. I am consistent, adaptable, and eager to contribute from day one."
    },
    {
        q: ["strength"],
        a: "My strengths include problem-solving, consistency, quick learning, teamwork, and the ability to convert ideas into working products."
    },
    {
        q: ["learn", "learning"],
        a: "I learn new technologies by building small projects, reading documentation, following industry best practices, and continuously improving through hands-on coding."
    },
    {
        q: ["fresher"],
        a: "Yes, I am a fresher, but I have strong practical exposure through internships, projects, hackathons, and certifications which makes me industry-ready."
    }
];

function getAnswer(text) {
    const lower = text.toLowerCase();
    for (let item of qaMap) {
        if (item.q.some(key => lower.includes(key))) {
            return item.a;
        }
    }
    return "You can ask me about Nitesh's projects, skills, certifications, strengths, or interview questions like 'Why should we hire you?' 🙂";
}

export default function MiniAssistant() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            from: "bot",
            text: "Hi 👋 I’m Nitesh’s AI assistant. You can ask me interview questions or click a suggestion below."
        }
    ]);
    const [input, setInput] = useState("");

    const sendMessage = (text = input) => {
        if (!text.trim()) return;

        const userMsg = { from: "user", text };
        const botMsg = { from: "bot", text: getAnswer(text) };

        setMessages(prev => [...prev, userMsg, botMsg]);
        setInput("");
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
          bg-slate-900 text-slate-100 shadow-xl"
                >
                    {/* Header */}
                    <div className="flex justify-between items-center px-4 py-2 border-b border-slate-800">
                        <h3 className="font-semibold text-sm">Mini AI Assistant</h3>
                        <button
                            onClick={() => setOpen(false)}
                            className="text-slate-400 hover:text-slate-200"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="h-56 overflow-y-auto p-3 space-y-2 text-sm">
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
                    </div>

                    {/* Suggested Questions */}
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
                            placeholder="Ask an interview question..."
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
