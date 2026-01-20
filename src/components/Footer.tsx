import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 relative border-t border-border" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-2xl font-bold gradient-text">KZ</span>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Kashmala Zeb
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Scrolling Text */}
          <div className="overflow-hidden w-64 relative">
            <motion.div
              className="whitespace-nowrap text-sm text-muted-foreground"
              animate={{ x: [0, -200, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              ✨ Flutter • React • AI/ML • TypeScript • Python • Firebase ✨
            </motion.div>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-xl glass-card hover:neon-glow transition-all duration-300"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-primary" />
          </motion.button>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-8 mt-8 text-sm"
        >
          {["About", "Skills", "Projects", "Education", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
