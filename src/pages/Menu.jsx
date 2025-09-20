import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/Menu/ProductCard";
import SearchAndFilter from "./../components/Menu/SearchAndFilter";
import productsData from "../data/Menu.json";
import menuBannerImage from "../assets/imgs/menu-offer.png";

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchParams] = useSearchParams();
  const urlCategory = searchParams.get("category");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const allCategories = [
    "All",
    ...new Set(productsData.flatMap((p) => p.category)),
  ];

  useEffect(() => {
    if (urlCategory) {
      setSelectedCategory(urlCategory);
    } else {
      setSelectedCategory("All");
    }
  }, [urlCategory]);

  useEffect(() => {
    let filtered = productsData.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" ||
        product.category.includes(selectedCategory);
      return matchesSearch && matchesCategory;
    });

    if (sortBy === "price_asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price_desc") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "popularity") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, sortBy]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Promotional Banner Section */}
      <div
        className="relative w-full h-[300px] flex items-center justify-start bg-cover bg-center hidden md:flex"
        style={{ backgroundImage: `url(${menuBannerImage})` }}
      >
        <div className="relative z-10 text-white ml-8 md:ml-16 pl-[75px]">
          <h1
            className="text-6xl md:text-7xl font-extrabold flex items-baseline mb-4"
            style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}
          >
            <span className="text-[#9F135A] mr-2">$6</span>
            <span className="text-[#FE7800]">MEAL DEAL</span>
          </h1>
          <div className="flex justify-start items-center space-x-8 text-xl font-bold text-gray-800">
            <div className="text-center">
              <span style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}>
                MEDIUM COFFEE
              </span>
              <br />
              <span className="text-base font-normal">HOT OR ICED</span>
            </div>
            <div className="text-center">
              <span style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}>
                BACON, EGG
              </span>
              <br />
              <span className="text-base font-normal">& CHEESE SANDWICH</span>
            </div>
            <div className="text-center">
              <span style={{ fontFamily: "Dunkin Sans Bold, sans-serif" }}>
                HASH
              </span>
              <br />
              <span className="text-base font-normal">BROWNS</span>
            </div>
          </div>
          <p className="text-xs mt-6 px-0 max-w-sm text-gray-700 opacity-90 text-left">
            No substitutions. Participation may vary. Limited time offer. Cannot
            be combined with other offers. Exclusions and terms apply.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl py-16 px-4 sm:px-8">
        <SearchAndFilter
          onSearch={setSearchTerm}
          onCategoryChange={setSelectedCategory}
          onSortChange={setSortBy}
          selectedCategory={selectedCategory}
          categories={allCategories}
        />
        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-500">{`Showing ${filteredProducts.length} items`}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No items found matching your criteria.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
