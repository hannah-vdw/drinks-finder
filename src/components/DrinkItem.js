import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { favouriteDrink } from '../actions/action';

class DrinkItem extends Component {

  constructor() {
    super();

    this.state = {
      favourited: false
    }
  }

  favourite(drink) {
    this.props.favouriteDrink(drink);
    this.setState({ favourited: true });
  }

  render() {
    let { drink } = this.props
    return(
      <div> 
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
        <a href={`https://www.google.co.uk/search?q=${drink.strDrink}`}>
          <h4>{drink.strDrink}</h4>
        </a>
        
        {
          this.props.favouriteButton ? 
            
            this.state.favourited === false ?           
              <div          
                onClick={() => this.favourite(drink)}
                className='star'>
                &#9734;
              </div> 
            : 
            <div
              className='star'>
              &#9733;
            </div> 
            
          :
          <div></div>
        }



       <br />
       <br />
      </div>
    )
  }

}

export default connect(null, { favouriteDrink })(DrinkItem);