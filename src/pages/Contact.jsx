// src/components/Contact.jsx
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pbm895q",
        "template_k2tizkz",
        form.current,
        "t1wZolemNogu_U5aO"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6"
    >
      <div className="max-w-xl w-full">

        <h2 className="text-4xl font-bold text-indigo-400 mb-8 text-center">
          Contact Me
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-slate-800 border border-slate-700"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-slate-800 border border-slate-700"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded bg-slate-800 border border-slate-700"
            required
          />

          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 py-3 rounded font-semibold"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;