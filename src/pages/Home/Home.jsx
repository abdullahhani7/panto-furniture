import React from "react";
import Banner from "../../components/Banner/Banner";
import Choose from "../../components/Choose/Choose";
import Product from "../../components/Product/Product";
import Experiences from "../../components/Experiences/Experiences";
import Materials from "../../components/Materials/Materials";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      {/* Banner || Hero Section */}
      <div>
        <Banner />
      </div>

      {/* Choose Section */}
      <div className="px-4">
        <Choose />
      </div>

      {/* Best Selling Product */}
      <div className="px-4">
        <Product />
      </div>

      {/* Experience Section */}
      <div className="px-4">
        <Experiences />
      </div>

      {/* Materials Section */}
      <div className="px-4">
        <Materials />
      </div>

      {/* Testimonial Section */}
      <div className="px-4">
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
