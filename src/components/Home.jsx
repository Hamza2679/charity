import React from "react";
import Navbar from "../containers/Navbar";
// import { img } from "../constants";
import img  from "../constants";
import Footer from "../containers/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="h-full w-full bg-midnight  relative">
        <img
          src="https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="py-4" />
        <div className=" sticky top-0 z-50">
          <Navbar />
        </div>
        <div>
          <h1 className="text-white lg:text-4xl md:text-3xl sm:text-2xl p-24 text-center font-bold tracking-wide font-serif">
            Narrated Abu Dharr (may Allah be pleased with him): The Prophet
            (peace be upon him) said, "Your smile for your brother is a charity.
            Your removal of stones, thorns, or bones from the paths of people is
            a charity. Your guidance of a person who is lost is a charity."
            (Bukhari and Muslim)
          </h1>
        </div>
        <div className="place-content-center items-center justify-center flex-colomn ">
          {/* <h2 className="text-3xl text-white text-center font-semibold">
            Help Children and The Poor
          </h2> */}
          <div className="p-6 md:p-4 sm:p-2" />

          <div className="flex justify-center items-center">
            <Link to={"/donate"}>
              <button className="text-2xl font-bold bg-gradient-to-r from-lime1 hover:from-hover hover:to-silver p-8 rounded-lg to-lime2 relative">
                Donate Us
              </button>
            </Link>
          </div>
          <div className="p-32" />
          <div className="p-6" />
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

        <p className="lg:text-3xl md:text-2xl sm:2xl text-silver text-justify mx-4 p-12 tracking-wide font-semibold">
          The Ilman Abba Jifar CHARITABLE ORGANIZATION is a non-profit organization
          committed to positively impacting education and health in Ethiopia.
          ICO operates as a society-type organization, serving the community and
          prioritizing the welfare of individuals. Focusing on the entire
          region, ICO implements programs and initiatives to support those in
          need. By providing education opportunities and promoting healthcare,
          ICO empowers individuals, enhances quality of life, and fosters
          lasting societal change. Through their dedicated efforts, ICO is
          dedicated to building a brighter future for the people of Ethiopia.
        </p>
        <div>
          <h1 className="text-4xl text-silver font-bold font-serif text-center p-4">
            Our Partners
          </h1>
          <div className="p-4" />
          <div className="flex flex-wrap justify-center sm:justify-evenly items-center w-full py-4 sm:py-0">
            <img src={img.prt1} alt="" className="h-28 mx-2 my-2" />
            <img src={img.prt2} alt="" className="h-28 mx-2 my-2" />
            <img src={img.prt3} alt="" className="h-28 mx-2 my-2" />
            <img src={img.prt4} alt="" className="h-28 mx-2 my-2" />
          </div>
          <div className="justify-center text-center items-center flex">
            <h3 className="max-w-8xl text-hover text-justify lg:text-3xl sm:text-2xl font-semibold  p-12 italic ">
              We would like to express our sincere gratitude to our esteemed
              partners for their commitment to our organization and the causes
              we serve. Without their support, our efforts to provide holistic
              care and assistance to marginalized communities, contribute to
              education, promote health initiatives, and extend charitable
              humanitarian aid would not be possible. Their belief in our vision
              has propelled us forward, allowing us to create a tangible
              difference in the lives of individuals and families.
            </h3>
          </div>
        </div>
        <div className="p-8" />
        <div className="flex justify-center items-center p-4">
          <Link to={"donate"}>
            <button className="text-2xl font-bold bg-gradient-to-r from-lime1 hover:from-hover hover:to-silver p-8 rounded-lg to-lime2 relative">
              Donate Us
            </button>
          </Link>
        </div>
        <div className="p-8" />
      </div>
      <Footer />
      <div />
    </div>
  );
};

export default Home;
