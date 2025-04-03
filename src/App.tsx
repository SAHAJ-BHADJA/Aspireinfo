import React, { useState, useEffect} from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  Server,
  Database,
  Cloud,
  Menu,
  X,
  ChevronRight,
  Code2,
  Brain,
  // Cpu,
  // GitBranch,
  Globe,
  // Shield,
  Workflow,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Add animation to elements when they come into view
      const fadeElements = document.querySelectorAll(".fade-up");
      fadeElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight - 100;
        if (isVisible) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Technology categories data
  const techStack = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-8 h-8 text-blue-600" />,
      technologies: [
        "Python",
        "JavaScript",
        "TypeScript",
        "SQL",
        "Java",
        "C++",
        "Git",
        "Bash",
        "Shell",
      ],
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      technologies: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "React.js",
        "Angular.js",
        "Flask",
        "Node.js",
        "Express.js",
        "Next.js",
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-8 h-8 text-green-600" />,
      technologies: ["OpenAI API", "Transformers", "LLaMA-2 fine tuning"],
    },
    {
      title: "Database & Cloud",
      icon: <Cloud className="w-8 h-8 text-indigo-600" />,
      technologies: [
        "MySQL",
        "MongoDB",
        "AWS (S3, Glue, RDS)",
        "Terraform",
        "Grafana",
        "Ansible",
      ],
    },
    {
      title: "Development Tools",
      icon: <Workflow className="w-8 h-8 text-red-600" />,
      technologies: [
        "Docker",
        "Kubernetes",
        "Jenkins",
        "GitHub",
        "RESTful API",
        "Agile Methodology",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-md shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <span
                className={`text-2xl font-bold text-gradient ${
                  isScrolled ? "text-white" : ""
                }`}
              >
                AspireInfo
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className={`nav-link ${
                  isScrolled ? "text-gray-300 hover:text-white" : ""
                }`}
              >
                About
              </a>
              <a
                href="#services"
                className={`nav-link ${
                  isScrolled ? "text-gray-300 hover:text-white" : ""
                }`}
              >
                Services
              </a>
              <a
                href="#case-studies"
                className={`nav-link ${
                  isScrolled ? "text-gray-300 hover:text-white" : ""
                }`}
              >
                Case Studies
              </a>
              <a
                href="#contact"
                className={`nav-link ${
                  isScrolled ? "text-gray-300 hover:text-white" : ""
                }`}
              >
                Contact
              </a>
              <a href="#contact" className="cta-button">
                <span>Get Started</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`transition-colors ${
                  isScrolled
                    ? "text-white hover:text-gray-300"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                Services
              </a>
              <a
                href="#case-studies"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                Case Studies
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50 pattern-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Crafting Digital
                <span className="text-gradient"> Excellence</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                We transform innovative ideas into powerful digital solutions
                that drive business growth and user engagement.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="cta-button">
                  <span>Start Your Project</span>
                </a>
                <a
                  href="#case-studies"
                  className="flex items-center text-gray-700 hover:text-gray-900 group transition-colors"
                >
                  View Our Work{" "}
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="Digital Innovation"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white pattern-dots">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative fade-up">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Our Team"
                className="relative rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6 fade-up">
              <h2 className="text-4xl font-bold text-gradient">
                About AspireInfo
              </h2>
              <p className="text-lg text-gray-600">
                We're a team of passionate technologists, designers, and problem
                solvers dedicated to creating exceptional digital experiences.
                With expertise in cutting-edge technologies and a human-centered
                approach, we help businesses thrive in the digital age.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="gradient-border p-6">
                  <h3 className="text-3xl font-bold text-gradient">150+</h3>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="gradient-border p-6">
                  <h3 className="text-3xl font-bold text-gradient">50+</h3>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              We offer comprehensive digital solutions tailored to your business
              needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Server className="w-12 h-12 text-blue-600" />,
                title: "Custom Software Development",
                description:
                  "Tailored solutions built with cutting-edge technology",
              },
              {
                icon: <Cloud className="w-12 h-12 text-purple-600" />,
                title: "Cloud Architecture",
                description:
                  "Scalable and secure cloud infrastructure solutions",
              },
              {
                icon: <Database className="w-12 h-12 text-indigo-600" />,
                title: "Data Analytics",
                description: "Transform your data into actionable insights",
              },
            ].map((service, index) => (
              <div key={index} className="service-card glass-card fade-up">
                <div className="service-icon mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section
        id="case-studies"
        className="section-padding bg-gray-900 text-white pattern-dots"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center text-gradient">
            Case Studies
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Powered Analytics Platform",
                description:
                  "Revolutionizing data analysis with machine learning",
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
                tech: "Python, TensorFlow, React",
              },
              {
                title: "E-Commerce Revolution",
                description: "Next-generation shopping experience",
                image:
                  "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
                tech: "Next.js, Node.js, PostgreSQL",
              },
            ].map((study, index) => (
              <div
                key={index}
                className="group bg-gray-800 rounded-xl overflow-hidden card-hover fade-up"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-gray-400 mb-4">{study.description}</p>
                  <p className="text-sm text-gray-500">{study.tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="tech-stack" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Our Technology Stack
            </h2>
            <p className="text-lg text-gray-600">
              We leverage cutting-edge technologies to deliver exceptional
              solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((category, index) => (
              <div key={index} className="gradient-border fade-up">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl">
                  <div className="flex items-center mb-6">
                    <div className="service-icon">{category.icon}</div>
                    <h3 className="text-xl font-semibold ml-4">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm hover:shadow-md transition-shadow"
                      >
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

      {/* Contact Section */}
      <section
        id="contact"
        className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50 pattern-grid"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="fade-up">
              <h2 className="text-4xl font-bold mb-6 text-gradient">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to start your next project? Let's talk about your ideas.
              </p>
              <div className="space-y-4">
                <div className="flex items-center group">
                  <Mail className="w-6 h-6 text-blue-600 mr-4 transition-transform group-hover:scale-110" />
                  <a
                    href="mailto:hello@aspireinfo.com"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    hello@aspireinfo.com
                  </a>
                </div>
                <div className="flex items-center group">
                  <Phone className="w-6 h-6 text-blue-600 mr-4 transition-transform group-hover:scale-110" />
                  <a
                    href="tel:+1234567890"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    (123) 456-7890
                  </a>
                </div>
              </div>
              <div className="flex space-x-6 mt-8">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-900 transition-all hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-900 transition-all hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-900 transition-all hover:scale-110"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="gradient-border fade-up">
              <form className="bg-white/80 backdrop-blur-sm p-8 rounded-xl space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input-field"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="input-field"
                    placeholder="Tell us about your project"
                  />
                </div>
                <button type="submit" className="cta-button w-full">
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} AspireInfo. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
