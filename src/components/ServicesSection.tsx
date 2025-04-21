import {
  Server,
  HeartPulse,
  Lock,
  Cloud,
  Boxes,
  Laptop,
  MonitorSmartphone,
  Smartphone,
  Globe,
  Code2,
  GitBranch,
  Brain,
  Workflow,
} from "lucide-react";

export function ServicesSection() {
  return (
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
  );
}
