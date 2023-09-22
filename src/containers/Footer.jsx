import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 h-full w-full bg-night relative items-center justify-center ">
      <div className="container mx-auto px-4 bg-night relative items-center justify-evenly">
        <div className="flex flex-wrap justify-evenly md:justify-between items-start">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
            <h3 className="text-white text-3xl font-semibold mb-4">Address</h3>
            <p className="text-white whitespace-nowrap text-xl">
              Jimma city :Ajip
            </p>
            <p className="text-white text-xl">Ethiopiar</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
            <h3 className="text-white text-3xl font-semibold mb-4">
              Social Media
            </h3>
            <div className="flex">
              <Link className="text-hover mr-4  hover:text-lime2">
                <FaFacebook size={32} />
              </Link>
              <Link className="text-hover mr-4  hover:text-lime2">
                <FaTwitter size={32} />
              </Link>
              <Link className="text-hover mr-4  hover:text-lime2">
                <FaInstagram size={32} />
              </Link>
              <Link className="text-hover mr-4  hover:text-lime2">
                <FaLinkedin size={32} />
              </Link>
              <Link className="text-hover mr-4  hover:text-lime2">
                <FaYoutube size={32} />
              </Link>
            </div>
            <div className=" text-hover items-start flex flex-col p-2">
              <div className="p-2" />
              <div className="border-0 text-hover border-transparent bg rounded-md hover-border-4 p-2">
                <i
                  className="envelope
              icon"
                ></i>
                **********@gmail.com
              </div>
              <div className="border-0 text-hover border-transparent bg  rounded-md hover-border-4 p-2">
                <i className="mobile alternate icon"></i>
                +251*********
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
            <h3 className="text-white text-3xl font-semibold mb-4">GOTO</h3>
            <div className="flex flex-col my-4">
              <Link to={"/"} className="text-white text-xl my-2 hover:text-lime2">
                Home
              </Link>
              <Link to={"/about"} className="text-white text-xl my-2 hover:text-lime2">
                AboutUs
              </Link>
              <Link to={"/services"} className="text-white text-xl my-2 hover:text-lime2">
                Service
              </Link>
              <Link to={"/contact"} className="text-white text-xl my-2 hover:text-lime2">
                ContactUs
              </Link>
            {/*  <Link to={"/login"} className="text-white text-xl my-2 hover:text-lime2">
                Login
  </Link>*/}
            </div>
          </div>
        </div>
        <div className="text-xl text-center pt-8">
          <div className="border-0 text-hover border-transparent  rounded-md hover-border-4 p-2">
            Copyright
            <i className="copyright icon"></i>
            All Rights Reserved 2023
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
