import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {

    // const cardComponents  = robots.map((data)=>{
    //     return <Card key= {data.id} data = {data}/>
    // })

    return (
        <>
            {/* {cardComponents} */}
            {robots.map((data) => { return <Card key={data.id} data={data} /> })}
        </>
    )
}

export default CardList;