"use client";

import { FaHandsHelping, FaLeaf, FaOm } from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Achivements from "./Achivements";

const featured = [
  {
    icon: <FaOm />,
    title: "Authentic Practices",
    subtitle:
      "Experience traditional Yoga, Meditation, and Sudarshan Kriya techniques rooted in ancient Indian wisdom for holistic well-being.",
  },
  {
    icon: <FaLeaf />,
    title: "Mind & Body Balance",
    subtitle:
      "Our programs help reduce stress, improve mental clarity, and bring harmony to your daily life through mindful practices.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Community Support",
    subtitle:
      "Join a supportive community focused on personal growth, inner peace, and positive living at our Durgapura Center.",
  },
];

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center"
          >
            About Us
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[700px] mx-auto text-center text-text/80"
          >
            The Art of Living Foundation is a global non-profit organization
            dedicated to promoting peace, well-being, and stress-free living. At
            our Durgapura Center in Jaipur, we offer Yoga, Meditation, and
            Happiness Programs designed to help you find inner balance, improve
            mental clarity, and live a healthier, more joyful life.
          </motion.p>
        </div>

        {/* Features items */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16"
        >
          {featured.map((feature, index) => {
            return (
              <div
                // className="flex flex-col justify-center items-center gap-4 border p-10"
                className="flex flex-col justify-center items-center gap-4 bg-white shadow-sm rounded-xl p-10 hover:shadow-md transition-all"
                key={index}
              >
                <div className="text-4xl bg-accent/10 text-accent w-[80px] h-[80px] rounded-full flex justify-center items-center">
                  {feature.icon}
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <h4 className="h4 text-accent">{feature.title}</h4>
                  <p>{feature.subtitle}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* achivements */}
        <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Achivements />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
