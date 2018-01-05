import React, { Component } from 'react';
import Artist from './Artist'


function ArtistsList(props) {
  const artists = props.artists; // Por ahora los dejamos aquí, luego parametrizaremos.

  if (artists.length < 1) {
    return (<h1>No hay resultados</h1>);
  }
  return (
    <div className="artistsList">
     {props.artists.map((artist, key) => (
       <div key={artist.id} className="artistsListItem">
         <Artist
          artist={artist}
          selected={props.selectedArtists.some(a => a.id === artist.id)}
          onSelect={props.onSelectArtist}
        />
       </div>
     ))}
   </div>
  )
}

export default ArtistsList;
