import React from 'react'

const WowList = (props) => {

    return (
        <div className="grid">
            {
                props.wows.map((wow) => (
                    <div className="card" key={wow.movie}>
                        <h5>Title: {wow.movie}, Year: {wow.year}, Role: {wow.character} </h5>
                    </div>
                ))
            }
        </div>
    )
}

export default WowList