export const SET_DRINKS = 'SET_DRINKS';
export const FAVOURITE_DRINK = 'FAVOURITE_DRINK';

export function setDrinks(items) {
  return {
    type: SET_DRINKS,
    items
  }
}

export function favouriteDrink(drink) {
  return {
    type: FAVOURITE_DRINK,
    drink: drink
  }
}