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
          <h1>Wow!</h1>
          {displayWow === false ? 
          <h2>Need some wow? Look no further.</h2>
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
