import React from "react";
import { useState } from "react";
import full from "./images/full.png";
import tkl from "./images/tkl.png";
import sixty from "./images/sixty.png";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";

const ImageCarousel = () => {
  const images: any[] = [full, tkl, sixty];
  const [imageIndex, setImageIndex]: [number, any] = useState(0);

  const changePhotoRight = () => {
    if (imageIndex === images.length - 1) {
      setImageIndex(0);
    } else setImageIndex(imageIndex + 1);
  };

  const changePhotoLeft = () => {
    if (imageIndex < 1) {
      setImageIndex(images.length - 1);
    } else setImageIndex(imageIndex - 1);
  };

  return (
    <div>
      <div
        id="wrapper"
        className="p-10 h-96 text-4xl flex col justify-center max-w-3xl"
      >
        <p className="m-auto md:opacity-100 transition easy-in-out duration-100 hover:scale-105 hover:text-white cursor-pointer mr-2 display:none">
          <BsArrowLeftSquare onClick={() => changePhotoLeft()} />
        </p>
        <div className="m-2 flex shrink-0 object-contain justify-center border border-indigo-500 rounded-xl w-full md:w-full">
          <img
            src={images[imageIndex]}
            className="shrink-0 container m-5 p-3 rounded-md object-contain select-none"
          ></img>
        </div>
        <p className="md:m-auto md:ml-2 md:opacity-100 transition easy-in-out duration-100 hover:scale-105 display:none hover:text-white cursor-pointer">
          <BsArrowRightSquare onClick={() => changePhotoRight()} />
        </p>
      </div>
      <div className="flex col justify-center text-4xl">
        <p className="ml-5 md:opacity-0 opacity-100 hover:text-white cursor-pointer transition easy-in-out duration-100 hover:scale-105">
          <BsArrowLeftSquare onClick={() => changePhotoRight()} />
        </p>
        <p className="ml-5 md:opacity-0 opacity-100 hover:text-white cursor-pointer transition easy-in-out duration-100 hover:scale-105">
          <BsArrowRightSquare onClick={() => changePhotoRight()} />
        </p>
      </div>
    </div>
  );
};

export default ImageCarousel;
