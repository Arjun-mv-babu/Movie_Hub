import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Instagram, Code, Server, Database, Briefcase, Star, ArrowRight, ExternalLink, Menu, X, User, GraduationCap } from 'lucide-react';

function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <div className="scroll-smooth">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Arjun MV
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {[
                  { id: 'hero', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'contact', label: 'Contact' }
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 relative group ${
                      activeSection === id ? 'text-blue-600' : ''
                    }`}
                  >
                    {label}
                    <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                      activeSection === id ? 'scale-x-100' : ''
                    }`}></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                    activeSection === id 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)`
          }}></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-700 mb-8 shadow-lg">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Available for opportunities ✨
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6">
            <span className="block text-gray-900 mb-2">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Arjun MV
            </span>
          </h1>

          {/* Subtitle */}
          <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-6 max-w-4xl mx-auto">
            <span className="font-light">Junior Software Developer at </span>
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Solminds Technologies
            </span>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate about crafting digital experiences with modern web technologies. 
            Specialized in creating scalable, user-centric solutions that make a real impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
            >
              View My Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transform hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { number: '2+', label: 'Years Experience', color: 'text-blue-600' },
              { number: '5+', label: 'Projects Built', color: 'text-purple-600' },
              { number: '10+', label: 'Technologies', color: 'text-cyan-600' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-1`}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce focus:outline-none"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate developer with a strong foundation in modern web technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* About Content */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <User className="w-6 h-6 mr-3 text-blue-600" />
                  My Journey
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    I'm a passionate Junior Software Developer currently working at <span className="font-semibold text-blue-600">Solminds Technologies</span> 
                    in Carnival Infopark, Kochi. With a strong foundation in computer science and hands-on 
                    experience in full-stack development, I specialize in creating robust web applications.
                  </p>
                  <p>
                    My expertise spans across Python, Django, React, and modern web technologies. 
                    I'm committed to continuous learning and staying updated with the latest industry trends, 
                    always striving to deliver high-quality, scalable solutions.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl border border-green-100">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-green-600" />
                  Education
                </h4>
                <p className="text-gray-700">
                  <span className="font-semibold">BSc Computer Science</span><br />
                  EMS College of Applied Science, Iritty (2023)
                </p>
              </div>

              {/* Languages */}
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Languages</h4>
                <div className="flex flex-wrap gap-3">
                  {['Malayalam (Native)', 'English (Fluent)', 'Hindi (Conversational)'].map((lang, index) => (
                    <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { 
                  icon: <Code className="w-8 h-8" />, 
                  title: 'Clean Code', 
                  desc: 'Writing maintainable, readable code',
                  color: 'from-blue-500 to-blue-600'
                },
                { 
                  icon: <Server className="w-8 h-8" />, 
                  title: 'Full Stack', 
                  desc: 'End-to-end development expertise',
                  color: 'from-purple-500 to-purple-600'
                },
                { 
                  icon: <Database className="w-8 h-8" />, 
                  title: 'Database Design', 
                  desc: 'Efficient data management solutions',
                  color: 'from-green-500 to-green-600'
                },
                { 
                  icon: <Star className="w-8 h-8" />, 
                  title: 'Problem Solving', 
                  desc: 'Creative and analytical thinking',
                  color: 'from-orange-500 to-orange-600'
                }
              ].map((item, index) => (
                <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 hover:-translate-y-2 transition-all duration-300">
                  <div className={`text-white mb-4 w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My journey in software development and key milestones
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500"></div>

            {[
              {
                title: 'Junior Software Developer',
                company: 'Solminds Technologies',
                location: 'Carnival Infopark, Kochi',
                duration: 'Present',
                description: 'Working on full-stack web development projects using modern technologies. Contributing to scalable web applications, implementing responsive user interfaces, and collaborating with cross-functional teams to deliver robust software solutions.',
                current: true,
                technologies: ['React', 'Python', 'Django', 'MySQL']
              },
              {
                title: 'Full Stack Development Intern',
                company: 'Luminar Technolab',
                location: 'Kozhikode',
                duration: 'Completed',
                description: 'Completed comprehensive training in Python Django React Full Stack Web Development with NACTET certification. Gained hands-on experience in modern web development practices and built several projects.',
                current: false,
                technologies: ['Python', 'Django', 'React', 'JavaScript']
              }
            ].map((exp, index) => (
              <div key={index} className="relative pl-12 md:pl-20 pb-16 last:pb-0">
                <div className={`absolute left-2.5 md:left-6.5 w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                  exp.current ? 'bg-green-500 animate-pulse' : 'bg-blue-500'
                }`}></div>

                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">{exp.company}</h4>
                      <p className="text-gray-600 text-sm mb-3">{exp.location} | {exp.duration}</p>
                      {exp.current && (
                        <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                          Currently Working
                        </span>
                      )}
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">{exp.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technologies and tools I work with to build amazing digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-12 h-12" />,
                title: 'Frontend Development',
                skills: [
                  { name: 'ReactJS', level: 85 },
                  { name: 'HTML5', level: 95 },
                  { name: 'CSS3', level: 90 },
                  { name: 'JavaScript', level: 80 },
                  { name: 'Bootstrap', level: 85 }
                ],
                color: 'from-blue-500 to-cyan-500',
                bgColor: 'from-blue-50 to-cyan-50'
              },
              {
                icon: <Server className="w-12 h-12" />,
                title: 'Backend Development',
                skills: [
                  { name: 'Python', level: 90 },
                  { name: 'Django', level: 85 },
                  { name: 'Django REST', level: 80 },
                  { name: 'MySQL', level: 75 },
                  { name: 'SQL', level: 80 }
                ],
                color: 'from-purple-500 to-pink-500',
                bgColor: 'from-purple-50 to-pink-50'
              },
              {
                icon: <Database className="w-12 h-12" />,
                title: 'Tools & Technologies',
                skills: [
                  { name: 'Git', level: 85 },
                  { name: 'GitHub', level: 90 },
                  { name: 'VS Code', level: 95 },
                  { name: 'Postman', level: 80 }
                ],
                color: 'from-green-500 to-teal-500',
                bgColor: 'from-green-50 to-teal-50'
              }
            ].map((category, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${category.bgColor} p-8 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>
                  {/* Category Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl hover:bg-white transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-800">{skill.name}</span>
                          <span className="text-sm text-gray-600">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent work and the technologies I've mastered
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'JOB-HUB: Company Job Portal',
                description: 'A comprehensive job portal with user authentication, job posting, and application management systems designed specifically for company recruitment processes.',
                longDescription: 'Built with modern web technologies, this platform streamlines the hiring process with features like real-time notifications, advanced filtering, and responsive design.',
                tech: ['ReactJS', 'Python', 'HTML', 'CSS'],
                gradient: 'from-blue-500 to-purple-500',
                icon: '🏢',
                category: 'Web Application',
                link: '#'
              },
              {
                title: 'FARM E-Commerce Management',
                description: 'Full-featured e-commerce platform for agricultural products with inventory management and payment integration capabilities.',
                longDescription: 'A complete solution for farmers and agricultural businesses, featuring product catalog, order management, payment processing, and analytics dashboard.',
                tech: ['Django', 'Bootstrap', 'JavaScript', 'HTML'],
                gradient: 'from-green-500 to-teal-500',
                icon: '🌾',
                category: 'E-Commerce',
                link: '#'
              },
              {
                title: 'Portfolio Website',
                description: 'Responsive personal portfolio showcasing projects and skills with modern UI/UX principles and cross-browser compatibility.',
                longDescription: 'A modern, interactive portfolio built with attention to performance, accessibility, and user experience. Features smooth animations and responsive design.',
                tech: ['Bootstrap', 'HTML', 'CSS'],
                gradient: 'from-pink-500 to-rose-500',
                icon: '📱',
                category: 'Portfolio',
                link: '#'
              }
            ].map((project, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                  {/* Project Header */}
                  <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Project Icon */}
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <span className="text-6xl filter drop-shadow-lg">{project.icon}</span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-xs font-medium transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Actions */}
                    <div className="flex items-center justify-between">
                      <a 
                        href={project.link} 
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group/btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>View Details</span>
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                      
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 group">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gray-900 opacity-95"></div>
        
        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              I'm always excited to discuss new opportunities and innovative projects. 
              Let's create something amazing together and bring your ideas to life!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <MapPin className="w-8 h-8" />,
                title: 'Location',
                content: 'Illath Veedu, Edayannur(PO)\nKannur, Kerala, India',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: 'Phone',
                content: '+91 9947354942',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: 'Email',
                content: 'arjunmvbabu@gmail.com',
                color: 'from-green-500 to-teal-500'
              }
            ].map((contact, index) => (
              <div key={index} className="group">
                <div className="h-full p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${contact.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {contact.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{contact.title}</h3>
                  <p className="text-blue-200 whitespace-pre-line leading-relaxed">
                    {contact.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

                    {/* Social Links */}
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold mb-8">Connect With Me</h3>
            <div className="flex justify-center gap-6">
              <a 
                href="https://www.linkedin.com/in/arjun-mv-babu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white hover:text-blue-900 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/Arjun-mv-babu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white hover:text-blue-900 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com/arjun_m_v_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white hover:text-blue-900 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* CTA Section */}
        <div className="text-center">
          <div className="relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/30 max-w-2xl mx-auto shadow-2xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6 shadow-lg">
                <span className="text-2xl">🚀</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Ready to Start a Project?
              </h3>
              
              <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                Whether you have a specific project in mind or just want to explore possibilities, 
                I'd love to hear from you. Let's create something amazing together!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:arjunmvbabu@gmail.com"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-white to-blue-50 text-blue-900 font-semibold rounded-2xl hover:from-blue-50 hover:to-white transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <div className="w-5 h-5 mr-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-3 h-3 text-white" />
                  </div>
                  Send Message
                  <div className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
                
                <a 
                  href="tel:+919947354942"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/50 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="w-5 h-5 mr-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-3 h-3 text-white" />
                  </div>
                  Call Me
                  <div className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center gap-2 text-blue-200 text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Usually responds within 24h
                </div>
                <div className="flex items-center gap-2 text-blue-200 text-sm">
                  <span className="text-yellow-400">⭐</span>
                  Free consultation
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Arjun MV
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Junior Software Developer passionate about creating digital experiences 
              that make a difference. Always learning, always building.
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a 
                href="https://www.linkedin.com/in/arjun-mv-babu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/Arjun-mv-babu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com/_arjun_m_v_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2024 Arjun MV. Made with ❤️ using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Arjun MV
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Junior Software Developer passionate about creating digital experiences 
              that make a difference. Always learning, always building.
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a 
                href="https://www.linkedin.com/in/arjun-mv-babu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/Arjun-mv-babu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com/_arjun_m_v_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2024 Arjun MV. Made with ❤️ using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Arjun MV
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Junior Software Developer passionate about creating digital experiences 
              that make a difference. Always learning, always building.
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a 
                href="https://www.linkedin.com/in/arjun-mv-babu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/Arjun-mv-babu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com/_arjun_m_v_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2024 Arjun MV. Made with ❤️ using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Arjun MV
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Junior Software Developer passionate about creating digital experiences 
              that make a difference. Always learning, always building.
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a 
                href="https://www.linkedin.com/in/arjun-mv-babu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/Arjun-mv-babu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com/_arjun_m_v_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2024 Arjun MV. Made with ❤️ using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;