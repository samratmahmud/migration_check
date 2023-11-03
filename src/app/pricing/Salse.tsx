"use client";
import React from "react";
import PricingTable from "./pricing_table/PricingTable";

function Salse() {
  return (
    <div className="container">
      <div className="rounded-lg lg:mb-[140px] mb-10">
        <div
          data-aos="fade-right"
          className="text-3xl font-bold text-gray-900 text-center mb-4 hidden lg:block"
        >
          Immigrate Without a Hassle
        </div>
        <div
          data-aos="fade-right"
          className="text-xl font-bold text-gray-900 text-center mb-4 lg:hidden"
        >
          Pricing Table
        </div>
        <div
          data-aos="fade-left"
          className="lg:text-md text-sm text-neutral-500 max-w-[618px] lg:mb-16 mb-6 m-auto text-center"
        >
          Metus eleifend lobortis et in pulvinar semper purus morbi. Duis platea
          tortor pellentesque arcu volutpat neque in varius. Ut nisl egestas{" "}
        </div>
        <div data-aos="zoom-in">
          <PricingTable />
        </div>
      </div>
    </div>
  );
}

export default Salse;
