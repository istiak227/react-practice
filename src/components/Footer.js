import React from "react";
import Title from "./Title";
import { useRouteMatch , Link, Route, Switch } from 'react-router-dom'
import Topic from './Topic'

const Footer = () => {
  const match = useRouteMatch() ;
  return (
    <div>
      <Title title="This is Footer" />
      <Link to = {`${match.url}/topicId`}>Topic</Link>
      <Switch>
        <Route path={`${match.path}/:topicId`} component= {Topic}/>
      </Switch>
    </div>
  )

};

export default Footer;
