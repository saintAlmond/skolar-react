import React from 'react';
import {CourseRoute} from "./courses";
import {EditionRoute} from './editions';

export const AppRoutes = () => {
  return (<>
    <CourseRoute />
    <EditionRoute />
    </>);
}
