//import imageRickMorty from './img/rick-morty.png';
import imageMusic from './img/musica2.png';
import './App.css';
import { useState, useEffect } from 'react';
import Artists from './components/Artists';

function App() {
  const [artists, setArtists] = useState(null);
  const [search, setSearch] = useState('');
  const apiKey = '47fd8683c7bf38e1783af0d0d319ae5c'; // Tu clave de API

  // Realizamos la búsqueda de artistas
  const reqApi = async (query) => {
    try {
      const api = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${query}&api_key=${apiKey}&format=json`);
      const result = await api.json(); // Aquí obtenemos los datos de la API

      // Asegúrate de que los datos de la API estén correctamente procesados
      if (result.results.artistmatches.artist) {
        setArtists(result.results.artistmatches.artist); // Establecer los artistas encontrados
      } else {
        console.log('No se encontraron artistas');
      }
    } catch (error) {
      console.error('Error fetching data from Last.fm:', error);
    }
  };

  // Llamamos a la API cuando el valor de la búsqueda cambia
  useEffect(() => {
    if (search) {
      reqApi(search); // Solo hace la búsqueda si hay algo en el estado `search`
    }
  }, [search]);

  // Manejador para actualizar el estado de la búsqueda
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Manejador para el evento de envío del formulario de búsqueda
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    reqApi(search); // Realizar la búsqueda cuando el formulario es enviado
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Música</h1>

        {artists ? (
          <Artists artists={artists} setArtists={setArtists} />
        ) : (
          <>
            <img src={imageMusic} alt="Música" className="img-home" />
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Busca un artista"
              />
              <button type="submit" className="btn-search">Buscar</button>
            </form>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
