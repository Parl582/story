import React, { useEffect, useRef, useState } from "react";

const TextCarsul = ({ Sliders, autoSlide, interval, animationClass }) => {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((prev) => (prev === 0 ? Sliders.length - 1 : prev - 1));
  };
  const next = () => {
    setCurr((prev) => (prev === Sliders.length - 1 ? 0 : prev + 1));
  };
  useEffect(() => {
    if (!autoSlide) return;
    const slides = setInterval(next, interval);

    return () => clearInterval(slides);
  }, []);

  const [durations, setDuration] = useState();

  const videoEl = useRef(null);

  const handleLoadedMetadata = () => {
    const video = videoEl.current;
    if (!video) return;
    console.log(`The video is ${video.duration} seconds long.`);
    setDuration(video);
  };

  const SliderIndex = Sliders.map((_, i) => i === curr);

  return (
    <div className="relative h-full w-full overflow-hidden flex">
      <div
        className={` flex h-full w-full transition-transform 
       

          `}
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {Sliders.map((elm, index) => (
          <>
            {elm?.video ? (
              <video
                src={elm.video}
                muted
                autoPlay
                width="100%"
                ref={videoEl}
                onLoadedMetadata={handleLoadedMetadata}
              />
            ) : (
              <img
                onLoadedMetadata={handleLoadedMetadata}
                src={elm?.images}
                alt=""
                className={`  h-full w-full object-cover  backgroundColor  px-2  py-3
                ${curr === index ? (animationClass ? animationClass : "") : ""}
          
                `}
              />
            )}
          </>
        ))}
      </div>

      <div
        className={`absolute bottom-0  w-full  ${
          curr === Sliders[curr] ? "" : ""
        } `}
      >
        <p
          className={`  ${
            curr === curr ? "" : ""
          }  gradient p-3 text-[white] text-[1.2rem] font-normal`}
        >
          {Sliders[curr].text}
        </p>
      </div>

      <div className="absolute inset-0 flex justify-between opacity-0 ">
        <button onClick={prev}> Prev </button>
        <button onClick={next}> Next </button>
      </div>
      <div className="absolute left-0 right-0 top-[0px] flex flex-grow gap-[2px]">
        {Sliders.map((i, index) => (
          <div
            className={`h-[6px] w-full border-[1px] rounded-xl  ${
              curr === index ? "bg-[black]" : "bg-[black]"
            } `}
          ></div>
        ))}
      </div>

      {/* <div className="w-full  absolute bottom-0 left-0 right-0 gradient h-[30%]">
        odxhygxdhos
      </div> */}
    </div>
  );
};

export default TextCarsul;
