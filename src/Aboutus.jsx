import React from 'react';
import { motion } from 'framer-motion';
import pic7 from './assets/pic7.png'; // Assuming you have an image in your assets folder

const Aboutus = () => {

  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <img
            src={pic7}
            alt="About Us"
            className="rounded-2xl shadow-lg object-cover w-full h-full"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Katethya Millers
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Katethya Millers began as a small cereal store in 2010 and has grown into a registered enterprise making an impact across the region. We are committed to quality, innovation, and empowering local farmers through climate-smart sourcing and resilient supply chains.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our mission is to deliver affordable nutrition, create employment, and promote sustainable agriculture. With modern facilities and a dedicated team, we’re proud to contribute to food security and economic growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
export default Aboutus;