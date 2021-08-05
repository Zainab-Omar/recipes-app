import React from 'react'
import axios from 'axios'

const DataRequest = async (query) => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
    if (query !== "") {
        const result = await axios.get(url)
        console.log(url)
    }
    
}

export default DataRequest
