import React, { useState } from 'react'
import Recipes from './Recipes'
import axios from 'axios'

function SearchInput() {
    const [query, setQuery] = useState("")
    const [recipes, setRecipes] = useState([])
    const [error, setError] = useState("")
    const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
 
   const handleChange = e => {
       setQuery(e.target.value)
    }

   const handleSubmit = e => {
        e.preventDefault()
        dataRequest()
    }

    const dataRequest = async () => {
        if (query !== "") {
           const result = await axios.get(url)
           if (result.data.more === false){
               return setError("No food with such name")
           }
           setRecipes(result.data)
           setQuery("")
           setError("")
       }
       else {
           setError("please type in your food")   
       }
   }

    return (
        <div>
            <h2 className="error">{error}</h2>
            <form onSubmit={handleSubmit} className="search-form">
                <input type="text"
                name="query"
                value={query} 
                autoComplete="off"
                placeholder="Search Food" 
                onChange={handleChange}/>
                <input type='submit' value="Search" />
            </form>

             <Recipes recipes={recipes.hits} />
           
        </div>
    )
}

export default SearchInput
