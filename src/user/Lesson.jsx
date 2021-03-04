import React from 'react';
import {LessonProvider} from './LessonContext';
import LessonPage from './LessonPage';
import FinishLesson from './FinishLesson';
const Lesson = () =>{
    return(
        <LessonProvider>
            <LessonPage/>
        </LessonProvider>
    )
}
export default Lesson;