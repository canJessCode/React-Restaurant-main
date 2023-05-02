import React from "react";
import { recipes } from "../Data";

const Recipe = () => {
  return (
    <div className="section" id="recipe">
      <div className="flex flex-col items-center">
        <div className="text-5xl text-center font-bold mb-16">
          <bold>Our Menu</bold>

        </div>
        <div className="grid lg:grid-cols-6 md:grid-cols-2 gap-5 mb-16">
          {recipes.map((recipe) => {
            return (
              <div
                className="p-4 shadow-lg hover:shadow transition-all duration-300 cursor-pointer"
                key={recipe.id}
              >
                <img src={recipe.image} alt="" className="rounded-3xl object-contain" />
                <div className="flex justify-between">
                  <div className="md:text-xl text-[1rem] font-semibold">
                    {recipe.name}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-l font-semibold">{recipe.price}</span>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>

  );
};

export default Recipe;
