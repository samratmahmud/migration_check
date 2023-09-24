import React from "react";

export interface PriceProps {
  item: string;
  dolar: string;
  title: string;
  pic: string;
  color: string;
}

function Price(props: PriceProps) {
  const {item, dolar, title, pic, color} = props;

  return (
    <div className={color}>
      <div className="pt-5 pb-14 px-10">
        <div className="text-md font-semibold mb-1.5">{item}</div>
        <div className="flex gap-1.5 justify-center">
          <div className="text-4xl font-bold mb-1.5">{dolar}</div>
          <div className="w-6">
            <span className="text-xl">€</span>
          </div>
        </div>
        <div className="text-md">{title}</div>
      </div>
    </div>
  );
}

export default Price;
