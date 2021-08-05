import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Recipe from './Recipe'

function Recipes({recipes}) {
    const recipesArray = recipes || []
    const renderRecipes = recipesArray.map(recipe => <Recipe key={uuidv4()} recipe = {recipe} />)

    return (
        <div>
            {renderRecipes}
        </div>
    )
}

export default Recipes
