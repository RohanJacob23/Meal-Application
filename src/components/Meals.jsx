import React, { useContext } from "react";
import { MealsContext } from "../context";
import Card from "./card";

function Meals() {
  const { allMealsData, loading } = useContext(MealsContext);

  // loading screen till the api fetch is not complete
  if (loading) {
    return <div className="loader-spinner w-20 h-20 md:w-24 md:h-24"></div>;
  }

  // if the the meal is not present in the api
  if (allMealsData === null) {
    return (
      <h1 className="text-2xl md:text-5xl p-7">
        No meals matched your search term. Please try again.
      </h1>
    );
  }
  // created a card component to dispaly all the meals in a card format
  const a = allMealsData.map((meal) => {
    return (
      <Card
        key={meal.idMeal}
        id={meal.idMeal}
        imageUrl={meal.strMealThumb}
        mealName={meal.strMeal}
      />
    );
  });
  return (
    <div className="py-10 px-5">
      <div className="grid gird-1 md:grid-cols-3 gap-y-6 gap-x-10 max-w-6xl mx-auto">
        {a}
      </div>
    </div>
  );
}

export default Meals;
