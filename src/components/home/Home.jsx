import React from "react";
import About from "./About";
import Career from "./Career";
import HomeMain from "./HomeMain";

function Home() {
  return (
    <div className="pt-24">
      <div className="flex justify-center items-center">
        <HomeMain />
      </div>
      <div className="pt-20">
        <About />
      </div>
      <div className="pt-20">
        <Career />
      </div>
    </div>
  );
}

export default Home;
