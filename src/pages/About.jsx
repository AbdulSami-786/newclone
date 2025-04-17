import React from 'react'

function About() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24 mt-[130px]" >
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to our e-commerce website, where we strive to provide the best
        shopping experience for our customers. Our team is dedicated to ensuring
        that every product meets the highest standards of quality and that every
        customer is satisfied with their purchase.
      </p>
      <p className="text-lg mb-4">
        We believe in providing excellent customer service and building strong
        relationships with our customers. Our goal is to make online shopping
        easy, convenient, and enjoyable for everyone.
      </p>
      <div className="flex flex-wrap -mx-4 mb-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-lg font-bold mb-2">Our Mission</h2>
          <p className="text-lg">
            To provide high-quality products and excellent customer service to
            our customers, while building strong relationships and making online
            shopping easy and enjoyable for everyone.
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-lg font-bold mb-2">Our Values</h2>
          <p className="text-lg">
            We value our customers, our employees, and our community. We believe
            in honesty, integrity, and transparency in all of our business
            dealings.
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-lg font-bold mb-2">Our Team</h2>
          <p className="text-lg">
            Our team is made up of experienced professionals who are passionate
            about providing excellent customer service and building strong
            relationships with our customers.
          </p>
        </div>
      </div>
    </div>
  );
}


export default About