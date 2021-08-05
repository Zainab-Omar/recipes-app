import React, { useState } from 'react'
import DataRequest from './DataRequest'
function SearchInput() {
    const [query, setQuery] = useState("")

   const handleChange = e => {
       setQuery(e.target.value)
    }

   const handleSubmit = e => {
        e.preventDefault()
        DataRequest(query)

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
            
        </div>
    )
}

export default SearchInput
