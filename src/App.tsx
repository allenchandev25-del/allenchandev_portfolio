import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BackgroundPaths } from '@/src/components/ui/background-paths';
import MagneticDock from '@/src/components/ui/magnetic-dock';
import Switch from '@/src/components/ui/toggle-switch';
import { Separator } from '@/src/components/ui/separator';

const works = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with drag-and-drop.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=600&q=80",
    tech: ["TypeScript", "Next.js", "Tailwind"]
  },
  {
    title: "AI Content Generator",
    description: "Generates marketing copy using advanced AI models.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
    tech: ["OpenAI", "React", "Express"]
  },
  {
    title: "Fitness Tracker",
    description: "Mobile-first web app to track daily workouts and nutrition.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80",
    tech: ["Vue", "Firebase", "PWA"]
  },
  {
    title: "Real-time Chat",
    description: "Instant messaging application with end-to-end encryption.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
    tech: ["Socket.io", "React", "PostgreSQL"]
  }
];

const skills = [
  "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", 
  "Express", "MongoDB", "PostgreSQL", "Tailwind CSS", "Git & GitHub",
  "Docker", "AWS", "GraphQL", "RESTful APIs", "Jest & Testing Library"
];

const certifications = [
  { name: "AWS Certified Developer - Associate", issuer: "Amazon Web Services", year: "2024" },
  { name: "Meta Front-End Developer Professional Certificate", issuer: "Coursera", year: "2023" },
  { name: "Google Data Analytics Professional Certificate", issuer: "Google", year: "2023" }
];

const education = [
  { degree: "M.S. Computer Science", school: "University of Technology", year: "2016" },
  { degree: "B.S. Software Engineering", school: "State University", year: "2014" }
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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                I'm a passionate full-stack developer with a keen eye for design and a drive for building scalable, user-centric web applications. With over 5 years of experience in the industry, I specialize in the React ecosystem and modern backend technologies.
              </p>
              <div className="flex gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
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
        {/* Certifications Section */}
        <section id="certifications" className="scroll-mt-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Certifications</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <div key={index} className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
                <h3 className="font-semibold text-lg mb-2">{cert.name}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">{cert.issuer}</p>
                <span className="inline-block px-3 py-1 bg-neutral-200 dark:bg-neutral-800 rounded-full text-xs font-medium">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </section>

        <Separator className="bg-neutral-200 dark:bg-neutral-800" />

        {/* Education Section */}
        <section id="education" className="scroll-mt-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Education</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu, index) => (
              <div key={index} className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50">
                <h3 className="font-semibold text-lg mb-2">{edu.degree}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">{edu.school}</p>
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
            href="mailto:hello@example.com" 
            className="inline-block px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-semibold text-lg hover:scale-105 transition-transform"
          >
            Say Hello
          </a>
        </section>
      </div>
    </div>
  );
}
