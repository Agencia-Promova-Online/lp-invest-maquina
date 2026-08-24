import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import depoimento1 from "../assets/Depoimentos/depoimento1.jpg";
import depoimento3 from "../assets/Depoimentos/Depoimento3.jpg";
import depoimento4 from "../assets/Depoimentos/Depoimento4.jpg";
import depoimento5 from "../assets/Depoimentos/Depoimento5.jpg";

const testimonials = [
  {
    image: depoimento1,
    alt: "Depoimento de cliente 1",
  },
  {
    image: depoimento3,
    alt: "Depoimento de cliente 2",
  },
  {
    image: depoimento4,
    alt: "Depoimento de cliente 3",
  },
  {
    image: depoimento5,
    alt: "Depoimento de cliente 4",
  },
];

export default function TestimonialsCarousel() {
  return (
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        freeMode={true}
        breakpoints={{
            0: {
              slidesPerView: 1, // 👈 Mobile (até 639px)
            },
            640: {
              slidesPerView: 2, // 👈 Tablet (640px a 1023px)
            },
            1024: {
              slidesPerView: 3, // 👈 Desktop (a partir de 1024px)
            },
          }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            style={{ width: "250px" }} // Largura fixa por slide
            className="flex justify-center items-center"
          >
            <div className="bg-white p-2 shadow-md rounded-md">
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                style={{ width: "100%" }} // Largura fixa por slid
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  );
}
