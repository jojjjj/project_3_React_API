import React from 'react'

const ArtList = (props) => {

    return (
        <div className="grid">
            {
                props.artworks.map((artwork) => (
                    <div className="card" key={artwork.objectId}>
                        <img src={artwork.primaryImage} alt="josef albers artwork" />
                        <h2>{artwork.title}</h2>
                        <h3>{artwork.artistDisplayName}</h3>
                        <h4>{artwork.objectEndDate}</h4>
                    </div>
                ))
            }
        </div>
    )
}

export default ArtList;