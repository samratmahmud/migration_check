"use client";
import Header from "./home/Header";
import Packages from "./home/Packages";
import About_us from "./home/About_us";
import Container from "./home/Container";
import Feadback from "./home/Feadback";
import Navbar from "@/components/global/Navbar";
import Discover from "./home/Discover";
import Destination from "./home/Destination";
import Blogs from "./home/Blogs";
import Subscribe from "../components/global/Subscribe";
import Footer from "@/components/global/Footer";
import Question from "@/components/global/Question";

export default function Homepage() {
  return (
    <div>
      <Header />
      <About_us />
      <Packages />
      <Container />
      <Feadback />
      <Discover />
      <Destination />
      <Blogs />
      <Question opt />
      <Subscribe />
      <Footer />
    </div>
  );
}
///
//className="bg-bgImage bg-no-repeat bg-fixed"
