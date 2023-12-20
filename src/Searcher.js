import React from "react";

const Searcher = ({ search, setSearch }) => {
  return (
    <form onClick={(e) => e.preventDefault()}>
      <input 
      placeholder="Search" 
      className="search" 
      type="text" 
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Searcher;
