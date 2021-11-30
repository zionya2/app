import React, { useState, Dispatch, SetStateAction, ChangeEvent} from 'react';
import logo from './images/logo.svg';
import ListPosts from "./components/ListPosts/ListPosts";
import Button from "./components/Button/Button";
import './scss/App.scss';

function App() {
  
    let items:Array<Record<string, string>> = [
    {
        "title": "Pike",
        "body": "Pike Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi cupiditate ut, unde velit dolorem iure quo fuga nisi ad distinctio saepe omnis sapiente porro sunt! Reiciendis, ipsam provident! Beatae, quo?",
    },
    {
        "title": "Perch",
        "body": "Perch Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi cupiditate ut, unde velit dolorem iure quo fuga nisi ad distinctio saepe omnis sapiente porro sunt! Reiciendis, ipsam provident! Beatae, quo?",
    },
    {
        "title": "Zander",
        "body": "Zander Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi cupiditate ut, unde velit dolorem iure quo fuga nisi ad distinctio saepe omnis sapiente porro sunt! Reiciendis, ipsam provident! Beatae, quo?",
    },
    {
        "title": "Carp",
        "body": "Carp Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi cupiditate ut, unde velit dolorem iure quo fuga nisi ad distinctio saepe omnis sapiente porro sunt! Reiciendis, ipsam provident! Beatae, quo?",
    },];

    const [activeCards, setActive]:[Array<Record<string, string>>, Dispatch<SetStateAction<Array<Record<string, string>>>>] = useState(items);

    const handlerClick = (event:ChangeEvent<HTMLButtonElement>) => {
        let activeCards = items.filter(item => item.title === event.target.value);
        setActive(activeCards);
    }
  
    return (
        <div>
            <div className="buttonsList">
                {items.map( (item) => <Button key={item.title} onClick={handlerClick} value={item.title} title={item.title}/>)}
            </div>
            <div>
                {<ListPosts data={activeCards} />}
            </div>
        </div>
    );
}

export default App;