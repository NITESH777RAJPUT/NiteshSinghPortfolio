function Contact() {
    return (
        <section id="contact" className="space-y-4">
            <h2 className="text-2xl font-semibold">
                <span className="bg-pink-500/10 px-3 py-1 rounded-full text-sm mr-2">
                    04
                </span>
                Contact
            </h2>

            <p className="text-sm text-slate-300">
                Feel free to reach out for internships, collaborations, freelance projects, or
                just to connect in the tech space.
            </p>

            <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="card">
                    <h3 className="text-emerald-400 font-medium mb-1">Phone</h3>
                    <p className="text-slate-200">+91 7218371017</p>
                </div>
                <div className="card">
                    <h3 className="text-emerald-400 font-medium mb-1">Email</h3>
                    <p className="text-slate-200">niteshsingh57371@gmail.com</p>
                </div>
                <div className="card">
                    <h3 className="text-emerald-400 font-medium mb-1">Location</h3>
                    <p className="text-slate-200">
                        Bhairavnath Mandir goleaali, Pirangut, Pune, Maharashtra - 412115
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
