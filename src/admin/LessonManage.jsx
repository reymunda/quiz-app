import React,{useState,useContext,useEffect} from 'react';
import './LessonManage.css'
import axios from 'axios';
import LessonForm from './LessonForm';
import {ManageContext} from './ManageContext';
const LessonManage = () => {
    const [isLoading,setIsLoading] = useState(true)
    const [optionA,setOptionA,optionB,setOptionB,optionC,setOptionC,optionD,setOptionD,addLesson,setAddLesson,Lesson,setLesson] = useContext(ManageContext)
    const getAPI = () => {
        axios.get(`http://localhost:3001/lesson`)
            .then(res => {
                console.log(res.data)
                setLesson([...res.data])
                setIsLoading(false)
            })
    }
    useEffect(() => {
        getAPI()
    },[])
    const deleteHandler = (event) =>{
        let id = event
        console.log(id)
        axios.delete(`http://localhost:3001/lesson/${id}`)
            .then(() =>{
                getAPI()
            })
    }
    const editHandler = (event) => {
        console.log(event.id)
        setAddLesson({
            id: event.id,
            text: event.text
        })
        setOptionA(event.option[0].answer)
        setOptionB(event.option[1].answer)
        setOptionC(event.option[2].answer)
        setOptionD(event.option[3].answer)
    }
    return(
        <>
                    <LessonForm/>
            {!isLoading && (
                <>
                    <h1>Lesson Manage</h1>
                    <div className="container">
                        <button>Add Lesson</button>
                        <table border="1" cellSpacing="0" width="100%">
                            <tr>
                                <th>No</th>
                                <th>Title</th>
                                <th>Manage</th>
                            </tr>
                            {
                                Lesson.map(data =>{
                                    return (
                                        <>
                                            <tr>
                                                <td>{data.id}</td>
                                                <td>{data.text}</td>
                                                <td>
                                                    <button onClick={() => {
                                                        editHandler(data)
                                                    }}>Edit</button>
                                                    <button onClick={() => {
                                                        deleteHandler(data.id)
                                                    }}>Delete</button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </table>
                    </div>
                </>
            )}
        </>
    )
}

export default LessonManage;