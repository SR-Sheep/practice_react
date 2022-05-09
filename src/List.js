import React from "react";
import { useState,useRef } from "react";

function User({user}){
    return(
        <div className="user">
            <b>{user.userName}</b>
            <span> {user.nickName}</span>
        </div>
    );
}

function List(){
    const users=[
        {
            id:1,
            userName : '김첨지',
            nickName : '깍두기'
        },
        {
            id:2,
            userName : '고길동',
            nickName : '홍길동'
        },
        {
            id:3,
            userName : '고감자',
            nickName : '사람임'
        }
    ]


    return(
        <div className="list">
            {users.map((user)=>(
                <User user={user} key={user.id}/>
            ))}
        </div>
    )
}

export default List;