import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

const APP_ID = 'c0b57bdb';
const APP_KEY = 'a1ade8e81db22aa6b2557c6b870bc132';

const [counter, setCounter] = useState(0);

const [recipes, setRecipes] = useState([]);

useEffect( () => {
  getRecipes();
}, []);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = response.json();
  setRecipes(data.hits);
}

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"></input>
        <button  className="search-button" type="submit">Search</button>
        </form>
        
    </div>
  );
}

export default App;
