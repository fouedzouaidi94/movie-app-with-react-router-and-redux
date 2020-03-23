import React from 'react';
import Header from './components/header';
import MovieCard from './components/movieCard.js';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Description from './components/descriptionMovie'

function App() {
  return (
    <Router>
      <div className="container-movies">
                <Header />
                <Switch>
                  <Route path="/" exact component={MovieCard} /> />
                  <Route path="/DescriptionMovie/:id" component={Description} />
                </Switch>
      </div>
    </Router>
  );
}

export default App;
