"use client";

import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "home", target: "home", offset: -120 },
  { name: "about", target: "about", offset: -120 },
  { name: "program", target: "program", offset: -120 },
  { name: "register", target: "register", offset: -120 },
  { name: "team", target: "team", offset: -120 },
  { name: "testimonial", target: "testimonial", offset: -120 },
  { name: "contact", target: "footer", offset: -120 },
];

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <ScrollLink
          key={index}
          to={link.target}
          offset={link.offset}
          smooth
          spy
          className="cursor-pointer hover:text-accent transition-all"
        >
          {link.name}
        </ScrollLink>
      ))}
    </nav>
  );
};

export default MobileNav;
