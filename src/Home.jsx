import NavigationBar from "./Navigationbar";
import Carousel from "./Carosel";
import Aboutus from "./Aboutus";
import Footer from "./footer";
import Products from "./Products";
import Management from "./Management";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Aboutus />
      <Products/>
      <Management />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
