import React from "react";
import { useContext } from "react";
import { MealsContext } from "../context";

function Modals() {
  const { selectedMeal, closeModal } = useContext(MealsContext);

  return (
    <div
      className={`grid place-items-center fixed top-0 left-0 h-full w-full bg-black/80`}
    >
      <div className="rounded-lg shadow-lg bg-white max-w-3xl w-3/4 h-3/4 overflow-scroll ">
        <img
          className="rounded-t-lg cursor-pointer w-full h-80 object-cover"
          src={selectedMeal.strMealThumb}
          alt=""
        />
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {selectedMeal.strMeal}
          </h5>
          <p className="text-gray-700 text-base mb-4  ">
            {selectedMeal.strInstructions}
          </p>
          <a
            href={selectedMeal.strSource}
            className="text-lg block mb-5 underline"
            target="_blank"
            rel="noreferrer"
          >
            Original Source
          </a>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modals;
