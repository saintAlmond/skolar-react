import React, {useCallback, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import './CourseCreate.css';
import Button from "@material-ui/core/Button";
import {useEntityForCreate} from "../../../api/entities";
import {useHistory} from 'react-router-dom';

export const CourseCreate = () => {
  const createApi = useEntityForCreate('Course');
  const history = useHistory();
  const [fields, setFields] = useState({name:'', code:'', active:false, description:''});
  const handleClick = useCallback(() => {
    createApi(fields, () => history.push('/app/course/list'))
  }, [fields])
  return  (<div>
    <h2>Create Course</h2>
    <div className="CreateFormFields">
      <TextField onChange={e => setFields({...fields, name:e.target.value})} value={fields.name} type="text" label="Name" />
      <TextField onChange={e => setFields({...fields, code:e.target.value})} value={fields.code} type="text" label="Code" />
      <FormControlLabel
        control={<Switch size="small" checked={fields.active} onChange={e => setFields({...fields, active:!fields.active})} />}
        label="Active"
      />
      <TextField onChange={e => setFields({...fields, description:e.target.value})} value={fields.description} type="text" rows={4} label="Description" multiline />
      <Button onClick={handleClick}>Create</Button>
    </div>
  </div>)
};
