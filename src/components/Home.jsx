import React from "react";
import shanSushiBanner from '../assets/shanSushiBanner.jpg'

const Home = () => {
  return (
    <div
      className="section flex items-center xl:justify-center justify-start flex-wrap"
      id="home"
    >

      <img src={shanSushiBanner} alt="shan rice logo banner min-w-full" />

      <div className="flex flex-col items-start gap-10">
        <div className="sm:text-[2.5rem] text-[1.8rem] font-bold">
          Delicious Japanese Cuisine
        </div>

      </div>
    </div>

  );
};

export default Home;
