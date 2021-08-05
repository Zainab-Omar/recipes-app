import React from 'react'
import axios from 'axios'

const DataRequest = async (query) => {
     const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
    // const url = `https://api.edamam.com/search?q=${query}&app_id=851a0457&app_key=a4eaadda6db0afd1112d6f41d68fbd3f`
    if (query !== "") {
        const result = await axios.get(url)
        console.log(result)
    }
    
}

export default DataRequest
