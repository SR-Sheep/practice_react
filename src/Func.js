import React from "react";
import { useState,useRef } from "react";

function Func(){
    //선언
    const [inputs, setInputs]=useState({
        nickname : '',
        name : ''
    });
    //값 추출
    const {name,nickname} = inputs;

    //ref 선언
    const nameInput = useRef();

    //입력값 출력
    const onChange = (e)=>{
        const {value,name} = e.target; //타겟의 name과 value 가져오기
        // console.log(value + " " +name);
        setInputs({
            ...inputs, //state의 inputs 객체 복사
            [name]:value //name => value로 변경
        });
    }
    //입력값 리셋
    const onReset = ()=>{
        setInputs({
            name:'',
            nickname:''
        });
        //리셋 후 커서 위치 조정
        nameInput.current.focus();
    }

    return (
        <div className="func">
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <div className="print">
                <span>이름 : {name}</span>
                <p/>
                <span>닉네임 : {nickname}</span>
            </div>
            <button onClick={onReset}>초기화</button>
        </div>
    );
}

export default Func;