import React,{useState,useContext,useEffect} from 'react';
import {LessonContext} from './LessonContext';
import FinishLesson from './FinishLesson';
import axios from 'axios';
import './LessonPage.css';
const LessonPage = () => {
    const [quest,setQuest,count,setCount,correct,setCorrect,point,setPoint,user,setUser] = useContext(LessonContext) 
    let [isFinish,setIsFinish] = useState(false)
    const [isLoading,setIsLoading] = useState(true)
    // const questions = [
    //     {
    //         id: 1,
    //         text : "Apa ibukota Indonesia?",
    //         option: [
    //             {answer:"Jakarta",isCorrect: true},
    //             {answer:"Bandung",isCorrect: false},
    //             {answer:"Medan",isCorrect: false},
    //             {answer:"Yogyakarta",isCorrect: false}
    //         ]
    //     },
    //     {
    //         id: 2,
    //         text : "Berikut bahasa merupakan bahasa pemrograman,kecuali",
    //         option: [
    //             {answer:"Javascript",isCorrect: false},
    //             {answer:"Phyton",isCorrect: false},
    //             {answer:"C++",isCorrect: false},
    //             {answer:"HTML",isCorrect: true}
    //         ]
    //     },
    //     {
    //         id: 3,
    //         text : "Pulau paling timur di Indonesia",
    //         option: [
    //             {answer:"Sabang",isCorrect: false},
    //             {answer:"Miangas",isCorrect: true},
    //             {answer:"Merauke",isCorrect: false},
    //             {answer:"Yogyakarta",isCorrect: false}
    //         ]
    //     },
    //     {
    //         id: 4,
    //         text : "Lagu kebangsaan Indonesia",
    //         option: [
    //             {answer:"Indonesia Raya",isCorrect: true},
    //             {answer:"Ampar-ampar Pisang",isCorrect: false},
    //             {answer:"Manuk Dadali",isCorrect: false},
    //             {answer:"Desaku",isCorrect: false}
    //         ]
    //     }
    // ]
    const questionHandler = (event) => {
        console.log(event)
        if(event.isCorrect === true){
            setPoint(point+1)
        }
        user[0].point = point
        if(count+1 < quest.length){
            setCount(count+1)
        }else{
            setIsFinish(true)
        }
    }
    useEffect(() => {
        axios.get(`http://localhost:3001/lesson`)
        .then(res => {
            setQuest([...res.data])
            setIsLoading(false)
                console.log(quest)
                console.log(quest)
                console.log(quest)
                console.log(quest)
                console.log(quest)
                console.log(quest)

            })
    },[])
    return (
        <>
          <div className="container">
          {!isLoading && (
                <>
                    {isFinish ? (
                        <FinishLesson />
                    ) : (
                        <>
                            <h1>Question {quest[count].id}/{quest.length}</h1>
                            <p>{quest[count].text}</p>
                            <div className='question'>
                                {quest[count].option.map(e => {
                                    return (
                                        <button
                                            onClick={() => {
                                                questionHandler(e)
                                            }}
                                        >
                                            {e.answer}
                                        </button>
                                    )
                                })}
                            </div>
                        </>
                    )}
                </>
            )}
          </div> 
        </>
    )    
}

export default LessonPage;