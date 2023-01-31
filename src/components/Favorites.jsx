import React from "react";
import { useContext } from "react";
import { MealsContext } from "../context";

function Favorites() {
  const { selectMeal, favorite, removeFav } = useContext(MealsContext);
  const image = favorite.map((meal) => {
    return (
      <div key={meal.idMeal}>
        <div className=" ">
          <img
            src={meal.strMealThumb}
            alt=""
            className="w-16 cursor-pointer border-4 border-white rounded-full object-cover"
            onClick={() => selectMeal(meal.idMeal, true)}
          />
          <button
            className="mt-1 bg-transparent cursor-pointer text-base"
            onClick={() => removeFav(meal.idMeal)}
          >
            Remove
          </button>
        </div>
      </div>
    );
  });
  return (
    <div className="bg-slate-900 text-white text-center">
      <h1>Favorites</h1>
      <div className="flex flex-row gap-2 flex-wrap py-4 w-1/2 m-auto">
        {image}
      </div>
    </div>
  );
}

export default Favorites;
