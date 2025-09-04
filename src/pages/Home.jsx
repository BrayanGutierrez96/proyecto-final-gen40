import React from "react";
import HowToOrderWeed from "../components/HowToOrderWeed/HowToOrderWeed";
import Education from "../components/Education/Education";

function Home() {
  return (
    // Acordarse de quitar el Margin top
    <div className="grid grid-cols-1  mx-auto justify-center items-center">
      <Education/>
      <HowToOrderWeed/>
    </div>
  );
}

export default Home;

