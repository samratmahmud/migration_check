import Airplen from "@/components/template/Airplen";
import Link from "next/link";
import React from "react";

function About_us() {
  return (
    <>
      <div className="container">
        <div className="lg:flex flex flex-col-reverse lg:flex-row justify-between items-center gap-7 md:mb-36">
          <div data-aos="fade-right">
            <img
              className="hidden md:block"
              src="./picture/Frame 64.png"
              alt=""
            />
          </div>
          <div data-aos="fade-left">
            <div className="max-w-[540px] md:text-3xl text-xl font-bold text-gray-800 mb-10">
              Where there is a chance, there is a way!
            </div>
            <div>
              <Airplen
                pic="./picture/Vector.png"
                name="Quick Check"
                title="We are strategy consultants who work with startup strategies
              and help promote and sell your products, including helping marketing."
              />
              <Airplen
                pic="./picture/Vector.png"
                name="Detailed Check"
                title="We are strategy consultants who work with startup strategies and help promote and sell your products."
              />
            </div>
            <Link href={"/"}>
              <button className="text-sm font-bold bg-100 text-linear py-4 px-6 border-[1px] border-amber-300 rounded-lg">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div data-aos="fade-right">
        <img
          className="md:hidden rounded-lg w-full"
          src="./picture/Frame 64 (1).png"
          alt=""
        />
      </div>
    </>
  );
}

export default About_us;
