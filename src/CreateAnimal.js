import React from "react"

const CreateAnimal=({animalType, sound, onChange, onCreate})=>{
    return(
      <div id="inputWrap">
        <div className="input_box">
            <input
              name="animalType"
              placeholder="동물 종류를 입력하세요"
              onChange={onChange}
              value={animalType}
            />
        </div>
        <div className="input_box">
            <input
              name="sound"
              placeholder="동물 울음소리를 입력하세요"
              onChange={onChange}
              value={sound}
            />
        </div>
        <div className="button_wrap">
          <button onClick={onCreate}>등록</button>
        </div>
      </div>
    )
}

export default CreateAnimal;

