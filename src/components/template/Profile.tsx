import React from "react";

interface feadbackProps {
  title: string;
  picture: string;
  name: string;
  desig: string;
  star: string;
}

function Profile(props: feadbackProps) {
  const {title, picture, name, desig, star} = props;
  return (
    <div className="flex gap-7">
      <div className="p-6 shadow-md rounded-lg m-auto bg-gray-50 mb-16">
        <div className="lg:text-md text-sm text-neutral-500 mb-8">{title}</div>
        <div className="lg:flex-row flex flex-col-reverse gap-4 justify-between lg:items-end">
          <div className="flex gap-4 items-center mb-4 lg:mb-0 ">
            <div>
              <img src={picture} alt="" />
            </div>
            <div className="">
              <div className="text-md font-semibold text-gray-800">{name}</div>
              <div className="text-md text-gray-800">{desig}</div>
            </div>
          </div>
          <div className=" flex gap-2 fle">
            {[...Array(5)].map((_, index) => (
              <img className="w-4 h-4" key={index} src={star} alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
