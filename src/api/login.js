import {useCallback} from "react";
import {hostname} from "./config";


const jsonHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

export const useApiLogin = () => {
   return useCallback(({email, password, onSuccess, onError}) => {
    fetch(hostname + '/token', {
      method: 'POST',
      headers: jsonHeaders,
      body: JSON.stringify({email, password})
    }).then(result => {
      if (result.ok) {
        return result.json();
      } else {
        throw new Error(result);
      }
    }).then(onSuccess)
      .catch(onError);
  }, []);
};
