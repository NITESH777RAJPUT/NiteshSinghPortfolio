import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
    return (
        <section id="contact" className="space-y-4">
            <h2 className="text-2xl font-semibold">
                <span className="bg-pink-500/10 px-3 py-1 rounded-full text-sm mr-2">
                    05
                </span>
                Contact
            </h2>

            <p className="text-sm text-slate-300">
                Feel free to reach out for internships, collaborations, freelance projects,
                or just to connect.
            </p>

            <div className="space-y-3 text-sm">

                {/* 📱 WhatsApp */}
                <div className="flex items-center gap-3">
                    <a
                        href="https://wa.me/917218371017"
                        target="_blank"
                        title="Chat on WhatsApp"
                        className="text-2xl text-emerald-400 hover:scale-110 transition"
                    >
                        <FaWhatsapp />
                    </a>
                    <span className="text-slate-200">
                        +91 7218371017
                    </span>
                </div>

                {/* ✉️ Email */}
                <div className="flex items-center gap-3">
                    <a
                        href="mailto:niteshsingh57371@gmail.com"
                        title="Send Email"
                        className="text-2xl text-cyan-400 hover:scale-110 transition"
                    >
                        <FaEnvelope />
                    </a>
                    <span className="text-slate-200">
                        niteshsingh57371@gmail.com
                    </span>
                </div>

                {/* 📍 Address (NOT clickable) */}
                <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-2xl text-pink-400 mt-0.5" />
                    <span className="text-slate-200">
                        Bhairavnath Mandir Goleaali, Pirangut, Pune,
                        Maharashtra – 412115
                    </span>
                </div>

            </div>
        </section>
    );
}

export default Contact;
