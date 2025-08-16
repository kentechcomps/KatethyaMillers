import NDETI from './assets/ndeti.png';
import KALWEE from './assets/Abdulkalwe.png';
import regina from './assets/reginandila.png';


const Management = () => {
  return (
    <div>
      {/* Management Section */}
      <section id="management" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-green-700">Our Management Team</h3>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Meet the dedicated leaders driving AgriCereal Ltd’s vision of empowering farmers and ensuring food security.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Manager 1 */}
            <div className="bg-gradient-to-tr from-green-100 via-white to-yellow-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img 
                src= {NDETI} 
                alt="CEO" 
                className="w-32 h-32 mx-auto rounded-full object-cover shadow-md border-4 border-white"
              />
              <h4 className="mt-4 text-xl font-bold text-gray-900">Nicholus Katua</h4>
              <p className="text-green-700 font-medium">Chief Executive Officer</p>
              <p className="mt-2 text-gray-700 text-sm">
                Passionate about agricultural transformation and empowering farmers through innovation and sustainability.
              </p>
            </div>

            {/* Manager 2 */}
            <div className="bg-gradient-to-tr from-yellow-100 via-white to-green-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img 
                src={regina} 
              
                alt="Operations Manager" 
                className="w-32 h-32 mx-auto rounded-full object-cover shadow-md border-4 border-white"
              />
              <h4 className="mt-4 text-xl font-bold text-gray-900">Regina</h4>
              <p className="text-green-700 font-medium">Operations Manager</p>
              <p className="mt-2 text-gray-700 text-sm">
                Oversees production and supply chain processes to ensure top-quality cereals and unga products.
              </p>
            </div>

            {/* Manager 3 */}
            <div className="bg-gradient-to-tr from-green-200 via-white to-yellow-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img 
                src={KALWEE} 
                alt="Finance Manager" 
                className="w-32 h-32 mx-auto rounded-full object-cover shadow-md border-4 border-white"
              />
              <h4 className="mt-4 text-xl font-bold text-gray-900">Abdul Kalwe</h4>
              <p className="text-green-700 font-medium">Finance Manager</p>
              <p className="mt-2 text-gray-700 text-sm">
                Ensures sustainable growth by managing seed credit programs and supporting farmer financing.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>

  );
};

export default Management;
