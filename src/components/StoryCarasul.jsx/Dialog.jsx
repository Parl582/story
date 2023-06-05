import React from "react";

import Fb from "../../assets/facebook.png";
import Tw from "../../assets/twitter.png";
import Ins from "../../assets/instagram.png";
import Redit from "../../assets/reddit.png";
import whats from "../../assets/whatsapp.png";
import Email from "../../assets/gmail.png";

const data = [
  {
    img: whats,
  },
  {
    img: Fb,
  },
  {
    img: Email,
  },
  {
    img: Tw,
  },
  {
    img: Ins,
  },
  {
    img: Redit,
  },
];

const Dialog = ({ dialogOpen, setDialgOpen }) => {
  return (
    <>
      <div
        className={` ${
          dialogOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity ease-out duration-500 w-full fixed h-screen bg-[rgba(0,0,0,0.2)] inset-0 z-20 `}
        onClick={() => setDialgOpen((prev) => !prev)}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div
            className="md:max-w-[30%] w-[90%] p-2 bg-white rounded-md shadow-lg "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full">
              <ul className="flex md:gap-7 gap-4 items-center px-3 py-3 flex-wrap">
                {data?.map((elm, i) => (
                  <li
                    className="hover:scale-100 duration-150 w-[40px] h-[40px] p-2 border-transparent"
                    key={i}
                  >
                    <img
                      src={elm.img}
                      alt=""
                      className="w-full h-full  object-contain cursor-pointer  "
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialog;
