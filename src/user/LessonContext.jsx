import React,{useState,createContext} from 'react';

export const LessonContext = createContext();

export const LessonProvider = props => {
    let [count,setCount] = useState(0)
    let [correct,setCorrect] = useState(0)
    let [point,setPoint] = useState(0)
    let [user,setUser] = useState([
        {
            id: 1,
            name: "Reymunda",
            point: 0
        }
    ])
    return(
        <LessonContext.Provider value={[count,setCount,correct,setCorrect,point,setPoint,user,setUser]}>
            {props.children}
        </LessonContext.Provider>
    )
}