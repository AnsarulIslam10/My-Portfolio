import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Swal from "sweetalert2";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        form.current,
        {
          publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          Swal.fire({
            icon: "success",
            title: "Email sent successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="my-16">
      <h2 className="text-5xl font-bold text-center mb-12 text-cyan-500">
        Contact Me
      </h2>
      <div className="bg-black/20 p-8 rounded-lg shadow-lg space-y-8 md:space-y-0 md:flex md:justify-between md:items-start">
        {/* Contact Form */}
        <div className="space-y-6 md:w-1/2">
          <h3 className="text-2xl sm:text-3xl font-semibold text-cyan-300 mb-4">
            Send a Message
          </h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label htmlFor="email" className="text-cyan-400">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                required
                className="w-full p-3 mt-2 bg-slate-700 text-white  rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-cyan-400">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                required
                className="w-full p-3 mt-2 bg-slate-700 text-white  rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-cyan-400">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full p-3 mt-2 bg-slate-700 text-white rounded-lg"
                placeholder="Write your message here"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 shiny-button bg-cyan-500 text-black rounded-lg hover:bg-cyan-600"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="text-cyan-500 bg-transparent md:w-1/2 md:pl-8">
          <h3 className="text-3xl font-semibold mb-12 text-cyan-300">
            Contact Info
          </h3>
          <div className="mb-4">
            <p className="text-xs sm:text-lg md:text-xl flex items-center gap-2 ">
              <FaLocationDot className="text-xl sm:text-2xl md:text-3xl" />{" "}
              Dhaka, Bangladesh
            </p>
          </div>
          <div className="mb-4">
            <p className="text-xs sm:text-lg md:text-xl flex items-center gap-2">
              <MdEmail className="text-xl sm:text-2xl md:text-3xl" />{" "}
              <a className="">ansarulislam01739@gmail.com</a>
            </p>
          </div>
          <div>
            <p className="text-xs sm:text-lg md:text-xl flex items-center gap-2">
              <FaWhatsapp className="text-xl sm:text-2xl md:text-3xl" />
              <a rel="noopener noreferrer" className="">
                +880 1739-702012
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
