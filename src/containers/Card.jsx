import React, { useState } from "react";

const Card = ({ image, title, description }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="bg-hover rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
       alt="Card"
        className="w-full h-80 object-cover sm:h-64"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        {showFullDescription ? (
          <p className="text-gray-700 text-xl">{description}</p>
        ) : (
          <p className="text-gray-700 text-xl">
            {description.slice(0, 150)}...
          </p>
        )}
        <button
          className="text-blue font-semibold mt-2 text-2xl"
          onClick={toggleDescription}
        >
          {showFullDescription ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default Card;
