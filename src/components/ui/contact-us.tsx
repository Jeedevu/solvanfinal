import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, MessageSquare, Briefcase, DollarSign } from "lucide-react";
import { Component as Counter } from "./vercep-feature-1";

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Visual & Film",
    budget: "$10k - $25k",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const projectTypes = ["Visual & Film", "Branding & Identity", "Interactive Web", "Other"];
  const budgets = ["<$10k", "$10k - $25k", "$25k - $50k", "$50k+"];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-28 pb-16 px-6 sm:px-12 md:px-20 lg:px-32 relative overflow-hidden transition-colors duration-300">
      {/* Background radial accent glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid grid-cols-12 gap-8 lg:gap-16 relative z-10"
      >
        {/* Left Side: Contact Information & Headings */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-between gap-12 lg:pr-8">
          <motion.div variants={itemVariants} className="space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-blue-500">Get in Touch</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] text-neutral-900 dark:text-white">
              Let's create <br />
              <span className="font-semibold text-blue-500">something real</span> <br />
              together.
            </h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md">
              Have a bold project, an innovative idea, or just want to explore how visual storytelling can transform your brand? We're ready when you are.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-neutral-900/5 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Email Us</p>
                <a href="mailto:hello@slovanmedia.com" className="text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm sm:text-base">
                  hello@slovanmedia.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-neutral-900/5 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Call Us</p>
                <a href="tel:+1234567890" className="text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm sm:text-base">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-neutral-900/5 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Locations</p>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
                  London · New York · Paris
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-6 border-t border-neutral-200 dark:border-white/10 text-xs text-neutral-500">
            © {new Date().getFullYear()} SLOVAN MEDIA. All rights reserved.
          </motion.div>
        </div>

        {/* Right Side: Inquiry Form */}
        <div className="col-span-12 lg:col-span-7">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="contact-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-neutral-50/70 border border-neutral-200 dark:bg-white/5 dark:backdrop-blur-md dark:border-white/10 p-6 sm:p-10 rounded-2xl md:rounded-3xl shadow-2xl relative"
              >
                {/* Accent border highlight */}
                <div className="absolute top-0 right-0 w-24 h-0.5 bg-gradient-to-l from-blue-500 to-transparent" />
                <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-neutral-500">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-neutral-100/50 border border-neutral-200 focus:border-blue-500 focus:outline-none px-4 py-3 rounded-lg text-neutral-900 dark:bg-white/5 dark:border-white/10 dark:text-white dark:focus:border-blue-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-neutral-500">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-neutral-100/50 border border-neutral-200 focus:border-blue-500 focus:outline-none px-4 py-3 rounded-lg text-neutral-900 dark:bg-white/5 dark:border-white/10 dark:text-white dark:focus:border-blue-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-neutral-500">Company / Organization</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-neutral-100/50 border border-neutral-200 focus:border-blue-500 focus:outline-none px-4 py-3 rounded-lg text-neutral-900 dark:bg-white/5 dark:border-white/10 dark:text-white dark:focus:border-blue-500 transition-colors"
                      placeholder="Optional"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5" /> Project Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`text-xs px-3 py-2.5 rounded-lg border transition-all ${
                            formData.projectType === type
                              ? "bg-blue-600 border-blue-600 text-white font-medium shadow-md shadow-blue-600/30"
                              : "bg-neutral-100 border-neutral-200 text-neutral-600 dark:bg-white/5 dark:border-white/10 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-white/10 hover:text-neutral-900 dark:hover:text-white"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                      <DollarSign className="h-3.5 w-3.5" /> Estimated Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {budgets.map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget })}
                          className={`text-xs px-3 py-2.5 rounded-lg border transition-all ${
                            formData.budget === budget
                              ? "bg-blue-600 border-blue-600 text-white font-medium shadow-md shadow-blue-600/30"
                              : "bg-neutral-100 border-neutral-200 text-neutral-600 dark:bg-white/5 dark:border-white/10 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-white/10 hover:text-neutral-900 dark:hover:text-white"
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                      <MessageSquare className="h-3.5 w-3.5" /> Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-neutral-100/50 border border-neutral-200 focus:border-blue-500 focus:outline-none px-4 py-3 rounded-lg text-neutral-900 dark:bg-white/5 dark:border-white/10 dark:text-white dark:focus:border-blue-500 transition-colors resize-none"
                      placeholder="Describe the scope, objectives, or timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group inline-flex items-center justify-center gap-2 bg-neutral-900 text-white dark:bg-white dark:text-black font-semibold uppercase tracking-wider text-xs px-6 py-4 rounded-lg transition-all duration-300 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white disabled:bg-neutral-200 disabled:text-neutral-400 dark:disabled:bg-white/20 dark:disabled:text-neutral-500 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Submit Inquiry
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", damping: 20 }}
                className="bg-neutral-50/80 border border-neutral-200 dark:bg-white/5 dark:backdrop-blur-md dark:border-white/10 p-8 sm:p-12 rounded-2xl md:rounded-3xl shadow-2xl text-center space-y-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-0.5 bg-gradient-to-l from-emerald-500 to-transparent" />
                <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent" />

                <div className="h-16 w-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-2 animate-pulse">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-white">Inquiry Received!</h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-neutral-900 dark:text-white font-medium">{formData.name}</span>. We've received your details and our team will get back to you at <span className="text-neutral-900 dark:text-white font-medium">{formData.email}</span> within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-neutral-950/10 hover:bg-neutral-950/20 border border-neutral-200 dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/10 text-neutral-900 dark:text-white text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Counter integration */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-7xl mx-auto mt-24"
      >
        <Counter />
      </motion.div>
    </div>
  );
}
