import {useState}from 'react';
import { useNavigate } from 'react-router';



const Banner = () => {
  const history = useNavigate()
  const [loading , setloading] = useState(false)


  const handleClick = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      history("contact");
    }, 2000); // simulate loading (2s)
  };
  return (
    <div className="bg-white text-[#1B4332] py-6 shadow-md border-t border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo Placeholder */}
        {/* /* <div className="flex-shrink-0">
          <div className="w-32 h-16 bg-gray-200 flex items-center justify-center rounded-md">
            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
          </div>
        </div> */ }

        {/* Phone Numbers with Icon */}
        <div className="flex items-center gap-3">
          <svg
            className="w-8 h-8 text-[#1B4332]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <div className="flex flex-col">
            <a href="tel:+1234567890" className="text-lg-green-600 font-medium hover:underline">
              0718060754
            </a>
            <a href="tel:+0987654321" className="text-lg-green-600 font-medium hover:underline">
              0700699101
            </a>
          </div>
        </div>

        {/* Apply Now Button */}
        <button className="bg-green-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition"
        onClick={handleClick}
        >
        {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Loading...
            </>
          ) : (
            "Talk to us"
          )}
        </button>
      </div>
    </div>
  );
}

export default Banner;