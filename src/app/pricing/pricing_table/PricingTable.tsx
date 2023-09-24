import Status from "@/app/pricing/pricing_table/Status";
import SingUp from "@/app/pricing/pricing_table/SingUp";
import Price, {type PriceProps} from "@/app/pricing/pricing_table/Price";
import React, {ReactNode} from "react";
import PriceName from "./PriceName";
import AlternativeText from "./AlternativeText";

type itemPriceName = {
  type: "PriceName";
  children?: ReactNode;
};
type itemStatus = {
  type: "Status";
  available: boolean;
};
type itemAlternativeText = {
  type: "AlternativeText";
  children?: ReactNode;
};

type itemDefine = itemPriceName | itemStatus | itemAlternativeText;

type bodyT = itemDefine[][];

interface priceT {
  header: PriceProps[];
  body: bodyT;
}

const prices: priceT = {
  header: [
    {
      item: "STARTER",
      dolar: "10",
      pic: "./picture/euro 1.svg",
      title: "One time fee",
      color: "bg-gray-50 text-gray-900",
    },
    {
      item: "BASIC",
      dolar: "19",
      pic: "./picture/euro 1.svg",
      title: "One time fee",
      color: "bg-pink-400 text-gray-50",
    },
    {
      item: "STANDARD",
      dolar: "36",
      pic: "./picture/euro 1.svg",
      title: "One time fee",
      color: "bg-orange-500 text-gray-50",
    },
    {
      item: "PREMIUM",
      dolar: "59",
      pic: "./picture/euro 1.svg",
      title: "One time fee",
      color: "bg-pink-200 text-gray-50",
    },
  ],
  body: [
    [
      {
        type: "PriceName",
        children: "Migration Check",
      },
      {
        type: "Status",
        available: true,
      },
      {
        type: "Status",
        available: true,
      },
      {
        type: "Status",
        available: true,
      },
      {
        type: "Status",
        available: true,
      },
    ],
    [
      {
        type: "PriceName",
        children: "Detaailed Check",
      },
      {
        type: "Status",
        available: true,
      },
      {
        type: "AlternativeText",
        children: "Migration Check",
      },
      {
        type: "Status",
        available: true,
      },
      {
        type: "Status",
        available: true,
      },
    ],
    [
      {
        type: "PriceName",
        children: "Detailed Result",
      },
      {
        type: "Status",
        available: false,
      },
      {
        type: "Status",
        available: true,
      },
      {
        type: "Status",
        available: false,
      },
      {
        type: "Status",
        available: true,
      },
    ],
    [
      {
        type: "PriceName",
        children: "Ressources & Links",
      },
      {
        type: "AlternativeText",
        children: "Migration Check",
      },
      {
        type: "Status",
        available: false,
      },
      {
        type: "AlternativeText",
        children: "Migration Check",
      },
      {
        type: "AlternativeText",
        children: "Migration Check",
      },
    ],
    [
      {
        type: "PriceName",
        children: "Save & Continue Later",
      },
      {
        type: "Status",
        available: false,
      },
      {
        type: "Status",
        available: true,
      },
      {
        type: "Status",
        available: false,
      },
      {
        type: "Status",
        available: true,
      },
    ],
    [
      {
        type: "PriceName",
        children: "PDF Export",
      },
      {
        type: "Status",
        available: true,
      },
      {
        type: "AlternativeText",
        children: "Migration Check",
      },
      {
        type: "Status",
        available: true,
      },
      {
        type: "Status",
        available: true,
      },
    ],
    [
      {
        type: "PriceName",
        children: "Personal Dashboard",
      },
      {
        type: "AlternativeText",
        children: "Migration Check",
      },
      {
        type: "Status",
        available: false,
      },
      {
        type: "Status",
        available: false,
      },
      {
        type: "AlternativeText",
        children: "Migration Check",
      },
    ],
    [
      {
        type: "PriceName",
        children: "12 Month Aaccess",
      },
      {
        type: "Status",
        available: false,
      },
      {
        type: "Status",
        available: true,
      },
      {
        type: "Status",
        available: false,
      },
      {
        type: "Status",
        available: true,
      },
    ],
    [
      {
        type: "PriceName",
        children: "12 visa interview",
      },
      {
        type: "Status",
        available: false,
      },
      {
        type: "Status",
        available: true,
      },
      {
        type: "Status",
        available: false,
      },
      {
        type: "Status",
        available: true,
      },
    ],
  ],
};
function PricingTable() {
  return (
    <div className="bg-primary-400 ">
      <div className="lg:hidden">
        <div className="grid grid-cols-1 gap-10 text-center">
          {prices.header.map((item) => {
            let priceName: (ReactNode | null)[][] = [];

            prices.body.map((data) => {
              if (data[0].type === "PriceName") {
                let a = null;
                let b = null;

                a = <PriceName>{data[0].children}</PriceName>;
                if (data[1].type === "Status") {
                  b = <Status available={data[1].available} />;
                }

                priceName.push([a, b]);
              }
            });

            return (
              <div className="mb-10">
                <div>
                  <Price {...item} />
                </div>
                <div className="grid grid-cols-2 items-center">{priceName}</div>
              </div>
            );
          })}
          <div className="py-5 px-6 bg-100 text-linear">
            <SingUp />
          </div>
          ;
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="table-tr header grid grid-cols-5 text-center m-auto">
          <div />
          {prices.header.map((item) => (
            <Price {...item} />
          ))}
        </div>
        {prices.body.map((row) => (
          <div className="grid grid-cols-5 items-center">
            {row.map((item) => {
              if (item.type === "PriceName") {
                const Component = PriceName;
                return <Component>{item.children}</Component>;
              } else if (item.type === "AlternativeText") {
                const Component = AlternativeText;
                return <Component>{item.children}</Component>;
              } else if (item.type === "Status") {
                const Component = Status;
                return <Component available={item.available} />;
              }
              return null;
            })}
          </div>
        ))}
        <div className="grid grid-cols-5 items-center bg-white">
          <div />
          <div className="py-5 px-6 bg-100 text-linear">
            <SingUp />
          </div>
          <div className="py-5 px-6 text-white">
            <div className="bg-100 rounded-lg">
              <SingUp />
            </div>
          </div>
          <div className="py-5 px-6 bg-100 text-linear">
            <SingUp />
          </div>
          <div className="py-5 px-6 bg-100 text-linear">
            <SingUp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingTable;
