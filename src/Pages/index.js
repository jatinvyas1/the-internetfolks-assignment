import React, { useState } from "react";
import Navbar from "./../components/Navbar/Navbar";
import Sidebar from "./../components/Sidebar/Sidebar";
import StaticContainerHome from "../components/Main/Section-one/container";
import SearchContainer from "../components/Main/Section-two/searchContainer";
import AboutUsContainer from "../components/Main/Section-three/aboutUsContainer";
import BoostSection from "../components/Main/BoostSection/BoostSection";
import Footer from "../components/Footer/footer";
function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <StaticContainerHome />
      <SearchContainer />
      <AboutUsContainer/>
      <BoostSection/>
      <Footer/>
    </>
  );
}

export default Home;
