import React from "react";
import { BsKeyboard } from "react-icons/bs";
// backdrop-blur-md
const Navbar = () => {
  return (
    <header className="fixed w-full p-2 z-0 backdrop-blur-md bg-gradient-to-r from-pink-500/60 to-indigo-500/30">
      <div className="mx-auto max-w-3xl flex flex-row">
        <p className="font-sans p-2 font-bold select-none">React-Type Wiki</p>
        <a href="https://adamjablonka.github.io/React-Type/">
          <BsKeyboard
            className="text-zinc-300 hover:text-white cursor-pointer text-2xl flex float-right mt-[6.5px]"
            onClick={() => console.log("Hello world!")}
          />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
