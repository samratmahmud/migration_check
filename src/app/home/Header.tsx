"use client";
import Button from "@/components/common/Button";
import Link from "next/link";
import React from "react";

let buttons = [
  {
    name: "Quick Check",
    url: "/",
  },
  {
    name: "Learn More",
    url: "/",
  },
];

let details = [
  {
    pic: "./picture/004-team.png",
    subj: "Expert Team",
    title: "Telented People",
  },
  {
    pic: "./picture/003-support.png",
    subj: "Success Stories",
    title: "Business Strategy",
  },
  {
    pic: "./picture/001-provision.png",
    subj: "Helpful Resources",
    title: "Experience Persons",
  },
  {
    pic: "./picture/002-check-list.png",
    subj: "Personalized Plan",
    title: "1-on-1 support",
  },
];

function Header() {
  let [tab, setTab] = React.useState(0);

  return (
    <div className="container">
      <div className="lg:flex justify-between items-center">
        <div>
          <div className="md:text-4xl text-[40px] font-bold text-gray-950 md:max-w-[594px] mb-4">
            Your Personal <span className="bg-100 text-linear">German</span>{" "}
            Migration Guide
          </div>
          <div className="md:text-md text-sm  text-neutral-500 mb-7 lg:max-w-[594px]">
            Enim, sed non nam lobortis et massa morbi orci id. Eu sed integer
            magna eget. Donec donec quis elit, volutpat viverra adipiscing
            velit.{" "}
          </div>
          <div className="flex gap-4 cursor-pointer mb-8 lg:mb-0">
            {buttons.map(({name, url}, index) => (
              <Link key={index} href={url}>
                <Button
                  key={index}
                  handleClick={() => setTab(index)}
                  isActive={tab === index}
                  name={name}
                />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <img
            className="m-auto text-center"
            src="./picture/header-Image.png"
            alt=""
          />
        </div>
      </div>
      <div className="lg:flex grid grid-cols-2 justify-between rounded-3xl border border-neutral-400 bg-gray-50 shadow-xl lg:mr-[5%] lg:mb-36 lg:-mt-14 -mt-10 mb-10 relative">
        {details.map((item, index) => (
          <div
            data-aos="zoom-in"
            key={index}
            className="py-6 md:px-8 px-4 flex flex-col justify-center items-center"
          >
            <div className="mb-4">
              <img className="" src={item.pic} alt="" />
            </div>
            <div className="md:text-base text-md font-bold text-gray-800 mb-1">
              {item.subj}
            </div>
            <div className="text-sm text-neutral-500">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
