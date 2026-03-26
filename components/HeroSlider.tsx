"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";

const slides = [
  "/assets/img/center.jpeg",
  "/assets/img/yoga.jpg",
  "/assets/img/meditation.jpg",
];

const HeroSlider = () => {
  return (
    <Swiper className="h-full">
      {slides.map((bg, i) => (
        <SwiperSlide key={i}>
          <div
            className="h-full bg-cover bg-center relative flex justify-end pt-48"
            style={{ backgroundImage: `url(${bg})` }}
          >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 flex flex-col items-center lg:items-start lg:max-w-[700px] px-6">
              <motion.h1
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                className="text-4xl lg:text-6xl font-bold text-white text-center lg:text-left mb-4 drop-shadow-lg"
              >
                Find Inner Peace & Joy
                <span className="block text-accent">
                  at Art of Living – Durgapura
                </span>
              </motion.h1>

              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView="show"
                className="text-white/90 text-lg italic text-center lg:text-left mb-6 max-w-xl drop-shadow-md"
              >
                Discover yoga, meditation, and powerful breathing techniques to
                reduce stress, improve clarity, and live with joy.
              </motion.p>

              {/* <motion.div
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView="show"
              >
                <CustomButton
                  text="Register here"
                  containerStyles="w-[260px] h-[62px]"
                  onClick={() => {
                    document
                      .getElementById("register")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              </motion.div> */}
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* Swiper nav buttons */}
      <SwiperNavButtons
        containerStyles="absolute bottom-4 right-4 z-50 flex gap-2"
        btnStyles="border border-white/40 text-white w-[42px] h-[42px] rounded-full flex justify-center items-center hover:bg-accent hover:border-accent transition-all duration-300"
        iconsstyles="text-lg"
      />
    </Swiper>
  );
};

export default HeroSlider;
