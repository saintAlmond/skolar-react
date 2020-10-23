import React from 'react';
import './App.css';
import {Routes} from "./route";
import 'fontsource-roboto';
import {AuthContextProvider} from "./contexts/auth/authContext";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Routes />
      </div>
    </AuthContextProvider>
  );
}

export default App;
