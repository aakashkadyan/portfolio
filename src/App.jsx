import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, ExternalLink, User, Code, Home, MessageCircle, Award, Star, BookOpen, Share2, Facebook, Linkedin as LinkedinIcon } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const form = useRef();
  // Typing animation state for name
  const fullName = "Hi, I'm Aakash Kadiyan";
  const [typedName, setTypedName] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const indexRef = { current: 0 };
    setTypedName('');
    setShowCursor(true);

    const typingInterval = setInterval(() => {
      setTypedName((prev) => {
        if (indexRef.current < fullName.length) {
          const next = prev + fullName[indexRef.current];
          indexRef.current += 1;
          return next;
        } else {
          clearInterval(typingInterval);
          setShowCursor(true);
          return prev;
        }
      });
    }, 120);

    return () => clearInterval(typingInterval);
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Create form data from the form
    const formElement = e.target;
    const formDataObj = new FormData(formElement);
    
    try {
      // Submit to formsubmit.co via fetch
      const response = await fetch('https://formsubmit.co/ajax/aakashkadiyan93@gmail.com', {
        method: 'POST',
        body: formDataObj,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const data = await response.json();
      
      if (data.success === 'true' || data.success === true) {
        // Success
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Scroll to form to show the success message
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Hide the status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  const projects = [
    {
      id: 1,
      title: "HireNest - A Job Portal",
      description: "HireNest is a modern Job Board platform for job seekers and employers. Discover, post, and manage jobs with AI-powered matching Alogrithms.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/aakashkadyan/hirenest_app_frontend",
              live: "https://hirenest-app.vercel.com/",
      image: "https://i.postimg.cc/Dwjq2xKL/hirenest-updated.png" // Replace with actual uploaded screenshot URL
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A Task management app to organize and track your day-to-day tasks. Easily add, update, and monitor your progress with notifications and a clean interface.",
      tech: ["React", "NextJs", "PostGreSQL"],
      github: "https://github.com/aakashkadyan/Task_Management_System",
      live: "https://task-management-system-weld-five.vercel.app/",
      image: "https://i.postimg.cc/bY78jQct/Screenshot-from-2025-05-29-17-05-54.png"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Web Applications with React and Node.js",
      excerpt: "Learn the best practices for creating scalable web applications using React for the frontend and Node.js for the backend...",
      content: `Building scalable web applications requires careful consideration of both frontend and backend architecture. In this comprehensive guide, we'll explore how to create robust applications using React and Node.js.

Key Topics Covered:
1. Frontend Architecture with React
   - Component structure and organization
   - State management best practices
   - Performance optimization techniques
   - Code splitting and lazy loading

2. Backend Development with Node.js
   - RESTful API design
   - Database integration
   - Authentication and authorization
   - Error handling and logging

3. Scalability Considerations
   - Horizontal vs vertical scaling
   - Load balancing strategies
   - Caching mechanisms
   - Database optimization

4. Best Practices
   - Code organization
   - Testing strategies
   - Deployment workflows
   - Monitoring and maintenance

By following these guidelines, you'll be able to build applications that can handle growing user bases and increasing data loads while maintaining performance and reliability.`,
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "The Future of AI in Software Development",
      excerpt: "Exploring how artificial intelligence is transforming the way we write, test, and maintain code...",
      content: `Artificial Intelligence is revolutionizing the software development landscape in unprecedented ways. This article delves into the current state and future possibilities of AI in software development.

Key Areas of Impact:
1. Code Generation and Assistance
   - AI-powered code completion
   - Automated code generation
   - Intelligent refactoring suggestions
   - Bug detection and prevention

2. Testing and Quality Assurance
   - Automated test generation
   - Intelligent test case optimization
   - Performance testing automation
   - Security vulnerability detection

3. Development Workflow Enhancement
   - Project planning and estimation
   - Code review automation
   - Documentation generation
   - Deployment optimization

4. Future Possibilities
   - Self-healing systems
   - Autonomous code maintenance
   - Predictive development
   - Natural language programming

The integration of AI in software development is not just about automation; it's about augmenting human capabilities and enabling developers to focus on creative problem-solving while AI handles routine tasks.`,
      date: "March 10, 2024",
      readTime: "4 min read",
      category: "Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Mastering TypeScript: A Comprehensive Guide",
      excerpt: "A deep dive into TypeScript features, best practices, and how to leverage its type system effectively...",
      content: `TypeScript has become an essential tool in modern web development, offering powerful type safety and enhanced developer experience. This comprehensive guide covers everything you need to know to master TypeScript.

Core Concepts:
1. Type System Fundamentals
   - Basic types and type inference
   - Interfaces and type aliases
   - Generics and type parameters
   - Union and intersection types

2. Advanced TypeScript Features
   - Decorators and metadata
   - Utility types
   - Conditional types
   - Mapped types

3. Best Practices
   - Type safety strategies
   - Code organization
   - Module system usage
   - Configuration management

4. Integration with Frameworks
   - React with TypeScript
   - Node.js backend development
   - Testing strategies
   - Build tool configuration

By understanding these concepts and applying them effectively, you can write more maintainable, scalable, and robust applications while catching potential errors at compile time rather than runtime.`,
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Programming",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop"
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

  const handleBlogClick = (post) => {
    setSelectedBlog(post);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const handleCloseBlog = () => {
    setSelectedBlog(null);
    document.body.style.overflow = 'auto'; // Restore background scrolling
  };

  const handleSocialShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(selectedBlog.title);
    const text = encodeURIComponent(selectedBlog.excerpt);

    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'medium':
        shareUrl = `https://medium.com/m/signin?redirect=https://medium.com/new-story?title=${title}&text=${text}`;
        break;
      case 'reddit':
        shareUrl = `https://www.reddit.com/submit?url=${url}&title=${title}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e9effd] via-[#f7faff] to-[#e0e7ff] font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/70 backdrop-blur-md shadow-lg' : 'bg-white/40 backdrop-blur-md'
      }`} style={{borderBottom: '1px solid #e0e7ff'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#1e40af" />
                      </linearGradient>
                    </defs>
                    <polygon points="32,6 58,19 58,45 32,58 6,45 6,19" stroke="url(#logo-gradient)" strokeWidth="4" fill="none" />
                    <text x="32" y="40" textAnchor="middle" fontSize="26" fontWeight="bold" fill="url(#logo-gradient)" fontFamily="monospace">AK</text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink id="home" icon={Home}>Home</NavLink>
              <NavLink id="about" icon={User}>About</NavLink>
              <NavLink id="projects" icon={Code}>Projects</NavLink>
              <NavLink id="blog" icon={BookOpen}>Blog</NavLink>
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
              <NavLink id="blog" icon={BookOpen}>Blog</NavLink>
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="text-blue-500">
                {typedName}
                <span className={showCursor ? 'inline-block animate-pulse' : ''} style={{ color: '#2563eb' }}>|</span>
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 px-4 sm:px-0">
              Full Stack Developer
            </p>
          </div>
          
          <div className="flex justify-center items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
            <a href="https://github.com/aakashkadyan" className="p-2 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Github size={18} className="text-gray-700 sm:w-5 sm:h-5" />
            </a>
            <a href="https://linkedin.com/in/aakash-kadiyan-6911b1194/" className="p-2 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Linkedin size={18} className="text-blue-600 sm:w-5 sm:h-5" />
            </a>
            <a href="mailto:aakashkadiyan93@gmail.com" className="p-2 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Mail size={18} className="text-red-500 sm:w-5 sm:h-5" />
            </a>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-[#2563eb] hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold shadow-md transition-all duration-300 hover:scale-105"
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
              About Me
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-blue-700">
                Passionate Developer with Creative Vision
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
              I'm a Full Stack Developer with a strong focus on backend technologies and over 1.5 years of experience. At StrategyCoGlobal, I helped build hirewitheve.ai and led the development of Tracey—an internal data annotation tool that significantly improved productivity and accuracy. 
              My expertise includes JavaScript, ReactJS, Node.js, Python, MongoDB, and REST APIs. I've also built personal projects like HireNest, a job board web app. With a background in data analysis and a passion for clean, scalable solutions, 
              <br/>
              I'm always eager to explore new technologies, solve real-world problems, and collaborate on impactful projects.
              </p>
            
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-5 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base">Frontend</h4>
                  <p className="text-xs sm:text-sm text-blue-600">React, Javascript, Tailwind CSS</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-5 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2 text-sm sm:text-base">Backend</h4>
                  <p className="text-xs sm:text-sm text-purple-600">Node.js, FastAPI, Python, MySql, MongoDB</p>
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
      <section id="projects" className="py-12 sm:py-16 md:py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
              Featured Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl animate-fade-in p-6">
                <div className="w-full h-64 bg-white rounded-t-xl flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-blue-700">{project.title}</h3>
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
                      className="flex items-center justify-center sm:justify-start space-x-2 text-gray-700 hover:text-blue-700 transition-colors duration-300 text-sm sm:text-base py-2 sm:py-0"
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

      {/* Blog Section */}
      <section id="blog" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
              Latest Articles
            </h2>
            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              Insights, tutorials, and thoughts on web development and technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl animate-fade-in p-6">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <button 
                      onClick={() => handleBlogClick(post)}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1"
                    >
                      <span>Read More</span>
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900/80 to-blue-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20">
            <div className="relative">
              <img 
                src={selectedBlog.image} 
                alt={selectedBlog.title}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <button
                onClick={handleCloseBlog}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 rounded-full text-xs font-medium shadow-sm">
                  {selectedBlog.category}
                </span>
                <span className="text-gray-500 text-sm">{selectedBlog.readTime}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
                {selectedBlog.title}
              </h2>
              <div className="text-gray-600 space-y-4 whitespace-pre-line leading-relaxed">
                {selectedBlog.content}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{selectedBlog.date}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Share:</span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleSocialShare('facebook')}
                        className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                        title="Share on Facebook"
                      >
                        <Facebook size={16} />
                      </button>
                      <button
                        onClick={() => handleSocialShare('linkedin')}
                        className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
                        title="Share on LinkedIn"
                      >
                        <LinkedinIcon size={16} />
                      </button>
                      <button
                        onClick={() => handleSocialShare('medium')}
                        className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
                        title="Share on Medium"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                        </svg>
                      </button>
                      <button
                        onClick={() => handleSocialShare('reddit')}
                        className="p-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors"
                        title="Share on Reddit"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
              Get In Touch
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-blue-700">
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
                    <h4 className="font-semibold text-blue-700 text-sm sm:text-base">Email</h4>
                    <p className="text-gray-600 text-sm sm:text-base break-all">aakashkadiyan93@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Linkedin className="text-blue-600" size={18} />
                    
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-blue-700 text-sm sm:text-base">LinkedIn</h4>
                    <p className="text-gray-600 text-sm sm:text-base break-all">https://linkedin.com/in/aakash-kadiyan-6911b1194/</p>
                  </div>
                  
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-600" size={18} />
                    
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-blue-700 text-sm sm:text-base">Phone</h4>
                    <p className="text-gray-600 text-sm sm:text-base break-all">+91-7011776638</p>
                  </div>
                  
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 lg:p-8 rounded-xl w-full max-w-md mx-auto">
              <form 
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5"
              >
                {submitStatus === 'success' && (
                  <div className="bg-green-100 text-green-700 p-4 rounded-lg text-sm font-medium animate-fade-in">
                    Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-100 text-red-700 p-4 rounded-lg text-sm font-medium animate-fade-in">
                    Sorry, there was an error sending your message. Please try again or contact me directly.
                  </div>
                )}
                <div>
                  <label className="block text-sm sm:text-base font-medium text-blue-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 outline-none transition-all duration-300 text-sm sm:text-base bg-white/80"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-medium text-blue-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 outline-none transition-all duration-300 text-sm sm:text-base bg-white/80"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-medium text-blue-700 mb-2">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4" 
                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 outline-none transition-all duration-300 resize-none text-sm sm:text-base bg-white/80 min-h-[100px]"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
                {/* FormSubmit configuration */}
                <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white px-6 py-3 font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-3 sm:py-4 border-t border-gray-800">
        <div className="max-w-12xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 Aakash Kadiyan
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;