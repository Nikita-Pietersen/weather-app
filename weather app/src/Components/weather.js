import React from "react";

const weather = props => (
        <div>
            { 
                props.city && props.country && props.temperature && props.humidity && props.description
                &&
                <p>
                    Temp : {props.temperature} <br></br>
                    Location : {props.city},{props.country}<br></br>
                    Humidity : {props.humidity}<br></br>
                    Conditions : {props.description}<br></br>
                </p>  
            }
            {
                props.error && 
                <p>
                    {props.error}
                </p>
            }

        </div>
)

export default weather;