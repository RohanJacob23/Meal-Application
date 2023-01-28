import React, { useEffect } from "react";
import { useState } from "react";

const MealsContext = React.createContext();

const MealsProvider = ({ children }) => {
  const [allMealsData, setAllMealsData] = useState([]);
  const [randomMeal, setRandomMeal] = useState([]);

  const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s";
  const randomMealsUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

  const fetchMealsData = () => {
    return fetch(allMealsUrl)
      .then((response) => response.json())
      .then((data) => setAllMealsData(data.meals));
  };

  const fetchRandomMeals = () => {
    return fetch(randomMealsUrl)
      .then((response) => response.json())
      .then((data) => setRandomMeal(data.meals));
  };

  useEffect(() => {
    fetchMealsData();
  }, []);
  useEffect(() => {
    fetchRandomMeals();
  }, []);

  return (
    <MealsContext.Provider value={[allMealsData, randomMeal]}>
      {children}
    </MealsContext.Provider>
  );
};

export { MealsContext, MealsProvider };
