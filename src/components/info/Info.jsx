import React from 'react';

const Info = () => {
  return (
    <div>
      <div className="m-10 md:m-20 bg-gradient-to-bl from-[#fbe5e5] via-white to-[#fbe5e5] p-6 text-center rounded-2xl animation-width">
        <p className="text-xl md:text-2xl leading-tight font-nunito font-bold">
          We let <span className="text-[#B10612] ">our numbers</span> do the
          talking
        </p>
        <p className="text-gray-600 mb-5 text-sm sm:text-base md:text-lg ">
          Our users love us and we know you will too! Explore our products.
        </p>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 md:gap-20">
          <div>
            <h1 className="text-[#B10612] text-3xl md:text-4xl font-bold leading-tight font-nunito">
              98.2%
            </h1>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">got into their Target Program</p>
          </div>
          <div>
            <h1 className="text-[#B10612] text-3xl md:text-4xl font-bold leading-tight font-nunito">
              4.96
            </h1>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg ">Google Rating</p>
          </div>
          <div>
            <h1 className="text-[#B10612] text-3xl md:text-4xl font-bold leading-tight font-nunito">
              5000+
            </h1>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg ">Students Assisted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
