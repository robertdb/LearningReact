import React, { Component } from 'react';

function Artist({ artist, selected, onSelect }) {

  const artistImage = artist.images[0]? artist.images[0].url:null;

  return(
    <div
      onClick={() => {
        onSelect(artist);
      }}
      className={`artist ${selected ? 'isSelected' : ''}`}>
      <div
        className="artistImage"

        style={{
          width: 200,
          height: 200,
          borderRadius: 200,
          backgroundImage:`url('${artistImage}'`
        }}
      />
      <span className="artistName">{artist.name}</span>
      {/* ... */}
    </div>
  );
}

export default Artist;
