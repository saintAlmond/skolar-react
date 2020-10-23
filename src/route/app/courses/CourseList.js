import {useEntityBySearch} from "../../../api/entities";
import React from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {useHistory} from 'react-router-dom';
import './CourseList.css';

export const CourseList = () => {
  const courses = useEntityBySearch('Course');
  const history = useHistory();
  return (
    <>
      <div>
        <h2>Courses</h2>
        {courses?.map(course => <p>{course.name}</p>)}
      </div>
      <span className="CreateFab">
        <Fab color="primary" aria-label="add" onClick={() => history.push('/app/course/create')}>
          <AddIcon />
        </Fab>
      </span>
      </>);
};
