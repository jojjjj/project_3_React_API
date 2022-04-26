import React from 'react'

const ArtList = (props) => {

    return (
        <div className="grid">
            {
                props.artworks.map((artwork) => (
                    <div className="card" key={artwork.objectId}>
                        <img src={artwork.primaryImage} alt="josef albers artwork" />
                        <h3>{artwork.title}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default ArtList;