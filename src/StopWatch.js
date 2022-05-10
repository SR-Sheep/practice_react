import React, { useRef, useState } from "react";
import './StopWatch.css';

function StopWatch(){
    //ref 객체
    const timeRef = useRef(null);
    //start 작동 여부 판별할 state
    const [isStartOperation,setIsStartOperation]=useState(false);
    //경과 시간 state
    const [count,setCount]=useState(0);
    
    //start 버튼 작동
    const startHandler=()=>{
        //start 작동 안했다면
        if(!isStartOperation){
            //start 작동 체크
            setIsStartOperation(true);
            //ref 객체에 interval 설정 
            timeRef.current = setInterval(()=>{
                //interval에서 count 증가
                setCount((x)=>x+1);
            }
            //100 ms 마다
            ,100
            );
        }
    }

    //정지
    const stopHandler=()=>{
        //start 작동 false 체크
        setIsStartOperation(false);
        //ref 객체에 interval 정지
        clearInterval(timeRef.current);
    }
    //리셋
    const resetHandler=()=>{
        stopHandler();
        setCount(0);
    }

    return(
        <div className="stopwatch">
            <div className="stopwatch_title">
                스톱워치
            </div>
            <div className="timer">
            {parseInt(count/10/60/60,10)}:{parseInt(count/10/60%60,10)}:{parseInt(count/10%60,10)}.{parseInt(count%10,10)} 초            
            </div>
            <div className="button_wrap">
                <button onClick={startHandler}>Start</button>
                <button onClick={stopHandler}>Stop</button>
                <button onClick={resetHandler}>Reset</button>
            </div>
        </div>
    )
}

export default StopWatch;