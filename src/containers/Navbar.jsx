import { useState } from "react";
import { Link } from "react-router-dom";
import img  from "../constants";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleMobileMenuCancel = () => {
    setMobileMenuOpen(false);
  };
  return (
    // <div>
    //   <nav className="">
    <div className="bg-gradient-to-r from-night to-midnight shadow-2xl py-4 rounded-lg flex items-center justify-between px-8 mx-4">
      <div className="container flex items-center">
        <Link to="/">
        <img  src={img.logo}
            alt="Ilman Abba Jifar" className='w-20 h-20 object-contain' />
        </Link>
      </div>

      <div className="space-x-4 flex items-center px-4 m-2">
        <div className="md:hidden">
          <button
            className="text-night focus:outline-none"
            onClick={handleMobileMenuToggle}
          >
            <FiMenu className="text-3xl" />
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center space-x-4">
          <li>
            <Link
              to="/"
              className=" text-2xl font-semibold tracking-wide whitespace-nowrap"
            >
              <button className="border-0 text-hover border-transparent bg hover:bg-silver hover:text-night rounded-md hover-border-4 p-2">
                <i className="home icon"></i>
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link
              className="text-2xl font-semibold tracking-wide whitespace-nowrap"
              to="/about"
            >
              <button className="border-0 border-transparent hover:bg-silver hover:text-night text-hover rounded-md hover-border-4 p-2">
                <i className="info icon"></i>
                About Us
              </button>
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-2xl font-semibold tracking-wide whitespace-nowrap"
            >
              <button className="border-0 border-transparent hover:bg-silver hover:text-night text-hover rounded-md hover-border-4 p-2">
                <i className="briefcase icon"></i>
                Services
              </button>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-2xl font-semibold tracking-wide whitespace-nowrap"
            >
              <button className="border-0 border-transparent hover:bg-silver hover:text-night text-hover rounded-md hover-border-4 p-2">
                <i className="address book icon"></i>
                Contact
              </button>
            </Link>
          </li>
          <li>
          { /* <Link
              to="/login"
              className="text-2xl font-semibold tracking-wide whitespace-nowrap"
            >
              <button className="border-2 hover:bg-silver hover:text-night text-hover rounded-md hover-border-4 p-2">
                <i className="sign-in icon"></i>
                Login
              </button>
  </Link>*/}
          </li>
        </ul>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-midnight flex flex-col items-center ">
            <div className="p-16 text-end">
              <button
                className="text-night focus:outline-none text-end"
                onClick={handleMobileMenuCancel}
              >
                <FiX className="text-4xl" />
              </button>
            </div>
            <ul className="space-y-4 text-center">
              <li>
                <Link
                  to="/"
                  className="text-night text-3xl font-semibold block px-32 py-2 hover:text-white "
                  onClick={handleMobileMenuToggle}
                >
                  <i className="home icon"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-night text-3xl font-semibold block px-4 py-2 hover:text-white"
                  onClick={handleMobileMenuToggle}
                >
                  <i className="info icon"></i>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-night text-3xl font-semibold block px-4 py-2 hover:text-white"
                  onClick={handleMobileMenuToggle}
                >
                  {" "}
                  <i className="briefcase icon"></i>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-night text-3xl font-semibold block px-4 py-2 hover:text-white"
                  onClick={handleMobileMenuToggle}
                >
                  <i className="address book icon"></i>
                  Contact
                </Link>
              </li>
              <li>
              {/*  <Link
                  to="/login"
                  className="text-night text-3xl font-semibold block px-4 py-2 hover:text-white"
                  onClick={handleMobileMenuToggle}
                >
                  <i className="sign-in icon"></i>
                  Login
        </Link>*/}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>

    // </div>
    //   </nav>
    // </div>
  );
};

export default Navbar;
