import React from 'react';

const Weather = (props) => {
    return (
        <div className="container pt-4" >
            <div className="cards">
                <h1>{props.city}</h1>
            </div>
            <h5 className="py-4">
                <i className={`wi ${props.weatherIcon} display-1`}></i>
            </h5>
            {props.temp_celsius ? (<h1 className="py-2">{props.temp_celsius}&deg; </h1>) : null}
            {/**show max and min temp */}
            {minMaxTemp(props.temp_max, props.temp_min)}

            <h4 className="py-3">{props.description}</h4>

        </div>
    );
};

function minMaxTemp(min, max) {
    if (min && max) {
        return (
            <h3>
                <span className="span px-4">{min}&deg;</span>
                <span className="span px-4">{max}&deg;</span>
            </h3>
        )
    }
}

export default Weather; 