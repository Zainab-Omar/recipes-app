import React, {useState} from 'react'
import Recipes from './Recipes'
import RecipeDetails from './RecipeDetails'
function Recipe({recipe}) {
    const {label, image, url, calories, cautions, ingredients} = recipe.recipe
    const [toggle, setToggle] = useState(false)
    return (
        <div className="recipe">
           <img src={image} alt="food-picture" />
           <h4>{label}</h4>
           <h4>calories: {calories}</h4>
           <h4>cautions: {cautions.map(caution => <li>{caution}</li>)}</h4>
           <a href={url} target="_blank" rel="noreferrer">Recipe URL</a><br />
           <button onClick={() => setToggle(!toggle)}>Ingredients</button>
            {toggle && <RecipeDetails ingredients={ingredients} />}
        </div>
    )
}

export default Recipe
