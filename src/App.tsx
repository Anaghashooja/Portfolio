import { Github, Linkedin, FolderCode, Check, Copy, Mail, ExternalLink, Code2, Briefcase, Users, Terminal, ShoppingCart, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const App = () => {
  const [copied, setCopied] = useState(false);
  const email = "anaghashooja@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Anagha S
          </motion.span>
          <div className="space-x-8 hidden md:flex font-medium text-slate-600 items-center">
            <a href="#experience" className="hover:text-blue-600 transition">Experience</a>
            <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a 
              href={`mailto:${email}`} 
              className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition flex items-center gap-2"
            >
              Contact <Mail size={16} />
            </a>
          </div>
        </div>
      </nav>
 
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-100/50 blur-[120px]" />
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
           <h2 className="text-blue-600 font-semibold mb-4 flex items-center gap-2">
  <Terminal size={20} /> Turning complex logic into elegant code.
</h2>
           <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
  I build <span className="text-slate-400">robust web systems.</span>
</h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Currently a <span className="font-semibold text-slate-900">React Developer at RelaxPlzz Technologies</span> and a 
              <span className="font-semibold text-slate-900"> MERN Stack Intern at Srishti Innovative.</span> I specialize in building robust full-stack applications with a focus on performance and type-safety.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <a href="https://www.linkedin.com/in/anagha-s-0b8542359" target="_blank" rel="noreferrer" className="p-3 bg-white border border-slate-200 rounded-xl hover:shadow-lg hover:border-blue-500 transition text-slate-600 hover:text-blue-600">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Anaghashooja" target="_blank" rel="noreferrer" className="p-3 bg-white border border-slate-200 rounded-xl hover:shadow-lg hover:border-slate-900 transition text-slate-600 hover:text-slate-900">
                <Github size={24} />
              </a>
              
              <div className="flex items-center bg-white border border-slate-200 rounded-xl p-1 pr-4 hover:shadow-lg transition group">
                <a href={`mailto:${email}`} className="p-2 text-slate-600 group-hover:text-blue-600 transition">
                  <Mail size={24} />
                </a>
                <span className="text-sm font-medium text-slate-500 mr-4 hidden sm:inline">{email}</span>
                <button 
                  onClick={copyToClipboard}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors relative"
                >
                  {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} className="text-slate-400" />}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-bold">
              <Sparkles size={16} /> Engineering Excellence
            </div>
            <h3 className="text-3xl font-bold text-slate-800 italic">"Turning complex logic into seamless human experiences."</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              I focus on writing clean, maintainable code that scales. Whether it's managing complex state in <strong>React</strong> or designing efficient schemas in <strong>MongoDB</strong>, my goal is always to build software that lasts.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <div className="text-blue-600 mb-2"><Zap size={24} /></div>
              <h4 className="text-xl font-bold text-slate-900">Performance</h4>
              <p className="text-slate-500 text-sm">Optimized rendering and load times.</p>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <div className="text-indigo-600 mb-2"><Code2 size={24} /></div>
              <h4 className="text-xl font-bold text-slate-900">Type Safety</h4>
              <p className="text-slate-500 text-sm">Robust code with TypeScript.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="py-20 bg-slate-100 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="text-blue-600" /> Professional Experience
          </h3>
          <div className="grid gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-300 transition-all">
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900">React Developer</h4>
                  <p className="text-blue-600 font-medium">RelaxPlzz Technologies</p>
                </div>
                <span className="text-slate-500 font-medium bg-slate-50 px-3 py-1 rounded-full h-fit">Nov 2025 — Present</span>
              </div>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Developing responsive and high-end interfaces using React.js and Tailwind CSS.</li>
                <li>Collaborating on enterprise-level web tools with a focus on component modularity.</li>
                <li>Ensuring data integrity and smooth API integrations across the frontend.</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-300 transition-all">
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900">MERN Stack Intern</h4>
                  <p className="text-blue-600 font-medium">Srishti Innovative</p>
                </div>
                <span className="text-slate-500 font-medium bg-slate-50 px-3 py-1 rounded-full h-fit">Sep 2025 — Present</span>
              </div>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Deep-diving into Full-Stack development with MongoDB, Express, and Node.js.</li>
                <li>Implementing secure user sessions via JWT and handling file storage with Multer.</li>
                <li>Building out RESTful services and optimizing backend query performance.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Code2 className="text-blue-600" /> Core Tech Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'HTML', 'CSS', 'Git', 'Javascript'].map((skill) => (
              <motion.div 
                whileHover={{ scale: 1.05 }}
                key={skill} 
                className="p-6 bg-white border border-slate-200 rounded-2xl text-center font-bold text-slate-700 hover:text-blue-600 hover:border-blue-500 transition shadow-sm"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <FolderCode className="text-blue-600" /> Featured Work
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project: RelaxMart */}
            <motion.div whileHover={{ y: -5 }} className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all">
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <ShoppingCart size={24} />
                </div>
                <h4 className="text-2xl font-bold mb-3">RelaxMart</h4>
                <p className="text-slate-600 mb-6 leading-relaxed italic">
                  A sophisticated E-commerce solution featuring dynamic filtering, modular React components, and real-time data state management.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['React', 'Tailwind', 'Axios'].map(t => <span key={t} className="px-3 py-1 bg-white border border-slate-200 rounded-md text-sm font-medium text-slate-500">{t}</span>)}
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Briefcase size={12} /> Commercial Architecture
                </span>
              </div>
            </motion.div>

            {/* Project: MessMates */}
            <motion.div whileHover={{ y: -5 }} className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all">
              <div className="p-8">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <Users size={24} />
                </div>
                <h4 className="text-2xl font-bold mb-3">MessMates</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  A full-featured MERN application for managing shared community expenses. Includes robust authentication, media uploads, and automated financial logic.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['MongoDB', 'Express', 'React', 'Node.js', 'JWT'].map(t => <span key={t} className="px-3 py-1 bg-white border border-slate-200 rounded-md text-sm font-medium text-slate-500">{t}</span>)}
                </div>
                <div className="flex gap-6">
                  <a href="https://github.com/Anaghashooja/Messmate.git" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-900 transition-colors">
                    <Github size={18} /> Source Code
                  </a>
                  <a href="https://messmate-22f9ad.netlify.app/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-900 transition-colors">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-slate-200 text-center bg-white">
        <p className="font-bold text-slate-900 mb-2">Anagha S</p>
        <p className="text-slate-500 text-sm italic">Crafting Digital Excellence • Built with React + TypeScript • © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default App;