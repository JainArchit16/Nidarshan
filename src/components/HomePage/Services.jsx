import React from "react";
import { services } from "../../data/services";

const Services = () => {
  return (
    <div className=" my-24 w-[80%] justify-center gap-5 mx-auto">
      <p className="text-5xl text-[#d3e3fd] font-semibold mb-8 w-full text-center">
        Our <span className="font-semibold text-[#032FF2]">Services</span>
      </p>
      <div className="grid grid-cols-3 gap-5">
        {services.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg text-center flex flex-col items-center w-[90%]"
          >
            <img
              src={item.img}
              alt={item.name}
              className={` h-[180px] w-[180px] my-2`}
            />

            <div className="p-4">
              <div className="font-semibold text-xl mb-2">{item.name}</div>
              <div className="text-gray-700">{item.dec}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
