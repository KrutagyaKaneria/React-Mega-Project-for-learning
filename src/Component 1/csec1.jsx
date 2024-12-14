// import React, { useEffect, useState } from "react"

// export default function Csec1 (){
//     const[categories,setcategories] = useState('')

//     function api(){
// useEffect(()=>{
//     fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
//             .then((response) => response.json())
//             .then((data) => {
//                 const meals = data.categories.map((item)=>({
//                     id:item.idCategory,
//                     Category:item.strCategory,
//                     Thumb:item.strCategoryThumb,
//                     Description:item.strCategoryDescription
//                 }))
//             })
//             
//             .catch((error) => {
//                 console.error('Error fetching videos:', error);
//             });
//         }
// })

//     return(
//         <>
//         {/* <div className="">
//             {data.map((i)=>(
//                 <div className="idCategory">
//                     {i.idCategory}
//                 </div>
//             ))}
//         </div> */}
// import React, { useState, useEffect } from "react";

// const Meals = () => {
//   const [meals, setMeals] = useState([]); // State for storing fetched meals
//   const [loading, setLoading] = useState(true); // State for loading spinner
//   const [error, setError] = useState(null); // State for error handling

//   // Fetch data using promises
//   useEffect(() => {
//     fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a") // Example API
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch meals. Please try again later.");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setMeals(data.meals || []); // Safeguard if no meals are returned
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   // Handle loading state
//   if (loading) {
//     return (
//       <p className="text-center text-lg font-semibold text-blue-600">
//         Loading meals...
//       </p>
//     );
//   }

//   // Handle error state
//   if (error) {
//     return (
//       <p className="text-center text-lg font-semibold text-red-600">
//         {error}
//       </p>
//     );
//   }

//   return (
//     <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen">
//       {/* Header Section */}
//       <header className="text-center py-6">
//         <h1 className="text-4xl font-bold text-blue-500">Our Meals</h1>
//         <p className="text-gray-600 mt-2">
//           Explore our delicious meal options!
//         </p>
//       </header>

//       {/* Meals Cards Section */}
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-10">
//         {meals.map((meal) => (
//           <div
//             key={meal.idMeal}
//             className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
//           >
//             {/* Meal Image */}
//             <img
//               src={meal.strMealThumb}
//               alt={meal.strMeal}
//               className="w-full h-48 object-cover"
//             />

//             {/* Meal Details */}
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-blue-600">
//                 {meal.strMeal}
//               </h3>
//               <p className="text-gray-600 mt-2 text-sm">
//                 Category: <span className="font-medium">{meal.strCategory || "N/A"}</span>
//               </p>
//               <p className="text-gray-600 mt-1 text-sm">
//                 Area: <span className="font-medium">{meal.strArea || "N/A"}</span>
//               </p>
//             </div>

//             {/* View Recipe Button */}
//             <div className="p-4 border-t text-center">
//               <a
//                 href={meal.strSource || "#"}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold"
//               >
//                 View Recipe
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Meals;





//         </>
//     )
// }


import React, { useState, useEffect } from "react";

const Meals = () => {
  const [meals, setMeals] = useState([]); // State for storing fetched meals
  const [error, setError] = useState(null); // State for error handling

  // Fetch meals from the API
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        ); // Fetch meals
        if (!response.ok) {
          throw new Error("Failed to fetch meals.");
        }
        const data = await response.json();
        const allMeals = (data.meals || []).slice(0, 12); // Limit to 12 meals
        setMeals(allMeals);
      } catch (err) {
        setError("Failed to fetch meals. Please try again later.");
      }
    };

    fetchMeals();
  }, []);

  // Handle error state
  if (error) {
    return (
      <p className="text-center text-lg font-semibold text-red-600">
        {error}
      </p>
    );
  }

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold text-blue-500">Our Meals</h1>
        <p className="text-gray-600 mt-2">
          Explore our delicious meal options!
        </p>
      </header>

      {/* Meals Cards Section */}
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap gap-6 justify-start">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="w-full sm:w-1/2 lg:w-1/4 bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              {/* Meal Image */}
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-40 object-cover"
              />

              {/* Meal Details */}
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

              {/* View Recipe Button */}
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




