"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Testimonial = {
  name: string;
  review: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ojiteli Kosi",
    review:
      "Hotelio exceeded every expectation. From the moment I stepped into the lobby, I felt embraced by luxury and warmth. The suite was spacious and elegant, the dining experience unforgettable, and the staff treated me like royalty. More than a hotel,  it’s an experience of a lifetime.",
    image: "https://images.pexels.com/photos/37546/woman-portrait-face-studio-37546.jpeg",
  },
  {
    name: "Obuekwe Chidimma",
    review:
      "I travel often for business, and Hotelio has been the highlight of my trips. The rooms are luxurious and well-equipped. The rooftop bar overlooking the city was breathtaking. I can’t wait to return, this time with my family.",
    image: "https://images.pexels.com/photos/2362887/pexels-photo-2362887.jpeg",
  },
  {
    name: "Chineche Obuekwe",
    review:
      "A true gem in the heart of the city. The spa was heavenly, the food divine, and the staff attentive to every detail. Hotelio gave me the perfect escape I needed. I left refreshed, pampered, and already planning my next visit.",
    image: "https://images.pexels.com/photos/1644924/pexels-photo-1644924.jpeg",
  },
  {
    name: "David Chijioke",
    review:
      "I stayed at Hotelio for our anniversary, and it was magical. The team surprised us with champagne and roses in our room. The attention to detail and personalized service made it unforgettable. This is where luxury meets heart.",
    image: "https://images.pexels.com/photos/7055896/pexels-photo-7055896.jpeg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#fdfdf8] py-16 sm:px-10 px-4  md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        What Our Guests Say
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white p-6 rounded-2xl shadow-lg h-full flex flex-col justify-between">
              <p className="text-gray-600 italic mb-6">"{t.review}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#B75600]"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{t.name}</h4>
                  <div className="text-yellow-500">★★★★★</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center mt-10">
        <a
          href="/rooms"
          className="inline-block bg-[#B75600] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#964800] transition"
        >
          Book Your Stay
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
