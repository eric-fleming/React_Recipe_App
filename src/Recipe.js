import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients}) => {

    calories = Math.round(calories);

    return(
        <div className={style.single_recipe}>
            <h2>{title}</h2>
            <p>Calories : {calories} kCal</p>
            <img className={style.recipe_image} src={image} alt="could not find" />
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            
        </div>
    );
}


export default Recipe;