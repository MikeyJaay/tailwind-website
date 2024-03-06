import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auot px-8 flex flex-col justify-center h-full">
        <p>Hi, my name is</p>
        <h1>Michael Jaroszynskit</h1>
        <h2>I'm a Full Stack Developer</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, non
          asperiores deserunt, aliquam officia exercitationem in facilis a
          commodi ea error quis cum deleniti repellat quaerat repellendus
          reprehenderit ullam magni? </p>
          <div>
            <button>View Work <HiArrowNarrowRight/> </button>
          </div>





      </div>
    </div>
  );
};

export default Home;
