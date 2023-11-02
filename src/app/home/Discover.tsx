import Airplen from "@/components/template/Airplen";
import React from "react";

function Discover() {
  return (
    <div>
      <div className="container">
        <div className="lg:flex justify-between items-center gap-20 lg:mb-36">
          <div data-aos="fade-right">
            <div className="max-w-[540px] lg:text-3xl text-xl font-bold text-gray-800 mb-10">
              <span className=" relative">
                Discover your
                <img
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  className=" absolute -top-8 -right-16"
                  src="./picture/Highlight 13.png"
                  alt=""
                />
              </span>
              <br /> immigration options
            </div>
            <div>
              <Airplen
                pic="./picture/Vector.png"
                name="Path finding consultation"
                title="Sit vitae eleifend eu vivamus vel donec volutpat gravida tellus amet vestibulum diam felis et, tempus proin eget enim egestas aliquet sit id cursus pellentesque risus ut pellentesque sem tristique nulla aliquam metus, bibendum nisl eu."
              />
              <Airplen
                pic="./picture/Vector.png"
                name="Visa interview coaching"
                title="Laoreet ridiculus id odio ipsum sagittis quis orci, interdum libero quis ipsum tristique pellentesque ut posuere amet enim quis turpis tristique quis enim laoreet pharetra magna natoque consequat in purus"
              />
            </div>
          </div>
          <div className="hidden lg:block" data-aos="fade-left">
            <img src="./picture/BG.png" alt="" />
          </div>
        </div>
      </div>
      <div className="lg:hidden" data-aos="fade-left">
        <img className="w-full" src="./picture/BG (1).png" alt="" />
      </div>
    </div>
  );
}

export default Discover;
