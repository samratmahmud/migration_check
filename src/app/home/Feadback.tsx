"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Profile from "@/components/template/Profile";

let sliderFeadback = [
  {
    title:
      "OMG! I cannot believe that I have got a brand new landing page after getting appmax. It was super easy to edit and publish.I have got a brand new landing page.",
    pic: "./picture/Ellipse 21.png",
    name: "Mila McSabbu",
    desig: "Freelance Designer",
    star: "./picture/star.png",
  },
  {
    title:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    pic: "./picture/Ellipse 21 (1).png",
    name: "Robert Fox",
    desig: "Louis Vuitton",
    star: "./picture/star.png",
  },
  {
    title:
      "OMG! I cannot believe that I have got a brand new landing page after getting appmax. It was super easy to edit and publish.I have got a brand new landing page.",
    pic: "./picture/Ellipse 21.png",
    name: "Mila McSabbu",
    desig: "Freelance Designer",
    star: "./picture/star.png",
  },
  {
    title:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    pic: "./picture/Ellipse 21 (1).png",
    name: "Robert Fox",
    desig: "Louis Vuitton",
    star: "./picture/star.png",
  },
];

function Feadback() {
  return (
    <div className="lg:mb-[140px] mb-20">
      <div className="container">
        <div className="bg-primary-400 lg:py-24 py-10">
          <div className="max-w-[632px] lg:text-3xl text-lg  font-bold text-gray-800 m-auto text-center lg:mb-16 mb-7">
            We are happy to share our client’s review
          </div>
          <div className="">
            <Slider
              dots={false}
              infinite={true}
              speed={500}
              slidesToScroll={1}
              slidesToShow={2}
              responsive={[
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
              ]}
            >
              <div className="px-3.5">
                <Profile
                  title="OMG! I cannot believe that I have got a brand new landing page after getting appmax. It was super easy to edit and publish.I have got a brand new landing page."
                  picture="./picture/Ellipse 21.png"
                  name="Mila McSabbu"
                  desig="Freelance Designer"
                  star="./picture/star.png"
                />
              </div>
              <div className="px-3.5">
                <Profile
                  title="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                  picture="./picture/Ellipse 21 (1).png"
                  name="Robert Fox"
                  desig="Louis Vuitton"
                  star="./picture/star.png"
                />
              </div>
              <div className="px-3.5">
                <Profile
                  title="OMG! I cannot believe that I have got a brand new landing page after getting appmax. It was super easy to edit and publish.I have got a brand new landing page."
                  picture="./picture/Ellipse 21.png"
                  name="Mila McSabbu"
                  desig="Freelance Designer"
                  star="./picture/star.png"
                />
              </div>
              <div className="px-3.5">
                <Profile
                  title="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                  picture="./picture/Ellipse 21 (1).png"
                  name="Robert Fox"
                  desig="Louis Vuitton"
                  star="./picture/star.png"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feadback;
//
//
//
//
{
  /* <div className="flex gap-7">
              {sliderFeadback.map((item, index) => (
                <div
                  key={index}
                  className="p-6 shadow-md rounded-lg m-auto bg-gray-50 mb-16"
                >
                  <div className="max-w-[357px] text-md text-neutral-500 mb-8">
                    {item.title}
                  </div>
                  <div className="lg:flex gap-3 items-end justify-between max-w-[260px]">
                    <div className="flex gap-4 items-center">
                      <div>
                        <img src={item.pic} alt="" />
                      </div>
                      <div className="">
                        <div className="text-md font-semibold text-gray-800">
                          {item.name}
                        </div>
                        <div className="text-md text-gray-800">
                          {item.desig}
                        </div>
                      </div>
                    </div>
                    <div className="w-4 h-4 flex gap-2">
                      {[...Array(5)].map((_, index) => (
                        <img key={index} src={item.star} alt="" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>{" "} */
}
