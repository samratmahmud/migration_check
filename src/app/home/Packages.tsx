import Aside from "@/components/common/Aside";
import Link from "next/link";
import React from "react";

function Packages() {
  return (
    <>
      <div className="bg-100">
        <div className="container md:flex gap-7 justify-between items-center md:mb-[140px] mb-10">
          <div data-aos="fade-down" className="pt-14 lg:pt-0">
            <Aside
              name="Ready to live in Germany?"
              title="We are strategy consultants who work with startup strategies and help promote and sell your products, including helping marketing."
              button="See Packages"
            />
          </div>
          <div data-aos="fade-up">
            <img className="md:-mt-20 mt-7" src="./picture/Image.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Packages;
