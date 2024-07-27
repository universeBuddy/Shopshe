import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [page, setPage] = useState(1);

  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Max Price: {maxPrice || ""}</h4>
          <input type=""
          value={maxPrice}
          
          min={100}
          max={1000000}
          onChange={(e) => setMaxPrice(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price(Low to high)</option>
            <option value="dsc">Price (High to Low)</option>
          </input>
        </div>
      </aside>
    </div>
  );
};

export default Search;
