import React from "react";
import ImageCarousel from "./ImageCarousel";
import Item from "./Item";
import full from "./images/full.png";
import tkl from "./images/tkl.png";
import sixty from "./images/sixty.png";
import typing from "./images/typing.gif";

const Body = () => {
  let fullSizeText: any = (
    <div>
      <p>
        The full size keyboard layout is like an all you can eat buffet, you can
        get anything you want to eat but it might not be the best for you. The
        full sized layout is essentially that, a keyboard will all the buttons,
        anything normally used button you could ever need to use all on display.
        This includes arrow keys and more imporatantly, the num pad. The number
        pad that is located on the right of the keyboard is crucial for many
        that work in the finance industry or any field that requires the typing
        of numbers on a consistent basis. The full sized layout is also good for
        anybody who needs all of the function keys located on the top of the
        keyboard, many video editors and gamers use the function rows for
        various aspects of their day to day, so it could be crucial aswell.
        <br />
        <br />
        However a very functional layout for productivity, the size of the
        keyboard is something to consider. Generally when choosing a layout, the
        size of your desk or where the keyboard will be used is a major factor
        in how it will work for an induvidual. The Full-sized layout keyboard
        will not save much room at all, generally out of all the layouts on this
        list it will be the largest one, potentially double the size of the
        other layouts on this list.
      </p>
    </div>
  );
  let tklText: any = (
    <div>
      <p>
        The Tenkeyless keyboard is very reminiscent of the full sized keyboard
        in terms of look, essentially the only difference between this layout
        and it's Full sized counterpart is that it is lacking the numpad.
        <br />
        The people that prefer this keyboard generally don't use the numberpad
        or don't view the extra space that the numpad takes up as a worth while
        sacrifice to have. For normal typers (or anybody who does not use the
        numberpad), the TKL layout is great.
      </p>
    </div>
  );
  let sixtyText: any = (
    <div>
      <p>
        The Sixty percent layout is very popular first and foremost for it's
        size. The size of the keyboard frees up so much desk space for the user
        and technically does not lose much functionality. The biggest gripe
        people have with this layout is the lack of arrow keys which are used
        daily for almost everyone, from media controls on a video player to
        moving the cursor on a text file.
        <br />
        <br />
        When using the 60% layout, generally there is not functionality lost.
        The Fn key can be used to access buttons otherwise lost on a 60% layout.
        These include the arrow keys, page up, page down, etc. Many keyboards
        nowadays have complete programmability, meaning you can have a second
        layer of key's with the press of the FN key that is fully customizable
        to the user!
        <br />
        <br />
        This layout is especially popular with FPS gamers nowadays, as mouse
        space for FPS competitive gaming is crucial for performance. The loss of
        keys from larger layouts does not affect gaming, generally due to the
        limited amount of keys one hand can press, all while the limited amount
        of keys that are used for a majority of games released now adays.
      </p>
    </div>
  );
  return (
    <div>
      <img className="pt-9 object-cover h-40 w-full" src={typing} />
      <article className="mx-auto max-w-3xl">
        <div className="p-4">
          <h1 className="text-center font-extrabold p-5 text-3xl text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
            Keyboard Layouts
          </h1>
          <div>
            <p className="text-md text-center">
              An overview of the most popular ANSI keyboard layouts.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <ImageCarousel />
        </div>
        <div className="w-full mb-5 mt-5 p-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 flex justify-center"></div>
        <Item
          title={"Full size layout"}
          img={full}
          bodyText={fullSizeText}
          alt={"A diagram of a full sized keyboard"}
        />
        <div className="w-full mb-5 mt-5 p-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 flex justify-center"></div>
        <Item
          title={"Tenkeyless layout (TKL)"}
          img={tkl}
          bodyText={tklText}
          alt={"A diagram of a tenkeyless sized keyboard"}
        />
        <div className="w-full mb-5 mt-5 p-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 flex justify-center"></div>
        <Item
          title={"Sixty percent layout (60%)"}
          img={sixty}
          bodyText={sixtyText}
          alt={"A diagram of a 60% sized keyboard"}
        />
      </article>
    </div>
  );
};

export default Body;
