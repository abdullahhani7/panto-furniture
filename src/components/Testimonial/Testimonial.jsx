import React from "react";
import HeaderTitle from "../Utilitices/HeaderTitle/HeaderTitle";
import TestimonialSlider from "../TestimonialSlider/TestimonialSlider";

const Testimonial = () => {
  const clientReviews = [
    {
      name: "bang upin",
      avatar: "/avater_1.png",
      review:
        "I am very happy with the service and the quality of the furniture. The design is modern and fits perfectly in my home. Highly recommend!",
      rating: 5,
      image: "/client_1.png",
    },
    {
      name: "ibuk sukjan",
      avatar: "/avater_2.png",
      review:
        "I am very happy with the service and the quality of the furniture. The design is modern and fits perfectly in my home. Highly recommend!",
      rating: 4.5,
      image: "/client_2.png",
    },
    {
      name: "mpok ina",
      avatar: "/avater_3.png",
      review:
        "I am very happy with the service and the quality of the furniture. The design is modern and fits perfectly in my home. Highly recommend!",
      rating: 3.5,
      image: "/client_2.png",
    },
    {
      name: "bang joni",
      avatar: "/avater_1.png",
      review:
        "I am very happy with the service and the quality of the furniture. The design is modern and fits perfectly in my home. Highly recommend!",
      rating: 3.5,
      image: "/client_1.png",
    },
    {
      name: "ibuk sukjan",
      avatar: "/avater_2.png",
      review:
        "I am very happy with the service and the quality of the furniture. The design is modern and fits perfectly in my home. Highly recommend!",
      rating: 3.5,
      image: "/client_2.png",
    },
  ];

  return (
    <div className="lg:container mx-auto w-full md:pt-[240px] pt-[180px] md:pb-[200px] pb-[130px] bg-white px-20">
      <div className="flex flex-col items-center w-full justify-center mb-10">
        <HeaderTitle title={"our client reviews"} subtitle={"testimonial"} />
      </div>

      {/* testimonial slider  */}
      <div>
        <TestimonialSlider content={clientReviews} />
      </div>
    </div>
  );
};

export default Testimonial;
