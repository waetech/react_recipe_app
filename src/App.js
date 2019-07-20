import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';


const App = () => {

const APP_ID = 'c0b57bdb';
const APP_KEY = 'a1ade8e81db22aa6b2557c6b870bc132';


const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState('chicken');

useEffect(() => {
  getRecipes();
}, [query]);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  );
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
};

const updateSearch = e => {
  setSearch(e.target.value);

};

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
};


  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" 
        type="text" 
        value={search} 
        onChange={updateSearch}></input>
        <button  className="search-button" type="submit">Search</button>
        </form>
        {recipes.map(recipe => (
          <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          shareAs={recipe.recipe.shareAs}
          source={recipe.recipe.source}
          image={recipe.recipe.image}/>
        ))};
    </div>
  );
}

export default App;
