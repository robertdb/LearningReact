import React, { Component } from 'react';

class LoadMore extends React.Component{
  render(){
    return(

      <button
        type="button"
        className="loadMore"
        onClick={() => {
          this.props.handleLoadMoreChange(this.props.searchText,true);
        }}
      >
        Cargar más
      </button>
    );
  }

}

export default LoadMore;
