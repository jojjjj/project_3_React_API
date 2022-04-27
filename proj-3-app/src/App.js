import React, { useState } from 'react'
import './styles/App.css'
import OwenWow from './components/OwenWow'

const App = () => {
  const [displayWow, setDisplayWow] = useState(false)

  const toggleWow = () => {
      if (displayWow === false) {
        setDisplayWow(true)
      } else if (displayWow === true) {
        setDisplayWow(false)
      }
  }

  return (
    <div className="App">
      <main>
        <div className="wow-container">
          <p>The actor Owen Wilson is Ever since Wilson said "wow" in his feature film debut in 1996's Bottlerocket, 
            he has gone on to say the word in 27 different movies for a total of 81 times. Midnight in Paris holds
            the record for a whopping seven times.</p>
          {displayWow === false ? 
          <h2>Are you ready for WOW?</h2>
          :
          <OwenWow displayWow={displayWow} />}
        </div>
        <button onClick={toggleWow}>{displayWow === false ? "New Wow" : "Clear Wow"}</button>
      </main>
      <header className="owen-header"></header>
    </div>
  )
}

export default App
