import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Bachelor of Software Engineering",
      institution: "COMSATS University Islamabad, Abbottabad",
      period: "2023 - 2027",
      description: "Currently pursuing Software Engineering and Development. Specializing in modern software development practices.",
      icon: GraduationCap,
    },
  ];

  const certifications = [
    { name: "Google Flutter Development", issuer: "Google", year: "2024" },
    { name: "TensorFlow Developer Certificate", issuer: "Google", year: "2023" },
    { name: "AWS Cloud Practitioner", issuer: "Amazon", year: "2025" },
    { name: "React Advanced Patterns", issuer: "Meta", year: "2026" },
  ];

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="section-title gradient-text">Education & Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My academic journey and professional credentials
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-primary" />
              Education
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <motion.div
                className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                style={{ originY: 0 }}
              />

              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                  className="relative pl-12 pb-8"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.2 }}
                  >
                    <edu.icon className="w-4 h-4 text-primary-foreground" />
                  </motion.div>
                  
                  {/* Pulse Ring */}
                  <motion.div
                    className="absolute left-0 w-8 h-8 rounded-full border-2 border-primary"
                    animate={{ scale: [1, 1.5, 1.5], opacity: [1, 0, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  <div className="glass-card p-6 rounded-2xl">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                    <p className="text-primary mb-3">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Award className="w-7 h-7 text-primary" />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="glass-card p-5 rounded-xl flex items-center justify-between group cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center 
                                group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: 10 }}
                    >
                      <Award className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div>
                      <h4 className="font-medium group-hover:text-primary transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{cert.year}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
