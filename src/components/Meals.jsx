import React, { useContext } from "react";
import { MealsContext } from "../context";

function Meals() {
  const [allMeals, randomMeal] = useContext(MealsContext);
  return <div>Meals</div>;
}

export default Meals;
