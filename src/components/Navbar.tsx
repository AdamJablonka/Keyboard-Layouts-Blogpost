import React from "react";
import { BsKeyboard } from "react-icons/bs";
// backdrop-blur-md
const Navbar = () => {
  return (
    <header className="fixed w-full p-2 z-0 backdrop-blur-md bg-gradient-to-r from-black/50 to-white/30">
      <div className="mx-auto max-w-3xl flex flex-row">
        <p className="font-sans text-2xl p-2 text-white font-bold select-none">
          React-Type Wiki
        </p>
        <a href="https://adamjablonka.github.io/React-Type/">
          <BsKeyboard
            className="text-gray-200 transition ease-in-out hover:text-white hover:scale-105 duration-100 cursor-pointer text-4xl flex float-right mt-[6.5px]"
            onClick={() => console.log("Hello world!")}
          />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
