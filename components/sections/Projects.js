
"use client";

import { projects } from "@/lib/data";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-16 relative overflow-hidden"
    >

      
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}

        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Featured <span className="text-blue-400">Projects</span>
      </motion.h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {projects.map((p, i) => (

          <motion.div
            key={i}

            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.5,
              delay: i * 0.1,
            }}

            className="
              group
              glass
              rounded-2xl
              overflow-hidden
              hover:-translate-y-3
              hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]
              transition-all
              duration-500
            "
          >

            
            <div className="relative h-56 overflow-hidden">

              <Image
                src={p.image}
                fill
                alt={p.title}
                className="
                  object-cover
                  group-hover:scale-110
                  transition
                  duration-700
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-linear-to-t
                  from-black/80
                  via-black/20
                  to-transparent
                "
              ></div>

            </div>

            {/* CONTENT */}
            <div className="p-6">

              {/* Title */}
              <h3 className="text-2xl font-semibold">
                {p.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-400 text-sm leading-relaxed mt-3">
                {p.desc}
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-4 mt-6">

                {/* Live */}
                <a
                  href={p.live}
                  target="_blank"

                  className="
                    flex
                    items-center
                    gap-2
                    bg-blue-600
                    hover:bg-blue-700
                    px-4
                    py-2
                    rounded-lg
                    transition
                    text-sm
                  "
                >
                  <FiExternalLink />
                  Live Demo
                </a>

                {/* Github */}
                <a
                  href={p.github}
                  target="_blank"

                  className="
                    w-10
                    h-10
                    rounded-full
                    border
                    border-white/20
                    flex
                    items-center
                    justify-center
                    hover:bg-white/10
                    transition
                  "
                >
                  <FaGithub />
                </a>

              </div>

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  );
}