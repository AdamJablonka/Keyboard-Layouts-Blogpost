import React from "react";
import { BsFillKeyboardFill } from "react-icons/bs";
// backdrop-blur-md
const Navbar = () => {
  return (
    <header className="fixed w-full p-2 z-0 backdrop-blur-md bg-gradient-to-r from-pink-500/60 to-indigo-500/30">
      <div className="mx-auto max-w-3xl flex flex-row">
        <p className="font-sans p-2 font-bold">React-Type Wiki</p>
        <BsFillKeyboardFill className="text-white" />
      </div>
    </header>
  );
};

export default Navbar;
