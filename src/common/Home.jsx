import React from "react";
import image3 from "../assets/doctor2.jpg";
import IconBtn from "./IconBtn";
import image4 from "../assets/doctor3.jpg";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Services from "../components/HomePage/Services";
import Blogs from "../components/HomePage/Blogs";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen">
      <div className="flex flex-row justify-between items-center mx-40 my-16 w-full">
        <div className="text-[#d3e3fd] w-[60%]">
          <p className="text-[50px]  font-semibold">
            Your Skin Health - <br></br>
            <span className="font-bold text-[#032FF2]">Is Our Mission</span> .
          </p>
          <p className="w-[70%] text-xl my-4">
            We are here to take care your your skin health and provide best
            medical care using the art of Artificial Intelligence.
          </p>
          <IconBtn
            text={"Get An Appointment"}
            outline={true}
            customClasses={"bg-[#032ff2] my-10"}
          ></IconBtn>
        </div>
        <div className="relative w-[50%]">
          <img
            src={image3}
            className="h-[400px] w-[450px] rounded-xl z-10 relative"
          ></img>
          <div className="absolute bg-[#032FF2] h-[400px] w-[450px] rounded-xl translate-x-4 -translate-y-[385px]"></div>
        </div>
      </div>
      <div className="flex flex-row  items-center my-24 w-full justify-center gap-5">
        <div className="w-[40%]">
          <img
            src={image4}
            className="h-[450px] w-[550px] rounded-xl z-10 relative"
          ></img>
        </div>
        <div className="w-[40%]">
          <p className="text-[#032FF2] text-[40px] font-semibold">About Us</p>
          <p className="text-[#d3e3fd] text-lg">
            We provide high quality medical services, attentive care and
            state-of-the-art equipment. Our specialists are experienced
            professionals ready to help you achieve good health.
          </p>
          <IconBtn
            text={"Login"}
            outline={true}
            customClasses={"bg-[#032ff2] my-10"}
            reverse={true}
            onClick={() => navigate("/login")}
          >
            <FaArrowRight />
          </IconBtn>
        </div>
      </div>

      <Services />
      <div className="w-full">
        <p className="text-[#d3e3fd] text-3xl text-center font-semibold">
          Blogs
        </p>
        <Blogs />
      </div>
    </div>
  );
};

export default Home;
