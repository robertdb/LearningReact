import React, { Component } from 'react';
import ArtistsList from './Artist'



export default class CollectionPanel extends Component {
  render() {

    function ArtistImage({ size, artist }) {
      const image = artist.images
        .sort((a, b) => a.width - b.width)
        .find(i => i.width >= size);
      const imageUrl = image ? `url('${image.url}')` : null;

      return (
        <div
          className="artistImage"
          style={{
            width: size,
            height: size,
            borderRadius: size,
            backgroundImage: imageUrl
          }}
        />
      );
    }

    function CollectionItem({ artist, onSelect }) {
      return (
        <div
          className="smallArtist"
          onClick={() => {
            onSelect(artist);
          }}
        >
          <ArtistImage size={50} artist={artist} />
          <div className="smallArtistName">{artist.name}</div>
        </div>
      );
    }

    //const { artists = [] } = this.props;
    const artists = this.props.artists;
    return (
      <div>
        <h2 className="myArtistsTitle">
          Mis Artistas ({this.props.artists.length})
        </h2>

        <ul className="myArtistsList">
          {artists.map(artist =>
            <li key={artist.id} className="myArtistsListItem">
              <CollectionItem
                artist={artist}
                onSelect={this.props.onSelectArtist}
              />
            </li>
          )}
        </ul>
      </div>
    );
  }
}
