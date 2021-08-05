
import axios from 'axios'

const DataRequest = async (query) => {
     const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
    if (query !== "") {
        const result = await axios.get(url)
        console.log(result.data)
    }
    
}

export default DataRequest
