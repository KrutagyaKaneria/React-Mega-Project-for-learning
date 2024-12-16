import React, { useState, useEffect } from "react";
import '../index.css'

const Meals = () => {
  const [meals, setMeals] = useState([]); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        ); 
        if (!response.ok) {
          throw new Error("Failed to fetch meals.");
        }
        const data = await response.json();
        const allMeals = (data.meals || []); 
        setMeals(allMeals);
      } catch (err) {
        setError("Failed to fetch meals. Please try again later.");
      }
    };

    fetchMeals();
  }, []);

  if (error) {
    return (
      <p className="text-center text-lg font-semibold text-red-600">
        {error}
      </p>
    );
  }

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen">
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold text-blue-500">Our Meals</h1>
        <p className="text-gray-600 mt-2">
          Explore our delicious meal options!
        </p>
      </header>

      <div className="container mx-auto px-6 py-10">
        {/* Updated to use CSS Grid */}
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
              <div className="p-4 border-t text-center">
                <a
                  href={meal.strSource || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold"
                >
                  View Recipe
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meals;
