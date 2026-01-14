"use client";

import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-white text-text shadow-sm transition-all duration-300 ${
        headerActive ? "h-[90px]" : "h-[120px]"
      }`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/img/aollogo.svg"
            width={117}
            height={55}
            alt="Art of Living"
          />
        </Link>

        {/* Desktop Nav */}
        <Nav containerStyles="hidden xl:flex gap-6 text-base uppercase font-medium" />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpenNav(!openNav)}
          className="xl:hidden text-3xl"
        >
          <MdMenu />
        </button>

        {/* Mobile Nav */}
        <MobileNav
          containerStyles={`fixed left-0 w-full bg-white text-text transition-all duration-300 xl:hidden ${
            headerActive ? "top-[90px]" : "top-[120px]"
          } ${
            openNav
              ? "max-h-[500px] py-8 border-t"
              : "max-h-0 overflow-hidden py-0"
          } flex flex-col gap-6 text-center uppercase font-medium`}
        />
      </div>
    </header>
  );
};

export default Header;
