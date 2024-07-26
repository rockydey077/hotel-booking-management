import FilterSide from "@/components/FilterSide/FilterSide";
import React from "react";
import "./searchStyle.css";
import SearchResult from "@/components/SearchResult/SearchResult";

const SearchPage = () => {
  return (
    <div className='h-screen'>
      <nav className='sidebar'>
        <div className='scroll-box px-6'>
          <FilterSide />
        </div>
      </nav>
      <div className='content px-8 pt-5'>
        <SearchResult />
      </div>
    </div>
  );
};

export default SearchPage;
