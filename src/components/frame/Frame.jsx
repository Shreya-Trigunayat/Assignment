import React from "react";
import frame from "../../assets/frame.png";
import frame1 from "../../assets/frame1.png";

const Frame = () => {
  return (
    <>
      <div className=" justify-center items-center relative gap-8 mt-12 overflow-hidden">
      <div className="relative flex flex-wrap">
        <img
          src={frame}
          alt="frame"
          className="animate-width rounded-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white"></div>
      </div>
      <style jsx>{`
        @media (max-width: 650px) {
          img[alt="frame"] {
            height: 10rem; 
            width: auto; 
            max-width: none; 
          }
        }
      `}</style>
      <div className="absolute inset-0 flex justify-center items-center  flex-wrap">
        
        <img 
          src={frame1} 
          alt="frame1" 
          className="h-18 w-18 sm:h-38 sm:w-38 md:h-46 md:w-46 lg:h-54 lg:w-54 object-contain transition-transform duration-300 ease-in-out transform hover:scale-150" 
        />
      </div>
    </div>
      <div className="text-center mt-16 px-4">
  <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight textAni font-nunito">
    Give the best shot <br />
    at your
    <span className="text-[#B10612]"> Dream University</span>
  </h2>
  <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg font-nunito text-bold">
    Get expert help, personalized guidance, and all the support you need
    to <br />
    <span className="text-black font-bold">
      increase your chances of success with Ambitio Elite.
    </span>
  </p>
  <button className="font-nunito mt-6 bg-black text-white py-2 px-4 sm:py-3 sm:px-8 rounded-md hover:bg-gray-800 transition-transform transform hover:scale-105 text-sm sm:text-base">
    10x your chances with Ambitio
  </button>
</div>

    </>
  );
};

export default Frame;
