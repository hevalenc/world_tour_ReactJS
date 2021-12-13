import React from "react";

export default function Info (props) {
    
    const infoCard = props.dictionary.map((word) => 
        <div key={word.id}>
            <h2>{word.country}</h2>
            <p>Continent: {word.continent}</p>
            <p>Official language: {word.language}</p>
            <p>Total of trips: {word.trips}</p>
            <p>The first trip was in: {word.first_trip}</p>
            <p>The last trip was in: {word.last_trip}</p>
        </div>
    )
    
    return (
        <div>
            {infoCard}
        </div>
    )
    
}
