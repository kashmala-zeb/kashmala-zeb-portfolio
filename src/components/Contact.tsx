import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "malaxeb7@gmail.com" },
    { icon: MapPin, label: "Location", value: "Pakistan" },
    { icon: Phone, label: "Phone", value: "+92 316 1923775" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/kashmala-zeb", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/kashmala-zeb048/", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-mesh)" }} />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="section-title gradient-text">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              {[
                { name: "name", label: "Your Name", type: "text" },
                { name: "email", label: "Your Email", type: "email" },
              ].map((field) => (
                <div key={field.name} className="relative">
                  <motion.label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none
                              ${focusedField === field.name ? "-top-2 text-xs text-primary bg-card px-2" : "top-4 text-muted-foreground"}`}
                  >
                    {field.label}
                  </motion.label>
                  <input
                    type={field.type}
                    name={field.name}
                    className="w-full px-4 pt-6 pb-2 rounded-xl bg-muted/50 border border-border 
                              focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 
                              transition-all"
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={(e) => !e.target.value && setFocusedField(null)}
                    required
                  />
                </div>
              ))}

              <div className="relative">
                <motion.label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none
                            ${focusedField === "message" ? "-top-2 text-xs text-primary bg-card px-2" : "top-4 text-muted-foreground"}`}
                >
                  Your Message
                </motion.label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 pt-6 pb-2 rounded-xl bg-muted/50 border border-border 
                            focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 
                            transition-all resize-none"
                  onFocus={() => setFocusedField("message")}
                  onBlur={(e) => !e.target.value && setFocusedField(null)}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 rounded-xl font-semibold relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple 
                            opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
                />
                <span className="relative z-10 flex items-center justify-center gap-2 text-primary-foreground">
                  {isSubmitting ? (
                    <motion.div
                      animate={{ x: [0, 100], opacity: [1, 0] }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Sending...
                    </motion.div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center 
                                  group-hover:neon-glow transition-all duration-300">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center 
                              hover:bg-primary/20 hover:neon-glow transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="glass-card p-6 rounded-2xl text-center"
            >
              <p className="text-muted-foreground mb-4">
                Prefer a quick chat? Let's connect!
              </p>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 
                          text-primary font-medium hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
