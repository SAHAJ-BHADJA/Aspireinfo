import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { Github, Linkedin, Twitter } from "lucide-react";

export function ContactSection() {
  const [formStatus, setFormStatus] = useState<string | null>(null);

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

  return (
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
              <h3 className="font-semibold text-blue-600 mb-2">🏢 Visit Us</h3>
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
  );
}
