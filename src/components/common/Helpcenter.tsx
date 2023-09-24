import Link from "next/link";
import React from "react";

interface linkProps {
  name: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
}

function Helpcenter(props: linkProps) {
  const {name, title1, title2, title3, title4} = props;
  return (
    <div>
      <div>
        <h1 className="text-md font-semibold text-gray-900 mb-6">{name}</h1>
        <Link href={""}>
          <h2 className="text-md text-neutral-500 lg:mb-6 mb-2 hover:underline">
            {title1}
          </h2>
        </Link>
        <Link href={""}>
          <h2 className="text-md text-neutral-500 lg:mb-6 mb-2  hover:underline">
            {title2}
          </h2>
        </Link>
        <Link href={""}>
          <h2 className="text-md text-neutral-500 lg:mb-6 mb-2 hover:underline space-y-1">
            {title3}
          </h2>
        </Link>
        <Link href={""}>
          <h2 className="text-md text-neutral-500 hover:underline space-y-1">
            {title4}
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Helpcenter;
