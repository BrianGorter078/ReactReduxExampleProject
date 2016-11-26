import React, { Component } from "react";

import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class Booklist extends Component {

  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
        onClick={() => this.props.selectBook(book)}
        key={ book.title }
        className="list-group-item">
        { book.title }
        </li>
      )
    });
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        { this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //Whatever is returned will show up as props inside of Booklist
  return {
    books: state.books
  };
}

//Anything returned from this function will end up as props on the Booklist container
function mapDispatchToProps(dispatch){
  //Whenever selectBook is called, the result should be passed to all our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//Promote a Component to a Container
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);
