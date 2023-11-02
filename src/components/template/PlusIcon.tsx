import React from "react";

interface IconProps {
  title: string;
  icon?: string;
  desig?: string;
}

function PlusIcon(props: IconProps) {
  const {title, icon, desig} = props;
  let [isActive, setIsActive] = React.useState(false);
  const handleClick = () => {
    setIsActive((isActive) => !isActive);
  };

  return (
    <div className="flex justify-between max-w-[730px] p-6 m-auto border border-amber-200 rounded-2xl">
      <div>
        <div className="max-w-[482px] lg:text-base text-md font-bold text-gray-700 text-left mb-5">
          {title}
        </div>
        <div
          data-aos="zoom-in"
          onClick={handleClick}
          className="max-w-[622px] lg:text-md text-sm text-neutral-500 text-left"
        >
          {`${isActive ? `${desig}` : ""}`}
        </div>
      </div>
      <div>
        <button
          onClick={handleClick}
          className="rounded-lg border border-gray-200 p-2"
        >
          <div className="w-4">
            <img
              src={`${
                isActive ? "./picture/Vector (1).svg" : "./picture/Vector.svg"
              }`}
              alt=""
            />
          </div>
        </button>
      </div>
    </div>
  );
}

export default PlusIcon;
