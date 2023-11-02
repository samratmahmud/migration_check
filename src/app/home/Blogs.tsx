import Readmore from "@/components/template/Readmore";
import React from "react";

let blogAll = [
  {
    pic: "./picture/Image (1).png",
    name: "Cyber Attack: Is the 'Big One' coming soon in 2022",
    title:
      "In the past 90 days, the world has a serious escalation in cyberattacks.",
  },
  {
    pic: "./picture/Image (2).png",
    name: "Why do chief security officers leave jobs so often?",
    title:
      "In the past 90 days, the world has a serious escalation in cyberattacks..",
  },
  {
    pic: "./picture/Image (3).png",
    name: "CSIM swapping is a growing cyber threat — here’s help",
    title:
      "In the past 90 days, the world has a serious escalation in cyberattacks.",
  },
];

function Blogs() {
  return (
    <div>
      <div className="container lg:mb-36 mb-10">
        <div
          data-aos="zoom-in"
          className="max-w-[573px] text-gray-800 lg:text-3xl text-lg font-bold mb-4 m-auto text-center"
        >
          Read our blogs to learn more about immigration
        </div>
        <div
          data-aos="zoom-in"
          className="max-w-[512px] text-neutral-500 text-sm lg:text-md m-auto text-center lg:mb-16 mb-7"
        >
          Our CyberNews Investigation team uses white hacking techniques to find
          and safely cybersecurity threats & vulnerabilities.
        </div>
        <div className="lg:flex lg:gap-7 grid gap-4">
          {blogAll.map((item, index) => (
            <div
              data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}
              key={index}
              className="border-[1px] border-amber-200 rounded-2xl"
            >
              <div>
                <img src={item.pic} alt="" />
              </div>
              <div className="p-6">
                <h1 className="lg:text-base text-md text-gray-800 font-bold mb-3">
                  {item.name}
                </h1>
                <h2 className="lg:text-md text-sm text-gray-700 mb-4">
                  {item.title}
                </h2>
                <button>
                  <Readmore />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
