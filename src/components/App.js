import React, { Component } from 'react';
import SearchDrinks from './SearchDrinks';
import DrinkList from './DrinkList';
import FavouriteDrinks from './FavouriteDrinks';
import '../styles/style.css'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h2>Recipe Finder</h2>
        <SearchDrinks />
        <br />
        <br />
        <DrinkList />
        <FavouriteDrinks />
      </div>
    )
  }
}


export default App;