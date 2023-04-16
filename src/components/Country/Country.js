import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, population, region, area, flags } = props.country;
    console.log(props.country)
    return (
        <div className='country'>
            <h2>{name.common}</h2>
            <img src={flags.png} alt="Country Flag" />
            <p><small>Population: {population}</small></p>
            <p><small>Region: {region}</small></p>
            <p><small>Area: {area}</small></p>
        </div>
    );
};

export default Country;