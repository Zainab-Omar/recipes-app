import React, { useState } from 'react'
import DataRequest from './DataRequest'
import Recipes from './Recipes'
import axios from 'axios'

function SearchInput() {
    const [query, setQuery] = useState("")
    const [recipes, setRecipes] = useState([])

   const handleChange = e => {
       setQuery(e.target.value)
    }

   const handleSubmit = e => {
        e.preventDefault()
        DataRequest(query)
    }

    const dataRequest = async (query) => {
        const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
       if (query !== "") {
           const result = await axios.get(url)
           console.log(result.data)
       }
       
   }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                name="query"
                value={query} 
                autoComplete="off"
                placeholder="Search Food" 
                onChange={handleChange}/>
                <input type='submit' value="Search" />
            </form>

            <div>
                {recipes !== [] && <Recipes recipes={recipes} />}
            </div>
            
        </div>
    )
}

export default SearchInput
