import Aside from "@/components/common/Aside";
import React from "react";

function Destination() {
  return (
    <div className="bg-200">
      <div className="container ">
        <div className="lg:flex-row lg:gap-7 gap-6 justify-between items-center lg:mb-[140px] mb-10 flex flex-col-reverse">
          <div>
            <img src="./picture/study-germany 1.png" alt="" />
          </div>
          <div>
            <div className="md:max-w-[540px] md:text-3xl text-xl font-bold text-gray-900 mb-6 mt-10 lg:mt-0">
              Fly Your Dream Destination
            </div>
            <div className="md:max-w-[540px] lg:text-md text-sm font-semibold text-neutral-500 mb-6">
              We are strategy consultants who work with startup strategies and
              help promote and sell your products, including helping marketing.
            </div>
            <Aside button="See Packages" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
