import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "AI Health Assistant",
      description: "Flutter-based mobile app with AI-powered health monitoring, symptom analysis, and personalized recommendations.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?fit=crop&w=800&q=80",
      tech: ["Flutter", "TensorFlow", "Firebase", "Python"],
      category: "Mobile + AI",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "E-Commerce Dashboard",
      description: "Comprehensive React admin dashboard with real-time analytics, inventory management, and sales tracking.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=800&q=80",
      tech: ["React", "TypeScript", "Recharts", "Node.js"],
      category: "Web App",
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Smart Expense Tracker",
      description: "Intuitive Flutter app for personal finance management with AI categorization and spending insights.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?fit=crop&w=800&q=80",
      tech: ["Flutter", "Dart", "SQLite", "Charts"],
      category: "Mobile",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "AI Image Classifier",
      description: "Deep learning model for image classification with web interface for real-time predictions.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?fit=crop&w=800&q=80",
      tech: ["Python", "TensorFlow", "Flask", "React"],
      category: "AI/ML",
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Portfolio Website",
      description: "This interactive portfolio built with React and Framer Motion for smooth, delightful animations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=800&q=80",
      tech: ["React", "Framer Motion", "Tailwind", "TypeScript"],
      category: "Web",
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "Puzzle Game",
      description: "Engaging puzzle game with multiple levels, achievements, and leaderboard functionality.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?fit=crop&w=800&q=80",
      tech: ["JavaScript", "Canvas API", "Node.js", "MongoDB"],
      category: "Game Dev",
      color: "from-yellow-500 to-orange-600",
    },
  ];

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-mesh)" }} />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="section-title gradient-text">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                className="glass-card rounded-2xl overflow-hidden h-full"
                whileHover={{ y: -10 }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  rotateX: hoveredIndex === index ? 5 : 0,
                  rotateY: hoveredIndex === index ? -5 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40`} />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium 
                                  bg-background/80 backdrop-blur-sm text-foreground">
                    {project.category}
                  </span>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center 
                              justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <motion.a
                      href="#"
                      className="p-3 rounded-full bg-primary text-primary-foreground"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="p-3 rounded-full bg-secondary text-secondary-foreground"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm text-primary font-medium 
                              group-hover:gap-2 transition-all"
                  >
                    View Project
                    <ChevronRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
