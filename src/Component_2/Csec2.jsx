import React, { useState, useEffect } from "react";

const MealDetail = () => {
  const [meal, setMeal] = useState(null); // State for storing the meal
  const [error, setError] = useState(null); // State for error handling

  // Fetch meal details from the API
  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch meal details.");
        }
        const data = await response.json();
        setMeal(data.meals[0] || null); // Set the first meal from the array
      } catch (err) {
        setError("Failed to fetch meal details. Please try again later.");
      }
    };

    fetchMeal();
  }, []);

  // Handle error state
  if (error) {
    return (
      <p className="text-center text-lg font-semibold text-red-600">
        {error}
      </p>
    );
  }

  // Show a loading state if the meal data is not yet available
  if (!meal) {
    return (
      <p className="text-center text-lg font-semibold text-gray-500">
        Loading meal details...
      </p>
    );
  }

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white min-h-screen py-8">
      {/* Meal Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-yellow-400">
          {meal.strMeal}
        </h1>
        <p className="text-gray-300 mt-4">
          <strong>Category:</strong> {meal.strCategory || "N/A"} |{" "}
          <strong>Area:</strong> {meal.strArea || "N/A"}
        </p>
      </header>

      {/* Meal Content */}
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section: Image */}
          <div className="flex justify-center">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="rounded-lg shadow-lg w-full lg:w-3/4"
            />
          </div>

          {/* Right Section: Details */}
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
              Ingredients
            </h2>
            <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
              {Array.from({ length: 20 })
                .map((_, i) =>
                  meal[`strIngredient${i + 1}`]
                    ? `${meal[`strIngredient${i + 1}`]} - ${
                        meal[`strMeasure${i + 1}`] || ""
                      }`
                    : null
                )
                .filter(Boolean)
                .map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
            </ul>

            <h2 className="text-3xl font-bold text-yellow-400 mt-8 mb-6">
              Instructions
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {meal.strInstructions || "N/A"}
            </p>

            {meal.strYoutube && (
              <div className="mt-8">
                <h2 className="text-3xl font-bold text-yellow-400 mb-4">
                  Video Tutorial
                </h2>
                <iframe
                  className="w-full h-64 lg:h-80 rounded-lg shadow-lg"
                  src={`https://www.youtube.com/embed/${meal.strYoutube.split("v=")[1]}`}
                  title="Meal Video Tutorial"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
