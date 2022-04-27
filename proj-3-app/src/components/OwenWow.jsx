import React, { useState, useEffect } from 'react'
import axios from 'axios'

const OwenWow = (displayWow) => {
    const [wow, setWow] = useState('')
    const [wowDetails, setWowDetails] = useState('')

    useEffect(() => {
      const getOwenWow = async () => {
        const res = await axios.get("https://owen-wilson-wow-api.herokuapp.com/wows/random")
            console.log(res)
            setWow(res.data[0].video["480p"])
            setWowDetails(res.data)
      }
      getOwenWow()
    }, [displayWow])

    // const getOwenWow = async () => {
    //     try {
    //     const res = await axios.get("https://owen-wilson-wow-api.herokuapp.com/wows/random")
    //         console.log(res)
    //         setWow(res.data[0].video["720p"])
    //     } catch(err) {
    //       console.log(err)
    //     }
    //   }

    // useEffect(() => {
    //     getOwenWow();
    // }, [])

    return (
      <div className="details">
        <iframe
          // width="500"
          // height="400"
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