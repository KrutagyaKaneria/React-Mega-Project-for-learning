import React, { useState, useEffect } from "react";
import "../index.css";
import { NavLink } from "react-router-dom";

const Meals = () => {
  const [meals, setMeals] = useState([]); // State to store fetched meals
  const [error, setError] = useState(null); // State to store errors
  const [query, setQuery] = useState(""); // State to store the search query

  // Fetch meals based on the search query
  const fetchMeals = async (searchTerm = "") => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch meals.");
      }
      const data = await response.json();
      const allMeals = data.meals || []; // Default to an empty array if no meals are returned
      setMeals(allMeals);
      setError(null); // Clear any previous errors
    } catch (err) {
      setMeals([]); // Clear meals if there’s an error
      setError("Failed to fetch meals. Please try again later.");
    }
  };

  // Fetch all meals on component mount
  useEffect(() => {
    fetchMeals();
  }, []);

  // Handle search button click
  const handleSearch = () => {
    fetchMeals(query); // Pass the search query to the fetchMeals function
  };

  if (error) {
    return (
      <p className="text-center text-lg font-semibold text-red-600">
        {error}
      </p>
    );
  }

  return (
    <>
      <div className="container mx-auto py-6">
        {/* Search Bar */}
        <div className="flex justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Search for a meal..."
            value={query} // Bind input value to the search query state
            onChange={(e) => setQuery(e.target.value)} // Update query state on input change
            className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch} // Trigger the search function on button click
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen">
        <header className="text-center py-6">
          <h1 className="text-4xl font-bold text-blue-500">Our Meals</h1>
          <p className="text-gray-600 mt-2">
            Explore our delicious meal options!
          </p>
        </header>

        <div className="container mx-auto px-6 py-10">
          {/* Meals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {meals.map((meal) => (
              <div
                key={meal.idMeal}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-600">
                    {meal.strMeal}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    <strong>Category:</strong> {meal.strCategory || "N/A"}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Area:</strong> {meal.strArea || "N/A"}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Instructions:</strong>{" "}
                    {meal.strInstructions.slice(0, 80) || "N/A"}...
                  </p>
                </div>
                <div className="flex justify-around">
                <div className="p-4 border-t">
                  <a
                    href={meal.strSource || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold"
                  >
                    View Recipe
                  </a>
                </div>
                <div className="p-4 border-t">
                  <NavLink to={'/api1/recipe'}>
                    view more
                  </NavLink>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Meals;
