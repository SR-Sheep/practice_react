import React from "react";
import { useState, useEffect } from "react";

function Func(){
    const [text, setText]=useState('');
    //입력값 출력
    const onChange = (e)=>{
        e.preventDefault();
        console.log(e.target.value);
        setText(e.target.value);
    }
    //입력값 리셋
    const onReset = ()=>{
        setText('');
    }

    return (
        <div className="func">
            <input onChange={onChange} value={text}/>
            <div>
                <span>입력값 :</span>
                <span>{text}</span>
            </div>
            <button onClick={onReset}>초기화</button>
        </div>
    );
}

export default Func;