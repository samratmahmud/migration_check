"use client";
import Link from "next/link";
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

let linkName = [
  {
    name: "Services",
    url: "#footer",
  },
  {
    name: "Pricing",
    url: "/pricing",
  },
  {
    name: "Blog",
    url: "/",
  },
  {
    name: "Faq",
    url: "/",
  },
];

function Navbar() {
  let [open, setOpen] = React.useState(false);
  const toggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="container">
      <div className="mt-7 lg:mb-[75px] mb-10 flex justify-between items-center">
        <Link href={"/"}>
          <div className="text-lg font-semibold text-neutral-600">
            <span className="bg-100 text-linear">Mig</span>ration
          </div>
        </Link>
        <div className="hidden lg:block">
          <div className="flex gap-8 items-center">
            {linkName.map(({name, url}, index) => (
              <div
                key={name + index}
                className="text-md text-neutral-500 hover:underline duration-500"
              >
                <Link href={url}>{name}</Link>
              </div>
            ))}
            <Link href={"/"} className="hover:bg-slate-100 duration-500">
              <button className="text-linear bg-100 text-sm font-bold border-[1px] border-amber-300 py-4 px-8 rounded-lg">
                Log In
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:hidden">
          <button onClick={toggle}>
            <img className="w-7" src="./picture/burger-menu.png" alt="" />
          </button>
        </div>
      </div>
      <div>
        <Drawer onClose={toggle} open={open} direction="left">
          <div className="p-5 flex flex-col justify-between h-screen">
            <div className="">
              <Link href={"/"}>
                <div className="text-lg font-semibold text-neutral-600 mb-12">
                  <span className="bg-100 text-linear">Mig</span>ration
                </div>
              </Link>
              <div className="grid gap-2 items-center text-center w-2/3">
                {linkName.map(({name, url}, index) => (
                  <div
                    key={name + index}
                    className="text-md text-black font-semibold hover:underline duration-500 hover:bg-slate-200 rounded-2xl py-3 hover:text-black"
                  >
                    <Link href={url}>{name}</Link>
                  </div>
                ))}
                <Link
                  href={"/"}
                  className="hover:bg-slate-200 duration-500 rounded-xl"
                >
                  <button className="text-linear bg-100 text-md font-bold border-[1px] border-amber-300 py-3 flex-shrink-0 px-11 rounded-lg">
                    Log In
                  </button>
                </Link>
              </div>
            </div>
            <div className="text-sm font-medium text-gray-400 mb-4 text-center">
              © Copyright 2021, All Rights Reserved
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;
