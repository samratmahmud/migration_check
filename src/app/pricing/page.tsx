import React from "react";
import Salse from "./Salse";
import Session from "./Session";
import Question from "@/components/global/Question";
import Subscribe from "@/components/global/Subscribe";
import Footer from "@/components/global/Footer";

function page() {
  return (
    <div>
      <Salse />
      <Session />
      <Question />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default page;
