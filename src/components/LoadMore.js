import React, { Component } from 'react';
import Loading  from './Loading';

class LoadMore extends React.Component{

  constructor() {
    super();
  }
  getLoad(){
    let load=null;
    if (this.props.fetching) {
      load = (<Loading/>);
    }
    else {
      load = (
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
    return load;
  }

  render(){
    return(
      <div>
        {this.getLoad()}
      </div>

    );
  }

}

export default LoadMore;
