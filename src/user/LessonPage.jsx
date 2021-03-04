import React,{useState,useContext} from 'react';
import {LessonContext} from './LessonContext';
import FinishLesson from './FinishLesson';
import './LessonPage.css';
const LessonPage = () => {
    const [count,setCount,correct,setCorrect,point,setPoint,user,setUser] = useContext(LessonContext) 
    let [isFinish,setIsFinish] = useState(false)
    const questions = [
        {
            id: 1,
            text : "Apa ibukota Indonesia?",
            option: [
                {answer:"Jakarta",isCorrect: true},
                {answer:"Bandung",isCorrect: false},
                {answer:"Medan",isCorrect: false},
                {answer:"Yogyakarta",isCorrect: false}
            ]
        },
        {
            id: 2,
            text : "Berikut bahasa merupakan bahasa pemrograman,kecuali",
            option: [
                {answer:"Javascript",isCorrect: false},
                {answer:"Phyton",isCorrect: false},
                {answer:"C++",isCorrect: false},
                {answer:"HTML",isCorrect: true}
            ]
        },
        {
            id: 3,
            text : "Pulau paling timur di Indonesia",
            option: [
                {answer:"Sabang",isCorrect: false},
                {answer:"Miangas",isCorrect: true},
                {answer:"Merauke",isCorrect: false},
                {answer:"Yogyakarta",isCorrect: false}
            ]
        },
        {
            id: 4,
            text : "Lagu kebangsaan Indonesia",
            option: [
                {answer:"Indonesia Raya",isCorrect: true},
                {answer:"Ampar-ampar Pisang",isCorrect: false},
                {answer:"Manuk Dadali",isCorrect: false},
                {answer:"Desaku",isCorrect: false}
            ]
        }
    ]
    const questionHandler = (event) => {
        console.log(event)
        if(event.isCorrect === true){
            setPoint(point+1)
        }
        user[0].point = point
        if(count+1 < questions.length){
            setCount(count+1)
        }else{
            setIsFinish(true)
        }
    }
    return (
        <>
          <div className="container">
            {
                isFinish ? <FinishLesson/> : (
             <>
                <h1>Question {questions[count].id}/4</h1>
                <p>{questions[count].text}</p>
                <div className="question">
                    {
                        questions[count].option.map(e =>{    
                            return <button onClick={()=>{
                                questionHandler(e)
                            }}>{e.answer}</button>
                                
                        })
                    }
                </div>
             </>
                )
            }   
          </div> 
        </>
    )    
}

export default LessonPage;