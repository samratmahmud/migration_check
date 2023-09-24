import React from "react";

interface appointmentBook {
  name: string;
  picture: string;
  euro: string;
  title: string;
  btn: string;
}

function AppointmentBtn(props: appointmentBook) {
  const {name, picture, euro, title, btn} = props;
  return (
    <div className="p-7 rounded-3xl relative z-0">
      <span className="absolute bottom-0 left-0 right-0 h-[60%] bg-300 -z-10 rounded-3xl"></span>
      <div className="text-xl lg:font-bold font-semibold text-center text-gray-900 mb-10">
        {name}
      </div>
      <div className="mb-10">
        <img className="w-full" src={picture} alt="" />
      </div>
      <div className="text-base font-bold text-gray-700 mb-4">{euro}</div>
      <div className="text-md text-neutral-500 mb-4">{title}</div>
      <div>
        <button className="bg-100 py-4 px-6 text-sm font-bold text-white rounded-lg">
          {btn}
        </button>
      </div>
    </div>
  );
}

export default AppointmentBtn;
