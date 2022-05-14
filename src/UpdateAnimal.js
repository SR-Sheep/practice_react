import React, { useState } from "react"

const UpdateAnimal = ({animal, animals,setAnimals}) => {

  const [updateAnimal, setUpdateAnimal]=useState(animal);

  //수정 시 사용할 input state
  const onChangeInUpdate=(e)=>{
    const {name,value}=e.target;
    setUpdateAnimal({
        ...updateAnimal,
        [name]:value
    });
  };

  const onClickForUpdate=()=>{
    // console.log(updateAnimal);
    setAnimals(animals.map(ani=>(
        ani.id===animal.id?{...updateAnimal,mode:false}:ani
    )));
  }

    return (
        <div id="updateInputWrap">
            <div className="inline_box">
                <div className="input_box">
                    <input
                     onChange={onChangeInUpdate}
                     name="animalType"
                     placeholder="동물 종류를 입력하세요"
                     defaultValue={animal.animalType}/>
                </div>
                <div className="input_box">
                    <input
                     onChange={onChangeInUpdate}
                     name="sound"
                     placeholder="동물 울음소리를 입력하세요"
                     defaultValue={animal.sound}/>
                </div>
            </div>
            <div className="update_wrap inline_box">
                <button onClick={onClickForUpdate}>수정</button>
            </div>
        </div>
    )
}

export default UpdateAnimal;
