import React, { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Gallery from "../constants/Gallery";

function GalleryCard() {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  };

  return (
    <>
      {/* <img
        className="w-full h-64 sm:h-96 object-cover"
        src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2607&q=80"
        alt=""
      /> */}
      <div className="relative flex items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          ref={sliderRef}
          className="w-full h-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {Gallery.map((item) => (
            <img
              key={item.id}
              className="w-52 sm:w-64 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
              src={item.img}
              alt=""
            />
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
    </>
  );
}

export default GalleryCard;
