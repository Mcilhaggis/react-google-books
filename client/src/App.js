import React, { Component } from "react";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";


import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";

function App() {
  document.title = "Google Books";
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          {/* <Wrapper> */}
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="*" component={NoMatch} />
          {/* </Wrapper> */}
        </Switch>
      </div>
    </Router>
  );
}
export default App;
