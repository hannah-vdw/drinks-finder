import React, { Component } from "react";
import { connect } from 'react-redux';
import DrinkItem from "./DrinkItem";

class FavouriteDrinks extends Component {
  render() {
    return ( 
      <div className="favourite-drinks">

        <h4>Favourite Drinks</h4>
        <br />
        {
          this.props.favouriteDrinks.map((drink, index) => {
            return (
              <DrinkItem 
                key={index} 
                drink={drink}
                favouriteButton={false} />
            )
          })  
        }

      </div>   
    )
  }
}

function mapStateToProps(state) {
  return {
    favouriteDrinks: state.favouriteDrinks
  }
}

export default connect(mapStateToProps, null)(FavouriteDrinks);