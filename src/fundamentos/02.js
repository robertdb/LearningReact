// Modificar este código definiendo 3 componentes:
//
// 1. El componente `Artist` que encierra todo el div de clase "artist". Recibe
//    una prop `artist` que es el objeto definido dentro de `App`.
// 2. El componente `ArtistImage` que engloba el div con clase "artistImage". Recibe
//    como props el tamaño de la imagen (un número definido dentro de `App`) y la
//    url de la imagen del artista.
// 3. El componente `SpotifyLogo` que encierra el elemento imagen con el logo de
//    Spotify. Recibe como prop el tamaño del logo (un número definido dentro de
//    `App`).
//
// Al menos uno de los componentes debe ser de tipo clase y al menos uno debe ser
// de tipo función.

import React from 'react';

// El siguiente export fue agregado para poder correr este ejercicio dentro del proyecto general.
export default function Ejercicio2() {
  const artist = {
    artistName: 'The Beatles',
    followers: 3443835,
    genres: 'british invasion, classic rock, merseybeat, protopunk, psychedelic rock, rock',
    imageUrl: 'https://i.scdn.co/image/197cff807611777427c93258f0a1ccdf6b013b09',
    spotifyUrl: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"'
  };



  class Artist extends React.Component {
    render() {
    // Obtengo el mundo que me pasaron como prop, sino 'mundo' por default.
    const logoSize = 20;

    const image = {
      imageSize: 200,
      artistImageUrl:this.props.imageUrl
    }

    const artistImage =  React.createElement(ArtistImage,image);

    const spotifyLogo =  React.createElement(SpotifyLogo ,{logoSize:logoSize});

    return React.createElement('div', { className: 'artist' },
          artistImage,
          React.createElement('span', { className: 'artistName'},
            this.props.artistName
          ),
          React.createElement('span', null,
            this.props.followers,
            ' Seguidores · ',
            this.props.genres,
            ' · ',
            React.createElement('a', {
              href: this.props.spotifyUrl,
              target: '_blank',
              rel: 'noopener noreferrer',
              title: 'Abrir en Spotify'
            },
              spotifyLogo
            )
          )
        )
  }
  }
  function ArtistImage(props) {
    // Obtengo el mundo que me pasaron como prop, sino 'mundo' por default.
    const artistImage = props.artistImage || 200;

    return React.createElement('div',
            {
              className:'artistImage',
              style:{
                width: props.imageSize,
                height: props.imageSize,
                borderRadius: props.imageSize,
                backgroundImage: 'url("' + props.artistImageUrl + '")',
              }
            },null);

  }


  class SpotifyLogo extends React.Component {
    render() {
      // Obtengo el mundo que me pasaron como prop, sino 'mundo' por default.
      const mundo = this.props.mundo || 'mundo';
      return React.createElement('img',
                    {
                      src: "/spotify.svg",
                      width: this.props.logoSize,
                      height: this.props.logoSize,
                      style: { verticalAlign: 'middle' }
                    },null);
    }
  }

  return React.createElement(Artist,artist);

}
  /*return (
    React.createElement('div', { className: 'artist' },
      React.createElement('div', {
        className: 'artistImage',
        style: {
          width: imageSize,
          height: imageSize,
          borderRadius: imageSize,
          backgroundImage: 'url("' + artist.imageUrl + '")',
        }
      }),
      React.createElement('span', { className: 'artistName'},
        artist.name
      ),
      React.createElement('span', null,
        artist.followers,
        ' Seguidores · ',
        artist.genres,
        ' · ',
        React.createElement('a', {
          href: artist.spotifyUrl,
          target: '_blank',
          rel: 'noopener noreferrer',
          title: 'Abrir en Spotify'
        },
          React.createElement('img', {
            src: "/spotify.svg",
            width: logoSize,
            height: logoSize,
            style: { verticalAlign: 'middle' }
          })
        )
      )
    )
  )*/
