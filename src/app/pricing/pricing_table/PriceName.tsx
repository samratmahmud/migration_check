import React, {ReactNode} from "react";

interface PriceNameProps {
  children?: ReactNode;
}

function PriceName(props: PriceNameProps) {
  const {children} = props;

  return (
    <div className="flex items-center gap-2 p-4">
      <p className="text-md text-neutral-600">{children}</p>
      <div>
        <img src="./picture/information.png" alt="" />
      </div>
    </div>
  );
}

export default PriceName;
