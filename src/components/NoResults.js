import React, { Component } from 'react';

class NoResults extends React.Component {
  constructor() {
    super();
  }
  show() {
    let fetching=this.props.fetching;
    if (!fetching) {
      return (
        <h4><span className="noResults">No hay resultados.<br/>Intente nuevamente.</span></h4>
      );
    }
    return null;
  }

  render(){
    return (
      <div>
        {this.show()}
      </div>
    );
  }
}

export default NoResults;
