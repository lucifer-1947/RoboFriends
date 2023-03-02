import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {

    // const cardComponents  = robots.map((data)=>{
    //     return <Card key= {data.id} data = {data}/>
    // })

    // if(true){
    //     throw new Error("OOps something went weong")
    // }
    return (
        <>
            {/* {cardComponents} */}
            {robots.map((data) => { return <Card key={data.id} data={data} /> })}
        </>
    )
}

export default CardList;