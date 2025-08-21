import React from "react";
import Referencias from "../components/Referencias/Referencias";
import Acordion from "../components/Acordion/Acordion";


function Home() {
  return (
    <div className="flex w-full justify-center items-center h-screen bg-black text-white text-2xl ">
      {/* <Referencias /> */}
      <Acordion/>
    </div>
  );
}

export default Home;

