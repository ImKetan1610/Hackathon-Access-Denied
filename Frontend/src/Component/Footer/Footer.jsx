import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-xl font-bold mb-4">EngineerInsight</h2>
          <p className="text-blue-300">
            EngineerInsight empowers project teams with data-driven support
            through chat and ticket analysis. Gain deep insights to enhance
            project efficiency and resolve issues swiftly.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li>
              <Link to="/home" className="text-blue-300 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-blue-300 hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/chat" className="text-blue-300 hover:text-blue-500">
                Chat
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-blue-300 hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul>
            <li className="text-blue-300">#### Street Name</li>
            <li className="text-blue-300">City, State, ####</li>
            <li className="text-blue-300">Email: info@engineerinsight.com</li>
            <li className="text-blue-300">Phone: ######### </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-blue-800 pt-4">
        <p className="text-center text-blue-300">
          © 2024 EngineerInsight. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
