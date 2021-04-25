import React from 'react';
import {ManageProvider} from './ManageContext';
import LessonForm from './LessonForm';
import LessonManage from './LessonManage';
const Manage = () =>{
    return(
        <ManageProvider>
            <LessonManage/>
        </ManageProvider>
    )
}
export default Manage;