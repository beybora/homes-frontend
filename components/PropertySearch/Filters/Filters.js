import Input from "components/Input/Input";
import React, { useState, useEffect } from "react";
import queryString from "query-string";

const Filters = ({ onSearch }) => {
  const [petFriendly, setPetFriendly] = useState(false);
  const [parking, setParking] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    onSearch(petFriendly, parking, minPrice, maxPrice);
  };

  useEffect(() => {
    const {
      petFriendly: petFriendlyQuery,
      parking: parkingQuery,
      minPrice: minPriceQuery,
      maxPrice: maxPriceQuery,
    } = queryString.parse(window.location.search);
    
    setPetFriendly(petFriendlyQuery === "true");
    setParking(parkingQuery === "true");
    setMinPrice(minPriceQuery);
    setMaxPrice(maxPriceQuery);
  }, []);

  return (
    <div className="max-w-5xl mx-auto my-5 flex items-end justify-center gap-5 border-solid border-slate-400 border-2  p-5 rounded-md">
      <div className="flex-1">
        <div>
          <label className="cursor-pointer">
            <input
              type="checkbox"
              checked={parking}
              onChange={() => setParking((prev) => !prev)}
            />
            <span className="pl-2"> has Parking </span>
          </label>
        </div>
        <div>
          <label className="cursor-pointer">
            <input
              type="checkbox"
              checked={petFriendly}
              onChange={() => setPetFriendly((prev) => !prev)}
            />
            <span className="pl-2"> is pet friendly </span>
          </label>
        </div>
      </div>
      <div className="flex-1">
        <span>Min Price</span>
        <Input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Min Price"
        />
      </div>
      <div className="flex-1">
        <span>Max Price</span>
        <Input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Max Price"
        />
      </div>
      <div>
        <div className="btn" onClick={handleSearch}>
          Search{" "}
        </div>
      </div>
    </div>
  );
};

export default Filters;
