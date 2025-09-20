import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
        {/* Main Header Section */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-5xl sm:text-7xl font-extrabold text-[#C81D6A] mb-4"
            style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            CONTACT US
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We'd love to hear from you! Get in touch with us for any questions,
            feedback, or special requests.
          </motion.p>
        </div>

        {/* Main Content: Form & Info */}
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 lg:flex lg:space-x-12">
          {/* Contact Form Section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl font-extrabold text-gray-800 mb-6"
              style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
            >
              SEND US A MESSAGE
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <form
              action="https://formspree.io/f/your_form_id"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first-name"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C81D6A]"
                  required
                />
                <input
                  type="text"
                  name="last-name"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C81D6A]"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C81D6A]"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C81D6A]"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C81D6A]"
                required
              ></textarea>
              <motion.button
                type="submit"
                className="w-full bg-[#C81D6A] text-white font-bold py-4 rounded-full hover:bg-[#a81a59] transition-colors shadow-lg"
                style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Map & Info Section */}
          <motion.div
            className="lg:w-1/2 mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl font-extrabold text-gray-800 mb-6"
              style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
            >
              GET IN TOUCH
            </h2>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-center space-x-3">
                <span className="text-2xl text-[#C81D6A]">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <div>
                  <h4 className="font-semibold text-gray-800">ADDRESS</h4>
                  <a
                    href="https://maps.google.com/?cid=3534786402515528600&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <p>
                      أبو قير، أبو النواتير، قسم سيدى جابر، محافظة الإسكندرية
                      5433112
                    </p>
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl text-[#FF8200]">
                  <i className="fas fa-phone"></i>
                </span>
                <div>
                  <h4 className="font-semibold text-gray-800">PHONE</h4>
                  <p>+20 10 51651265</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl text-[#C81D6A]">
                  <i className="fas fa-envelope"></i>
                </span>
                <div>
                  <h4 className="font-semibold text-gray-800">EMAIL</h4>
                  <p>care@dunkin.eg</p>
                </div>
              </div>
            </div>

            <h3
              className="text-2xl font-extrabold text-gray-800 mt-12 mb-4"
              style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
            >
              FIND US
            </h3>
            {/* The Map */}
            <div
              className="rounded-lg overflow-hidden shadow-xl"
              style={{ height: "350px" }}
            >
              <iframe
                title="Dunkin' Donuts Alexandria Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.3966598586393!2d29.90793131505304!3d31.20526018146313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49b65d1d601%3A0x6a02b66d8e23b2e5!2sDunkin'%20Donuts%20Fouad%20St!5e0!3m2!1sen!2seg!4v1679900821945!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
