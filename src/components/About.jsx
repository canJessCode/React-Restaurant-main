import { FaArrowRight } from "react-icons/fa";
import React from "react";
import shanLogo from '../assets/shanLogo.jpg'
import shanStaff from '../assets/shanStaff.jpg'
import shanSushiPieces from '../assets/shanSushiPieces.jpg'
import sushiSoy from '../assets/sushiSoy.jpg'

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 items-center mb-10 ">
        <div className="flex flex-col justify-center items-start gap-6 px-6">
          <div className="sm:text-3xl text-xl font-bold mb-6">
            Best sushi in town
          </div>
          <p className="text-sm opacity-70">

            Welcome to our sushi Restaurant! We offer a wide variety of freshly made sushi,
            handcrafted with the finest and most delicious ingredients.
            Our menu features classic favorites such as California rolls and nigiri,
            as well as unique and creative combinations that are sure to satisfy any
            sushi lover's taste buds. Come in and experience the authentic flavors of
            Japan in every bite, and let us transport you to a world of culinary delight!
          </p>

        </div>
        <div className="md:row-start-1">
          <img src={shanSushiPieces} alt="" className="rounded-full" />
        </div>
      </div>

    </div>
  );
};

export default About;
