import React, { useRef } from "react";

function Animal({animal,onRemove}){
    return(
        <li className="animal">
            <span>{animal.id} : </span>
            <b>{animal.animalType}</b>
            <span> {animal.sound}</span>
            <button className="delete_button" onClick={()=>onRemove(animal.id)}>삭제</button>
        </li>
    );
}

function AnimalList({animals, onRemove}){

    const tmp=()=>{
        console.log({animals});
    }

    return(
        <ul>
            {animals.map((animal)=>(
                <Animal key={animal.id} animal={animal} onRemove={onRemove}/>
            ))}
        </ul>
    )
}

export default AnimalList;