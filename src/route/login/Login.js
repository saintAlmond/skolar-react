import React, {useCallback, useState} from 'react';
import Paper from "@material-ui/core/Paper";
import './Login.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useAuthLogin} from "../../contexts/auth/authContext";
import Typography from "@material-ui/core/Typography";


export const LoginLayout = () => {
  const login = useAuthLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const handleChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, [setEmail]);
  const handleChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, [setPassword]);
  const setErrorTrue = useCallback(() => setError(true), [setError]);
  const handleClick = useCallback(() => {
    login({email, password, onError: setErrorTrue})
  }, [email, password, login, setErrorTrue]);
  return (
    <div className="LoginPage">
      <div className="LoginBox">
        <Paper>
          <div className="LoginForm">
            <h2>Login</h2>
            <TextField onChange={handleChangeEmail} value={email} type="email" label="Email" />
            <TextField onChange={handleChangePassword} value={password} type="password" label="Password" />
            {error && <Typography>Can not login :(</Typography>}
            <Button disabled={email === '' && password === ''} onClick={handleClick}>Go</Button>
          </div>
        </Paper>
      </div>
    </div>)

}
