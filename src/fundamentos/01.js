// Modificar el siguiente código para que en lugar de escribir contenido del elemento
// con `innerHTML`, lo haga con ReactDOM.render.
//
// Para esto tenes que:
//
// 1. Convertir el HTML dentro del string a llamadas a React.createElement.
//    Recordá que podes usar variables para guardar los elementos de React a medida
//    que los vas convirtiendo.
// 2. Utilizar el resultado en `ReactDOM.render` junto con el `element` pasado como
//    parámetro.

import React from 'react';
import ReactDOM from 'react-dom';

// El siguiente export fue agregado para poder correr este ejercicio dentro del proyecto general.
export default function ejercicio1(element) {
  /*element.innerHTML = `
    <div class="artist">
      <div class="artistImage" style="width: 200px; height: 200px; border-radius: 200px; background-image: url('https://i.scdn.co/image/197cff807611777427c93258f0a1ccdf6b013b09');">
      </div>
      <span class="artistName">
        The Beatles
      </span>
      <span>
        3.443.835 Seguidores · british invasion, classic rock, merseybeat, protopunk, psychedelic rock, rock ·
        <a href="https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2" target="_blank" rel="noopener noreferrer" title="Abrir en Spotify">
          <img src="/spotify.svg" width="20" height="20" style="vertical-align: middle;" />
        </a>
      </span>
    </div>`;*/

    //var img = React.createElement('img',{src:'/spotify.svg" width="20" height="20" style="vertical-align: middle'},null)

    const el = React.createElement('div', { className: 'artist' },
          React.createElement('div', { className: 'artistImage', style: { width: 200, height: 200, borderRadius : 200, backgroundImage: "url('https://i.scdn.co/image/197cff807611777427c93258f0a1ccdf6b013b09')" }}, null),
          React.createElement('span', { className: 'artistName' },
            'The Beatles'),
            React.createElement('span', null, '3.443.835 Seguidores · british invasion, classic rock, merseybeat, protopunk, psychedelic rock, rock ·',
                    React.createElement('a',{href:"https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"},
                      React.createElement('img',{src:'/spotify.svg', style: { width: 20, height: 20, verticalAlign: 'middle' }},null)
                    ))
          );


  ReactDOM.render(el, element);
}
