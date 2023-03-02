import React from "react";

const Card = (props)=>{
    return (
        <div className="tc bg-light-green dib br2 pa2 ma2 grow">
            <img src={`https://robohash.org/${[props.data.id]}?size=200x200`} alt="nobe"/>
            <div>
                <h4>{props.data.name}</h4>
                <a href={`mailto:+${props.data.email}`}>{props.data.email}</a>
            </div>
        </div>
    )
}

export default Card;