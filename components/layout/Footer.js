import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 px-10 py-12 glass text-white">
      
      <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">
            Contact Me
          </h3>
          <p className="text-gray-400">Email: <a href="mailto:vikramsingh3859@gmail.com">vikramsingh3859@gmail.com</a></p>
          <p className="text-gray-400">Phone: <a href="tel:+91 8979849118">+91 8979849118</a></p>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">
            Follow Me
          </h3>

          <div className="flex gap-6 text-2xl">
            <a href="https://github.com/vikku55" className="hover:text-blue-400 transition" target="blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/vikram-singh-87619a219" className="hover:text-blue-500 transition" target="blank">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/vikram.thakur_01/" className="hover:text-pink-400 transition" target="blank">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-pink-400">
            Address
          </h3>
          <p className="text-gray-400">
            Babrod, Achhanera ,Agra Uttar Pradesh , 283101 <br />
            India
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-10 border-t border-white/10 pt-6 text-gray-500">
        © 2026  Vikram. All rights reserved.
      </div>
    </footer>
  );
}