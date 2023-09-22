import React from "react";
import Navbar from "../containers/Navbar";
// import { img } from "../constants";
import img from "../constants";
import Footer from "../containers/Footer";
import GalleryCard from "../containers/GalleryCard";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="h-full w-full bg-midnight to-night  relative">
        <img
          src="https://images.pexels.com/photos/958076/barley-arable-cereals-field-958076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="py-4" />
        <div className=" sticky top-0 z-50">
          <Navbar />
        </div>
        <div>
          <h1 className="text-white lg:text-4xl md:text-3xl sm:text-3xl p-4 md:p-12 text-center font-bold tracking-wide font-serif">
            "The example of those who spend their wealth in the way of Allah is
            like a seed [of grain] which grows seven spikes; in each spike is a
            hundred grains. And Allah multiplies [His reward] for whom He wills.
            And Allah is all-Encompassing and Knowing." (Quran 2:261)
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          {/* <h2 className="text-3xl text-white text-center font-semibold">
            Help Children and The Poor
          </h2> */}
          <div className="p-4 md:p-8" />

          <div className="flex justify-center items-center">
            <Link to="/donate">
              <button className="text-xl md:text-2xl font-bold bg-gradient-to-r from-lime1 hover:from-hover hover:to-silver p-4 md:p-8 rounded-lg to-lime2 relative">
                Donate Us
              </button>
            </Link>
          </div>
          <div className="p-16 md:p-32" />

          <div className="p-6" />
        </div>
      </div>
      {/* h-full w-full bg-gradient-to-r from-midnight to-night  relative items-center justify-center */}
      <div className="flex flex-col items-center h-full w-full bg-gradient-to-r from-midnight to-night  relative">
        <div className="flex justify-center items-center">
          <img
            src={img.logo}
            alt="Logo"
            className="items-center justify-center"
            width={270}
          />
        </div>
        <h1 className="text-4xl md:text-5xl text-hover text-center font-bold pl-6 pb-4">
          Objectives
        </h1>
        <div className="flex flex-col items-start">
          <div className="w-72 md:w-96">
            <p className="text-2xl md:text-4xl text-silver text-start mx-4 p-4 md:p-6 font-semibold tracking-wide font-serif">
              Care and Protection Sector
            </p>
          </div>
          <div className="flex flex-row items-start">
            <div className="pr-2 md:pr-6"></div>
            <div>
              <li className="text-xl  md:text-2xl text-silver tracking-wide font-serif">
                To provide holistic care and protection to special and
                marginalized communities.
              </li>
              <div className="py-3" />
              <li className="text-xl  md:text-2xl text-silver tracking-wide font-serif">
                To provide counseling, support, and care for people living in
                low-profile and related health conditions.
              </li>
              <div className="py-3" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="w-72 md:w-96">
            <p className="text-2xl md:text-4xl text-silver text-start mx-4 p-4 md:p-6 font-semibold tracking-wide font-serif">
              Education Sector
            </p>
          </div>
          <div className="flex flex-row items-start">
            <div className="pr-6"></div>
            <div>
              <li className="text-xl md:text-2xl text-silver tracking-wide font-serif">
                To contribute to formal schooling in lower and higher levels of
                education for those in need.
              </li>
              <div className="py-3" />
              <li className="text-xl md:text-2xl text-silver tracking-wide font-serif">
                To promote research into causes, detection, prevention, and
                treatment of diseases and disseminate the results of research
                for the benefit of the public.
              </li>
              <div className="py-3" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="w-72 md:w-96">
            <p className="text-2xl md:text-4xl text-silver text-start mx-4 p-4 md:p-6 font-semibold tracking-wide font-serif">
              Mental Health Sector
            </p>
          </div>
          <div className="flex flex-row items-start">
            <div className="pr-6"></div>
            <div>
              <li className="text-xl md:text-2xl text-silver tracking-wide font-serif">
                To provide psycho-education and mental health education services
                among the Zanzibar community on the prevention and spread of
                mental diseases, in collaboration with qualified professionals
                such as doctors.
              </li>
              <div className="py-3" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="w-72 md:w-96">
            <p className="text-2xl md:text-4xl text-silver text-start mx-4 p-4 md:p-6 font-semibold tracking-wide font-serif">
              Basic Needs Sector
            </p>
          </div>
          <div className="flex flex-row items-start">
            <div className="pr-6"></div>
            <div>
              <li className="text-xl md:text-2xl text-silver tracking-wide font-serif">
                Facilitating the provision of basic needs such as food, clean
                water, and other necessities.
              </li>
              <div className="py-3" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="w-72 md:w-96">
            <p className="text-2xl md:text-4xl text-silver text-start mx-4 p-4 md:p-6 font-semibold tracking-wide font-serif">
              Collaboration and Partnership Sector
            </p>
          </div>
          <div className="flex flex-row items-start">
            <div className="pr-6"></div>
            <div>
              <li className="text-xl md:text-2xl text-silver tracking-wide font-serif">
                To work in partnership with likeminded local and international
                organizations to achieve greater impact and ensure coordinated
                efforts.
              </li>
              <div className="py-3" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:items-start items-center">
          <div className="w-72 md:w-96">
            <p className="text-2xl md:text-4xl text-silver text-start mx-4 p-4 md:p-6 font-semibold tracking-wide font-serif">
              Fundraising Sector
            </p>
          </div>
          <div className="flex flex-row items-start md:max-w-none max-w-sm">
            <div className="pr-6"></div>
            <div>
              <li className="text-xl md:text-start text-center  md:text-2xl text-silver tracking-wide font-serif">
                To raise funds and receive contributions and donations, where
                appropriate, to finance programs and development projects of the
                organization.
              </li>
              <div className="py-3" />
            </div>
          </div>
        </div>
        <h1 className="text-5xl font-serif font-semibold text-white p-8 text-center">
          Get In Touch
        </h1>
        <div className=" text-hover items-start flex flex-col p-2">
          <div className="p-2" />
          <div className="border-0 text-3xl text-hover border-transparent bg rounded-md hover-border-4 p-2">
            <i
              className="envelope
                  icon"
            ></i>
            *********@gmail.com
          </div>
          <div className="border-0 text-3xl text-hover border-transparent bg  rounded-md hover-border-4 p-2">
            <i className="mobile alternate icon"></i>
            +251**********
          </div>
        </div>
        <GalleryCard />
      </div>

      <Footer />
    </div>
  );
};

export default About;
