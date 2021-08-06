import React from 'react'

function RecipeDetails({ingredients}) {
   return ingredients.map(ingredient => {
    return (
        <ul>
            <li>{ingredient.text}</li>
        </ul>
            
        
    )

   })
    
}

export default RecipeDetails
