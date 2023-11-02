"use client";
import React from "react";
import PlusIcon from "../template/PlusIcon";

interface optionals {
  opt?: boolean;
}

function Question(props: optionals) {
  return (
    <div className="container lg:mb-[140px] mb-10">
      <div
        data-aos="zoom-in"
        className="lg:text-3xl text-xl text-gray-800 font-bold mb-4 text-center"
      >
        Frequently asked question
      </div>
      <div
        data-aos="zoom-in"
        className="max-w-[512px] lg:text-md text-sm text-neutral-500 m-auto text-center lg:mb-[70px] mb-8"
      >
        Our CyberNews Investigation team uses white hacking techniques to find
        and safely cybersecurity threats & vulnerabilities.
      </div>
      <div className="flex flex-col lg:gap-6 gap-2">
        <div data-aos="fade-right">
          <PlusIcon
            title="Q.  What is SEO and does my business need SEO?"
            desig="Search Engine Optimization is the practice of ranking a website. Yes, your business should be investing in SEO. Search engine optimization offers a way to increase traffic without paying for each and every click."
          />
        </div>
        <div data-aos="fade-left">
          {props.opt && (
            <PlusIcon
              title="Q.  Q. What are Google's most important ranking factors?"
              desig="lorem Search Engine Optimization is the practice of ranking a website. Yes, your business should be investing in SEO. Search engine optimization offers a way to increase traffic without paying for each and every click."
            />
          )}
        </div>
        <div data-aos="fade-right">
          <PlusIcon
            title="Q.  What is the difference between On-Page SEO and technical SEO?"
            desig="lorem Search Engine Optimization is the practice of ranking a website. Yes, your business should be investing in SEO. Search engine optimization offers a way to increase traffic without paying for each and every click."
          />
        </div>
        <div data-aos="fade-left">
          <PlusIcon
            title="Q.  Does social media help to increase my website's rank?"
            desig="lorem Search Engine Optimization is the practice of ranking a website. Yes, your business should be investing in SEO. Search engine optimization offers a way to increase traffic without paying for each and every click."
          />
        </div>
        <div data-aos="fade-right">
          <PlusIcon
            title="Q.  What is SEO and does my business need SEO?"
            desig="lorem Search Engine Optimization is the practice of ranking a website. Yes, your business should be investing in SEO. Search engine optimization offers a way to increase traffic without paying for each and every click."
          />
        </div>
      </div>
    </div>
  );
}

export default Question;
//
