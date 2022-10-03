import React from "react";
import { TbCode } from "react-icons/tb";

const Footer = () => {
  return (
    <div
      id="full-size"
      className="gap-1 bottom-0 mt-5 h-1/2 w-full flex justify-center"
    >
      <p className="m-1 text-l text-gray-400 select-none">
        Adam Jablonka - React-Type
      </p>
      <a
        className="p-0 m-0"
        href="https://github.com/AdamJablonka/Keyboard-Layouts-Blogpost"
      >
        <p className="mt-0.5 text-gray-400 hover:text-white cursor-pointer transition hover:scale-105 duration-100 text-xl pt-1">
          <TbCode />
        </p>
      </a>
    </div>
  );
};

export default Footer;
