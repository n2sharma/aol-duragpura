"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import CustomButton from "./CustomButton";

const UpcomingProgram = () => {
  return (
    <section id="program" className="py-16 ">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-md"
        >
          <Image
            src="/assets/img/gurudev.jpg"
            alt="Happiness Program"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col gap-5"
        >
          <h2 className="h2">
            Upcoming <span className="text-accent">Happiness Program</span>
          </h2>

          <p className="text-text/80">
            The Art of Living Happiness Program is a powerful, life-transforming
            workshop designed to help you reduce stress, improve mental clarity,
            and experience deep inner peace through proven breathing techniques
            and meditation practices.
          </p>

          <ul className="list-disc list-inside text-text/80 space-y-2">
            <li>Learn Sudarshan Kriya breathing technique</li>
            <li>Reduce stress & anxiety</li>
            <li>Improve sleep & focus</li>
            <li>Boost emotional well-being</li>
            <li>Experience inner calm & happiness</li>
          </ul>

          <div className="bg-white shadow-sm rounded-lg p-4 w-fit">
            <p className="font-semibold text-text">
              📍 Durgapura Center, Jaipur
            </p>
            <p className="text-text/70">📅 Next Batch: Coming Soon</p>
            <p className="text-text/70">⏰ Duration: 3–4 Days</p>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <CustomButton
              text="Register Now"
              containerStyles="w-[200px] h-[52px] bg-accent text-white hover:bg-accent/90 transition-all"
              onClick={() => {
                document
                  .getElementById("register")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            />
            <CustomButton
              text="Contact Us"
              containerStyles="w-[200px] h-[52px] bg-accent text-white hover:bg-accent/90 transition-all"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingProgram;
