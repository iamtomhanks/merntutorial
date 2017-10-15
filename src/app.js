"use strict"
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import reducers from './reducers/index';
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

// STEP 1 create the store
const middleware = applyMiddleware(logger());
const store = createStore(reducers, middleware);



 

import BooksList from './components/pages/booksList'

render(
	<Provider store={store}>
		<BooksList />
	</Provider>, document.getElementById('app')
)

// STEP 2 create and dispatch actions
// store.dispatch(postBooks(
	// [
	//  	{
	// 		 id: 1,
	// 		 title:'this is the book title',
	// 		 description: 'this is the book',
	// 		 price: 33.33
	//  	},
	//  	{
	// 		 id: 2,
	// 		 title:'this is the book2 title',
	// 		 description: 'this is the book2',
	// 		 price: 66.66
	// 	}
	// ]

// ))


// store.dispatch(deleteBooks(
// 	{id: 1}
// ))

// store.dispatch(updateBooks(
// 	{
// 	 	id: 2,
// 	 	title: 'UDPATED TITLE'
//   	}
// ))

// store.dispatch(addToCart([{id:1}]))