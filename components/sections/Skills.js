
"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

export default function Skills() {

  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Git", icon: <FaGitAlt /> },
  ];

  return (
    <section id="skills" className="p-16">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-14"
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">

        {skills.map((skill, i) => (

          <Tilt
            key={i}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
              }}

              className="
                glass
                rounded-2xl
                p-6
                flex
                flex-col
                items-center
                justify-center
                cursor-pointer
                group
                hover:shadow-[0_0_35px_rgba(59,130,246,0.5)]
                hover:-translate-y-3
                transition-all
                duration-300
              "
            >

              {/* Icon */}
              <div className="
                text-5xl
                mb-4
                text-blue-400
                group-hover:scale-125
                transition
                duration-300
              ">
                {skill.icon}
              </div>

              {/* Name */}
              <h3 className="text-lg font-medium">
                {skill.name}
              </h3>

            </motion.div>

          </Tilt>

        ))}

      </div>

    </section>
  );
}