import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
//import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID_EDAMAM = process.env.REACT_APP_EDAMAM_APP_ID;
  const API_KEY_EDAMAM = process.env.REACT_APP_EDAMAM_API_KEY;





  const [counter, setCounter] = useState(0);//pass in default value
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");



  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID_EDAMAM}&app_key=${API_KEY_EDAMAM}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  const fetchQuery = (event) => {
    event.preventDefault();
    setQuery(search);
  }



  useEffect(()=>{
    console.log("An effect has taken place...");
    getRecipes();
  }, [query]);
  // the second parameter only runs once on page load if empty
  // adding values in the array will update when the value changes


  


  return(
    <div className="App">
      <h1>Hello React Recipes</h1>
      <form onSubmit={fetchQuery} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div>
        <h2 onClick={() => setCounter(counter+1)}>{counter}</h2>
      </div>
      <div className="myrecipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
