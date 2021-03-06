import React from 'react';
import './card.style.css';

export const Card = (props) => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`} alt="monsters" className="" />
            <h1 className="">{props.monsters.name}</h1>
            <p className="">{props.monsters.email}</p>
        </div>
    )
} 