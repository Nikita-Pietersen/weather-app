import React from "react";

const Info = props => (
        <form onSubmit={props.Weather}>
            <input type='text' name="city" placeholder="city"></input>
            <input type='text' name="country" placeholder="country"></input>
            <button>Search</button>
        </form>
    )

export default Info;