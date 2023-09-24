import React from "react";

interface buttonProps {
  name: string;
  isActive?: boolean;
  handleClick?: () => void;
}
function Button(props: buttonProps) {
  const {name, isActive, handleClick} = props;

  return (
    <div onClick={handleClick}>
      <button
        className={`text-sm font-bold py-4 px-6 rounded-full ${
          isActive ? "bg-100 text-gray-50" : "bg-100 text-linear"
        }`}
      >
        {name}
      </button>
    </div>
  );
}

export default Button;
