import { FaArrowRight } from "react-icons/fa";
import React from "react";
import Tilt from "react-parallax-tilt";
import shanLogo from '../assets/shanLogo.jpg'
import shanStaff from '../assets/shanStaff.jpg'
import shanSushiPieces from '../assets/shanSushiPieces.jpg'
import sushiSoy from '../assets/sushiSoy.jpg'

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 items-center mb-10 ">
        <div className="flex flex-col justify-center items-start gap-6 px-6">
          <div className="sm:text-3xl text-xl font-bold mb-3">
            Best sushi in town
            <hr className="w-50 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-3 dark:bg-gray-700" />
          </div>
          <p className="text-md opacity-70">

            Welcome to our sushi Restaurant! We offer a wide variety of freshly made sushi,
            handcrafted with the finest and most delicious ingredients.
            Our menu features classic favorites such as California rolls and nigiri,
            as well as unique and creative combinations that are sure to satisfy any
            sushi lover's taste buds. Come in and experience the authentic flavors of
            Japan in every bite, and let us transport you to a world of culinary delight!
          </p>

        </div>
        <Tilt>
          <div className="md:row-start-1">
            <img src={shanSushiPieces} alt="" className="rounded-full shadow-xl dark:shadow-gray-800" />
          </div>
        </Tilt>

      </div>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="md:text-7xl text-xl font-bold mt-[100px] mb-[30px] flex justify-center">
        Our Lunch Special

      </div>
      <div className="sm:text-3xl text-xl font-bold flex justify-center">
        <Tilt>
          <img src={sushiSoy} alt="" className="max-h-md max-w-md rounded-full  flex justify-center shadow-xl  dark:shadow-gray-800" />
        </Tilt>
        <p className="text-md opacity-70 flex justify-center mt-[150px] ml-[100px] font-semibold">R48 &nbsp;x10 pieces <br /> 11:00am - 16:00</p>

      </div>
    </div>

  );
};

export default About;
