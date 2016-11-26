import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class BookDetail extends Component{
  render(){
    if(!this.props.book){
      return(
        <div> Select a Book! </div>
      )
    }
    return(
      <div>
        <h3>{this.props.book.title} </h3>
        <div>{this.props.book.description}</div>
        <div>{this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //Whatever is returned will show up as props inside of Booklist
  return {
    book : state.activeBook
  };
}


export default connect(mapStateToProps)(BookDetail);
