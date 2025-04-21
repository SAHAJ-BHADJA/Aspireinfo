import { useState, useEffect } from "react";
import {
  Menu,
  X,
} from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



export function Navbar(){
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
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // const linkClass = isScrolled
  //   ? "text-gray-300 hover:text-white"
  //   : "text-gray-700 hover:text-gray-900";

  return (
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
  );
}
