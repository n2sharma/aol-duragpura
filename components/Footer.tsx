"use client";
import Image from "next/image";
import Link from "next/link";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import { motion } from "framer-motion";

// variants
const footerContainerVariant = {
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

const footerItem = {
  hidden: { y: 20, opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#0f0f0f] pt-20 text-white">
      <div className="container mx-auto pb-16">
        <motion.div
          variants={footerContainerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10"
        >
          {/* Info */}
          <motion.div variants={footerItem} className="flex flex-col gap-4">
            <Link href="#">
              <Image
                src="/assets/img/aollogo.svg"
                width={140}
                height={60}
                alt="Art of Living"
              />
            </Link>

            <p className="text-white/70 max-w-sm">
              The Art of Living Foundation promotes peace, well-being, and
              stress-free living through Yoga, Meditation, and breathing
              techniques.
            </p>

            <ul className="flex flex-col gap-3 text-white/70">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-accent" />
                <span>Maharani Farms, Durgapura, Jaipur</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-accent" />
                <span>+91 7768166190</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-accent" />
                <span>durgapuraaol@gmail.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Gallery - Now takes 2 columns */}
          <motion.div variants={footerItem} className="lg:col-span-2">
            <h4 className="h4 text-accent mb-4">Moments of Peace</h4>

            <div className="flex flex-wrap gap-2">
              {[
                "image1.jpeg",
                "image2.jpeg",
                "image3.jpeg",
                "image4.jpeg",
                "image5.jpeg",
                "image6.jpeg",
                "image1.jpeg",
                "image2.jpeg",
                "image3.jpeg",
                "image4.jpeg",
                "image5.jpeg",
                "image1.jpeg",
                "image2.jpeg",
                "image3.jpeg",
                "image4.jpeg",
                "image5.jpeg",
              ].map((img, i) => (
                <Image
                  key={i}
                  src={`/assets/img/gallery/${img}`}
                  width={90}
                  height={90}
                  alt="Gallery"
                  className="rounded-md object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </motion.div>

          {/* Social */}
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent mb-4">Follow Us</h4>
            <div className="flex gap-4 text-2xl text-white/70">
              <Link href="#" className="hover:text-accent transition-all">
                <FaFacebook />
              </Link>
              <Link href="#" className="hover:text-accent transition-all">
                <FaYoutube />
              </Link>
              <Link href="#" className="hover:text-accent transition-all">
                <FaInstagram />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <span>© 2026 Art of Living – Durgapura Center, Jaipur</span>
          <span>Designed with peace & purpose 🧘‍♂️</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
