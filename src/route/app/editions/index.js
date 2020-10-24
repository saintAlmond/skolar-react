import React from 'react';
import {Route} from "react-router-dom";
import {EditionCreate} from "./CreateEdition";


export const EditionRoute = () => {

  return (
    <>
      <Route path="/app/edition/create"><EditionCreate/></Route>
    </>);
};
