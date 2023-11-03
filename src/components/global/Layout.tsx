"use client";
import React, {ReactNode} from "react";
import Navbar from "./Navbar";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface layoutProps {
  children: ReactNode;
}

function Layout(props: layoutProps) {
  let {children} = props;
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  });
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
