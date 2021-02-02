import React from "react";
import Title from "./Title";
import { useRouteMatch , Link } from 'react-router-dom'

const Footer = () => {
  const match = useRouteMatch() ;
  return (
    <div>
      <Title title="This is Footer" />
      <Link to = {`${match.url}/components`}>Linking Routes</Link>
    </div>
  )

};

export default Footer;
