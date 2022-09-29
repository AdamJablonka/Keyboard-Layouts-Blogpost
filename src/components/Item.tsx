import React from "react";

const Item = ({
  title,
  img,
  alt,
  bodyText,
}: {
  title: string;
  img: string;
  alt: string;
  bodyText: string;
}) => {
  return (
    <div>
      <h2 className="font-bold text-3xl md:text-5xl text-center">{title}</h2>
      <img
        className="border border-indigo-500 rounded-xl m-5 shrink-0 p-3 container mx-auto"
        src={img}
        alt={alt}
      ></img>
      <div className="m-2 text-left font-serif font-slate-700 text-lg md:text-xl p-3 ">
        {bodyText}
      </div>
    </div>
  );
};

export default Item;
