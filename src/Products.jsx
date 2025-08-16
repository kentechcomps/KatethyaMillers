   import pic7 from './assets/pic7.png';
   import bean from './assets/beans.jpeg';
   import maize from './assets/maizeimage.jpg';
   
   const Products = () => {


    
  return (
    <>
     <section id="products" className="max-w-7xl mx-auto py-20 px-6 text-center">
        <h3 className="text-3xl font-bold text-green-700">Our Products</h3>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="p-6 bg-white shadow rounded-2xl">
            <img src= {maize} alt="Maize" className="w-full h-40 object-cover rounded-xl"/>
            <h4 className="mt-4 text-lg font-semibold">Maize</h4>
          </div>
          <div className="p-6 bg-white shadow rounded-2xl">
            <img src= {bean} alt="Beans" className="w-full h-40 object-cover rounded-xl"/>
            <h4 className="mt-4 text-lg font-semibold">Beans</h4>
          </div>
          <div className="p-6 bg-white shadow rounded-2xl">
            <img src= {pic7} alt="Unga" className="w-full h-40 object-cover rounded-xl"/>
            <h4 className="mt-4 text-lg font-semibold">Unga</h4>
          </div>
        </div>
      </section>
    </>
   
  
  );
};

export default Products;
