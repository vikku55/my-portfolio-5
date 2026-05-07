"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Message Sent!");
  };

  return (
    <section id="contact" className="p-16 text-center">
      <h2 className="text-4xl font-bold mb-10">Contact</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto glass p-6 rounded-xl"
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-3 bg-transparent border border-white/20"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 bg-transparent border border-white/20"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          placeholder="Message"
          className="w-full p-3 mb-3 bg-transparent border border-white/20"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}