import FilterSide from "@/components/FilterSide/FilterSide";
import React from "react";
import "./searchStyle.css";
import SearchResult from "@/components/SearchResult/SearchResult";

const SearchPage = () => {
  return (
    <div className='h-screen max-w-screen-xl mx-auto main-body'>
      <nav className='sidebar'>
        <div className='scroll-box pr-6'>
          <FilterSide />
        </div>
      </nav>
      <div className='content pl-6 pt-5'>
        <SearchResult />
      </div>
    </div>
  );
};

export default SearchPage;
