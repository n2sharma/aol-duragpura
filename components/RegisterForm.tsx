"use client";

import { useState } from "react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hi, my name is ${name}. My phone number is ${phone}. I want to register for the Happiness Program at Durgapura Center.`;

    const whatsappNumber = "917793039777"; // Your WhatsApp number (no +)

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");

    setSubmitted(true);
    setName("");
    setPhone("");
  };

  return (
    <section id="register" className="py-16 bg-primary-100">
      <div className="container mx-auto max-w-lg">
        <h2 className="h2 text-center mb-4">Register for Happiness Program</h2>
        <p className="text-center text-text/70 mb-8">
          Fill in your details and we will contact you soon.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border px-4 py-3 rounded-md outline-none"
            />

            <input
              type="tel"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="border px-4 py-3 rounded-md outline-none"
            />

            <button
              type="submit"
              className="bg-accent text-white py-3 rounded-md hover:bg-accent/90 transition-all"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold text-accent mb-2">
              Thank You 🙏
            </h3>
            <p className="text-text/70">
              We have received your details. Our team will contact you soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RegisterForm;
