
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative px-6 overflow-hidden">

     
      <div className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-3xl top-20"></div>

     
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src="/images/profile.png"
          width={190}
          height={190}
          alt="profile"
          className="
            rounded-full
            border-4
            border-blue-500
            shadow-[0_0_40px_rgba(59,130,246,0.5)]
            hover:scale-105
            transition
            duration-300
          "
        />
      </motion.div>

      {/* Intro Text */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 text-blue-400 tracking-[3px] uppercase text-sm"
      >
        Frontend Developer
      </motion.p>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-5xl md:text-7xl font-bold mt-4 leading-tight"
      >
        Hi, I’m{" "}
        <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Vikram
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-400 mt-6 max-w-2xl text-lg leading-relaxed"
      >
        I create modern, responsive and high-performance web applications
        using React, Next.js and modern frontend technologies.
        Passionate about building smooth user experiences and clean UI.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex gap-4 mt-8 flex-wrap justify-center"
      >

        {/* Resume */}
        <a
          href="/resume.pdf"
          download
          className="
            px-7 py-3
            bg-blue-600
            rounded-xl
            hover:bg-blue-700
            transition
            shadow-lg
            hover:shadow-blue-500/40
          "
        >
          Download Resume
        </a>

        {/* Projects */}
        <a
          href="#projects"
          className="
            px-7 py-3
            border border-white/20
            rounded-xl
            hover:bg-white/10
            transition
          "
        >
          View Projects
        </a>

      </motion.div>

    </section>
  );
}