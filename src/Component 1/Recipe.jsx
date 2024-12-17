import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const { mealid } = useParams(); // Dynamic meal ID from route
  const [info, setInfo] = useState(null); // State for recipe details
  const [error, setError] = useState(null); // Error state

  // Fetch recipe details based on meal ID
  const getInfo = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
      );
      if (!response.ok) throw new Error("Failed to fetch recipe details.");

      const jsonData = await response.json();
      console.log("API Response:", jsonData); // Log the API response to debug

      if (jsonData && jsonData.meals && jsonData.meals.length > 0) {
        setInfo(jsonData.meals[0]); // Set first meal if found
      } else {
        setError("No recipe details found for this meal ID.");
      }
    } catch (err) {
      console.error(err.message);
      setError("Unable to fetch recipe details. Please try again.");
    }
  };

  useEffect(() => {
    getInfo();
  }, [mealid]); // Fetch when mealid changes

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl text-red-500">{error}</p>
      </div>
    );
  }

  if (!info) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-500">Loading recipe details...</p>
      </div>
    );
  }

  // Extract YouTube video ID from the URL
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    const videoId = url.split("v=")[1]?.split("&")[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Recipe Image */}
        <div className="relative">
          <img
            src={info.strMealThumb}
            alt={info.strMeal || "Recipe Image"}
            className="w-full h-72 object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white py-3 px-6 w-full">
            <h1 className="text-3xl font-bold">{info.strMeal || "N/A"}</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Category and Area */}
          <p className="text-gray-600 mb-2">
            <strong>Category:</strong> {info.strCategory || "N/A"}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Area:</strong> {info.strArea || "N/A"}
          </p>

          {/* Instructions */}
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            Instructions
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {info.strInstructions || "Instructions are not available for this recipe."}
          </p>

          {/* YouTube Video */}
          {info.strYoutube && (
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                Watch the Recipe
              </h3>
              <div className="relative" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={getYouTubeEmbedUrl(info.strYoutube)}
                  title="Recipe Video"
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button
              onClick={() => window.history.back()}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Go Back
            </button>
            <a
              href={info.strSource || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
            >
              View Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
