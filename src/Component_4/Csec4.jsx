import React, { useEffect, useState } from "react";
import '../index.css'

const Indianbank = () => {
  const [ifse, setIfse] = useState("");
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [selectstate, setSelectstate] = useState();
  const [selectcity, setSelectcity] = useState();
  const [district, setDistrict] = useState([]);
  const [selectdistrict, setSelectdistrict] = useState();
  const [subcity, setSubcity] = useState([]);
  const [selectsubcity, setSelectsubcity] = useState();
  const [center, setCenter] = useState([]);
  const [selectcenter, setSelectcenter] = useState();
  const [deatial, setdeatial] = useState();

  useEffect(() => {
    fetch("https://bank-apis.justinclicks.com/API/V1/STATE/")
      .then((response) => response.json())
      .then((Data) => {
        setState(Data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const formclick = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Indian Bank Details Finder
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <form
          onSubmit={formclick}
          className="flex flex-col md:flex-row items-center gap-4 mb-6"
        >
          <input
            type="text"
            placeholder="Enter Your IFSC Code"
            className="flex-1 px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Search IFSC
          </button>
        </form>
        <div className="text-center text-gray-500 font-medium">OR</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select State
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              list="State"
              value={selectstate}
              onChange={(e) => setSelectstate(e.target.value)}
              placeholder="Enter Your State"
            />
            <datalist id="State">
              {state.map((i, index) => (
                <option key={index} value={i} />
              ))}
            </datalist>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select City
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              list="city"
              value={selectcity}
              onChange={(e) => setSelectcity(e.target.value)}
              placeholder="Enter Your City"
            />
            <datalist id="city">
              {city.map((k, index) => (
                <option key={index} value={k} />
              ))}
            </datalist>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select District
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              list="district"
              value={selectdistrict}
              onChange={(e) => setSelectdistrict(e.target.value)}
              placeholder="Enter Your District"
            />
            <datalist id="district">
              {district.map((j, index) => (
                <option key={index} value={j} />
              ))}
            </datalist>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Subcity
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              list="subcity"
              value={selectsubcity}
              onChange={(e) => setSelectsubcity(e.target.value)}
              placeholder="Enter Your Subcity"
            />
            <datalist id="subcity">
              {subcity.map((l, index) => (
                <option key={index} value={l} />
              ))}
            </datalist>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Center
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              list="center"
              value={selectcenter}
              onChange={(e) => setSelectcenter(e.target.value)}
              placeholder="Enter Your Center"
            />
          </div>
        </div>
      </div>

      {ifse && (
        <div className="mt-8 w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            IFSC Code Details
          </h2>
          <ul className="divide-y divide-gray-200">
            {Object.entries(ifse).map(([key, value]) => (
              <li key={key} className="py-2 flex justify-between">
                <span className="font-medium text-gray-700">{key}</span>
                <span className="text-gray-500">{value || "N/A"}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {deatial && (
        <div className="mt-8 w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Additional Details
          </h2>
          <ul className="divide-y divide-gray-200">
            {Object.entries(deatial).map(([key, value]) => (
              <li key={key} className="py-2 flex justify-between">
                <span className="font-medium text-gray-700">{key}</span>
                <span className="text-gray-500">{value || "N/A"}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Indianbank;
