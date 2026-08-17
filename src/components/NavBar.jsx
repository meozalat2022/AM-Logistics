"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/Services" },
    { name: "Careers", link: "/careers" },
    { name: "Contact Us", link: "/contactUs" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="AM Logistics"
            width={50}
            height={50}
            priority
          />

          <span
            className={`text-xl font-bold transition-colors duration-300 ${
              scrolled ? "text-blue-900" : "text-white"
            }`}
          >
            AM Logistics
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-gray-700 hover:text-blue-900"
                  : "text-white hover:text-orange-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;