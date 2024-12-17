import React from "react";
import '../index.css'

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="text-center py-12 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-xl mt-4">Explore what we offer across different categories!</p>
      </header>

      {/* Meals Section */}
      <section className="py-16 bg-white shadow-lg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-blue-600">Meals</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Our meal section offers a variety of delicious recipes that cater to all tastes and dietary preferences. Whether you're looking for healthy meals or indulgent treats, we've got something for you.
          </p>
        </div>
      </section>

      {/* Cocktails Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-blue-600">Cocktails</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Explore our diverse collection of cocktails, from classic mixes to innovative creations. Whether you're hosting a party or enjoying a quiet evening, we have the perfect drink for every occasion.
          </p>
        </div>
      </section>

      {/* Book Section */}
      <section className="py-16 bg-white shadow-lg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-blue-600">Book</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Need a great book to read? Our curated book collection offers something for every reader, from timeless classics to modern masterpieces. Dive into a new world today.
          </p>
        </div>
      </section>

      {/* Bank Details Section */}
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-blue-600">Bank Details</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            We ensure your financial information is kept secure with our advanced encryption methods. Learn about our banking services and how we keep your data safe.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 bg-blue-600 text-white text-center">
        <p>&copy; 2024 All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default AboutUs;
