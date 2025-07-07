import React from 'react';
import Map from './Map';
import Footer from './footer';

const Contactus = ()=>{







    return(
          <>
        <section  id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white font-poppins">Get in Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-700 dark:text-slate-300">
            Reach out to us for inquiries, admissions, or feedback — we’re here to help!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-10 gap-12 items-start">
          {/* Contact Form */}
          <div className="md:col-span-7 bg-white dark:bg-slate-800 shadow-lg rounded-xl p-8">
            <h3 className="text-2xl font-bold text-[#1B4332] dark:text-white mb-6">Send a Message</h3>
            <form id="contactForm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* First Name */}
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full rounded-md border border-gray-400 py-2 px-3 shadow-md dark:text-gray-300"
                    required
                  />
                </div>
                {/* Last Name */}
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full rounded-md border border-gray-400 py-2 px-3 shadow-md dark:text-gray-300"
                    required
                  />
                </div>
                {/* Phone Number */}
                <div className="md:col-span-2">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full rounded-md border border-gray-400 py-2 px-3 shadow-md dark:text-gray-300"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full rounded-md border border-gray-400 py-2 px-3 shadow-md dark:text-gray-300"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full rounded-md border border-gray-400 py-2 px-3 shadow-md dark:text-gray-300"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-[#1B4332] text-white px-6 py-3 font-medium rounded-md hover:bg-purple-900 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          {/* Contact Info */}
          <div className="md:col-span-3 space-y-8 divide-y divide-gray-300 dark:divide-gray-700">
            {/* Address */}
            <div className="flex items-start pb-6">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-[#1B4332] text-white">
                📍
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our Address</h3>
                <p className="text-gray-600 dark:text-slate-300">123 Maecenas Street, Nairobi, Kenya</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start pt-6 pb-6">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-[#1B4332] text-white">
                📞
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-slate-300">+254 712 345 678</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start pt-6 pb-6">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-[#1B4332] text-white">
                ✉️
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-slate-300">info@stpetersacademy.ac.ke</p>
              </div>
            </div>
  
       
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Follow Us</h3>
                <p className="text-gray-600 dark:text-slate-300">Stay connected with us on social media.</p>
                <div className="mt-2 flex space-x-4">
                  <a href="#" className="text-purple-600 hover:text-purple-800 dark:hover:text-purple-400">Facebook</a>
                  <a href="#" className="text-purple-600 hover:text-purple-800 dark:hover:text-purple-400">Twitter</a>
                  <a href="#" className="text-purple-600 hover:text-purple-800 dark:hover:text-purple-400">Instagram</a>
                  <a href="#" className="text-purple-600 hover:text-purple-800 dark:hover:text-purple-400">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </section>
    <Map />
    <Footer />
    </>
    )
}
export default Contactus