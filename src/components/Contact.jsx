import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useRef } from "react";

function Contact() {
    const ref = useRef(null);

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const contactItems = [
        {
            icon: <FaWhatsapp />,
            label: "WhatsApp",
            value: "+91 7218371017",
            href: "https://wa.me/917218371017",
            color: "text-emerald-400",
            glow: "group-hover:shadow-emerald-500/20"
        },
        {
            icon: <FaEnvelope />,
            label: "Email",
            value: "niteshsingh57371@gmail.com",
            href: "mailto:niteshsingh57371@gmail.com",
            color: "text-cyan-400",
            glow: "group-hover:shadow-cyan-500/20"
        }
    ];

    return (
        <section id="contact" className="py-20 space-y-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
            >
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                    Get In <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">Touch</span>
                </h2>
                <p className="text-slate-400 max-w-lg mx-auto">
                    Whether you have a question or just want to say hi, my inbox is always open!
                </p>
            </motion.div>

            {/* 🛸 3D CONTACT CARD */}
            <div className="flex justify-center" style={{ perspective: "1500px" }}>
                <motion.div
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    className="relative w-full max-w-2xl p-8 md:p-12 rounded-[2rem] border border-slate-800/50 bg-slate-900/50 backdrop-blur-xl shadow-2xl overflow-hidden group"
                >
                    {/* Background Animation Blob */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px] group-hover:bg-pink-500/20 transition-colors duration-700" />

                    <div className="relative space-y-10">
                        <div className="grid gap-6 sm:grid-cols-2">
                            {contactItems.map((item, idx) => (
                                <motion.a
                                    key={idx}
                                    href={item.href}
                                    target="_blank"
                                    style={{ transform: "translateZ(50px)" }}
                                    className={`flex flex-col items-center p-6 rounded-2xl bg-slate-950/50 border border-slate-800 hover:border-slate-700 transition-all group/item ${item.glow} shadow-xl`}
                                >
                                    <span className={`text-4xl mb-3 ${item.color} group-hover/item:scale-125 transition-transform duration-300`}>
                                        {item.icon}
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{item.label}</span>
                                    <span className="text-sm text-slate-200 font-medium">{item.value}</span>
                                </motion.a>
                            ))}
                        </div>

                        {/* 📍 Address Box */}
                        <motion.div
                            style={{ transform: "translateZ(30px)" }}
                            className="flex items-start gap-4 p-6 rounded-2xl bg-slate-950/30 border border-slate-800/50"
                        >
                            <div className="p-3 rounded-full bg-pink-500/10 text-pink-400 text-xl">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-tighter">Location</h4>
                                <p className="text-slate-200 leading-relaxed italic">
                                    Bhairavnath Mandir Goleaali, Pirangut, Pune, Maharashtra – 412115
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Decorative Shine */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-30" />
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;