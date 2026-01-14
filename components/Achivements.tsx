"use client";

import CountUp from "react-countup";
import { FaBriefcase, FaClock, FaTrophy } from "react-icons/fa";
import { ImUsers } from "react-icons/im";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    number: 5000,
    icon: ImUsers,
    text: "People Benefited",
  },
  {
    number: 150,
    icon: FaBriefcase,
    text: "Programs Conducted",
  },
  {
    number: 20,
    icon: FaClock,
    text: "Years of Service",
  },
  {
    number: 50,
    icon: FaTrophy,
    text: "Certified Instructors",
  },
];

// animations
const statsContainerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const statsItem = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const Achivements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="py-16">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="h2 text-center mb-4">Our Impact</h2>
        <p className="text-center max-w-[600px] mx-auto text-text/70 mb-12">
          Through our programs, we have helped thousands of people find inner
          peace, improve their well-being, and live a more balanced life.
        </p>

        <motion.div
          variants={statsContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12"
        >
          {stats.map((item, index) => {
            return (
              <motion.div
                variants={statsItem}
                className="flex flex-col justify-center items-center"
                key={index}
              >
                {/* Circle outer */}
                <div className="border border-accent/40 w-[120px] h-[120px] rounded-full p-1 mb-4">
                  {/* Circle Inner and count numbers */}
                  <div
                    ref={ref}
                    className="border border-accent/20 w-full h-full flex items-center justify-center text-4xl rounded-full text-accent font-semibold"
                  >
                    {isInView && (
                      <CountUp
                        start={0}
                        end={item.number}
                        duration={4}
                        enableScrollSpy
                      />
                    )}
                  </div>
                </div>

                {/* Icon + Text */}
                <div className="flex flex-col justify-center items-center text-center">
                  <item.icon className="text-3xl mb-2 text-accent" />
                  <h4 className="h4 text-text/80">{item.text}</h4>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achivements;
