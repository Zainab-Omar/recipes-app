import React from 'react'
import { v4 as uuidv4 } from 'uuid'

function RecipeDetails({calories, cautions}) {
    return (
        <div>
            <h4>calories: {Math.ceil(calories)}</h4>
            <h4>cautions: {cautions.map(caution => <li>{caution}</li>)}</h4>
        </div>
   )
    
}

export default RecipeDetails

