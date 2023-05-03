import React, { useState } from "react";

import { recipes } from "../Data";
import shanCombo from '../assets/shanCombo.jpg'

const Recipe = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchRecipes, setSearchRecipes] = useState(recipes);


  const triggerSearchHandler = () => {
    const filteredRecipes = recipes.filter((recipe) => recipe.mainIngredient.includes(searchTerm))
    setSearchRecipes(filteredRecipes);
  }

  const setSearchTermHandler = (e) => {
    e.preventDefault();
    if (e.target.value.length > 0) {
      setSearchTerm(e.target.value);
    } else {
      setSearchTerm("");
      setSearchRecipes(recipes)
    }
  };

  return (
    <div onSubmit={e => e.preventDefault()} className="section" id="recipe">
      <div className="flex flex-col items-center">
        <div className="text-5xl text-center font-bold mb-10">


          <h1 className="text-7xl">Our Menu</h1>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-3 dark:bg-gray-700" />
        </div>

        <form className="flex items-center mb-[40px] w-[500px] ">

          <div className="relative w-full  ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text" onChange={setSearchTermHandler} id="simple-search" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2.5  dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Salmon, Prawn, Crab or Veg" />
          </div>
          <button type="submit" onClick={triggerSearchHandler} className="p-2.5 ml-2 text-sm font-medium text-white bg-gray-700 rounded-lg border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <span className="sr-only">Search</span>
          </button>
        </form>

        <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-4 mb-16 ">
          {searchRecipes.map((recipe) => {
            return (

              <div
                className="p-4 shadow-lg hover:shadow hover:bg-gray-300 dark:shadow-gray-400 cursor-pointer rounded-lg"
                key={recipe.id}
              >
                <img src={recipe.image} alt="" className="rounded-3xl object-contain" />
                <div className="flex justify-between">
                  <div className="md:text-lg text-[0.5rem] font-semibold">
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
        <div className="text-5xl text-center font-bold mt-[30px]">
          Our Combos
          <img src={shanCombo} alt="Sushi menu of combos" className="h-[700px] w-[1000px] rounded-lg shadow-xl dark:shadow-gray-800 mt-[20px]" />
        </div>
      </div>
    </div>

  );
};

export default Recipe;
