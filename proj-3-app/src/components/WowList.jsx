import React from 'react'

const WowList = (props) => {

    return (
        <div>
            {
                props.wows.map((wow) => (
                    <div className="card" key={wow.audio}>
                        <h3>The First Wow: "{wow.full_line}"</h3>
                        <iframe
                            src={wow.video["480p"]}
                            title="Owen Wilson Wow Video"
                            frameBorder="0"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <p>Movie: {wow.movie}, Year: {wow.year}, Director: {wow.director} </p>
                    </div>
                ))
            }
        </div>
    )
}

export default WowList