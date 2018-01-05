import React, { Component } from "react";
import { getArtists } from "../data";

import LeftPanel from './components/LeftPanel';
import RightFixedPanel from './components/RightFixedPanel';
import ArtistsPanel from './components/ArtistsPanel';
import CollectionPanel from './components/CollectionsPanel';

const showEmpty = false;


class App extends Component {

  constructor() {
    super();
    this.state = {
      selectedArtists: []
    };

    this.handleSelectArtist = this.handleSelectArtist.bind(this);
  }

  handleSelectArtist(artist) {
    const without = this.state.selectedArtists.filter(a => a.id !== artist.id);
    if (without.length !== this.state.selectedArtists.length) {
      this.setState({
        selectedArtists: without
      });
    } else {
      this.setState({
        selectedArtists: this.state.selectedArtists.concat(artist)
      });
    }
  }

  render() {
    if (showEmpty) {
      return (
        <div>
          <LeftPanel />
          <RightFixedPanel />
        </div>
      );
    }

    return (
      <div>
        <div className="leftPanel">
          <ArtistsPanel
            selectedArtists={this.state.selectedArtists}
            onSelectArtist={this.handleSelectArtist}

          />
        </div>
        <div className="rightFixedPanel">
          <CollectionPanel
            artists={this.state.selectedArtists}
            onSelectArtist={this.handleSelectArtist}
          />
        </div>
      </div>
    );
  }
}

export default App;
