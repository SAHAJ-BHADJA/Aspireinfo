import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Quote } from "lucide-react";

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

export function ClientReview() {
  return (
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
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
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
  );
}
