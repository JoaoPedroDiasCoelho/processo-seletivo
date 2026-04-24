import React from 'react';
import { motion } from 'motion/react';
import { 
  Rocket, 
  Cpu, 
  Users, 
  CheckCircle, 
  Code2, 
  BrainCircuit,
} from 'lucide-react';

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = React.useState('');
  const [complete, setComplete] = React.useState(false);

  React.useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let currentIndex = 0;

    const startTyping = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(startTyping, Math.random() * 30 + 20); // Variable speed for realism
      } else {
        setComplete(true);
      }
    };

    const initialDelay = setTimeout(startTyping, delay * 1000 + 800); // Base delay for animation sequence

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(initialDelay);
    };
  }, [text, delay]);

  return (
    <span>
      {displayedText}
      {!complete && displayedText.length > 0 && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
          className="inline-block w-1 h-4 bg-brand-secondary ml-0.5 align-middle"
        />
      )}
    </span>
  );
};

const CodeWindow = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      className="glass-panel rounded-xl overflow-hidden shadow-2xl relative"
    >
    
      <div className="h-10 bg-[#090a0c] border-b border-white/5 flex items-center px-4 gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
          <div className="w-3 h-3 rounded-full bg-blue-500/20" />
        </div>
        <div className="ml-4 flex items-center gap-2 px-3 py-1 rounded bg-[#1f2021] text-[10px] text-slate-500 font-mono">
          <Code2 className="w-3 h-3" />
          neural_python_agent.py
        </div>
      </div>
      
    
      <div className="p-6 font-mono text-[13px] leading-relaxed whitespace-pre">
        <div className="flex gap-4">
          <span className="text-slate-600 select-none">01</span>
          <span className="text-[#b7c8e1]"><TypewriterText text="import" delay={0.1} /></span> <span className="text-white"><TypewriterText text="tensorflow" delay={0.4} /></span> <span className="text-[#b7c8e1]"><TypewriterText text="as" delay={0.9} /></span> <span className="text-white"><TypewriterText text="tf" delay={1.1} /></span>
        </div>
        <div className="flex gap-4">
          <span className="text-slate-600 select-none">02</span>
          <span className="text-[#b7c8e1]"><TypewriterText text="from" delay={1.3} /></span> <span className="text-white"><TypewriterText text="openai" delay={1.5} /></span> <span className="text-[#b7c8e1]"><TypewriterText text="import" delay={1.8} /></span> <span className="text-white"><TypewriterText text="OpenAI" delay={2.1} /></span>
        </div>
        <div className="flex gap-4"><span className="text-slate-600 select-none">03</span><span>&nbsp;</span></div>
        <div className="flex gap-4">
          <span className="text-slate-600 select-none">04</span>
          <span className="text-slate-500"><TypewriterText text="# Inicializando agente de IA" delay={2.5} /></span>
        </div>
        <div className="flex gap-4">
          <span className="text-slate-600 select-none">05</span>
          <span className="text-white"><TypewriterText text="class" delay={3.5} /></span> <span className="text-brand-secondary"><TypewriterText text="NeuralPythonAgent" delay={3.8} /></span>:
        </div>
        <div className="flex gap-4">
          <span className="text-slate-600 select-none">06</span>
          <span className="ml-4 text-[#b7c8e1]"><TypewriterText text="def" delay={4.5} /></span> <span className="text-brand-secondary"><TypewriterText text="__init__" delay={4.8} /></span>(self):
        </div>
        <div className="flex gap-4">
          <span className="text-slate-600 select-none">07</span>
          <span className="ml-8 text-white"><TypewriterText text="self.model = tf.keras.Sequential()" delay={5.5} /></span>
        </div>
        <div className="flex gap-4">
          <span className="text-slate-600 select-none">08</span>
          <span className="ml-8 text-white"><TypewriterText text="self.training_status =" delay={6.5} /></span> <span className="text-[#e3c199]"><TypewriterText text='"In Progress"' delay={7.5} /></span>
        </div>

      
        <div className="mt-8">
          <div className="w-full bg-[#1b1b1d] rounded p-4 border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-secondary">
                <BrainCircuit className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase font-sans font-bold tracking-wider">Model Accuracy</div>
                <div className="text-sm font-bold text-white font-sans">99.2%</div>
              </div>
            </div>
            <div className="w-24 h-1 bg-[#292a2b] rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "92%" }}
                transition={{ duration: 1.5, delay: 1 }}
                className="h-full bg-brand-secondary" 
              />
            </div>
          </div>
        </div>
      </div>

    
      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -bottom-4 -left-4 glass-panel p-3 rounded-lg hidden sm:flex items-center gap-3 border-white/10"
      >
        <div className="flex -space-x-2">
          <div className="w-7 h-7 rounded-full bg-slate-300 border-2 border-[#16191f] overflow-hidden">
            <img src="https://i.pravatar.cc/100?u=1" alt="Student" />
          </div>
          <div className="w-7 h-7 rounded-full bg-slate-400 border-2 border-[#16191f] overflow-hidden">
            <img src="https://i.pravatar.cc/100?u=2" alt="Student" />
          </div>
          <div className="w-7 h-7 rounded-full bg-[#1f2021] border-2 border-[#16191f] flex items-center justify-center text-[8px] text-slate-400">+20k</div>
        </div>
        <div className="text-[10px] font-bold text-white uppercase tracking-tighter">Comunidade Ativa</div>
      </motion.div>
    </motion.div>
  );
};

export default function Hero() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate position relative to center of screen for subtle movement
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const bullets = [
    { icon: <Rocket className="w-5 h-5" />, text: "+40 horas de conteúdo direto ao ponto" },
    { icon: <Cpu className="w-5 h-5" />, text: "Projetos com Python + IA desde o módulo 1" },
    { icon: <Users className="w-5 h-5" />, text: "Suporte da comunidade com +20.000 alunos" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Certificado reconhecido pelo mercado" },
  ];

  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
    
      <motion.div 
        animate={{ 
          x: mousePosition.x,
          y: mousePosition.y 
        }}
        transition={{ type: "spring", damping: 30, stiffness: 50 }}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-primary/5 rounded-full blur-[80px] md:blur-[120px] -z-10" 
      />
      
      <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-white/5"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary">Turma de 2024 Aberta</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-[1.1] md:leading-[1.05] tracking-tight text-white max-w-[620px]"
            >
              Aprenda Python do zero e construa projetos reais com IA
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-slate-400 font-normal leading-relaxed max-w-[540px]"
            >
              O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação. Domine a linguagem mais versátil do mundo.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6"
            >
              {bullets.map((bullet, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="text-brand-secondary mt-0.5">
                    {bullet.icon}
                  </div>
                  <p className="text-sm text-slate-400 leading-tight">{bullet.text}</p>
                </div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
            >
              <button className="w-full sm:w-auto bg-brand-primary text-white px-10 py-5 rounded font-bold hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-brand-primary/10">
                Quero começar agora
              </button>
              <button className="w-full sm:w-auto border border-white/10 hover:border-white/20 text-slate-300 px-10 py-5 rounded font-bold transition-all bg-white/5">
                Ver o que vou aprender
              </button>
            </motion.div>
          </div>

        
          <div className="lg:col-span-5 relative">
            <CodeWindow />
          </div>
        </div>

      
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 md:mt-32 pt-12 border-t border-white/5"
        >
          <p className="text-center text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mb-10 md:mb-12">
            Nossos alunos trabalham em empresas globais
          </p>
          <div className="flex flex-wrap justify-center items-center gap-y-10 md:gap-y-8 gap-x-12 md:gap-x-16">
            <span className="text-lg md:text-xl font-black text-white social-proof-grayscale">TECHCORE</span>
            <span className="text-lg md:text-xl font-extrabold italic text-white social-proof-grayscale">NEXUS AI</span>
            <span className="text-lg md:text-xl font-serif font-bold text-white social-proof-grayscale">Quantum</span>
            <span className="text-lg md:text-xl font-mono font-bold text-white social-proof-grayscale">DATA_SYST</span>
            <span className="text-lg md:text-xl font-extrabold tracking-tighter text-white social-proof-grayscale">SYNTHETIC</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
