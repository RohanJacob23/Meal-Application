import React, { useEffect } from "react";
import { useState } from "react";

const MealsContext = React.createContext();

const MealsProvider = ({ children }) => {
  // useState for storing all the api data
  const [allMealsData, setAllMealsData] = useState([]);

  // creating a loading variable to display the loading state
  const [loading, setLoading] = useState(false);

  // searchTerm variable to search an user specified recipe
  const [searchTerm, setSearchTerm] = useState("");

  // showModal variable to check whether to show the Modal Component
  const [showModal, setShowModal] = useState(false);

  // selected meal will be stored here
  const [selectedMeal, setSelectedMeal] = useState(null);

  // favourite meal will be stored here
  const [favorite, setFavorite] = useState(getFavFromLocalStorage());

  const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const randomMealsUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

  // fetching data from the api
  const fetchMealsData = (url) => {
    setLoading(true);
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        return setAllMealsData(data.meals);
      });
  };

  // to fetch random meal from the api
  const fetchRandomMeals = () => {
    fetchMealsData(randomMealsUrl);
  };

  // using useEffct to render the meal page whenever searchterm gets updated
  useEffect(() => {
    if (!searchTerm) return;
    fetchMealsData(`${allMealsUrl}${searchTerm}`);
  }, [searchTerm]);

  // using useEffect to render the api only one time
  useEffect(() => {
    fetchMealsData(allMealsUrl);
  }, []);

  // function to show the Modal component
  function selectMeal(idMeal, favoriteMeal) {
    let meals;
    // if favoriteMeal is true then it will look in the favorite array
    if (favoriteMeal) meals = favorite.find((meal) => meal.idMeal === idMeal);
    // else it will look inside the allMealsData array
    else meals = allMealsData.find((meal) => meal.idMeal === idMeal);
    setSelectedMeal(meals);
    setShowModal(true);
  }

  // function to close the Modal component
  function closeModal() {
    setShowModal(false);
  }

  // function to fetch data from the localStorage if it's there
  function getFavFromLocalStorage() {
    let fav = JSON.parse(localStorage.getItem("favorites"));
    if (fav) return fav;
    else return [];
  }

  // function to add favourite item to favourite variable
  function addFav(mealId) {
    const meal = allMealsData.find((meal) => meal.idMeal === mealId);
    const alreadyFavorite = favorite.find((meal) => meal.idMeal === mealId);
    if (!alreadyFavorite) {
      setFavorite((prev) => [...prev, meal]);
      localStorage.setItem("favorites", JSON.stringify([...favorite, meal]));
    }
  }

  // function to remove favourite item
  function removeFav(mealId) {
    const updatedFav = favorite.filter((meal) => meal.idMeal !== mealId);
    setFavorite(updatedFav);
    localStorage.setItem("favorites", JSON.stringify(updatedFav));
  }

  return (
    <MealsContext.Provider
      value={{
        allMealsData,
        loading,
        fetchRandomMeals,
        setSearchTerm,
        showModal,
        selectMeal,
        selectedMeal,
        closeModal,
        favorite,
        addFav,
        removeFav,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
};

export { MealsContext, MealsProvider };
