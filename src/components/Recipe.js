import React from 'react'

function Recipe({recipe}) {
    const {label, image, url, ingredients} = recipe.recipe
    return (
        <div>
           {console.log(recipe)}
        </div>
    )
}

export default Recipe
