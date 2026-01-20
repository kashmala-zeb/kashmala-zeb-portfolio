import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Mobile Development",
      skills: [
        { name: "Flutter", level: 95, color: "from-cyan-400 to-blue-500" },
        { name: "Dart", level: 90, color: "from-blue-400 to-cyan-500" },
      ],
    },
    {
      title: "Frontend & Web",
      skills: [
        { name: "React.js", level: 90, color: "from-cyan-400 to-blue-500" },
        { name: "Tailwind CSS", level: 92, color: "from-teal-400 to-cyan-500" },
        { name: "Bootstrap", level: 85, color: "from-purple-400 to-pink-500" },
        { name: "HTML/CSS", level: 88, color: "from-orange-400 to-red-500" },
      ],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Python", level: 88, color: "from-yellow-400 to-green-500" },
        { name: "TensorFlow", level: 80, color: "from-orange-400 to-yellow-500" },
        { name: "PyTorch", level: 72, color: "from-red-400 to-orange-500" },
        { name: "OpenAI APIs", level: 85, color: "from-green-400 to-emerald-500" },
      ],
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "Firebase", level: 88, color: "from-amber-400 to-orange-500" },
        { name: "Node.js", level: 82, color: "from-green-500 to-emerald-500" },
        { name: "Git & GitHub", level: 90, color: "from-gray-500 to-gray-700" },
        { name: "Docker", level: 70, color: "from-blue-400 to-blue-600" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="section-title gradient-text">Technical Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                    className="group"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5 }}
                        className="text-sm text-muted-foreground"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className={`skill-bar-fill bg-gradient-to-r ${skill.color}`}
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: skill.level / 100 } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Tech Icons */}
        <div className="flex justify-center mt-12 gap-6 flex-wrap">
          {["⚛️", "🎯", "🐍", "📱", "🔥", "☁️", "🤖", "💻"].map((emoji, index) => (
            <motion.div
              key={index}
              className="text-3xl cursor-default"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                delay: index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.3 }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
