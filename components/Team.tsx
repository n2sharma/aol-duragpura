"use client";

import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const teacherData = [
  {
    image: "/assets/img/trainers/david.jpg",
    name: "David Williams",
    role: "Happiness Program Teacher",
    description:
      "Certified Art of Living teacher with experience in guiding meditation, breathing techniques, and stress management programs.",
    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/rosy.jpg",
    name: "Rosy Rivera",
    role: "Yoga & Meditation Teacher",
    description:
      "Specializes in Yoga, mindfulness, and wellness practices to help people achieve inner balance and peace.",
    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/matt.jpg",
    name: "Matt Stone",
    role: "Breathing Techniques Instructor",
    description:
      "Guides participants through Sudarshan Kriya and stress-relief techniques for emotional well-being.",
    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/sofia.jpg",
    name: "Sofia Andrews",
    role: "Wellness Program Facilitator",
    description:
      "Passionate about helping people improve mental clarity, focus, and overall wellness through meditation.",
    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },
];

const Team = () => {
  return (
    <section className="py-12" id="team">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-6"
        >
          Our Teachers
        </motion.h2>

        <p className="text-center max-w-[600px] text-text/70 mb-10">
          Meet our certified Art of Living teachers who guide participants
          through the Happiness Program, Yoga, and Meditation sessions.
        </p>

        {/* Grid teachers */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12"
        >
          {teacherData.map((teacher, index) => {
            return (
              <div
                className="flex flex-col items-center text-center"
                key={index}
              >
                <div className="relative w-[320px] h-[360px] mx-auto mb-4 rounded-lg overflow-hidden shadow-sm">
                  <Image src={teacher.image} fill alt={teacher.name} />
                </div>

                <h4 className="h4 mb-2">{teacher.name}</h4>

                <p className="uppercase text-xs tracking-[3px] mb-2 text-accent">
                  {teacher.role}
                </p>

                <p className="mb-6 max-w-[320px] mx-auto text-text/70">
                  {teacher.description}
                </p>

                <div className="flex gap-8 justify-center text-text/70">
                  {teacher.social.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        href={item.href}
                        className="hover:text-accent transition-all"
                      >
                        <item.icon className="text-lg" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
