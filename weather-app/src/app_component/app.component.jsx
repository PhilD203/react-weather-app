import React from 'react';

const Weather = (props) => {
    return (
        <div className="container">
            <div className="cards">
                <h1>{props.city}, {props.country}</h1>
            </div>
            <h5 className="py-4">
                <i className="wi wi-day-sunny display-1"></i>
            </h5>
            <h1 className="py-2">
                25&deg;
            </h1>
            {/**show max and min temp */}
            {minMaxTemp(24,19)}
            <h4 className="py-3">Slow Rain</h4>

        </div>
    );
};

function minMaxTemp(min, max){
    return(
        <h3>
            <span className="span px-4">{min}&deg;</span>
            <span className="span px-4">{max}&deg;</span>
        </h3>
    )
}

export default Weather; 