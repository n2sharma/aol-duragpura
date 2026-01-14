"use client";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// Import swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

// componnents
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";

const HeroSlider = () => {
  return (
    <Swiper className="h-full">
      <SwiperSlide>
        <div
          className="h-full bg-cover bg-center flex justify-end pt-48 "
          style={{ backgroundImage: "url(/assets/img/center.jpeg)" }}
        >
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h1 text-center lg:text-left mb-2 text-white"
            >
              <span className="hover:text-accent transition-colors duration-300 cursor-pointer">
                Art
              </span>{" "}
              <span className="hover:text-accent transition-colors duration-300 cursor-pointer">
                of
              </span>{" "}
              <span className="hover:text-accent transition-colors duration-300 cursor-pointer">
                Living
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="text-white italic text-center lg:text-left mb-4 hover:text-accent transition-colors duration-300 cursor-pointer"
            >
              Join Art of Living programs at Durgapura Center, Jaipur.
              Experience Yoga, Meditation, and Stress Relief guided by certified
              instructors.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <CustomButton
                text="Join a Program"
                containerStyles="w-[196px] h-[62px]"
                onClick={() => {
                  document
                    .getElementById("register")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="h-full bg-cover bg-center flex justify-end pt-48"
          style={{ backgroundImage: "url(/assets/img/yoga.jpg)" }}
        >
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h1 text-center lg:text-left mb-2 text-white"
            >
              <span className="hover:text-accent transition-colors duration-300 cursor-pointer">
                Art
              </span>{" "}
              <span className="hover:text-accent transition-colors duration-300 cursor-pointer">
                of
              </span>{" "}
              <span className="hover:text-accent transition-colors duration-300 cursor-pointer">
                Living
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="text-white italic text-center lg:text-left mb-4 hover:text-accent transition-colors duration-300 cursor-pointer"
            >
              Join Art of Living programs at Durgapura Center, Jaipur.
              Experience Yoga, Meditation, and Stress Relief guided by certified
              instructors.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <CustomButton
                text="Join a Program"
                containerStyles="w-[196px] h-[62px]"
                onClick={() => {
                  document
                    .getElementById("register")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="h-full bg-cover bg-center flex justify-end pt-48"
          style={{ backgroundImage: "url(/assets/img/meditation.jpg)" }}
        >
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h1 text-center lg:text-left mb-2 text-white"
            >
              <span className="hover:text-accent transition-colors duration-300 cursor-pointer">
                Art
              </span>{" "}
              <span className="hover:text-accent transition-colors duration-300 cursor-pointer">
                of
              </span>{" "}
              <span className="hover:text-accent transition-colors duration-300 cursor-pointer">
                Living
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="text-white italic text-center lg:text-left mb-4 hover:text-accent transition-colors duration-300 cursor-pointer"
            >
              Join Art of Living programs at Durgapura Center, Jaipur.
              Experience Yoga, Meditation, and Stress Relief guided by certified
              instructors.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <CustomButton
                text="Join a Program"
                containerStyles="w-[196px] h-[62px]"
                onClick={() => {
                  document
                    .getElementById("register")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>

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
