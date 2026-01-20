import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, Palette, Rocket } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "Flutter", icon: "📱" },
    { name: "React", icon: "⚛️" },
    { name: "Python", icon: "🐍" },
    { name: "AI/ML", icon: "🤖" },
    { name: "Firebase", icon: "🔥" },
    { name: "TypeScript", icon: "💙" },
    { name: "Node.js", icon: "💚" },
    { name: "TensorFlow", icon: "🧠" },
  ];

  const highlights = [
    { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable solutions" },
    { icon: Cpu, title: "AI Integration", desc: "Bringing intelligence to applications" },
    { icon: Palette, title: "UI/UX Focus", desc: "Creating delightful user experiences" },
    { icon: Rocket, title: "Fast Delivery", desc: "Efficient development workflows" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-mesh)" }} />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="section-title gradient-text">About Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Passionate developer crafting digital experiences that matter
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-2xl">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                I'm a <span className="text-primary font-semibold">Flutter & AI Developer</span> with 
                a passion for building innovative mobile and web applications. With expertise in 
                cross-platform development and machine learning, I create solutions that are both 
                beautiful and intelligent.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                My journey in tech has led me through diverse projects—from AI-powered health 
                applications to sophisticated e-commerce platforms. I believe in writing clean, 
                efficient code that stands the test of time.
              </p>

              {/* Skill Bubbles */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-wrap gap-3"
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="px-4 py-2 rounded-full bg-muted/50 border border-border hover:border-primary/50 
                               hover:bg-primary/10 transition-all cursor-default flex items-center gap-2"
                  >
                    <span>{skill.icon}</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 rounded-2xl group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 
                              group-hover:neon-glow transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
