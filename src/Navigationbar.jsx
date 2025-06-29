import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router';
import Banner from './Banner';

const NavigationBar = () => {

    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
   <div>
    <Banner />
      <nav
        className="flex flex-wrap items-center justify-between p-3 "
        style={{ backgroundColor: 'white' }}
      >
        <div className="text-xl text-purple-600 font-medium"
        style={
          {
            fontFamily: 'Orbitron , sans-serif'
          }
        }
        >KATETHYA MILLERS</div>

        {/* Menu Toggle for Mobile */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <img
              className={`toggle block ${isOpen ? 'hidden' : 'block'}`}
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width="40"
              height="40"
              alt="Menu"
            />
            <img
              className={`toggle ${isOpen ? 'block' : 'hidden'}`}
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="40"
              height="40"
              alt="Close"
            />
          </button>
        </div>

        {/* Links */}
        <div className={`toggle w-full md:w-auto md:flex text-right text-bold ${isOpen ? 'block' : 'hidden'} md:block`}>
          <a className="block md:inline-block hover:text-gray-300 px-3 py-3 text-purple-600 font-medium"
           style={{
             fontFamily: 'Roboto, sans-serif'
           }}
          >
          <NavLink
                exact
                to="/"
              >
                Home
              </NavLink>
          </a>
      

          <a  className="block md:inline-block hover:text-gray-300 px-3 py-3 text-purple-600 font-medium"
          style={{
            fontFamily: 'Roboto, sans-serif'
          }}
          >
          <NavLink
                exact
                to="/"
              >
                Contact Us
              </NavLink>
          
          
          </a>
          <a href="#gallery" className="block md:inline-block hover:text-gray-300 px-3 py-3 text-purple-600 font-medium"
          style={{
            fontFamily: 'Roboto, sans-serif'
          }}
          >About us </a>
        </div>

        {/* SignIn, SignUp, and WhatsApp */}
        <div className={`w-full text-end ${isOpen ? 'block' : 'hidden'} md:flex md:w-auto px-2 py-2 md:rounded`}>
       <div className="flex flex-col md:flex-row justify-end gap-2 md:gap-3">
  {/* Social Media Icons */}
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-purple-600 hover:bg-purple-100 transition"
    aria-label="Visit our Facebook page"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  </a>
  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-purple-600 hover:bg-purple-100 transition"
    aria-label="Visit our LinkedIn page"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  </a>
  <a
    href="https://x.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-purple-600 hover:bg-purple-100 transition"
    aria-label="Visit our X page"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  </a>
  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-purple-600 hover:bg-purple-100 transition"
    aria-label="Visit our Instagram page"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.948-.196-4.354-2.617-6.781-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  </a>
</div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
