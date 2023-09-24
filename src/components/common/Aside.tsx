import Link from "next/link";
import React from "react";

interface asidProps {
  name?: string;
  title?: string;
  button: string;
}

function Aside(props: asidProps) {
  const {name, title, button} = props;
  return (
    <div>
      <div>
        <div className="max-w-[540px] md:text-3xl text-xl font-bold text-gray-50 mb-6">
          {name}
        </div>
        <div className="max-w-[540px] text-md font-semibold text-gray-100 mb-6">
          {title}
        </div>
        <Link href={"/"}>
          <button className="text-sm font-bold text-pink-400 bg-gray-50 py-5 px-7 rounded-lg mb-5">
            {button}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Aside;
