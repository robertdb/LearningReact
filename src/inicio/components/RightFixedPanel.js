import React, { Component } from 'react';
import { getArtists } from "../../data";
class RightPanel  extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render(){
    return (
      <div>
        <h2 className="myArtistsTitle">
          Mis Artistas (0)
        </h2>
        <ul className="myArtistsList" />
      </div>
    );
  }
}

export default RightPanel;
