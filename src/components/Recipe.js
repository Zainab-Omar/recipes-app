import React from 'react'

function Recipe({recipe}) {
    const {label, image, url, calories, cautions, ingredients} = recipe.recipe
    return (
        <div className="recipe">
           <img src={image} alt="food-picture" />
           <h4>{label}</h4>
           <h4>calories: {calories}</h4>
           <h4>cautions: {cautions.map(caution => <li>{caution}</li>)}</h4>
           <a href={url} target="_blank">Recipe URL</a>

        </div>
    )
}

export default Recipe
