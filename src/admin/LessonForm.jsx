import React,{useState,useContext,useEffect} from 'react';
import './LessonForm.css';
import axios from 'axios';
import {ManageContext} from './ManageContext';
const LessonForm = () => {
        const [optionA,setOptionA,optionB,setOptionB,optionC,setOptionC,optionD,setOptionD,addLesson,setAddLesson,Lesson,setLesson] = useContext(ManageContext)
        const newOption = []
        const textHandler = (event) =>{
            setAddLesson({
                ...addLesson,
                text: event.target.value
        })
    }
    const optionHandlerA = (event) => {
        setOptionA(event.target.value)
    }
    const optionHandlerB = (event) => {
        setOptionB(event.target.value)
    }
    const optionHandlerC = (event) => {
        setOptionC(event.target.value)
    }
    const optionHandlerD = (event) => {
        setOptionD(event.target.value)
    
    }
    const submitHandler = e => {
        e.preventDefault()
        newOption.push(optionA,optionB,optionC,optionD)
        console.log(newOption)
        console.log(newOption)
        console.log(newOption)
        const jancok = [
            {
                answer: newOption[0],
                isCorrect: true
                },
                {
                answer: newOption[1],
                isCorrect: false
                },
                {
                answer: newOption[2],
                isCorrect: false
                },
                {
                answer: newOption[3],
                isCorrect: false
                }
        ]
        setAddLesson({
            ...addLesson,
            option: jancok
    })
        let inputLesson = {
            id: addLesson.id,
            text: addLesson.text,
            option: jancok
        }
        if(addLesson.id === null){
            axios.post(`http://localhost:3001/lesson`,inputLesson)
                .then(res => {
                    setAddLesson({
                        ...addLesson,
                        text: ""
                    })
                    setOptionA("")
                    setOptionB("")
                    setOptionC("")
                    setOptionD("")
                    console.log(addLesson.id)
                })
            }else{
                axios.put(`http://localhost:3001/lesson/${addLesson.id}`,inputLesson)
                    .then(res =>{
                        setAddLesson({
                            ...addLesson,
                            text: ""
                        })
                        setOptionA("")
                        setOptionB("")
                        setOptionC("")
                        setOptionD("")
                    })
            }
    }
    return(
        <>
            <div class="container-form">
                <form>
                    <label>Judul</label>
                    <br/>
                    <textarea onChange={textHandler} name="" id="" cols="50" rows="10" value={addLesson.text}></textarea>
                    <br/>
                    <label>Option</label>
                    <br/>
                    <input onChange={optionHandlerA} type="text" value={optionA}/>
                    <br/>
                    <input onChange={optionHandlerB} type="text" value={optionB}/>
                    <br/>
                    <input onChange={optionHandlerC} type="text" value={optionC}/>
                    <br/>
                    <input onChange={optionHandlerD} type="text" value={optionD}/>
                    <br/>
                    <button onClick={submitHandler}>Add</button>
                </form>
            </div>
        </>
    )
}

export default LessonForm;