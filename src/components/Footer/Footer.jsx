import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#9F135A] text-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start text-center md:text-left">
          {/* Logo, Slogan and Social Media Section */}
          <div className="flex flex-col items-center md:items-start mb-10 md:mb-0">
            <h2
              className="text-4xl font-extrabold mb-2"
              style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
            >
              DUNKIN'
            </h2>
            <p className="text-sm max-w-xs mb-4">
              Serving fresh, delicious food with a smile. Experience the taste
              that brings people together.
            </p>
            <div className="flex space-x-4 text-xl">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="hover:text-gray-300 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="hover:text-gray-300 transition-colors" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="hover:text-gray-300 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <a href="/" className="hover:text-gray-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/menu"
                  className="hover:text-gray-300 transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-gray-300 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-gray-300 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Menu Section */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
            >
              Menu
            </h3>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <a
                  href="/menu"
                  className="hover:text-gray-300 transition-colors"
                >
                  Breakfast
                </a>
              </li>
              <li>
                <a
                  href="/menu"
                  className="hover:text-gray-300 transition-colors"
                >
                  Lunch
                </a>
              </li>
              <li>
                <a
                  href="/menu"
                  className="hover:text-gray-300 transition-colors"
                >
                  Desserts
                </a>
              </li>
              <li>
                <a
                  href="/menu"
                  className="hover:text-gray-300 transition-colors"
                >
                  Beverages
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info Section */}
          <div className="text-center md:text-left">
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
            >
              Contact Info
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <a
                  href="https://maps.google.com/?q=أبو قير، أبو النواتير، قسم سيدى جابر، محافظة الإسكندرية 5433112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <p>
                    أبو قير، أبو النواتير، قسم سيدى جابر، محافظة الإسكندرية
                    5433112
                  </p>
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.12.35.03.75-.25 1.02l-2.2 2.2z" />
                </svg>
                <p>+20 10 51651265</p>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <p>care@dunkin.eg</p>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-400 my-8 opacity-50" />

        {/* Copyright Section */}
        <div className="text-center text-sm opacity-75">
          ©2025 Marwan Elsaka
        </div>
      </div>
    </footer>
  );
};

export default Footer;
