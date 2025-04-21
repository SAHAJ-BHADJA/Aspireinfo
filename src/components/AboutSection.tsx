import AboutSectionImg from "../photos/Appdevelopment-rafiki.svg";

export function AboutSection() {
  return (
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
              empower businesses to thrive in the digital age. From startups to
              global enterprises, we help clients streamline operations, boost
              efficiency, and accelerate transformation through modern web,
              mobile, and cloud technologies.
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
  );
}
