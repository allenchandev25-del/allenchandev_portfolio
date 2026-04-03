import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BackgroundPaths } from '@/src/components/ui/background-paths';
import MagneticDock from '@/src/components/ui/magnetic-dock';
import Switch from '@/src/components/ui/toggle-switch';
import { Separator } from '@/src/components/ui/separator';

const works = [
  {
    title: "PathX",
    description: "Autonomous Vehicle Simulator. Engineered a high-fidelity simulator leveraging Kinematic Bicycle Models and Pure Pursuit algorithms at 60Hz. Designed a premium dark-mode dashboard with real-time telemetry visualization using D3-driven logic.",
    image: "/pathx.png",
    tech: ["React 19", "TypeScript", "Vite 6", "Motion"]
  },
  {
    title: "Lumina AI Assistant",
    description: "Privacy-First AI Tutoring Platform. Architected a privacy-first AI platform by migrating external API dependencies to locally-hosted inference pipelines (Ollama). Integrated dynamic interactive Flashcards directly from LLM inferences.",
    image: "/lumina.png",
    tech: ["React", "TypeScript", "Ollama"]
  },
  {
    title: "Edgelytics",
    description: "Edge Computing IoT Framework. Constructed an edge-computing framework to ingest and manage real-time telemetry from Arduino microcontrollers. Implemented a local anomaly-detection algorithm to trace impossible environmental data spikes.",
    image: "/edgelytics.png",
    tech: ["Python", "Flask", "Arduino"]
  },
  {
    title: "Emergency Geo-Router",
    description: "Fault-Tolerant Redundant Routing System. Deployed a fault-tolerant routing application to triangulate and transmit location data in offline-critical environments. Wrote robust handling algorithms to detect low-accuracy GPS metrics.",
    image: "/georouter.png",
    tech: ["Geolocation API", "React"]
  },
  {
    title: "NextChapter",
    description: "Personalized Book Recommendation System. Refactored a desktop-based Python application handling complex graphical frame life-cycles and state management. Re-architected the state pipeline for a personalized book recommendation engine.",
    image: "/nextchapter.png",
    tech: ["Python", "Tkinter"]
  }
];

const skills = [
  "TypeScript", "JavaScript", "Python", "C/C++", "HTML/CSS",
  "React", "Vite", "Flask", "Tailwind CSS", "Tkinter",
  "Ollama", "Firebase", "Git/GitHub", "VS Code"
];

const education = [
  { degree: "ICSE", school: "St Hilda's School Ooty", year: "2019 - 2025" },
  { degree: "B.Tech Computer Science Engineering", school: "Karunya Institute of Technology and Sciences", year: "2025 - 2029" }
];

const FeaturedProjects = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["calc(0% + 0vw)", "calc(-100% + 100vw)"]);

  return (
    <section id="projects" ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-neutral-50 dark:bg-neutral-900/50 border-y border-neutral-200 dark:border-neutral-800">
        <div className="absolute top-24 left-0 right-0 max-w-5xl mx-auto px-6 z-10">
           <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        </div>
        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 pt-16 w-max">
          {works.map((work, idx) => (
            <div 
              key={idx} 
              className="w-[400px] md:w-[500px] shrink-0 group"
            >
              <div className="overflow-hidden rounded-xl mb-6 aspect-[16/10] relative shadow-md">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">{work.title}</h3>
              <p className="text-base text-neutral-600 dark:text-neutral-400 mb-5 whitespace-normal line-clamp-3">
                {work.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {work.tech.map((t, i) => (
                  <span key={i} className="text-sm px-3 py-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-md font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300 font-sans pb-32">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
        <div className="font-bold text-xl tracking-widest">ALLEN CHANDEV</div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-400">
          <a href="#about" className="hover:text-neutral-900 dark:hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Projects</a>
          <a href="#education" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Education</a>
          <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Contact</a>
        </nav>
        <div>
          <Switch checked={isDark} onChange={(e) => setIsDark(e.target.checked)} />
        </div>
      </header>

      <MagneticDock />

      {/* Hero Section */}
      <section id="home">
        <BackgroundPaths title="Creative Developer" />
      </section>

      <div className="max-w-5xl mx-auto px-6 space-y-40 py-20">
        {/* About Section */}
        <section id="about" className="scroll-mt-32">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-4 border-neutral-200 dark:border-neutral-800 shadow-xl">
              <img 
                src="/allenchandev.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                B.Tech CS student at Karunya University with a focus on high-fidelity simulation, AI platform architecture, and innovative engineering solutions. Dedicated to building secure, scalable, and impactful technical systems.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/allen-chandev-36100a347/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/allenchandev25-del" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <Separator className="bg-neutral-200 dark:bg-neutral-800" />

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>

      <FeaturedProjects />

      <div className="max-w-5xl mx-auto px-6 space-y-40 py-20">
        {/* Education Section */}
        <section id="education" className="scroll-mt-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Education</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu, index) => (
              <div key={index} className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50">
                <h3 className="font-semibold text-lg mb-2">{edu.school}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">{edu.degree}</p>
                <span className="inline-block px-3 py-1 bg-neutral-200 dark:bg-neutral-800 rounded-full text-xs font-medium">
                  {edu.year}
                </span>
              </div>
            ))}
          </div>
        </section>

        <Separator className="bg-neutral-200 dark:bg-neutral-800" />

        {/* Get in Touch Section */}
        <section id="contact" className="scroll-mt-32 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a 
            href="mailto:allenchandev25@gmail.com" 
            className="inline-block px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-semibold text-lg hover:scale-105 transition-transform"
          >
            Say Hello
          </a>
        </section>
      </div>
    </div>
  );
}
