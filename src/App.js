import React from "react";
import "./styles.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
// import Layout from "./components/Layout";
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"

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
            <Route path="/footer" component={Footer}></Route>
            <Route path="/navigation" component={Navigation}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
