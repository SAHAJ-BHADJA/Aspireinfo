import CodeTypingImg from "../photos/Codetypingrafiki.svg";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
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
              We transform innovative ideas into powerful digital solutions that
              drive business growth and user engagement.
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
  );
}
