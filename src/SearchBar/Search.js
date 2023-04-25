import React from "react";
import "./search.css";
import searchIcon from "./search.svg";

const Search = ({ setChanges }) => {

  const displayChanges = (e) => {
    if (!e.target.value.trim()) {
      document.querySelector(".searchBox").classList.remove("focus-searchbox");
      document.querySelector(".suggestions-list").style.display = "none";
    }
    else {
      document.querySelector(".searchBox").classList.add("focus-searchbox");
      document.querySelector(".suggestions-list").style.display = "flex";
      let regex = e.target.value.split(" ");
      regex = regex[regex.length - 1];
      setChanges(regex.toLowerCase());
    }
  };

  return (
    <div className="searchBox">
      <img className="search-icon" src={searchIcon} />
      <input
        className="input-box"
        onChange={(e) => displayChanges(e)}
        type="text"
        placeholder="Search hello or type a word"
      />
    </div>
  );
};

export default Search;
