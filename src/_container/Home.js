import React, { Component } from "react";

import ArtistsPanel from '../components/ArtistsPanel';
import CollectionPanel from '../components/CollectionsPanel';

class Home extends Component {

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

export default Home;
