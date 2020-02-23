import React, {useState} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList"

export default function App() {

 
  return (
    <main>
        <Header />

      <div className="App">
      <nav>
        
        <div className="nav-links">
        
          <Link to="/">Home</Link>
          <Link to="/characters">Characters</Link>
        </div>
      </nav>
      <Route path="/" exact component={WelcomePage} />
      
      <Route
        path="/characters"
        exact
        render={routeProps => { return <CharacterList {...routeProps}/>;
      }}
    />
      
      
      </div>
    </main>
  );
}
