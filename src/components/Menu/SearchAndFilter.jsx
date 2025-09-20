import React from "react";

const SearchAndFilter = ({
  onSearch,
  onCategoryChange,
  selectedCategory,
  onSortChange,
  categories,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
        <div className="relative w-full sm:w-2/3">
          <input
            type="text"
            placeholder="Search menu items..."
            className="w-full p-2 pl-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C81D6A]"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <div className="relative w-full sm:w-1/3">
          <select
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C81D6A]"
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="name">Sort by Name</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-start">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
              selectedCategory === category
                ? "bg-[#C81D6A] text-white border-[#C81D6A]"
                : "border-gray-300 text-gray-800 hover:bg-[#C81D6A] hover:text-white hover:border-[#C81D6A]"
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchAndFilter;
