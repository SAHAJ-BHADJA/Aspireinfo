import { useState } from "react";
import {
  Smartphone,
  Star,
  Download,
  Trophy,
  Timer,
  Users,
  TrendingUp,
  MessageSquare,
  GraduationCap,
  Building,
  FileCheck,
  PhoneCall,
  BadgeCheck,
} from "lucide-react";

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

export function CaseStudiesSection() {
  const [activeFilter, setActiveFilter] = useState("web");
  const [showAll, setShowAll] = useState(false);

  const filters = [
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "portal", label: "Portals" },
  ];

  const filteredCaseStudies = caseStudies.filter((study) =>
    activeFilter === "web"
      ? ["web development", "web app", "web & mobile app"].includes(
          study.type.toLowerCase()
        )
      : study.type.toLowerCase().includes(activeFilter)
  );

  const visibleCaseStudies = showAll
    ? filteredCaseStudies
    : filteredCaseStudies.slice(0, 2);

  return (
    <section
      id="case-studies"
      className="section-padding bg-gray-900 text-white pattern-dots"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl font-bold mb-6 text-gradient">Case Studies</h2>
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
              onClick={() => {
                setActiveFilter(filter.id);
                setShowAll(false);
              }}
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
          {visibleCaseStudies.map((study) => (
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

        {/* Read More / Show Less Button */}
        {filteredCaseStudies.length > 2 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-all duration-300"
            >
              {showAll ? "Show Less" : "Read More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
