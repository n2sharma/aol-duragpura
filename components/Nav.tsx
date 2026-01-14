"use client";

import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "home", target: "home", offset: -120 },
  { name: "about", target: "about", offset: -120 },
  { name: "program", target: "program", offset: -120 },
  { name: "team", target: "team", offset: -120 },
  { name: "testimonial", target: "testimonial", offset: -120 },
  { name: "register", target: "register", offset: -120 },
  { name: "contact", target: "footer", offset: -120 },
];

const Nav = ({ containerStyles }: { containerStyles: string }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <ScrollLink
            offset={link.offset}
            to={link.target}
            smooth
            spy
            activeClass="active"
            className="cursor-pointer hover:text-accent transition-all"
            key={index}
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </nav>
  );
};

export default Nav;
