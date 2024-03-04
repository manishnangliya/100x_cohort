import React, { useEffect, useState } from "react";
import { Cards } from "./Cards";


const MyBusinessCardPage = React.memo(function MyBusinessCardPage(props){
    return <>
        {props.cards.map((card)=>{
                return <Cards  key = {card._id} fetchData = {props.fetchData} card = {card}></Cards>
        })}
    </>
});

export { MyBusinessCardPage};