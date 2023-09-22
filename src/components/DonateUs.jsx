import React from "react";
import Navbar from "../containers/Navbar";
// import { img } from "../constants";
import img from "../constants";
import Footer from "../containers/Footer";

const Card = ({ image, title, description }) => {
  return (
    <div className="max-w-lg sm:m-2 mx-auto bg-night shadow-md rounded-md overflow-hidden">
      <img
        src={image}
        alt="ban"
        className="w-ful object-cover p-2"
      />
      <div className="p-4">
        <h2 className="text-xl text-white font-semibold mb-2">{title}</h2>
        <p className="text-silver">{description}</p>
      </div>
    </div>
  );
};



const DonateUs = () => {
  const cards = [
    {
      image: "https://upload.wikimedia.org/wikipedia/en/6/6c/CBE_SA.png",
      title: "Commercial Bank Of Ethiopia",
      description: "Send your charity through our CBE account Number 1000*********",
    },
    {
      image: "https://coopbankoromia.com.et/wp-content/uploads/2021/12/Cooperative_Bank_of_Oromia.png",
      title: "Cooperative Bank of Oromia",
      description: "Donate Us through our CBO bank account Number 10**********",
    },
    {
      image: "data:image/png;base64,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",
       title: "Bank Of Abyssinia" ,
      description: "Send your charity through our Abyssinia Bank account Number **********",
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Awash_International_Bank.png",
      title: "Awash Bank",
      description: "Donate Us through our Awash bank account Number ***********",
    },
    {
      image: "data:image/png;base64,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",
      title: "Dashen Bank",
      description: "Donate Us through our Dashen bank account Number **********",
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png",
      title: "Paypal Account",
      description: "Donate Us through our paypal account *********@gmail.com",
    },
    {
      image: "data:image/png;base64,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",
      title: "Western Union",
      description: "Donate Us through our Western Union addres",
    },
    

    
  ];
  return (
    <div>
      <div className="h-full w-full bg-midnight  relative">
        <img
          src={img.donate}
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
            <button className="text-2xl font-bold bg-gradient-to-r from-lime1 hover:from-hover hover:to-silver p-8 rounded-lg to-lime2 relative">
              Donate Us
            </button>
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
          <p className="text-4xl text-silver text-center font-serif font-semibold pb-3">Donate Us Through</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 pb-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
      </div>
      <Footer />
    </div>
  );
};

export default DonateUs;
