"use strict"
export function cartReducers(state={cart:[]}, action){
 	switch(action.type){
	 	case "ADD_TO_CART":
	 	return {...state.cart, ...action.payload};
	 	break;
	}
	return state
}	