import React from "react";
import { MealsContext } from "../context";
import { useContext, useState } from "react";

function Search() {
  const { fetchRandomMeals, setSearchTerm } = useContext(MealsContext);
  const [text, setText] = useState("");

  // searching the userInputed text
  function search(e) {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
    }
  }

  // changing the input value 
  function inputValue(e) {
    setText(e.currentTarget.value);
  }

  // reseting all search after then surpise button is clicked
  function handelRandom() {
    setSearchTerm("");
    setText("");
    fetchRandomMeals();
  }

  return (
    <div className="flex md:justify-center items-center h-20 bg-white px-5">
      <form action="" onSubmit={search} className="flex gap-2">
        <input
          className="bg-slate-200 px-3 py-1.5 rounded w-3/6"
          type="text"
          name="mealSearch"
          id="mealSearch"
          placeholder="type favorite meal"
          onChange={inputValue}
          value={text}
          autoComplete="off"
        />
        <button
          type="submit"
          className="inline-block px-4 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Search
        </button>
        <button
          type="button"
          className="inline-block px-4 py-2 bg-sky-200 text-blue-700 hover:bg-black hover:text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-500 ease-in-out"
          onClick={handelRandom}
        >
          Suprise Me
        </button>
      </form>
    </div>
  );
}

export default Search;
