
"use client";

import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import {  FaLaptopCode } from "react-icons/fa";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-8 py-4 fixed w-full top-0 z-50 glass">

      {/* Logo */}
      <div
            className="
              w-11
              h-11
              rounded-xl
              bg-gradient-to-r
              from-blue-500
              to-purple-500
              flex
              items-center
              justify-center
              shadow-[0_0_20px_rgba(59,130,246,0.5)]
            "
          >
            <FaLaptopCode className="text-white text-xl" />
          </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-sm bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent md:mr-10">

        <Link href="#about" className="hover:text-blue-400 transition">
          About
        </Link>

        <Link href="#projects" className="hover:text-purple-400 transition">
          Projects
        </Link>

        <Link href="#contact" className="hover:text-pink-400 transition">
          Contact
        </Link>

        <Link href="#skills" className="hover:text-pink-400 transition">
          Skills
        </Link>

      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
            absolute
            top-full
            left-0
            w-full
            glass
            flex
            flex-col
            items-center
            gap-6
            py-6
            md:hidden
          "
        >

          <Link
            href="#about"
            className="text-white"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            href="#projects"
            className="text-white"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>

          <Link
            href="#contact"
            className="text-white"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="#skills"
            className="text-white"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>

        </div>
      )}

    </nav>
  );
}
