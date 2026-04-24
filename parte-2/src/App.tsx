import React, { useState } from 'react';
import Hero from './components/Hero';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f1115]/80 backdrop-blur-md border-b border-white/5 py-4">
      <div className="container mx-auto px-6 md:px-8 max-w-[1280px] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl tracking-tighter text-white">NeuralPython Academy</span>
        </div>
        
  
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#" className="text-white border-b-2 border-brand-primary pb-1 transition-all">Curriculum</a>
          <a href="#" className="hover:text-white transition-colors">Instructors</a>
          <a href="#" className="hover:text-white transition-colors">Projects</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Sign In</button>
          <button className="px-5 py-2.5 bg-brand-primary text-on-primary-container text-sm font-bold rounded hover:brightness-110 transition-all active:scale-[0.98]">
            Enroll Now
          </button>
        </div>

  
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>


      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0f1115] border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6 text-slate-400 font-medium">
              <a href="#" className="text-white">Curriculum</a>
              <a href="#">Instructors</a>
              <a href="#">Projects</a>
              <a href="#">Pricing</a>
              <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
                <button className="w-full text-center py-2">Sign In</button>
                <button className="w-full bg-brand-primary text-on-primary-container py-4 rounded font-bold">
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0f1115] border-t border-white/5 font-sans">
      <div className="container mx-auto px-8 max-w-[1280px] py-16 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="space-y-4 text-center md:text-left">
          <div className="text-2xl font-black text-white tracking-widest uppercase">NeuralPython Academy</div>
          <p className="text-slate-500 text-sm italic">© 2026 NeuralPython Academy. Utility as luxury.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Technical Syllabus</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-background text-on-surface font-sans selection:bg-brand-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
      

      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
