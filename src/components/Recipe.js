import React, {useState} from 'react'
import Ingredients from './Ingredients'
import RecipeDetails from './RecipeDetails'

function Recipe({recipe}) {
    const {label, image, url, calories, cautions, ingredients} = recipe.recipe
    const [toggleIng, setToggleIng] = useState(false)
    const [showDetails, setShowDetails] = useState(false)
    return (
        <div className="recipe">
           <img src={image} alt={label} />
           <h4>Name: {label}</h4>
           <a href={url} target="_blank" rel="noreferrer">Recipe URL</a><br />
           <button onClick={() => setShowDetails(!showDetails)}>Show Details</button>
           {showDetails && <RecipeDetails calories={calories} cautions={cautions} />}
           <button onClick={() => setToggleIng(!toggleIng)}>Ingredients</button>
            {toggleIng && <Ingredients ingredients={ingredients} />}
        </div>
    )
}

export default Recipe
