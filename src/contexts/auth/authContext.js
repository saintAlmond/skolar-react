import React, {createContext, useState} from 'react';
import {useApiLogin} from "../../api/login";
const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

const initToken = localStorage.getItem('skolar-token');

export const AuthContextProvider = ({children}) => {
  const [token, setToken] = useState(initToken);
  return (<AuthContext.Provider value={{token, setToken}}>
    {children}
  </AuthContext.Provider>);
};
export const useAuthLogin = () => {
  const {setToken} = React.useContext(AuthContext);
  const doLogin = useApiLogin();
  return React.useCallback(({email,password, onSuccess, onError}) => {
    const onSuccessWrap = (data) => {
      setToken(data.token);
      localStorage.setItem('skolar-token', data.token);
      onSuccess();
    }
    doLogin({email, password, onSuccess: onSuccessWrap, onError })
  }, [setToken, doLogin]);
}
export const useAuth = () => {
   const {token, setToken} = React.useContext(AuthContext);

   return {
     token,
     removeToken: React.useCallback(() => {
       setToken(null);
       localStorage.removeItem('skolar-token');
     }, [setToken]),
     isLogged: React.useMemo(() => token !== undefined && token !== null, [token]),
   }
};
