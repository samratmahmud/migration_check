import Link from "next/link";
import React from "react";

function Subscribe() {
  return (
    <div className="lg:container" data-aos="zoom-out">
      <div
        className="bg-pink-300 rounded-3xl bg-cover bg-no-repeat bg-[top_center]"
        style={{
          backgroundImage: `url("/picture/Subscribe.svg")`,
        }}
      >
        <div className="lg:flex lg:px-24 px-5 gap-2 lg:pt-16 pt-10 lg:pb-20">
          <div>
            <div className="lg:text-3xl text-xl font-bold text-gray-800 max-w-[632px] lg:mb-10 mb-5">
              Subscribe to get latest news to your inbox!
            </div>
            <div className="py-2 bg-gray-50 rounded-2xl pl-3 pr-2 flex justify-between items-center">
              <input
                className="w-full focus:outline-none p-4 placeholder:text-sm placeholder:font-medium placeholder:text-gray-400"
                id="subscribe"
                type="text"
                placeholder="Enter Your Email Address"
              />
              <div className=" flex-shrink-0">
                <Link href={"/"}>
                  <label htmlFor="subscribe">
                    <button className="text-sm font-bold text-gray-50 py-4 px-6 rounded-lg bg-100">
                      Subscribe Now
                    </button>
                  </label>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <img
              className="rotate-45 lg:rotate-0 -mr-20 -mb-10 -mt-20 lg:m-0"
              src="./picture/Frame.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
