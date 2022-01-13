import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrinkItem from './DrinkItem';

class DrinkList extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <div className='drinks'>
        <h4>Drinks</h4>
        <br />
        {
          this.props.drinks.map(drink => {
            return (
              <DrinkItem 
                key={drink.idDrink} 
                drink={drink}
                favouriteButton={true} />
            )
          })
        }
      </div>  
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(DrinkList);