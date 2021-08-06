import React from 'react'
import { v4 as uuidv4 } from 'uuid'

function RecipeDetails({ingredients}) {
   return ingredients.map(ingredient => {
    return (
        <ul key={uuidv4()}>
            <li>{ingredient.text}</li>
        </ul>
            
        
    )

   })
    
}

export default RecipeDetails
