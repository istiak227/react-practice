import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
      <Header onTitleChange={props.onTitleChange} title={props.title} />
      <Footer />
    </div>
  );
};

export default Layout;
