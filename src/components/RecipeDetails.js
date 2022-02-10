import React from 'react'


function RecipeDetails({calories, cautions}) {
    return (
        <div>
            <h4>calories: {Math.ceil(calories)}</h4>
            <h4>cautions: {cautions.map(caution => <li>{caution}</li>)}</h4>
        </div>
   )
    
}

export default RecipeDetails

