import React from "react";
import HowToOrderWeed from "../components/HowToOrderWeed/HowToOrderWeed";


function Home() {
  return (
    // Acordarse de quitar el Margin top
    <div className="grid grid-cols-1  mx-auto justify-center items-center mt-100">
      <HowToOrderWeed/>
    </div>
  );
}

export default Home;

