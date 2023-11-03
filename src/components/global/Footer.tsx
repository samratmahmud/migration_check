import React from "react";
import Helpcenter from "../common/Helpcenter";
import Link from "next/link";

function Footer() {
  return (
    <div className="container" id="footer">
      <div className="lg:flex grid grid-cols-2 gap-7 lg:gap-0 justify-between lg:mt-[140px] mt-10 mb-16">
        <div className="col-span-2" data-aos="fade-right">
          <div className="text-lg font-semibold text-neutral-600 mb-6">
            <span className="bg-100 text-linear">Mig</span>ration
          </div>
          <div className="max-w-[360px] text-md text-neutral-500 mb-6">
            Search Engine Optimization is the practice of ranking a website.
            Yes, your business should be investing in SEO. Search engine.
          </div>
          <div className="hidden lg:block justify-end">
            <div className="flex gap-3">
              <Link
                href={"https://twitter.com/"}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img className="w-10" src="./picture/social (1).png" alt="" />
              </Link>
              <Link
                href={"https://www.facebook.com/"}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <img className="w-10" src="./picture/social.png" alt="" />
              </Link>
              <Link
                href={"https://www.linkedin.com/"}
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <img className="w-10" src="./picture/social (2).png" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div data-aos="fade-up">
          <Helpcenter
            name="Help"
            title1="Customer Support"
            title2="Delivery Details"
            title3="Terms & Conditions"
            title4="Privacy Policy"
          />
        </div>
        <div data-aos="fade-down">
          <Helpcenter
            name="Resources"
            title1="Free eBooks"
            title2="Development Tutorial"
            title3="How to - Blog"
            title4="Youtube Playlist"
          />
        </div>
        <div className="flex justify-between col-span-2 gap-7">
          <div data-aos="fade-left">
            <Helpcenter
              name="Extra Links"
              title1="Customer Support"
              title2="Delivery Details"
              title3="Terms & Conditions"
              title4="Privacy Policy"
            />
          </div>
          <div className="flex flex-col lg:hidden gap-3 mt-7">
            <Link href={"https://twitter.com/"}>
              <img className="w-10" src="./picture/social (1).png" alt="" />
            </Link>
            <Link href={"https://www.facebook.com/"}>
              <img className="w-10" src="./picture/social.png" alt="" />
            </Link>
            <Link href={"https://www.linkedin.com/"}>
              <img className="w-10" src="./picture/social (2).png" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-sm font-medium text-gray-400 mb-8 text-center">
        © Copyright 2021, All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
