import React from 'react'
//import { useState } from 'react';
export default function Artists(props) {
  const {artists, setArtists} = props;

  const resetArtists =() => {
    setArtists(null);
  }

  return (
    <div>
      <h1>Artistas</h1>
      <span className="back-home" onClick={resetArtists}>Volver a Home</span>
      <div className="container-characters">
        {artists && artists.length > 0 ? (
          artists.map((artist, index) => (
            <div className="character-container" key={index}>
              <div>
                <h3>{artist.name}</h3>
                <a href={artist.url} target="_blank" rel="noopener noreferrer">Ver más</a>
                <p><strong>Oyentes:</strong> {artist.listeners}</p>
                {artist.image && artist.image[2] && (
                  <img src={artist.image['#text']} alt={artist.name} width="100" />
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron artistas.</p>
        )}
      </div>
      <span className="back-home" onClick={resetArtists}>Volver al Home</span>
    </div>
  );
}