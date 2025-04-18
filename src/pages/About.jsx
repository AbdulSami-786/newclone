import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-12 mtt">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Learn more about who we are, what we believe in, and how we work to bring you the best shopping experience possible.
        </p>
      </div>

      {/* Intro Section */}
      <div className="max-w-4xl mx-auto mb-16 space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          Welcome to our e-commerce platform, where innovation meets convenience. We're committed to curating high-quality products that not only meet your needs but exceed your expectations.
        </p>
        <p>
          Our journey began with a simple idea: make online shopping seamless and personal. Today, we continue that mission by delivering excellence in everything from customer service to product quality.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
          <h2 className="text-xl font-semibold mb-3 text-indigo-600">Our Mission</h2>
          <p className="text-gray-700 text-base">
            To provide top-notch products with unmatched service while making every online shopping experience smooth and enjoyable.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
          <h2 className="text-xl font-semibold mb-3 text-indigo-600">Our Values</h2>
          <p className="text-gray-700 text-base">
            We believe in transparency, trust, and treating our customers like family. Honesty and integrity guide everything we do.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
          <h2 className="text-xl font-semibold mb-3 text-indigo-600">Our Team</h2>
          <p className="text-gray-700 text-base">
            Our passionate team is driven by a shared mission to innovate and elevate your shopping journey every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
