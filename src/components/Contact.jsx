import React, { useState } from "react";
import Navbar from "../containers/Navbar";
// import { img } from "../constants";
import img from "../constants";
import Footer from "../containers/Footer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Contact = () => {
  return (
    <div>
      <div className="h-full w-full bg-midnight  relative">
        <img
          src={img.orphan}
          alt=""
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="py-4" />
        <div className=" sticky top-0 z-50">
          <Navbar />
        </div>
        <div>
          <h1 className="text-silver lg:text-4xl md:3xl sm:xl p-24 text-center font-bold tracking-wide font-serif">
            Narrated Abu Bakr (may Allah be pleased with him): The Prophet
            (peace be upon him) said, "The one who sponsors an orphan, whether
            it is a relative of his or not, I and he will be like these two in
            Paradise," and he held his two fingers together to illustrate.
            (Bukhari)
          </h1>
        </div>
        <div className="place-content-center items-center justify-center flex-colomn ">
          {/* <h2 className="text-3xl text-white text-center font-semibold">
            Help Children and The Poor
          </h2> */}
          <div className="p-6" />

          <div className="flex justify-center items-center">
            <Link to="/donate">
              <button className="text-2xl font-bold bg-gradient-to-r from-lime1 hover:from-hover hover:to-silver p-8 rounded-lg to-lime2 relative">
                Donate Us
              </button>
            </Link>
          </div>
          <div className="p-32" />
        </div>
      </div>
      <div className="h-full w-full bg-gradient-to-r from-midnight to-night  relative items-center justify-center">
        <div className="flex justify-center items-center">
          <img
            src={img.logo}
            alt="Logo"
            className="items-center justify-center"
            width={270}
          />
        </div>
        <div>
          <h1 className="text-silver text-2xl font-semibold p-6 text-center">
            We sincerely appreciate your interest and support! We invite you to
            connect with us and become part of our mission. Together, we can
            create a better future and make a difference in the lives of those
            in need. Don't hesitate to reach out to us and let's embark on this
            inspiring journey together.
          </h1>
          <h1 className="text-5xl font-serif font-semibold text-white p-8 text-center">
            Get In Touch
          </h1>
          <div className="container mx-auto p-4 max-w-6xl">
            <form className=" mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4 md:mb-0">
                  <label
                    htmlFor="name"
                    className="text-lg font-semibold text-silver"
                  >
                    Name
                  </label>
                  <input
                    name="fullName"
                    type="text"
                    id="fullName"
                    
                    className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:lime2  w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="text-lg font-semibold text-silver"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:lime2 w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="text-lg font-semibold text-silver"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                   
                    className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:lime2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="text-lg font-semibold text-silver"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"

                    className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:lime2 w-full"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="text-lg font-semibold text-silver"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                 
                  className="border h-32 border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:lime2 w-full"
                ></textarea>
              </div>
              <div className="text-center font-bold">
                <button
                  type="submit"
              
                  className="bg-gradient-to-r from-lime1 to-lime2 hover:from-hover hover:to-white text-night py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:lime2 h-16 w-28"
                >
                  Submit
                </button>
              </div>
            </form>

            <div className=" text-hover items-start flex flex-col p-2">
              <div className="p-2" />
              <div className="border-0 text-3xl text-hover border-transparent bg rounded-md hover-border-4 p-2">
                <i
                  className="envelope
              icon"
                ></i>
                ***********@gmail.com
              </div>
              <div className="border-0 text-3xl text-hover border-transparent bg  rounded-md hover-border-4 p-2">
                <i className="mobile alternate icon"></i>
                +251*********
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
