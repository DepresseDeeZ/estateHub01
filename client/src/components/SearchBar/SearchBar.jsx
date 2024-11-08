import { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState({
    searchTerm: "",
    type: "all",
    parking: false,
    furnished: false,
    offer: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setQuery((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const buildSearchUrl = () => {
    return `/search?searchTerm=${query.searchTerm}&type=${query.type}&parking=${query.parking}&furnished=${query.furnished}&offer=${query.offer}`;
  };

  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 p-5 rounded-lg shadow-lg gap-4 w-full max-w-5xl mx-auto">
      {/* Search Term */}
      <div className="flex flex-col w-full md:w-1/2">
        <label className="font-semibold text-gray-700 mb-1">Search Term:</label>
        <input
          type="text"
          name="searchTerm"
          placeholder="Enter search term..."
          className="border border-gray-300 rounded-lg p-2 w-full"
          value={query.searchTerm}
          onChange={handleChange}
        />
      </div>

      {/* Type Selection */}
      <div className="flex flex-col w-full md:w-1/4">
        <label className="font-semibold text-gray-700 mb-1">Type:</label>
        <div className="flex flex-wrap gap-2">
          {["all", "rent", "sale"].map((type) => (
            <label key={type} className="flex items-center">
              <input
                type="radio"
                name="type"
                value={type}
                checked={query.type === type}
                onChange={handleChange}
                className="mr-2"
              />
              {type === "all"
                ? "Rent & Sale"
                : type.charAt(0).toUpperCase() + type.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* Offer and Amenities */}
      <div className="flex flex-col w-full md:w-1/4">
        <label className="font-semibold text-gray-700 mb-1">Filters:</label>
        <div className="flex flex-wrap gap-4">
          {["offer", "parking", "furnished"].map((amenity) => (
            <label key={amenity} className="flex items-center">
              <input
                type="checkbox"
                name={amenity}
                checked={query[amenity]}
                onChange={handleChange}
                className="mr-2"
              />
              {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* Search Button */}
      <Link
        to={buildSearchUrl()}
        className="bg-slate-500 text-white font-semibold p-3 rounded-lg w-full md:w-auto text-center hover:bg-slate-600 transition duration-200"
      >
        Search
      </Link>
    </div>
  );
}

export default SearchBar;
