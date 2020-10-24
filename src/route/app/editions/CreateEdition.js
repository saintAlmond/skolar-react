import React, {useCallback, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import {useEntityForCreate} from "../../../api/entities";
import {useHistory} from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export const EditionCreate = () => {
  const createApi = useEntityForCreate('Edition');
  const history = useHistory();
  const [fields, setFields] = useState({ code:'', startDate:"", endDate:''});
  const handleClick = useCallback(() => {
    createApi(fields, () => history.push('/app/edition/list'))
  }, [fields])
  return  (<div>
    <h2>Create Edition</h2>
    <div className="CreateFormFields">
  

      <TextField onChange={e => setFields({...fields, code:e.target.value})} value={fields.code} type="text" label="Code" />



      <TextField onChange={e => setFields({...fields, startDate:e.target.value})} value={fields.startDate} type="text" label="startDate" />
      
     
      <TextField onChange={e => setFields({...fields, endDate:e.target.value})} value={fields.endDate} type="text" rows={4} label="endDate" multiline />
      <Button onClick={handleClick}>Create</Button>
    </div>
  </div>)
};

