import React from 'react';
import Manage from '../admin/Manage';
import Lesson from '../user/Lesson';
import {
    BrowserRouter,
    Route
  } from "react-router-dom";
const Routes = () => {
    return(
        <>
            <BrowserRouter>
                <Route path="/" exact component={Lesson}/>
                <Route path="/admin" exact component={Manage}/>
            </BrowserRouter>
        </>
    )
}

export default Routes;