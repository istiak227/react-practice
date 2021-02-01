import React from "react";
import Title from "./Title";
import Navigation from "./Navigation";

const Header = (props) => {
  const handleChange = (e) => {
    const title = e.target.value;
    props.onTitleChange(title);
  };
  return (
    <div>
      <Navigation />
      <Title title={props.title} />
      <input onChange={handleChange} />
    </div>
  );
};

export default Header;
