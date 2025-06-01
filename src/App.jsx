import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, ExternalLink, User, Code, Home, MessageCircle, Award, Star } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "HireNest - A Job Portal",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://your-ecommerce-demo.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Firebase", "Material-UI", "Socket.io"],
      github: "https://github.com/aakashkadyan/Task_Management_System",
      live: "https://task-management-system-a6x8kp8lm-aakash-kadiyans-projects.vercel.app/",
      image: "https://i.postimg.cc/bY78jQct/Screenshot-from-2025-05-29-17-05-54.png"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      tech: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
      github: "https://github.com/yourusername/weather",
      live: "https://your-weather-demo.com",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "A comprehensive social media analytics dashboard with data visualization and automated reporting features.",
      tech: ["React", "D3.js", "Express", "PostgreSQL"],
      github: "https://github.com/yourusername/social-dashboard",
      live: "https://your-dashboard-demo.com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    }
  ];



  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLink = ({ id, icon: Icon, children }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 w-full sm:w-auto text-sm sm:text-base ${
        activeSection === id
          ? 'bg-blue-600 text-white shadow-lg'
          : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
      }`}
    >
      <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
      <span>{children}</span>
    </button>
  );



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink id="home" icon={Home}>Home</NavLink>
              <NavLink id="about" icon={User}>About</NavLink>
              <NavLink id="projects" icon={Code}>Projects</NavLink>
              <NavLink id="contact" icon={MessageCircle}>Contact</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 p-4 space-y-2 mx-2">
              <NavLink id="home" icon={Home}>Home</NavLink>
              <NavLink id="about" icon={User}>About</NavLink>
              <NavLink id="projects" icon={Code}>Projects</NavLink>
              <NavLink id="contact" icon={MessageCircle}>Contact</NavLink>
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16">
        <div className="max-w-4xl mx-auto text-center w-full">
          <div className="mb-6 sm:mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <User size={32} className="text-white sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Aakash Kadiyan
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 px-4 sm:px-0">
              Full Stack Developer
            </p>
          </div>
          
          <div className="flex justify-center items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
            <a href="https://github.com" className="p-2 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Github size={18} className="text-gray-700 sm:w-5 sm:h-5" />
            </a>
            <a href="https://linkedin.com" className="p-2 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Linkedin size={18} className="text-blue-600 sm:w-5 sm:h-5" />
            </a>
            <a href="mailto:contact@example.com" className="p-2 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Mail size={18} className="text-red-500 sm:w-5 sm:h-5" />
            </a>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-gray-800">
                Passionate Developer with Creative Vision
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
              I'm a Full Stack Developer with a strong focus on backend technologies and over 1.5 years of experience. At StrategyCoGlobal, I helped build hirewitheve.ai and led the development of Tracey—an internal data annotation tool that significantly improved productivity and accuracy. 
              My expertise includes JavaScript, ReactJS, Node.js, Python, MongoDB, and REST APIs. I’ve also built personal projects like HireNest, a job board web app. With a background in data analysis and a passion for clean, scalable solutions, 
              <br/>
              I’m always eager to explore new technologies, solve real-world problems, and collaborate on impactful projects.
              </p>
            
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-5 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base">Frontend</h4>
                  <p className="text-xs sm:text-sm text-blue-600">React, Javascript, Tailwind CSS</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-5 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2 text-sm sm:text-base">Backend</h4>
                  <p className="text-xs sm:text-sm text-purple-600">Node.js, Python, MySql, MongoDB</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center">
                <Code size={60} className="text-white sm:w-16 sm:h-16 md:w-20 md:h-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 sm:h-48 md:h-40 lg:h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs sm:text-sm">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                    <a 
                      href={project.github}
                      className="flex items-center justify-center sm:justify-start space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 text-sm sm:text-base py-2 sm:py-0"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center justify-center sm:justify-start space-x-2 text-gray-700 hover:text-purple-600 transition-colors duration-300 text-sm sm:text-base py-2 sm:py-0"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-gray-800">
                Let's Work Together
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
              I'm currently exploring new opportunities and open to exciting projects where I can contribute and grow.
              If you have something in mind or just want to connect, feel free to reach out!


              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-600" size={18} />
                    
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Email</h4>
                    <p className="text-gray-600 text-sm sm:text-base break-all">aakashkadiyan93@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Linkedin className="text-blue-600" size={18} />
                    
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">LinkedIn</h4>
                    <p className="text-gray-600 text-sm sm:text-base break-all">https://linkedin.com/in/aakash-kadiyan-6911b1194/</p>
                  </div>
                  
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-600" size={18} />
                    
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Phone</h4>
                    <p className="text-gray-600 text-sm sm:text-base break-all">+91-7011776638</p>
                  </div>
                  
                </div>

                
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 lg:p-8 rounded-xl">
              <div className="space-y-4 sm:space-y-5">
              
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 sm:py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                >
                  Send Message
                </button>
                
              </div>

            </div>
          </div>
        </div>
        
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 sm:py-8">
        <div className="max-w-12xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm sm:text-base">
              © 2025 Aakash Kadiyan
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;