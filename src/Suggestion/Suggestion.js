import "./index.css";
import React from "react";

const Suggestion = ({ data }) => {

  function addValue (e) {

    const searchObject = document.querySelector(".input-box");
    let value_ = searchObject.value;
    value_ += ` ${e.target.innerText}`;
    searchObject.value = value_;
  }

  return (
    <ul className="suggestions-list">
      {data.map((word, index) => {
        return (
        <li className="suggestion" onClick={(e) => addValue(e)} key={index}>
          {word}
        </li>)
      })}
    </ul>
  );
};

export default Suggestion;
