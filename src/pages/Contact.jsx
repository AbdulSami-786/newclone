import React from 'react'

function Contact() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24 marg mt-[130px]">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-4">
        We would love to hear from you! Please fill out the form below to get in
        touch with us.
      </p>
      <form className="flex flex-wrap -mx-4 mb-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <label className="text-lg font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="w-full p-2 border border-gray-400 rounded-lg"
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <label className="text-lg font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="w-full p-2 border border-gray-400 rounded-lg"
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <label className="text-lg font-bold mb-2" htmlFor="phone">
            Phone:
          </label>
          <input
            className="w-full p-2 border border-gray-400 rounded-lg"
            type="text"
            id="phone"
            name="phone"
          />
        </div>
        <div className="w-full p-4">
          <label className="text-lg font-bold mb-2" htmlFor="message">
            Message:
          </label>
          <textarea
            className="w-full p-2 border border-gray-400 rounded-lg"
            id="message"
            name="message"
          />
        </div>
        <div className="w-full p-4">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg">
            Send Message
          </button>
        </div>
      </form>
      <div className="flex flex-wrap -mx-4 mb-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-lg font-bold mb-2">Address:</h2>
          <p className="text-lg">
            123 Main St, Anytown, USA 12345
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-lg font-bold mb-2">Phone:</h2>
          <p className="text-lg">
            555-555-5555
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-lg font-bold mb-2">Email:</h2>
          <p className="text-lg">
            [info@example.com](mailto:info@example.com)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact