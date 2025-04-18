import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-neutral to-gray-900 text-neutral-content px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h6 className="footer-title text-lg font-semibold mb-4">Services</h6>
          <ul className="space-y-2">
            <li><a className="link link-hover">Branding</a></li>
            <li><a className="link link-hover">Design</a></li>
            <li><a className="link link-hover">Marketing</a></li>
            <li><a className="link link-hover">Advertisement</a></li>
          </ul>
        </div>
        <div>
          <h6 className="footer-title text-lg font-semibold mb-4">Company</h6>
          <ul className="space-y-2">
            <li><a className="link link-hover">About us</a></li>
            <li><a className="link link-hover">Contact</a></li>
            <li><a className="link link-hover">Jobs</a></li>
            <li><a className="link link-hover">Press kit</a></li>
          </ul>
        </div>
        <div>
          <h6 className="footer-title text-lg font-semibold mb-4">Legal</h6>
          <ul className="space-y-2">
            <li><a className="link link-hover">Terms of use</a></li>
            <li><a className="link link-hover">Privacy policy</a></li>
            <li><a className="link link-hover">Cookie policy</a></li>
          </ul>
        </div>
        <div>
          <h6 className="footer-title text-lg font-semibold mb-4">Follow Us</h6>
          <div className="flex gap-4">
            <a className="text-xl hover:text-white" href="#"><FaFacebookF /></a>
            <a className="text-xl hover:text-white" href="#"><FaTwitter /></a>
            <a className="text-xl hover:text-white" href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-content mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Made By ABDULSAMI MUHHAMD YOUSUF 
      </div>
    </footer>
  );
}

export default Footer;
