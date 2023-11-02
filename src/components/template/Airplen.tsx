import React from "react";

interface airplen {
  pic: string;
  name: string;
  title: string;
}

function Airplen(props: airplen) {
  const {pic, name, title} = props;
  return (
    <div className="flex gap-4 mb-4 last:mb-10 max-w-[500px]">
      <div>
        <div data-aos="zoom-in" className="w-7">
          <img className="" src={pic} alt="" />
        </div>
      </div>
      <div className="max-w-[491px]">
        <h1 className="text-md font-semibold text-gray-800 mb-2">{name}</h1>
        <span className="lg:text-md text-sm text-neutral-500">{title}</span>
      </div>
    </div>
  );
}

export default Airplen;
