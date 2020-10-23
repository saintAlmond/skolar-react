import {useCallback, useEffect, useState} from "react";
import {hostname} from "./config";
import {useAuth} from "../contexts/auth/authContext";

const serialize = (obj) => {
  if (!obj) {
    return '';
  }
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};
const makeHeaders = (token) => {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'authorization': 'Bearer ' + token,
  };
};
export const useEntityBySearch = (entity, search) => {
  const {token} = useAuth();
  const [data, setData] = useState();
  useEffect(() => {
    fetch(hostname + "/data/" + entity + "?" + serialize(search), {
      headers: makeHeaders(token),
    })
      .then(response => response.json())
      .then(response => setData(response));
  }, [entity, search, setData, token])
  return data;
};
export const useEntityForCreate = (entity) => {
  const {token} = useAuth();
  return useCallback((entityInstance, onSuccess) => {
    fetch(hostname + "/data/" + entity, {
      headers: makeHeaders(token),
      method: 'POST',
      body: JSON.stringify(entityInstance),
    })
      .then(response => response.json())
      .then(response => {
        if (onSuccess) {
          onSuccess(response);
        }
      })
  }, [entity, token]);
};


