import React from "react";
import Carasul from "./Carasul";

const Index = () => {
  const data = [
    {
      images:
        "https://images.pexels.com/photos/16952093/pexels-photo-16952093/free-photo-of-young-woman-in-a-hat-against-a-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "image 1",
    },
    {
      images:
        "https://images.pexels.com/photos/16922982/pexels-photo-16922982/free-photo-of-love-field-summer-sun.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      text: "image 1",
    },
    {
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9W5wKFJz73EYsMh58kD2Z2UGukbtvx5B-mg&usqp=CAU",
      text: "image 1",
    },
    {
      images:
        "https://images.pexels.com/photos/16551433/pexels-photo-16551433/free-photo-of-restaurant-patio-overlooking-sea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      text: "image 1",
    },
    // {
    //   images:
    //     "data:image/jpeg;base64,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",
    //   text: "images 2",
    // },
    // {
    //   images:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ-xP1ziWvQMeCJILx0JqyXNxI2fE0yBcTCw&usqp=CAU",
    //   text: "images 3",
    // },
  ];
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center gap-3">
        <div className="w-[300px] h-[500px] object-cover">
          <Carasul
            Sliders={data}
            interval={6000}
            autoSlide={false}
            animationClass={"animation2"}
          />
        </div>
        {/* <div className="w-[300px] h-[500px] object-cover">
          <Carasul
            Sliders={data}
            interval={6000}
            autoSlide={false}
            animationClass={"animationss"}
          />
        </div>
        <div className="w-[300px] h-[500px] object-cover">
          <Carasul
            Sliders={data}
            interval={6000}
            autoSlide={false}
            animationClass={""}
          />
        </div>
        <div className="w-[300px] h-[500px] object-cover">
          <Carasul
            Sliders={data}
            interval={6000}
            autoSlide={false}
            animationClass={"animation4"}
          />
        </div> */}
      </div>
    </>
  );
};

export default Index;
