

"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-16 relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}

        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        About <span className="text-blue-400">Me</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >

          <h3 className="text-2xl font-semibold mb-6 leading-relaxed">
            Hi, I’m{" "}
            <span className="text-blue-400">
              Vikram Singh
            </span>
            , a passionate Full-Stack Web Developer.
          </h3>

          <p className="text-gray-400 leading-relaxed text-lg">
            I love crafting modern, responsive and performance-driven
            web experiences using modern frontend and backend technologies.

            <br /><br />

            I worked as a Web Developer at
            <span className="text-white font-medium">
              {" "}ANDi Software Solutions
            </span>,
            where I contributed to real-world projects and improved my
            development skills.

            <br /><br />

            I enjoy building clean UI, solving problems through code
            and continuously learning new technologies.
          </p>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}

          className="grid grid-cols-2 gap-5"
        >

          {/* Card 1 */}
          <div className="glass rounded-2xl p-6 hover:-translate-y-2 transition duration-300">
            <h4 className="text-xl font-semibold text-blue-400 mb-2">
              Frontend
            </h4>

            <p className="text-gray-400 text-sm leading-relaxed">
              HTML, CSS, JavaScript, React.js, Next.js
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass rounded-2xl p-6 hover:-translate-y-2 transition duration-300">
            <h4 className="text-xl font-semibold text-purple-400 mb-2">
              Backend
            </h4>

            <p className="text-gray-400 text-sm leading-relaxed">
              Node.js, Express.js, MySQL
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass rounded-2xl p-6 hover:-translate-y-2 transition duration-300">
            <h4 className="text-xl font-semibold text-pink-400 mb-2">
              Experience
            </h4>

            <p className="text-gray-400 text-sm leading-relaxed">
              Web Developer at ANDi Software Solutions
            </p>
          </div>

          {/* Card 4 */}
          <div className="glass rounded-2xl p-6 hover:-translate-y-2 transition duration-300">
            <h4 className="text-xl font-semibold text-green-400 mb-2">
              Passion
            </h4>

            <p className="text-gray-400 text-sm leading-relaxed">
              Building modern UI & impactful web solutions
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}