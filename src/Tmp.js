import React from "react";
import { useState, useEffect } from "react";

function Tmp(){
    let [임시, 임시변경] = useState('임시데이터');
    let [num, setNum] = useState(0);

    useEffect(()=>{
        console.log("컴포넌트 반환 전");
        return(
            console.log("컴포넌트 반환 후")
        )
    });


    return (
        <div onClick={()=>{
            console.log("증가");
            setNum(num + 1)
            }}>
            {임시}{num}
        </div>
    );
}

export default Tmp;