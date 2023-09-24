import React from "react";

interface StatusProps {
  available?: boolean;
}

function Status(props: StatusProps) {
  const {available} = props;
  return (
    <div>
      <img
        className="text-center mx-auto"
        src={available ? "./picture/Frame 86.svg" : "./picture/Check.svg"}
        alt=""
      />
    </div>
  );
}

export default Status;
