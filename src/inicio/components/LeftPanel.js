import React, { Component } from 'react';

import SearchInput from './SearchInput';

class LeftPanel  extends React.Component {
  constructor() {
    super();
  }
  render(){
    return (
      <div className="leftPanel">
        <SearchInput/>
        <div className="centeredContent">
          <span className="noResults">
            No se encontraron resultados.<br />Intenta una nueva búsqueda.
          </span>
        </div>
      </div>
    );
  }
}

export default LeftPanel;
