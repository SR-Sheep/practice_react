import { useRef, useState } from "react";
import AnimalList from "./AnimalList";
import CreateAnimal from "./CreateAnimal";
import './Animal.css';

const Animal=()=>{
    //inputs state, 입력
    const [inputs, setInputs] = useState({
        animalType : '',
        sound : '',
        mode : false
    });

    //animals state, 동물과 울음소리가 들어있음
    const [animals, setAnimals] = useState([
        {
            id : 1,
            animalType : '고양이',
            sound : '야옹',
            mode : false
        },
        {
            id : 2,
            animalType : '강아지',
            sound : '멍멍',
            mode : false
        },
        {
            id : 3,
            animalType : '닭',
            sound : '꼬꼬댁',
            mode : false

        }
    ]);

    //변화, 입력값이 바뀌면 inputs state 업데이트
    const onChange=e=>{
        const {name,value}=e.target;
        setInputs({
            ...inputs,
            [name]:value
        });
    };
    
    const {animalType,sound}=inputs;

    //다음 번호 idx
    const nextId = useRef(4);

    //animals state에 새롭개 생성된 animal 객체 추가
    const onCreate=()=>{
        const animal ={
            //nextId는 ref를 이용하여 랜더링되어도 변하지 않음
            id:nextId.current,
            animalType,
            sound,
            mode:false
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
        //id 증가
        nextId.current++;
    };

    //animals state에 데이터 삭제
    const onRemove=(id)=>{
        //id가 일치하지 않은 animals의 데이터만 animals로 다시 세팅
        setAnimals(animals.filter(animal=>animal.id!==id));
    }

    //수정모드 전환
    const toEditMode=(id)=>{
        //id 일치하지 않으면 mode false, 일치하면 mode true
        setAnimals(animals.map(animal=>animal.id===id?{...animal,mode:true}:{...animal,mode:false}));
    }


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
            <AnimalList 
                animals={animals}
                onRemove={onRemove}
                toEditMode={toEditMode}
                setAnimals={setAnimals}/>
        </div>
    )

}

export default Animal;