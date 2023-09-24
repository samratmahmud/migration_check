import React from "react";
import Salse from "./Salse";
import Navbar from "@/components/global/Navbar";
import SingUp from "@/app/pricing/pricing_table/SingUp";
import Session from "./Session";
import Question from "@/components/global/Question";
import Subscribe from "@/components/global/Subscribe";
import Footer from "@/components/global/Footer";

function page() {
  return (
    <div>
      <Navbar />
      <Salse />
      <Session />
      <Question />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default page;
