"use strict"
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getBooks} from '../../actions/booksActions'


class BooksList extends React.Component{

	componentDidMount(){
		//dispatch an action
		this.props.getBooks()
	}

	render(){
		const BooksList = this.props.books.map(function(booksArr){
			return (
				<div key={booksArr.id}>
					<h2>{booksArr.title}</h2>
					<h2>{booksArr.description}</h2>
					<h2>{booksArr.price}</h2>
				</div>
			)
		})

		return(
			<div>
				<h1>HELLO REACT COMPONENT</h1>
				{BooksList}
			</div>
		);
	}
	
}
function mapStateToProps(state){
	return {
		books: state.books.books
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getBooks: getBooks
	}, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(BooksList);