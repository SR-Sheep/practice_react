import React from "react";
import UpdateAnimal from "./UpdateAnimal";

function Animal({animal,onRemove,toEditMode}){

    return(
        <li className="animal">
            <span>{animal.id} : </span>
            <b>{animal.animalType}</b>
            <span> {animal.sound}</span>
            <button
                className="update_button"
                onClick={()=>
                    toEditMode(animal.id)
                }>수정
            </button>
            <button className="delete_button" onClick={()=>onRemove(animal.id)}>삭제</button>
        </li>
    );
}



function AnimalList({animals, onRemove,toEditMode,setAnimals}){
    return(
        <ul>
            {animals.map((animal)=>(
                animal.mode?
                <UpdateAnimal
                    key={animal.id}
                    animal={animal}
                    animals={animals}
                    setAnimals={setAnimals} 
                />:
                <Animal
                    key={animal.id}
                    animal={animal}
                    onRemove={onRemove}
                    toEditMode={toEditMode}
                />
            ))}
        </ul>
    )
}

export default AnimalList;