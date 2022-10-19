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
    console.warn(imageIndex);
    if (imageIndex < 1) {
      setImageIndex(images.length - 1);
    } else setImageIndex(imageIndex - 1);
  };

  return (
    <div className="p-10 text-4xl flex col justify-center max-w-3xl">
      <p className="m-auto hover:text-white cursor-pointer mr-5">
        <BsArrowLeftSquare onClick={() => changePhotoLeft()} />
      </p>
      <div className="flex m-2 min-w-128 max-w-128 justify-center">
        <img
          src={images[imageIndex]}
          className="rounded-xl object-contain flex md:w-96 md:h-48 transition ease-in-out delay-150 select-none"
        ></img>
      </div>
      <p className="m-auto hover:text-white cursor-pointer ml-5">
        <BsArrowRightSquare onClick={() => changePhotoRight()} />
      </p>
    </div>
  );
};

export default ImageCarousel;
