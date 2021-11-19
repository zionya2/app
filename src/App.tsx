import React from 'react';
import logo from './images/logo.svg';
import Form from "./components/form/Form";
import './css/App.css';

function App() {
  
  let props:Record<string, string> = {
    "title": "Cat",
    "body": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi cupiditate ut, unde velit dolorem iure quo fuga nisi ad distinctio saepe omnis sapiente porro sunt! Reiciendis, ipsam provident! Beatae, quo?",
  };

  
  return (
    Form(props)
  );
}

export default App;
