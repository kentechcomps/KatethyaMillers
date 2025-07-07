import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaInbox, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';





const footer = () => {

    
  return (
    <footer className="text-gray-100 relative">
      {/* 🌊 Wave at top */}
      <div className="w-full overflow-hidden rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180" className="w-full h-auto">
          <path
            fill="#1B4332"
            d="M0,160L48,138.7C96,117,192,75,288,58.7C384,43,480,53,576,69.3C672,85,768,107,864,112C960,117,1056,107,1152,90.7C1248,75,1344,53,1392,42.7L1440,32V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0Z"
          ></path>
        </svg>
      </div>

      {/* 🌽 Maize Background with Overlay */}
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1629459569982-68e9b76cc487?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1B4332]"></div>

        {/* Main Footer Content */}
        <div className="relative z-10 px-6 py-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-white">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold mb-2">KATETHYA MILLERS</h2>
            <p className="text-sm text-gray-200 text-center md:text-left">
              Empowering local farmers through sustainable maize sourcing and milling.
            </p>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-base">
                <FiMail className="text-xl text-blue-400" />
                NDETI
              </li>
              <li className="flex items-center gap-3 text-base">
                <FiPhone className="text-xl text-green-400" />
                0718060754 / 0700699101
              </li>
              <li className="flex items-center gap-3 text-base">
                <FaInbox className="text-xl text-yellow-400" />
                P.O. Box 1234 – 00100 Nairobi
              </li>
              <li className="flex items-center gap-3 text-base">
                <FiMapPin className="text-xl text-red-400" />
                EKALAKALA MARKET, MASINGA, KENYA
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex mt-5 gap-4 text-2xl">
              <a href="https://facebook.com" className="text-blue-500 hover:text-white" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" className="text-pink-400 hover:text-white" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-4 text-base">
              <li><a href="#" className="hover:text-yellow-300 transition">Home</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">About</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Services</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="relative z-10 border-t border-gray-600 mt-10 pt-6 pb-4 text-sm text-center text-gray-300">
          © {new Date().getFullYear()} KATETHYA MILLERS. All rights reserved.
        </div>
      </div>
    </footer>

  );
}
export default footer;