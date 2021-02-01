import React from "react";
import "./styles.css";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import Layout from "./components/Layout";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "This is a New Header"
    };
  }

  onTitleChange(title) {
    this.setState({ title });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" component={App}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
