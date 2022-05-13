import React, { useRef } from "react";

function Animal({animal}){
    return(
        <li className="animal">
            <span>{animal.id} : </span>
            <b>{animal.animalType}</b>
            <span> {animal.sound}</span>
        </li>
    );
}

function AnimalList({animals}){

    const tmp=()=>{
        console.log({animals});
    }

    return(
        <ul>
            {animals.map((animal)=>(
                <Animal key={animal.id} animal={animal}/>
            ))}
        </ul>
    )
}

export default AnimalList;