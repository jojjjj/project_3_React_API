import React, { useEffect, useState } from 'react'
import './styles/App.css'
import OwenWow from './components/OwenWow'
import WowList from './components/WowList'
import axios from 'axios'

const App = () => {
  const [displayWow, setDisplayWow] = useState(false)
  const [wows, setWows] = useState([])

  const toggleWow = () => {
      if (displayWow === false) {
        setDisplayWow(true)
      } else if (displayWow === true) {
        setDisplayWow(false)
      }
  }

  useEffect(()=> {
    const getWows = async () => {
      const res = await axios.get("https://owen-wilson-wow-api.herokuapp.com/wows/ordered/0-0")
      setWows(res.data)
      console.log(res)
    }
    getWows()
  }, [])

  return (
    <div className="App">
      <main>
        <div className="wow-container">
          <p>The actor Owen Wilson is known for more than a crooked nose and his oscar-worthy performance in the 2001 classic, Zoolander.
            Ever since Wilson said "wow" in his feature film debut in 1996's Bottlerocket, 
            Hollywood's favorite troublemaker has gone on to say the word in 27 different movies for a total of 81 times. 
            Midnight in Paris holds the record for a whopping seven times.</p>
          {displayWow === false ? 
          <h2>Ready for Wilson's WOW?</h2>
          :
          <OwenWow displayWow={displayWow} />}
        </div>
        <button onClick={toggleWow}>{displayWow === false ? "Wow Me Please" : "Clear For More"}</button>
        <div className="first-wows">
          <WowList wows={wows} />
        </div>
      </main>
      <header className="owen-header"></header>
    </div>
  )
}

export default App
