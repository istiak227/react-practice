import React from "react";
import Title from "./Title";
// import Navigation from "./Navigation";



const Header = (props) => {
  const handleChange = (e) => {
    const title = e.target.value;
    console.log("Hello, " + title)
    props.onTitleChange("Hello, " + title)
  };
  return (
    <div>
      <Title title={props.title} />
      <input type="search" placeholder={props.placeHolderText} onChange={handleChange} />
    </div>
  );
};

export default Header;
