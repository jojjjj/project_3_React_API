import './styles/App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ArtList from './components/ArtList'

const App = () => {
  const [artworks, setArtworks] = useState([])

  useEffect(()=> {
    const getArtworks = async () => {
      const res = await axios.get("https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Soft Edge-Hard Edge portfolio")
      // setArtworks(res.data.results)
      console.log(res)
    }
    getArtworks()
  }, [])
  return (
    <div className="App">
      <h1 className="title">Josef Albers: Color Study</h1>
      <ArtList artworks={artworks} />
    </div>
  );
}

export default App;
