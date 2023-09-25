// import React from 'react'

import About from "../components/About";
import Description from "../components/Description";
import DespoImage from "../components/DespoImage";
import Firstpage from "../components/Firstpage";
import Location from "../components/Location";
import MathClub from "../components/MathClub";
import NoticesIntro from "../components/NoticesIntro";

function Home() {
  return (
    <>
      <Firstpage />
      <About />
      <Description />
      <DespoImage />
      <NoticesIntro />
      <Location />
      <MathClub />
    </>
  );
}

export default Home;
