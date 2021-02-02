import React from "react";
import "./styles.css";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css'

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
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/header">Header</Link>
              </li>
              <li>
                <Link to="/footer">Footer</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/header" component= {Header} />
            <Route path="/footer" component= {Footer} />
            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
