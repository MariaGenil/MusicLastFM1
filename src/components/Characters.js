import React from 'react'
import { useState } from 'react';


export default function Characters(props) {
  const {characters, setCharacters} = props;

  const resetCharacters =() => {
    setCharacters(null);
  }

  return (
    <div>
      <h1> Personajes </h1>
      <span className="back-home" onClick ={resetCharacters}>Volver a Home</span>
      <div className="container-characters">
        {characters.map((characters,index) => (
          <div className="character-container" key={index}>
            <div> 
              <img src={characters.image} alt={characters.name} />
            </div> 
            <div>
              <h3>{characters.name}</h3>
              <h6>
                {characters.status === "Alive" ?(
                  <> 
                  <span className="Alive" />
                  Alive
                  </>
                ): (
                  <>
                  <span className="dead"/>
                  Dead
                  </>
                )}
              </h6>
            <p>
              <span className="text-grey">Episodios - </span>
              <span>{characters.episode.length} </span>
            </p>

            <p>
              <span className="text-grey"> Especie - </span>
              <span>{characters.species}</span>
            </p>


            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick ={resetCharacters}>Volver al Home</span>
    </div>

  )
}

