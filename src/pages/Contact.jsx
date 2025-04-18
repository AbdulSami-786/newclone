import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className="container mx-auto px-4 py-10 md:py-16 lg:py-20 mtt">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h1>

      <motion.p
        className="text-lg text-center text-gray-600 mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        We'd love to hear from you. Fill out the form below and we’ll get back to you as soon as possible.
      </motion.p>

      <form className="flex flex-wrap gap-6 justify-center">
        <motion.div
          className="w-full md:w-1/2 lg:w-1/3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Your Name"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 lg:w-1/3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Your Email"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 lg:w-1/3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Phone Number"
          />
        </motion.div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
          <textarea
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Your Message"
          ></textarea>
        </motion.div>

        <motion.div
          className="w-full text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300"
          >
            Send Message
          </button>
        </motion.div>
      </form>

      <div className="mt-16 grid gap-6 md:grid-cols-3 text-center text-gray-700">
        <div>
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p>123 Main St, Anytown, USA 12345</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Phone</h3>
          <p>555-555-5555</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p>info@example.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;