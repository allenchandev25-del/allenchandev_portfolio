import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BackgroundPaths } from '@/src/components/ui/background-paths';
import MagneticDock from '@/src/components/ui/magnetic-dock';
import Switch from '@/src/components/ui/toggle-switch';
import { Separator } from '@/src/components/ui/separator';
import { InteractiveBackground } from '@/src/components/ui/mouse-animation';

const works = [
  {
    title: "Wazabi E-commerce",
    description: "Full-stack luxury streetwear platform. Engineered a secure payment ecosystem with Razorpay and custom JWT/Firebase authentication fallback. Implemented atomic inventory synchronization and an automated asset management pipeline.",
    image: "/wazabi.png",
    tech: ["React", "Node.js", "Express", "SQLite", "Razorpay", "Firebase"],
    github: "https://github.com/allenchandev25-del/Wazabi",
    link: "https://wazabi.in"
  },
  {
    title: "PathX",
    description: "Autonomous Vehicle Simulator. Engineered a high-fidelity simulator leveraging Kinematic Bicycle Models and Pure Pursuit algorithms at 60Hz. Designed a premium dark-mode dashboard with real-time telemetry visualization using D3-driven logic.",
    image: "/pathx.png",
    tech: ["React 19", "TypeScript", "Vite 6", "Motion"],
    github: "https://github.com/allenchandev25-del/PathX",
    link: "https://pathx-sim.vercel.app"
  },
  {
    title: "Lumina AI Assistant",
    description: "Privacy-First AI Tutoring Platform. Architected a privacy-first AI platform by migrating external API dependencies to locally-hosted inference pipelines (Ollama). Integrated dynamic interactive Flashcards directly from LLM inferences.",
    image: "/lumina.png",
    tech: ["React", "TypeScript", "Ollama"],
    github: "https://github.com/allenchandev25-del/AI_Tutoring_Assistant"
  },
  {
    title: "Edgelytics",
    description: "Edge Computing IoT Framework. Constructed an edge-computing framework to ingest and manage real-time telemetry from Arduino microcontrollers. Implemented a local anomaly-detection algorithm to trace impossible environmental data spikes.",
    image: "/edgelytics.png",
    tech: ["Python", "Flask", "Arduino"],
    github: "https://github.com/allenchandev25-del/Edgelytics"
  },
  {
    title: "Emergency Geo-Router",
    description: "Fault-Tolerant Redundant Routing System. Deployed a fault-tolerant routing application to triangulate and transmit location data in offline-critical environments. Wrote robust handling algorithms to detect low-accuracy GPS metrics.",
    image: "/georouter.png",
    tech: ["Geolocation API", "React"],
    github: "https://github.com/allenchandev25-del/universal-emergency-resource-router"
  },
  {
    title: "NextChapter",
    description: "Personalized Book Recommendation System. Refactored a desktop-based Python application handling complex graphical frame life-cycles and state management. Re-architected the state pipeline for a personalized book recommendation engine.",
    image: "/nextchapter.png",
    tech: ["Python", "Tkinter"],
    github: "https://github.com/allenchandev25-del/Book-Recommendation-System"
  }
];

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "TypeScript", "JavaScript", "Python", "C" ]
  },
  {
    title: "Web & Databases",
    skills: ["HTML", "CSS3", "React", "Vite", "Flask", "Tailwind CSS", "Firebase", "MySQL"]
  },
  {
    title: "Tools & Hardware",
    skills: ["Linux", "VS Code", "Git/GitHub", "Burp Suite", "Nmap", "Wireshark", "Ollama", "Tkinter", "Arduino/ESP8266" ]
  }
];

const experience = [
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    period: "Present",
    description: "Developing end-to-end web solutions for diverse clients, focusing on e-commerce excellence and performant full-stack architectures.",
    highlights: [
      "DMPkart: Designed and deployed a production-grade Shopify store for a women's ethnic wear brand, specializing in theme customization and performance optimization.",
      "Custom Full-Stack Development: Building tailored systems for clients using React, Node.js, and modern cloud infrastructures.",
      "UI/UX Design: Creating premium, conversion-focused interfaces with a focus on responsive and accessible design."
    ]
  }
];

const education = [
  { degree: "ICSE", school: "St Hilda's School Ooty", year: "2019 - 2025" },
  { degree: "B.Tech Computer Science Engineering", school: "Karunya Institute of Technology and Sciences", year: "2025 - 2029" }
];


const Section = ({ id, title, children, className = "" }: { id: string, title: string, children: React.ReactNode, className?: string }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className={`scroll-mt-32 ${className}`}
  >
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
      <div className="h-[2px] flex-1 bg-neutral-200 dark:bg-neutral-800 rounded-full" />
    </div>
    {children}
  </motion.section>
);

const FeaturedProjects = () => {
  return (
    <Section id="projects" title="Featured Projects" className="max-w-7xl mx-auto px-6">
      <div className="relative group/scroll">
        {/* Horizontal Scroll Container */}
        <div className="flex gap-8 overflow-x-auto pb-12 pt-4 px-4 -mx-4 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing">
          {works.map((work, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="w-[350px] md:w-[500px] lg:w-[600px] shrink-0 snap-center group/card relative"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[16/10] shadow-2xl bg-neutral-100 dark:bg-neutral-900 mb-8 border border-neutral-200 dark:border-neutral-800 transition-all duration-500 group-hover/card:shadow-slate-500/10">
                {/* Index Number Overlay */}
                <div className="absolute top-8 left-8 z-20 text-7xl font-black text-white/10 group-hover/card:text-white/20 transition-colors pointer-events-none">
                  0{idx + 1}
                </div>
                
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover/card:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                
                {/* Tech Badges on Image (Bottom Left) */}
                <div className="absolute bottom-8 left-8 flex flex-wrap gap-2 translate-y-4 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-500 z-30">
                  {work.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[10px] font-black text-white uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover/card:text-slate-600 dark:group-hover/card:text-slate-400 transition-colors">
                    {work.title}
                  </h3>
                  <div className="flex gap-3">
                    {work.link && (
                      <a 
                        href={work.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-2xl hover:bg-slate-700 hover:text-white transition-all shadow-sm"
                        title="Live Demo"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                    <a 
                      href={work.github || "https://github.com/allenchandev25-del"} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-2xl hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all shadow-sm"
                      title="View Source"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed line-clamp-2 group-hover/card:line-clamp-none transition-all duration-500">
                  {work.description}
                </p>
                
                <div className="flex flex-wrap gap-2.5">
                  {work.tech.map((t, i) => (
                    <span key={i} className="text-[11px] px-3 py-1.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl font-black uppercase tracking-widest text-neutral-400 group-hover/card:text-neutral-900 dark:group-hover/card:text-neutral-200 transition-all">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Hint */}
        <div className="flex justify-center gap-2 mt-4 opacity-40 group-hover/scroll:opacity-100 transition-opacity">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">Scroll to explore</span>
        </div>
      </div>
    </Section>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300 font-sans pb-32 relative">
      <InteractiveBackground />
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {/* 
            Since coding perfect SVG curves blindly is creating a wonky result, 
            please drop your actual cut-out logo images into the `public` folder!
          */}
          <img src="/logo-light.png" className="w-10 h-10 object-contain dark:hidden block" alt="Logo" />
          <img src="/logo-dark.png" className="w-10 h-10 object-contain hidden dark:block" alt="Logo" />
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-400">
          <a href="#about" className="hover:text-neutral-900 dark:hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Skills</a>
          <a href="#experience" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Projects</a>
          <a href="#education" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Education</a>
          <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-1">
          <a 
            href="/allenchandev.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-100/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 text-[11px] font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Resume
          </a>
          <div className="-ml-6">
            <Switch checked={isDark} onChange={(e) => setIsDark(e.target.checked)} />
          </div>
        </div>
      </header>

      <MagneticDock />

      <section id="home">
        <BackgroundPaths title="Allen Chandev" />
      </section>

      <div className="max-w-5xl mx-auto px-6 space-y-48 py-20">
        <Section id="about" title="About Me">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-2 border-white dark:border-neutral-800 shadow-2xl">
                <img
                  src="/allenchandev.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                I'm a B.Tech Computer Science and Engineering student at Karunya University with a deep passion for the architectural side of technology. I specialize in building systems that are as <span className="text-neutral-900 dark:text-white font-semibold">robust</span> as they are <span className="text-neutral-900 dark:text-white font-semibold">beautiful</span>.
              </p>
              <p className="text-lg text-neutral-500 dark:text-neutral-500 leading-relaxed mb-10">
                Currently working as a <span className="text-slate-600 dark:text-slate-400 font-bold tracking-tight border-b-2 border-slate-200 dark:border-slate-800">Freelance Full-Stack Developer</span>, I help businesses bridge the gap between complex backend logic and premium frontend experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.linkedin.com/in/allen-chandev-36100a347/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-slate-800 dark:bg-slate-700 text-white rounded-2xl font-bold hover:bg-slate-900 dark:hover:bg-slate-600 hover:scale-105 transition-all shadow-lg shadow-slate-500/20">
                  LinkedIn
                </a>
                <a href="https://github.com/allenchandev25-del" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-2xl font-bold hover:scale-105 transition-all shadow-lg">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Expertise">
          <div className="grid gap-12 md:grid-cols-3">
            {skillCategories.map((category, index) => (
              <div key={index} className="group">
                <h3 className="text-sm font-black mb-6 text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em]">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-xl text-sm font-semibold hover:border-slate-500/50 hover:text-slate-600 dark:hover:text-slate-400 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Professional">
          <div className="space-y-10">
            {experience.map((exp, index) => (
              <div key={index} className="p-8 md:p-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 backdrop-blur-sm group hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-2 tracking-tight group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">{exp.role}</h3>
                    <div className="items-center gap-2 flex">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      <p className="text-neutral-600 dark:text-neutral-400 font-bold uppercase text-xs tracking-widest">{exp.company}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-4 py-1.5 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full text-xs font-black uppercase tracking-tighter shadow-sm">
                    {exp.period}
                  </span>
                </div>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-4xl leading-relaxed">
                  {exp.description}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {exp.highlights.map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800/50 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed shadow-sm group-hover:shadow-md transition-all">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <FeaturedProjects />

      <div className="max-w-5xl mx-auto px-6 space-y-48 py-20">
        <Section id="education" title="Academic">
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu, index) => (
              <div key={index} className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 group hover:border-blue-500/30 transition-all duration-500">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600 dark:text-slate-400">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400 px-3 py-1 bg-white dark:bg-neutral-800 rounded-full">
                    {edu.year}
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-2 tracking-tight">{edu.school}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{edu.degree}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Get In Touch" className="text-center !mb-40">
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:allenchandev25@gmail.com"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-slate-800 dark:bg-slate-700 text-white rounded-3xl font-black text-lg overflow-hidden transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-slate-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10">allenchandev25@gmail.com</span>
              </a>
              <a
                href="tel:+919487432081"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-neutral-200 dark:border-neutral-800 bg-transparent text-neutral-900 dark:text-white rounded-3xl font-black text-lg hover:border-neutral-900 dark:hover:border-white transition-all hover:scale-105"
              >
                +91 94874 32081
              </a>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
