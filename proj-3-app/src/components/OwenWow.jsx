import React, { useState, useEffect } from 'react'
import axios from 'axios'

const OwenWow = (displayWow) => {
    const [wow, setWow] = useState('')

    useEffect(() => {
      const getOwenWow = async () => {
        const res = await axios.get("https://owen-wilson-wow-api.herokuapp.com/wows/random")
            console.log(res)
            setWow(res.data[0].video["480p"])
      }
      getOwenWow()
    }, [displayWow])

    return (
      <div className="details">
        <iframe
          src={wow}
          title="Owen Wilson Wow Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    )
  }
  
  export default OwenWow