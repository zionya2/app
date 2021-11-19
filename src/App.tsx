import React from 'react';
import logo from './images/logo.svg';
import ListPosts from "./components/ListPosts/ListPosts";
import './scss/App.scss';

function App() {
  
  let props:Record<string, string> = {
    "title": "Cat",
    "body": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi cupiditate ut, unde velit dolorem iure quo fuga nisi ad distinctio saepe omnis sapiente porro sunt! Reiciendis, ipsam provident! Beatae, quo?",
  };

  
  return (
    ListPosts(props)
  );
}

export default App;
