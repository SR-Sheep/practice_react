import { useRef, useState } from "react";
import AnimalList from "./AnimalList";
import CreateAnimal from "./CreateAnimal";
import './Animal.css';

const Animal=()=>{
    //input의 값
    const [inputs, setInputs] = useState({
        animalType : '',
        sound : ''
    });
    //변화, 입력값이 바뀌면 inputs state 업데이트
    const onChange=e=>{
        const {name,value}=e.target;
        setInputs({
            ...inputs,
            [name]:value
        });
    };

    //animals state, 동물과 울음소리가 들어있음
    const [animals, setAnimals] = useState([
        {
            id : 1,
            animalType : '고양이',
            sound : '야옹'
        },
        {
            id : 2,
            animalType : '강아지',
            sound : '멍멍'
        },
        {
            id : 3,
            animalType : '닭',
            sound : '꼬꼬댁'

        }
    ]);

    const {animalType,sound}=inputs;

    //다음 번호 idx
    const nextId = useRef(4);

    //animals state에 새롭개 생성된 animal 객체 추가
    const onCreate=()=>{
        const animal ={
            //nextId는 ref를 이용하여 랜더링되어도 변하지 않음
            id:nextId.current,
            animalType,
            sound
        }
        //input 초기화
        setInputs({
            animalType : '',
            sound : ''
        });

        //concat 연산자, 배열에 +함
        //setAnimals(animals.concat(animal));
        //spread 연산자, 배열을 복사하고 여기에 +시킴
        setAnimals([...animals,animal]);
        console.log(animals);
        //id 증가
        nextId.current++;
    };

    return(
        <div id="animalWrap">
            <div className="title">
                동물의 울음소리
            </div>
            <CreateAnimal
              animalType={animalType}
              sound={sound}
              onChange={onChange}
              onCreate={onCreate}
            />
            <AnimalList animals={animals}/>
        </div>
    )

}

export default Animal;