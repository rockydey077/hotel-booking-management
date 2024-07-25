import FilterSide from "@/components/FilterSide/FilterSide";
import React from "react";
import "./searchStyle.css";

const SearchPage = () => {
  return (
    <div className='h-screen'>
      <nav className='sidebar'>
        <div className="scroll-box px-6">
          <FilterSide />
        </div>
      </nav>
      {/* <div className='overflow-y-auto box-border'>
        <SearchResult />
      </div> */}
    </div>
  );
};

export default SearchPage;
