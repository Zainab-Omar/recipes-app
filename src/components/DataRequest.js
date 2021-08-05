import { useState } from 'react'
import axios from 'axios'
import Recipes from './Recipes'

const DataRequest = async (query) => {
    const [recipes, setRecipes] = useState([])
     const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
    if (query !== "") {
        const result = await axios.get(url)
        console.log(result.data)
    }
    
}

export default DataRequest
