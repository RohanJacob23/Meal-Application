import React, { useEffect } from "react";
import { useState } from "react";

const MealsContext = React.createContext();

const MealsProvider = ({ children }) => {
  const [allMealsData, setAllMealsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const randomMealsUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

  const fetchMealsData = (url) => {
    setLoading(true);
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        return setAllMealsData(data.meals);
      });
  };

  const fetchRandomMeals = () => {
    fetchMealsData(randomMealsUrl);
  };

  useEffect(() => {
    fetchMealsData(`${allMealsUrl}${searchTerm}`);
  }, [searchTerm]);

  useEffect(() => {
    fetchMealsData(allMealsUrl);
  }, []);

  return (
    <MealsContext.Provider
      value={{ allMealsData, loading, fetchRandomMeals, setSearchTerm }}
    >
      {children}
    </MealsContext.Provider>
  );
};

export { MealsContext, MealsProvider };
