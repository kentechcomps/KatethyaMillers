import { motion } from "framer-motion";
import farmer from './assets/farmer.png';
import React from 'react';
const Testimonials = () => {
    const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};
  return (
    <div className="testimonials">
   <section id="testimonials" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-green-700">What Farmers Say</h3>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Our farmers are at the heart of everything we do. Here’s what they have to say about AgriCereal Ltd.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Testimonial 1 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gradient-to-br from-green-50 via-white to-yellow-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="flex justify-center">
              <img 
                src={farmer} 
                alt="Farmer 1" 
                className="w-20 h-20 rounded-full object-cover border-4 border-green-100 shadow"
              />
            </div>
            <h4 className="mt-4 font-semibold text-gray-900">Peter Mwangi</h4>
            <p className="text-green-600 text-sm">Maize Farmer – Machakos</p>
            <p className="mt-3 text-gray-700 text-sm italic">
              “Thanks to AgriCereal’s seed loan program, I was able to double my harvest. Their unga is also the best in the market!”
            </p>
            <div className="flex justify-center mt-3 text-yellow-500">
              {"★★★★★"}
            </div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gradient-to-br from-yellow-50 via-white to-green-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="flex justify-center">
              <img 
                src={farmer} 
                alt="Farmer 2" 
                className="w-20 h-20 rounded-full object-cover border-4 border-yellow-100 shadow"
              />
            </div>
            <h4 className="mt-4 font-semibold text-gray-900">Grace Achieng</h4>
            <p className="text-green-600 text-sm">Bean Farmer – Kisumu</p>
            <p className="mt-3 text-gray-700 text-sm italic">
              “Their support has been life-changing. Affordable seeds and a reliable market for my beans. Truly a partner for farmers.”
            </p>
            <div className="flex justify-center mt-3 text-yellow-500">
              {"★★★★★"}
            </div>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gradient-to-br from-green-100 via-white to-yellow-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="flex justify-center">
              <img 
                src={farmer} 
                alt="Farmer 3" 
                className="w-20 h-20 rounded-full object-cover border-4 border-green-200 shadow"
              />
            </div>
            <h4 className="mt-4 font-semibold text-gray-900">Samuel Kiptoo</h4>
            <p className="text-green-600 text-sm">Mixed Farmer – Eldoret</p>
            <p className="mt-3 text-gray-700 text-sm italic">
              “With AgriCereal, farming feels sustainable again. I sell cereals easily and feed my family with their quality unga.”
            </p>
            <div className="flex justify-center mt-3 text-yellow-500">
              {"★★★★★"}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Testimonials;
