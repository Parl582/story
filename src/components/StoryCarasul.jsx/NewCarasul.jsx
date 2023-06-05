import React, { useState } from "react";
import "./Style.css";
import Dialog from "./Dialog";

const NewCarasul = ({
  Sliders,
  autoSlide,
  interval,
  animationClass,
  textAnimationClass,
  backGround,
  position,
  headingColor,
  headingAnimation,
  bgColor,
  borderNeed,
  indicator,
  colorBg
}) => {
  const [curr, setCurr] = React.useState(0);
  const prev = () => {
    setCurr((prev) => (prev === 0 ? Sliders.length - 1 : prev - 1));
  };
  const next = () => {
    setCurr((prev) => (prev === Sliders.length - 1 ? 0 : prev + 1));
  };

  React.useEffect(() => {
    if (!autoSlide) return;
    const slides = setInterval(next, interval);

    return () => clearInterval(slides);
  }, []);

  const [dialogOpen, setDialgOpen] = useState(false);

  const OpenDialog = () => {
    setDialgOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={` flex h-full w-full   overflow-hidden relative
  `}
      >
        {Sliders.map((item, i) => (
          <div
            className={`min-w-full h-full relative 
           
            `}
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {/* //share button  */}

            <button
              className="w-full flex justify-end fixed z-10 pr-3 cursor-pointer top-2 "
              onClick={OpenDialog}
            >
              <span className="material-symbols-outlined">share</span>
            </button>
            <img
              src={item?.images}
              alt=""
              className={`w-full h-full object-cover  overflow-hidden ${colorBg ? "colorBackGround px-1 pb-1 pt-2" : "" }   pb-2 ${
                curr === i ? (animationClass ? animationClass : "") : ""
              } `}
            />

            <div
              className={`absolute bottom-0 left-0 right-0 p-3 text-white text-[1.3rem] z-2
              
      

              ${
                item?.url
                  ? "bg-transparent"
                  : backGround
                  ? " bg-[rgba(0,0,0,0.7)]"
                  : bgColor === "red"
                  ? "bg-[rgba(255,68,432,0.6)]"
                  : bgColor === "green"
                  ? "bg-[rgba(0,58,202,0.6)]"
                  : bgColor === "custom"
                  ? "rgbaBg1"
                  : ""
              }

              ${
                item?.url
                  ? ""
                  : borderNeed
                  ? "border-t-[4px] border-red-600"
                  : ""
              }
          

              ${item?.url ? "" : position ? "bottom-5 mx-2 rounded-md" : ""}
               
              
              ${
                curr === i ? (textAnimationClass ? textAnimationClass : "") : ""
              }
              }`}
            >
              <span
                className={` py-[2px] 

                ${headingAnimation ? (curr === i ? headingAnimation : "") : ""}
                ${
                  headingColor
                    ? "bg-[#a7a7a7] text-[black] "
                    : "text-[white] px-0"
                } 

                ${item?.header ? "px-2" : ""}
                
               font-bold text-[1.1rem]`}
              >
                {item?.header}
              </span>
              <p className="pr-1 text-[1rem]">{item?.text} </p>

              {item.url && (
                <a
                  href={item.url}
                  className="w-full flex items-center justify-center cursor-pointer  "
                  target="_blank"
                >
                  <button className="px-2 border-[1px] rounded-[20px] text-[0.9rem] font-bold bg-yellow-100  text-blue-700 py-1 ">
                    Click Here
                  </button>
                </a>
              )}
            </div>
          </div>
        ))}
        {/* button and ===> */}

        <div className="absolute left-0 right-0 top-[0px] flex flex-grow gap-[2px]">
          {Sliders.map((i, index) => (
            <div
              className={`h-[6px] w-full border-[1px] rounded-xl : ${
                indicator === "black"
                  ? "bg-black"
                  : indicator === "red"
                  ? "bg-red-800"
                  : indicator === "green"
                  ? "bg-green-800"
                  : indicator === "blue"
                  ? "bg-blue-800"
                  : "bg-black"
              }
               `}
            ></div>
          ))}
        </div>
        <div className="absolute left-0 right-0   bottom-12 flex justify-between opacity-0 border top-10 ">
          <button onClick={prev}> Prev </button>
          <button onClick={next}> Next </button>
        </div>
      </div>

      <Dialog dialogOpen={dialogOpen} setDialgOpen={setDialgOpen} />
    </>
  );
};

export default NewCarasul;
