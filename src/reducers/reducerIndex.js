import { combineReducers } from 'redux';
import { SET_DRINKS, FAVOURITE_DRINK } from '../actions/action';

function drinks(state = [], action) {
  switch(action.type){
   case SET_DRINKS:
     return action.items;
    default:
      return state 
  }
}

function favouriteDrinks(state = [], action) {
  switch(action.type){
    case FAVOURITE_DRINK:
      state = [...state, action.drink]
      return state;
    default:
      return state;
  }

}

const rootReducer = combineReducers({ drinks, favouriteDrinks });

export default rootReducer;