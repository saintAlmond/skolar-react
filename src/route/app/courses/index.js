import React from 'react';
import {Route} from "react-router-dom";
import {CourseList} from "./CourseList";
import {CourseCreate} from "./CourseCreate";


export const CourseRoute = () => {

  return (
    <>
      <Route path="/app/course/list"><CourseList/></Route>
      <Route path="/app/course/create"><CourseCreate/></Route>
    </>);
};
