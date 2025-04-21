import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  Server,
  // Database,
  Cloud,
  Menu,
  X,
  ChevronRight,
  Code2,
  Brain,
  // Cpu,
  GitBranch,
  Globe,
  // Shield,
  Workflow,
  Laptop,
  Smartphone,
  HeartPulse,
  Lock,
  MonitorSmartphone,
  Boxes,
  Star,
  Download,
  Trophy,
  Timer,
  Users,
  TrendingUp,
  MessageSquare,
  // Sparkles,
  GraduationCap,
  Building,
  FileCheck,
  PhoneCall,
  BadgeCheck,
  Quote,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CodeTypingImg from "./photos/Codetypingrafiki.svg";
import AboutSectionImg from "./photos/Appdevelopment-rafiki.svg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("web");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mjkyjbrz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setFormStatus("success");
        form.reset(); // reset the form fields
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
    }
  };

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
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const caseStudies = [
    {
      id: "novastyle",
      title: "E-commerce Website Redesign",
      client: "NovaStyle",
      type: "Web Development",
      industry: "Fashion & Retail",
      techStack: ["React", "Node.js", "MongoDB", "Stripe API"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      overview:
        "NovaStyle needed a modern, mobile-friendly e-commerce platform to replace their outdated site.",
      solution:
        "Built a fully responsive site with dynamic filters, Stripe-integrated checkout, and an admin dashboard.",
      results: [
        { icon: <Smartphone />, text: "70% increase in mobile conversions" },
        { icon: <Timer />, text: "40% faster page load speed" },
        { icon: <Users />, text: "35% increase in customer retention" },
      ],
    },
    {
      id: "wellnest",
      title: "Health Tracker Mobile App",
      client: "Wellnest",
      type: "Mobile App Development",
      industry: "Health & Wellness",
      techStack: ["Flutter", "Firebase", "Google Fit API"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
      overview:
        "A cross-platform app to help users track fitness goals, water intake, and mental wellness.",
      solution:
        "Built in Flutter with Google Fit/Apple Health integrations, daily reminders, and motivational content.",
      results: [
        { icon: <Star />, text: "4.7 average rating on app stores" },
        { icon: <Download />, text: "20K+ downloads in 3 months" },
        { icon: <Trophy />, text: "Featured in Top 10 Wellness Apps list" },
      ],
    },
    {
      id: "trackx",
      title: "Custom CRM Platform for Logistics",
      client: "TrackX Logistics",
      type: "Web App",
      industry: "Logistics",
      techStack: ["Angular", ".NET Core", "SQL Server"],
      image:
        "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80",
      overview:
        "Needed a logistics-specific CRM for tracking, client handling, and fleet monitoring.",
      solution:
        "Built a role-based CRM with live GPS tracking, invoice automation, and driver performance analytics.",
      results: [
        { icon: <FileCheck />, text: "60% less manual data entry" },
        { icon: <MessageSquare />, text: "Streamlined client communication" },
        { icon: <TrendingUp />, text: "Increased operational efficiency" },
      ],
    },
    {
      id: "learnquest",
      title: "Online Learning Platform",
      client: "LearnQuest",
      type: "Web & Mobile App",
      industry: "EdTech",
      techStack: ["Next.js", "Express.js", "PostgreSQL", "React Native"],
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
      overview:
        "A platform to deliver interactive courses, live sessions, and mobile learning.",
      solution:
        "Developed responsive web and mobile apps with video streaming, quizzes, dashboards, and alerts.",
      results: [
        { icon: <GraduationCap />, text: "50K+ students registered" },
        { icon: <Timer />, text: "3X engagement per session" },
        { icon: <Building />, text: "Partnered with 10+ institutions" },
      ],
    },
    {
      id: "zenith",
      title: "Employee Self-Service Portal",
      client: "Zenith Enterprises",
      type: "Employee Portal",
      industry: "Corporate HR",
      techStack: ["Laravel", "Vue.js", "MySQL", "REST API"],
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
      overview:
        "Zenith needed a central dashboard for leave, payslips, HR policies, and internal requests.",
      solution:
        "Developed a secure role-based portal with document management, payroll, and leave workflows.",
      results: [
        { icon: <TrendingUp />, text: "90% drop in HR queries" },
        { icon: <FileCheck />, text: "100% paperless leave system" },
        { icon: <Users />, text: "Boosted employee engagement" },
      ],
    },
    {
      id: "smartfix",
      title: "Customer Service Portal",
      client: "SmartFix Appliances",
      type: "Customer Support Portal",
      industry: "Consumer Electronics",
      techStack: ["ASP.NET Core", "React", "SQL Server", "Twilio API"],
      image:
        "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?auto=format&fit=crop&q=80",
      overview:
        "Required a portal for customers to register products, request support, and chat with agents.",
      solution:
        "Built a self-service platform with ticket tracking, Twilio chat, FAQs, and email/SMS alerts.",
      results: [
        { icon: <PhoneCall />, text: "50% reduction in support calls" },
        { icon: <Timer />, text: "3x faster issue resolution" },
        { icon: <BadgeCheck />, text: "+25% improvement in CSAT" },
      ],
    },
  ];

  const filters = [
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "portal", label: "Portals" },
  ];

  const filteredCaseStudies =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter((study) =>
          study.type.toLowerCase().includes(activeFilter)
        );

  const testimonials = [
    {
      quote:
        "Working with VTechFusion has been an outstanding experience. From the initial consultation to the final delivery, their team showcased professionalism, deep technical knowledge, and a commitment to quality. They helped us streamline our internal systems and developed a custom software solution that significantly improved our efficiency. Communication was always clear and timely, and their support team continues to go above and beyond. We look forward to collaborating on future projects!",
      author: "Alicia Tran",
      role: "Operations Manager",
      company: "NovaTech Solutions",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
    },
    {
      quote:
        "We needed a tech partner to help us launch a multi-store eCommerce platform, and VTechFusion delivered beyond expectations. The platform is sleek, fast, and easy to manage. Their team was responsive, flexible, and always ready to adjust based on our needs.",
      author: "Michelle Grant",
      role: "Head of Digital",
      company: "Bluetan Retail",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
    },
    {
      quote:
        "Cybersecurity was a huge concern for our firm. VTechFusion conducted a full audit, implemented enterprise-grade security protocols, and even trained our staff. Since then, we've had zero security incidents. They're the real deal.",
      author: "Rahul Mehta",
      role: "CIO",
      company: "VantaDigital Financial Group",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
    },
    {
      quote:
        "We were working with large volumes of research data and needed a custom database and analytics dashboard. VTechFusion delivered an elegant, efficient solution with excellent documentation and training. It's made our team significantly more productive.",
      author: "Dr. Elena Rivera",
      role: "Lead Scientist",
      company: "BioMatics Research",
      image:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&q=80",
    },
    {
      quote:
        "Reliable tech is vital in our industry. VTechFusion built a real-time GPS tracking system with seamless mobile integration for our drivers. The rollout was smooth, and downtime has dropped drastically. Highly recommend it.",
      author: "Jason Cole",
      role: "Fleet Manager",
      company: "TrackLoop Transportation",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`
          fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
          w-full max-w-[95%] 
          transition-all duration-500 
          rounded-lg px-6 py-2
          ${
            isScrolled
              ? "bg-gray-900/80 backdrop-blur-md shadow-xl"
              : "bg-transparent"
          }
        `}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span
              className={`text-2xl font-bold text-gradient ${
                isScrolled ? "text-white" : ""
              }`}
            >
              Vtechfusion
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
              href="#client-review"
              className={`nav-link ${
                isScrolled ? "text-gray-300 hover:text-white" : ""
              }`}
            >
              Client Review
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

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu (shown when isMenuOpen is true) */}
        {isMenuOpen && (
          <div
            className={`mt-4 flex flex-col items-start space-y-4 rounded-lg 
                      px-4 py-2 md:hidden
                      ${
                        isScrolled
                          ? "bg-gray-900/80 backdrop-blur-md"
                          : "bg-white"
                      }`}
          >
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className={`block ${
                isScrolled ? "text-gray-300 hover:text-white" : "text-gray-800"
              }`}
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className={`block ${
                isScrolled ? "text-gray-300 hover:text-white" : "text-gray-800"
              }`}
            >
              Services
            </a>
            <a
              href="#client-review"
              onClick={() => setIsMenuOpen(false)}
              className={`block ${
                isScrolled ? "text-gray-300 hover:text-white" : "text-gray-800"
              }`}
            >
              Client Review
            </a>
            <a
              href="#case-studies"
              onClick={() => setIsMenuOpen(false)}
              className={`block ${
                isScrolled ? "text-gray-300 hover:text-white" : "text-gray-800"
              }`}
            >
              Case Studies
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block ${
                isScrolled ? "text-gray-300 hover:text-white" : "text-gray-800"
              }`}
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="cta-button mt-2"
            >
              <span>Get Started</span>
            </a>
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
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 rounded-2xl blur-3xl"></div>
              <img
                src={CodeTypingImg}
                alt="Code Typing"
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
            {/* Image Section */}
            <div className="relative fade-up">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 rounded-2xl blur-3xl"></div>
              <img
                src={AboutSectionImg}
                alt="Our Team"
                className="relative rounded-2xl shadow-xl"
              />
            </div>

            {/* Textual Content */}
            <div className="space-y-6 fade-up">
              <h2 className="text-4xl font-bold text-gradient text-center">
                About Vtechfusion
              </h2>
              <p className="text-lg text-gray-600 text-justify">
                We deliver innovative, scalable, and custom IT solutions that
                empower businesses to thrive in the digital age. From startups
                to global enterprises, we help clients streamline operations,
                boost efficiency, and accelerate transformation through modern
                web, mobile, and cloud technologies.
              </p>

              {/* Mission & Vision side by side */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {/* Mission */}
                <div className="gradient-border p-6 text-center">
                  <h3 className="text-xl font-semibold text-blue-700 flex items-center justify-center gap-2 mb-2">
                    🚀 Our Mission
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Deliver reliable and impactful IT solutions that drive real
                    results.
                  </p>
                </div>

                {/* Vision */}
                <div className="gradient-border p-6 text-center">
                  <h3 className="text-xl font-semibold text-purple-700 flex items-center justify-center gap-2 mb-2">
                    🌍 Our Vision
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Be a globally trusted tech partner turning ideas into
                    exceptional digital experiences.
                  </p>
                </div>
              </div>

              {/* Core Values full width */}
              <div className="gradient-border p-6 mt-6 text-center">
                <h3 className="text-xl font-semibold text-indigo-700 flex items-center justify-center gap-2 mb-4">
                  💡 Core Values
                </h3>

                {/* Two columns inside the card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-sm text-gray-600">
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Innovation</strong> – Always evolving
                    </li>
                    <li>
                      <strong>Integrity</strong> – Built on trust
                    </li>
                  </ul>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Excellence</strong> – Quality above all
                    </li>
                    <li>
                      <strong>Collaboration</strong> – Stronger together
                    </li>
                  </ul>
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
              Comprehensive digital solutions tailored to elevate your business
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* IT Solutions */}
            <div className="service-card glass-card fade-up">
              <div className="service-icon-wrapper mb-6">
                <Server className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">
                IT Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                Empowering your business with stability, scalability, and
                security.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <HeartPulse className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">24/7 IT Support</h4>
                    <p className="text-sm text-gray-600">
                      Helpdesk, remote & on-site assistance
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Cybersecurity</h4>
                    <p className="text-sm text-gray-600">
                      Firewall, threat detection, audits & training
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Cloud className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Cloud Services</h4>
                    <p className="text-sm text-gray-600">
                      Migrations, backups, Microsoft 365, Google Workspace
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Boxes className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Networking</h4>
                    <p className="text-sm text-gray-600">
                      Design, VPN, performance monitoring
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Web Development */}
            <div className="service-card glass-card fade-up">
              <div className="service-icon-wrapper mb-6">
                <Laptop className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">
                Web Development
              </h3>
              <p className="text-gray-600 mb-6">
                We build fast, modern, and engaging digital experiences.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MonitorSmartphone className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Responsive Websites</h4>
                    <p className="text-sm text-gray-600">
                      Built with React, Next.js, SEO-optimized
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">E-commerce Platforms</h4>
                    <p className="text-sm text-gray-600">
                      Shopify, WooCommerce, custom builds
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code2 className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Custom Web Apps</h4>
                    <p className="text-sm text-gray-600">
                      Dashboards, SaaS, booking systems & more
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile App Development */}
            <div className="service-card glass-card fade-up">
              <div className="service-icon-wrapper mb-6">
                <Smartphone className="w-12 h-12 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">
                Mobile App Development
              </h3>
              <p className="text-gray-600 mb-6">
                Crafting sleek, high-performance apps that deliver real value.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <GitBranch className="w-5 h-5 text-indigo-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Cross-Platform Apps</h4>
                    <p className="text-sm text-gray-600">
                      Swift, Kotlin, Flutter, React Native
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-indigo-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">UX/UI Design</h4>
                    <p className="text-sm text-gray-600">
                      Intuitive interfaces, user-first approach
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Workflow className="w-5 h-5 text-indigo-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">App Maintenance</h4>
                    <p className="text-sm text-gray-600">
                      Updates, bug fixes, performance optimization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client review Section */}
      <section
        id="client-review"
        className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50 pattern-grid"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Client Reviews
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
          </div>

          <div className="testimonials-slider fade-up">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{ clickable: true }}
              navigation
              className="pb-12"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative">
                    <Quote className="absolute text-blue-100 w-16 h-16 -top-2 -left-2" />
                    <div className="relative">
                      <p className="text-gray-600 mb-6 line-clamp-6">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {testimonial.author}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {testimonial.role}
                          </p>
                          <p className="text-sm text-blue-600">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section
        id="case-studies"
        className="section-padding bg-gray-900 text-white pattern-dots"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Case Studies
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our portfolio of successful projects and see how we've
              helped businesses transform their digital presence.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 fade-up">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (
              <div
                key={study.id}
                className="group bg-gray-800 rounded-xl overflow-hidden card-hover fade-up"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-2">
                      {study.industry}
                    </span>
                    <h3 className="text-xl font-semibold text-white">
                      {study.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Overview</h4>
                    <p className="text-gray-400">{study.overview}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Solution</h4>
                    <p className="text-gray-400">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Key Results</h4>
                    <div className="space-y-3">
                      {study.results.map((result, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-gray-300"
                        >
                          <div className="w-5 h-5 text-blue-500">
                            {result.icon}
                          </div>
                          <span>{result.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
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
            {/* Contact Info */}
            <div className="fade-up space-y-8">
              <h2 className="text-4xl font-bold text-gradient">Get in Touch</h2>

              {/* Phone, Email, Support */}
              <div className="space-y-4 text-gray-600 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>
                    <strong>Phone:</strong> +91 (740) 567-3351
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:hello@vtechfusion.com"
                      className="hover:text-gray-900"
                    >
                      hello@vtechfusion.com
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>
                    <strong>Support:</strong>{" "}
                    <a
                      href="mailto:support@vtechfusion.com"
                      className="hover:text-gray-900"
                    >
                      support@vtechfusion.com
                    </a>
                  </span>
                </div>
              </div>

              {/* Address */}
              <div className="text-gray-600 text-sm">
                <h3 className="font-semibold text-blue-600 mb-2">
                  🏢 Visit Us
                </h3>
                <p>
                  Vtechfusion Technologies Pvt. Ltd.
                  <br />
                  6th Floor, Galaxy Business Park,
                  <br />
                  Near Science City Road, Sola,
                  <br />
                  Ahmedabad – 380060, Gujarat, India
                </p>
              </div>

              {/* Office Hours */}
              <div className="text-gray-600 text-sm">
                <h3 className="font-semibold text-blue-600 mb-2">
                  ⏰ Office Hours
                </h3>
                <p>
                  Monday – Friday: 9:00 AM – 6:00 PM
                  <br />
                  Saturday – Sunday: Closed
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-6 pt-4">
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

            {/* Contact Form */}
            <div className="gradient-border fade-up">
              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/mjkyjbrz"
                method="POST"
                className="bg-white/80 backdrop-blur-sm p-8 rounded-xl space-y-6"
              >
                <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
                  📬 Send Us a Message
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
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
                    name="email"
                    required
                    className="input-field"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="input-field"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="input-field"
                    placeholder="Tell us about your project"
                  />
                </div>

                <button type="submit" className="cta-button w-full">
                  <span>Send Message</span>
                </button>
                {formStatus === "success" && (
                  <p className="text-green-600 text-center font-medium pt-2">
                    ✅ Message sent successfully!
                  </p>
                )}
                {formStatus === "error" && (
                  <p className="text-red-600 text-center font-medium pt-2">
                    ❌ Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              © {new Date().getFullYear()} Vtechfusion. All rights reserved.
            </p>
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
