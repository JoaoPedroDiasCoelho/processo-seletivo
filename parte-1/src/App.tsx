import { motion } from "motion/react";
import { 
  ArrowUpRight, 
  Plus, 
  Minus, 
  Linkedin, 
  Facebook, 
  Twitter, 
  Menu, 
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 py-6">
      <div className="container-custom flex justify-between items-center">
        <a href="/" className="h-8">
          <img src="/Logo.png" alt="Positivus" className="h-full object-contain" referrerPolicy="no-referrer" />
        </a>
        <div className="hidden lg:flex items-center gap-10">
          <a href="#about" className="hover:text-primary transition-colors text-xl">About us</a>
          <a href="#services" className="hover:text-primary transition-colors text-xl">Services</a>
          <a href="#use-cases" className="hover:text-primary transition-colors text-xl">Use Cases</a>
          <a href="#pricing" className="hover:text-primary transition-colors text-xl">Pricing</a>
          <a href="#blog" className="hover:text-primary transition-colors text-xl">Blog</a>
          <button className="btn-outline text-xl px-9 py-5">Request a quote</button>
        </div>

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 p-6 flex flex-col gap-6 shadow-xl"
        >
          <a href="#about" onClick={() => setIsOpen(false)} className="text-xl font-medium">About us</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="text-xl font-medium">Services</a>
          <a href="#use-cases" onClick={() => setIsOpen(false)} className="text-xl font-medium">Use Cases</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="text-xl font-medium">Pricing</a>
          <a href="#blog" onClick={() => setIsOpen(false)} className="text-xl font-medium">Blog</a>
          <button className="btn-outline w-full text-xl mt-4">Request a quote</button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-8">
              Navigating the digital landscape for success
            </h1>
            
            <div className="lg:hidden w-full mb-8">
                <img 
                    src="/Illustration.svg"
                    alt="Hero Illustration" 
                    className="w-full h-auto"
                />
            </div>

            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <button className="btn-primary text-xl px-10 py-5 w-full md:w-auto">Book a consultation</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <img 
                src="/Illustration.svg" 
                alt="Hero Illustration" 
                className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LogoMarquee = () => {
    return (
        <div className="py-12 bg-white grayscale overflow-hidden">
            <div className="container-custom">
                <div className="scroll-marquee">
                    <div className="scroll-marquee-content animate-marquee">
                         <div className="flex items-center gap-16 md:gap-24 opacity-40">
                             <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-8 md:h-10" />
                             <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Dribbble_logo.svg" alt="Dribbble" className="h-8 md:h-10" />
                             <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/HubSpot_Logo.svg" alt="HubSpot" className="h-8 md:h-10" />
                             <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" alt="Notion" className="h-8 md:h-10" />
                             <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-8 md:h-10" />
                             <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg" alt="Zoom" className="h-8 md:h-10" />
                
                             <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-8 md:h-10" />
                             <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Dribbble_logo.svg" alt="Dribbble" className="h-8 md:h-10" />
                             <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/HubSpot_Logo.svg" alt="HubSpot" className="h-8 md:h-10" />
                             <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" alt="Notion" className="h-8 md:h-10" />
                             <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-8 md:h-10" />
                             <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg" alt="Zoom" className="h-8 md:h-10" />
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SectionHeader = ({ title, description }: { title: string, description: string }) => (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-20 text-center md:text-left">
        <h2 className="text-4xl font-medium highlight whitespace-nowrap">{title}</h2>
        <p className="text-lg text-gray-600 max-w-xl">{description}</p>
    </div>
)

const ServicesGrid = () => {
    const services = [
        { 
            title: "Search engine optimization", 
            color: "bg-gray-light", 
            labelColor: "bg-primary text-secondary", 
            img: "tokyo-magnifier-web-search-with-elements 2.png", 
            arrowColor: "bg-secondary text-primary" 
        },
        { 
            title: "Pay-per-click advertising", 
            color: "bg-primary", 
            labelColor: "bg-white text-secondary", 
            img: "tokyo-selecting-a-value-in-the-browser-window 1.png", 
            arrowColor: "bg-secondary text-primary" 
        },
        { 
            title: "Social Media Marketing", 
            color: "bg-secondary", 
            labelColor: "bg-white text-secondary", 
            img: "tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png", 
            arrowColor: "bg-white text-secondary" 
        },
        { 
            title: "Email Marketing", 
            color: "bg-gray-light", 
            labelColor: "bg-primary text-secondary", 
            img: "tokyo-sending-messages-from-one-place-to-another 1.png", 
            arrowColor: "bg-secondary text-primary" 
        },
        { 
            title: "Content Creation", 
            color: "bg-primary", 
            labelColor: "bg-white text-secondary", 
            img: "ContentCreation.png", 
            arrowColor: "bg-secondary text-primary" 
        },
        { 
            title: "Analytics and Tracking", 
            color: "bg-secondary", 
            labelColor: "bg-primary text-secondary", 
            img: "Analytics.png", 
            arrowColor: "bg-white text-secondary" 
        },
    ]

    return (
        <section id="services" className="py-24">
            <div className="container-custom">
                <SectionHeader 
                    title="Services" 
                    description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:" 
                />
                <div className="grid md:grid-cols-2 gap-10">
                    {services.map((service, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${service.color} p-12 rounded-[2.75rem] border border-secondary shadow-brutal flex flex-col md:flex-row justify-between gap-6 group cursor-pointer h-full`}
                        >
                            <div className="flex flex-col justify-between items-start z-10">
                                <div className="space-y-1">
                                    {service.title.split(' ').map((word, i) => (
                                        <span key={i} className={`text-3xl font-medium px-2 rounded-md ${service.labelColor} inline-block leading-tight`}>
                                            {word}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-4 mt-8 lg:mt-auto">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${service.arrowColor} transition-transform group-hover:rotate-45`}>
                                        <ArrowUpRight size={24} />
                                    </div>
                                    <span className={`text-xl font-medium ${service.color === "bg-secondary" ? "text-white" : "text-secondary"}`}>Learn more</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center relative w-full md:w-1/2 aspect-square md:aspect-auto">
                                <img 
                                    src={service.img} 
                                    alt={service.title} 
                                    className="max-h-full max-w-full object-contain"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const CTASection = () => {
    return (
        <section className="py-24">
            <div className="container-custom">
                <div className="bg-gray-light rounded-[2.75rem] p-12 lg:p-16 flex flex-col lg:flex-row justify-between items-center relative gap-12">
                    <div className="max-w-xl text-center lg:text-left">
                        <h2 className="text-4xl font-medium mb-6">Let's make things happen</h2>
                        <p className="text-lg text-gray-600 mb-10">
                            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                        </p>
                        <button className="btn-primary text-xl px-10 py-5 w-full md:w-auto">Get your free proposal</button>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                         <img 
                            src="proposen-image.png" 
                            alt="CTA Character" 
                            className="h-64 lg:h-80 object-contain" 
                            referrerPolicy="no-referrer"
                         />
                    </div>
                </div>
            </div>
        </section>
    )
}

const CaseStudies = () => {
    return (
        <section id="use-cases" className="py-24">
            <div className="container-custom">
                <SectionHeader 
                    title="Case Studies" 
                    description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies" 
                />
                <div className="bg-secondary text-white rounded-[2.75rem] p-12 lg:p-20 flex flex-col lg:flex-row gap-0 lg:gap-12 relative">
                    <div className="flex-1 space-y-6 pb-12 lg:pb-0 lg:pr-12 md:border-b lg:border-b-0 lg:border-r border-gray-700">
                        <p className="text-lg">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                        <a href="#" className="text-primary flex items-center gap-2 text-xl hover:underline group">
                            Learn more <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>
                    <div className="flex-1 space-y-6 py-12 lg:py-0 lg:px-12 md:border-b lg:border-b-0 lg:border-r border-gray-700">
                        <p className="text-lg">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
                        <a href="#" className="text-primary flex items-center gap-2 text-xl hover:underline group">
                            Learn more <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>
                    <div className="flex-1 space-y-6 pt-12 lg:pt-0 lg:pl-12">
                        <p className="text-lg">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
                        <a href="#" className="text-primary flex items-center gap-2 text-xl hover:underline group">
                            Learn more <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

const ProcessItem = ({ number, title, content, isOpen, onClick }: any) => {
    return (
        <div className={`${isOpen ? "bg-primary" : "bg-gray-light"} border border-secondary shadow-brutal rounded-[2.75rem] overflow-hidden transition-all duration-300`}>
            <button 
                onClick={onClick}
                className="w-full flex items-center justify-between p-8 md:p-12 text-left"
            >
                <div className="flex items-center gap-6 md:gap-8">
                    <span className="text-4xl md:text-6xl font-medium">{number}</span>
                    <h3 className="text-2xl md:text-3xl font-medium">{title}</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-secondary flex items-center justify-center bg-white shrink-0">
                    {isOpen ? <Minus /> : <Plus />}
                </div>
            </button>
            <motion.div 
                initial={false}
                animate={{ height: isOpen ? "auto" : 0 }}
                className="overflow-hidden"
            >
                <div className="px-8 md:px-12 pb-12 border-t border-secondary/20 pt-8 mt-[-1px]">
                    <p className="text-lg text-gray-700 max-w-4xl">{content}</p>
                </div>
            </motion.div>
        </div>
    )
}

const WorkingProcess = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const steps = [
        { title: "Consultation", content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." },
        { title: "Research and Strategy Development", content: "We conduct deep market research and competitor analysis to build a data-driven strategy tailored specifically to your niche and audience goals." },
        { title: "Implementation", content: "Our team of experts begins executing the strategy across all selected channels, ensuring consistent messaging and high-quality creative assets." },
        { title: "Monitoring and Optimization", content: "We constantly track performance data and make real-time adjustments to maximize your ROI and ensure campaign health." },
        { title: "Reporting and Communication", content: "You'll receive detailed monthly reports and have direct access to your account manager for transparent communication and strategy updates." },
        { title: "Continual Improvement", content: "Marketing is an iterative process. We use the insights gained to further refine the strategy for long-term sustainable growth." },
    ]

    return (
        <section className="py-24">
            <div className="container-custom">
                <SectionHeader 
                    title="Our Working Process" 
                    description="Step-by-Step Guide to Achieving Your Business Goals" 
                />
                <div className="flex flex-col gap-8">
                    {steps.map((step, idx) => (
                        <ProcessItem 
                            key={idx}
                            number={`0${idx + 1}`}
                            title={step.title}
                            content={step.content}
                            isOpen={openIndex === idx}
                            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

const TeamCard = ({ name, role, info, image }: any) => (
    <div className="bg-white border border-secondary shadow-brutal rounded-[2.75rem] p-10 relative group h-full flex flex-col">
        <div className="flex gap-6 mb-8 border-b border-secondary/20 pb-8 relative">
            <div className="w-24 h-24 bg-primary rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all shrink-0">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-end">
                <h4 className="text-xl font-bold">{name}</h4>
                <p className="text-gray-600">{role}</p>
            </div>
            <a href="#" className="absolute top-0 right-0 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform">
                <Linkedin size={20} />
            </a>
        </div>
        <p className="text-gray-600 leading-relaxed flex-1">{info}</p>
    </div>
)

const Team = () => {
    const team = [
        { name: "John Smith", role: "CEO and Founder", info: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy", image: "Picture.png" },
        { name: "Jane Doe", role: "Director of Operations", info: "7+ years of experience in project management and team leadership. Strong organizational and communication skills", image: "Picture-1.png" },
        { name: "Michael Brown", role: "Senior SEO Specialist", info: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization", image: "Picture-2.png" },
        { name: "Emily Johnson", role: "PPC Manager", info: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis", image: "Picture-3.png" },
        { name: "Brian Williams", role: "Social Media Specialist", info: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement", image: "Picture-4.png" },
        { name: "Sarah Kim", role: "Content Creator", info: "2+ years of experience in writing and editing skilled in creating compelling, SEO-optimized content for various industries", image: "Picture-5.png" },
    ]

    return (
        <section id="team" className="py-24">
            <div className="container-custom">
                <SectionHeader 
                    title="Team" 
                    description="Meet the skilled and experienced team behind our successful digital marketing strategies" 
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {team.map((member, idx) => (
                        <TeamCard key={idx} {...member} />
                    ))}
                </div>
                <div className="flex justify-end mt-12">
                    <button className="btn-primary w-full md:w-auto px-16 h-16">See all team</button>
                </div>
            </div>
        </section>
    )
}

const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const reviews = [
        { 
            text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            author: "John Smith",
            role: "Marketing Director at XYZ Corp"
        },
        { 
            text: "The strategic approach and impeccable execution provided by Positivus transformed our digital presence. Their attention to detail and commitment to our goals is unmatched.",
            author: "Jane Doe",
            role: "CEO at TechStart"
        }
    ]

    return (
        <section className="py-24">
            <div className="container-custom">
                <SectionHeader 
                    title="Testimonials" 
                    description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" 
                />
                <div className="bg-secondary text-white rounded-[2.75rem] py-20 px-8 md:px-24 overflow-hidden relative">
                    <div className="max-w-4xl mx-auto">
                        <motion.div 
                            key={current}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex flex-col items-center"
                        >
                            <div className="relative p-12 border border-primary rounded-[2.75rem] mb-12 text-lg italic text-center before:content-[''] before:absolute before:bottom-[-20px] before:left-1/2 before:-translate-x-1/2 before:w-10 before:h-10 before:bg-secondary before:border-r before:border-b before:border-primary before:rotate-45">
                                "{reviews[current].text}"
                            </div>
                            <div className="text-center">
                                <h4 className="text-primary text-xl font-medium">{reviews[current].author}</h4>
                                <p className="text-white/80">{reviews[current].role}</p>
                            </div>
                        </motion.div>

                        <div className="flex items-center justify-between mt-20">
                            <button onClick={() => setCurrent(c => (c > 0 ? c - 1 : reviews.length - 1))} className="text-white hover:text-primary transition-colors">
                                <ChevronLeft size={48} />
                            </button>
                            <div className="flex gap-4">
                                {reviews.map((_, idx) => (
                                    <div 
                                        key={idx} 
                                        onClick={() => setCurrent(idx)}
                                        className={`w-3 h-3 rotate-45 cursor-pointer transition-colors ${current === idx ? "bg-primary" : "border border-white"}`} 
                                    />
                                ))}
                            </div>
                            <button onClick={() => setCurrent(c => (c < reviews.length - 1 ? c + 1 : 0))} className="text-white hover:text-primary transition-colors">
                                <ChevronRight size={48} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Contact = () => {
    return (
        <section id="contact" className="py-24">
            <div className="container-custom">
                <SectionHeader 
                    title="Contact Us" 
                    description="Connect with Us: Let's Discuss Your Digital Marketing Needs" 
                />
                <div className="bg-gray-light rounded-[2.75rem] p-8 md:p-20 flex flex-col lg:flex-row relative overflow-hidden">
                    <div className="w-full lg:w-3/5 z-10">
                        <form className="space-y-8" onSubmit={e => e.preventDefault()}>
                            <div className="flex gap-8">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="subject" className="w-5 h-5 accent-primary" defaultChecked />
                                    <span className="text-lg">Say Hi</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="subject" className="w-5 h-5 accent-primary" />
                                    <span className="text-lg">Get a Quote</span>
                                </label>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-lg font-medium">Name</label>
                                <input type="text" placeholder="Name" className="w-full bg-white border border-secondary rounded-xl px-8 py-5 focus:outline-none focus:border-primary transition-colors" />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-lg font-medium">Email*</label>
                                <input type="email" placeholder="Email" className="w-full bg-white border border-secondary rounded-xl px-8 py-5 focus:outline-none focus:border-primary transition-colors" />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-lg font-medium">Message*</label>
                                <textarea rows={4} placeholder="Message" className="w-full bg-white border border-secondary rounded-xl px-8 py-5 focus:outline-none focus:border-primary transition-colors resize-none" />
                            </div>

                            <button className="btn-primary w-full text-xl py-6">Send Message</button>
                        </form>
                    </div>
                    
                    <div className="hidden lg:flex w-1/5 justify-end items-center absolute right-[0] top-1/2 -translate-y-1/2 overflow-visible pointer-events-none">
                         <img 
                            src="Contact-image.png" 
                            alt="Contact Illustration" 
                            className="h-[120%] object-contain" 
                            referrerPolicy="no-referrer"
                         />
                    </div>
                </div>
            </div>
        </section>
    )
}

const Footer = () => {
    return (
        <footer className="pt-16 pb-12 bg-secondary text-white mt-12 md:mx-6 lg:mx-24 rounded-t-[2.75rem] relative">
             <div className="container-custom">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 mb-16">
    
                    <div className="flex flex-col md:flex-row items-center gap-10 w-full lg:w-auto">
                        <img src="input_file_3.png" alt="Positivus" className="h-8 brightness-0 invert" referrerPolicy="no-referrer" />
                        <nav className="flex flex-wrap justify-center gap-8 text-lg">
                            <a href="#about" className="hover:text-primary underline underline-offset-4">About us</a>
                            <a href="#services" className="hover:text-primary underline underline-offset-4">Services</a>
                            <a href="#use-cases" className="hover:text-primary underline underline-offset-4">Use Cases</a>
                            <a href="#pricing" className="hover:text-primary underline underline-offset-4">Pricing</a>
                            <a href="#blog" className="hover:text-primary underline underline-offset-4">Blog</a>
                        </nav>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 bg-white text-secondary rounded-full flex items-center justify-center hover:bg-primary transition-all">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white text-secondary rounded-full flex items-center justify-center hover:bg-primary transition-all">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white text-secondary rounded-full flex items-center justify-center hover:bg-primary transition-all">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-12 mb-16">
                    <div className="space-y-6">
                        <span className="bg-primary text-secondary px-2 py-1 rounded font-medium text-xl inline-block">Contact us:</span>
                        <div className="space-y-1 text-lg">
                            <p>Email: info@positivus.com</p>
                            <p>Phone: 555-567-8901</p>
                            <p>Address: 1234 Main St, Moonstone City, Stardust State 12345</p>
                        </div>
                    </div>

                    <div className="bg-gray-800/50 p-10 rounded-[2.75rem] flex flex-col md:flex-row gap-5 w-full lg:max-w-xl">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="bg-transparent border border-white/30 rounded-xl px-6 py-4 flex-1 focus:outline-none focus:border-primary transition-colors"
                        />
                        <button className="bg-primary text-secondary px-8 py-4 rounded-xl font-medium hover:bg-opacity-90 whitespace-nowrap">Subscribe to news</button>
                    </div>
                </div>


                <div className="pt-12 border-t border-gray-700 flex flex-col md:flex-row items-center gap-4 text-gray-400 text-lg">
                    <span>© 2023 Positivus. All Rights Reserved.</span>
                    <a href="#" className="underline">Privacy Policy</a>
                </div>
             </div>
        </footer>
    )
}

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <ServicesGrid />
        <CTASection />
        <CaseStudies />
        <WorkingProcess />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
