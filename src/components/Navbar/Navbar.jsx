import { Link, NavLink } from "react-router";
import { BsMinecartLoaded } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";

import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import MobileNav from "./MovileNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 z-10 pt-10 pb-10  w-full px-30">
      <div className="lg:container mx-auto flex justify-center items-center w-full ">
        <div className="flex items-center justify-between w-full">
          {/* header left wrapper  */}
          <div className="logo_wrapper">
            <Link to="/">
              <h3 className="text-2xl text-white font-medium capitalize">
                Panto
              </h3>
            </Link>
          </div>

          {/* header middle wrapper */}
          <nav className="hidden md:flex items-center gap-14">
            <NavLink
              to="/"
              className="text-lg text-white font-medium capitalize"
            >
              Furniture
            </NavLink>
            <NavLink
              to="/"
              className="text-lg text-white font-medium capitalize"
            >
              Shop
            </NavLink>
            <NavLink
              to="/"
              className="text-lg text-white font-medium capitalize"
            >
              About Us
            </NavLink>
            <NavLink
              to="/"
              className="text-lg text-white font-medium capitalize"
            >
              Contact
            </NavLink>
          </nav>

          {/* header right wrapper */}
          <div className="header_right">
            <button className="relative">
              <BsMinecartLoaded size="2rem" color="white" />
              <span className="cart-count">1</span>
            </button>
          </div>

          {/* menu icon  */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden block cursor-pointer"
          >
            <CiMenuFries size={"2rem"} color="white" />
          </button>
        </div>
      </div>

      <div className={`mobile_name ${isOpen && "active"}`}>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-10 right-5 cursor-pointer w-[50px] h-[50px] rounded-full border-[2px] border-black flex items-center justify-center"
        >
          <IoMdClose size={"2rem"} color="#e58411" />
        </button>
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
