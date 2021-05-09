import React from "react";
import { MdSearch } from "react-icons/md";
import "./Search.css";

function Search({ handleSearchNote }) {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3em" />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        placeholder="Search your note"
        type="text"
      ></input>
    </div>
  );
}

export default Search;
