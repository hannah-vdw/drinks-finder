import React, { Component } from 'react';
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setDrinks } from '../actions/action'

class SearchDrinks extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: '',
      category: ''
    }
  }


  search() {
    let { ingredients, category } = this.state;
    // const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredients}&c=${category}`

    // console.log('url', url)

    fetch (url, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(json => {
        this.props.setDrinks(json.drinks)
      })
    }
    
    // .then(json => console.log('recipes', json))
  render(){
    return (
      <Form>

        <FormGroup>
          <FormLabel> Ingredients </FormLabel>
          {' '}
          <FormControl 
            type='text'
            placeholder='Vodka'
            onChange={e => this.setState({ ingredients: e.target.value })}
          />
        </FormGroup>
        {' '}

        <FormGroup>
          <FormLabel> Type of drink </FormLabel>
          {' '}
          <FormControl 
            type='text'
            placeholder='Cocktail, ordinary drink, shot, punch, milk / float / shake'
            onChange={e => this.setState({ category: e.target.value })}
          />
        </FormGroup>
        {' '}

        <Button onClick={() => this.search()}>Submit</Button>
        <br />
        <br />
      </Form>
    )
  }

}

export default connect(null, { setDrinks })(SearchDrinks);