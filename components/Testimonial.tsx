"use client";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

import "swiper/css";
import "swiper/css/pagination";

const testimonialData = [
  {
    img: "/assets/img/testimonial/lucy.jpg",
    message:
      "The Happiness Program helped me feel calmer, more positive, and emotionally balanced. I now handle stress much better in my daily life.",
    name: "Lucy Anthony",
  },
  {
    img: "/assets/img/testimonial/maria.jpg",
    message:
      "After attending the program, I feel more focused and peaceful. The breathing techniques are simple yet powerful.",
    name: "Maria Anthony",
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    message:
      "This program changed the way I look at life. I feel more relaxed, confident, and mentally strong.",
    name: "Michael Anthony",
  },
  {
    img: "/assets/img/testimonial/lucy.jpg",
    message:
      "The teachers were very supportive and kind. I truly enjoyed the peaceful atmosphere at the Durgapura Center.",
    name: "Lucy Anthony",
  },
  {
    img: "/assets/img/testimonial/maria.jpg",
    message:
      "A wonderful experience! The meditation sessions helped me sleep better and stay calm throughout the day.",
    name: "Maria Anthony",
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    message:
      "I feel lighter, happier, and more balanced after completing the Happiness Program.",
    name: "Michael Anthony",
  },
];

const Testimonial = () => {
  return (
    <section className="py-12 xl:py-28" id="testimonial">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="h2 text-center mb-4"
        >
          What Our Participants Say
        </motion.h2>

        <p className="text-center max-w-[600px] mx-auto text-text/70 mb-10">
          Hear from people who have experienced the Art of Living Happiness
          Program at our Durgapura Center.
        </p>

        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="h-[340px]"
          >
            {testimonialData.map((person, index) => {
              return (
                <SwiperSlide className="h-full" key={index}>
                  <div className="flex flex-col justify-center items-center gap-6 text-center h-full bg-white rounded-xl shadow-sm p-6">
                    <Image
                      src={person.img}
                      width={90}
                      height={90}
                      alt={person.name}
                      className="rounded-full border-2 border-accent"
                    />

                    <div className="flex flex-col justify-center items-center">
                      <FaQuoteLeft className="text-2xl text-accent/30 mb-2" />
                      <p className="max-w-[380px] mb-4 text-text/80">
                        {person.message}
                      </p>
                      <span className="text-lg font-semibold text-accent">
                        {person.name}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
