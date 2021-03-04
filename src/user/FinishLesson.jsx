import React,{useContext} from 'react';
import {LessonContext} from './LessonContext';
import './FinishLesson.css';
const FinishLesson = () => {
    const [count,setCount,correct,setCorrect,point,setPoint,user,setUser] = useContext(LessonContext) 
    return(
        <>
            <p class="finish">Your points are {point} out of 4</p>
        </>
    )
}

export default FinishLesson;