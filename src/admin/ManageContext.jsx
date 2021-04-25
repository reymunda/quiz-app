import React,{useState,useContext,createContext} from 'react';
import axios from 'axios';
export const ManageContext = createContext()
export const ManageProvider = props => {
    const [optionA,setOptionA] = useState(null)
    const [optionB,setOptionB] = useState(null)
    const [optionC,setOptionC] = useState(null)
    const [optionD,setOptionD] = useState(null)
    const [addLesson,setAddLesson] = useState({
        id: null,
        text: "",
        option: [
            {
            answer: "",
            isCorrect: true
            },
            {
            answer: "",
            isCorrect: false
            },
            {
            answer: "",
            isCorrect: false
            },
            {
            answer: "",
            isCorrect: false
            }
        ]
        })
        const [Lesson,setLesson] = useState([])
    return(
        <>
            <ManageContext.Provider value={[optionA,setOptionA,optionB,setOptionB,optionC,setOptionC,optionD,setOptionD,addLesson,setAddLesson,Lesson,setLesson]}>
                {props.children}
            </ManageContext.Provider>
        </>
    )
}

export default ManageContext;