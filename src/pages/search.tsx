import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          {/* // * Sort Section  */}
          <h4> Sorts</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value=""> None</option>
            <option value="asc"> Price (low to high)</option>
            <option value="dsc"> Price (high to low)</option>
          </select>
        </div>

        {/* //* Range section */}
        <div>
          <h4>Max Price {maxPrice || ""}</h4>
          <input
            type="range"
            min={100}
            max={1000000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
  {/*  //* category Section */}
        <div>
          <h4> Category</h4>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value=""> ALL</option>
            <option value=""> Sample 1</option>
            <option value=""> Sample 2</option>
          </select>
        </div>
      </aside>

     
 
{/*//*    ||\\        //||      ****               ****        ===========        ==========         ============
//*       ||  \\    //  ||     **  **           **     **      ||                 ||                     ||
//*       ||    \\//    ||    **    **        **               ======             ||                     ||
//!       ||            ||   **      **     **                 ||                 =====                  ||
//!       ||            ||    **    **        **               ||                 ||                     ||
//^       ||            ||     **  **           ****           ||                 ||                     ||
//&       ||            ||      ****                **         ||                 ==========             ||
//&                                                     **                          
//&                                                   **    
//&                                                  ** 
//&                                         **     **                  
//&                                            ****                                                                                   */}
      
      
      
      
      
      <main></main>                                
    </div>                                  
  );
};

export default Search;
