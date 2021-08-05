import React, { useState } from 'react'

function SearchInput() {
    const [query, setQuery] = useState("")
    return (
        <div>
            <form>
                <input type="text"
                name="query"
                value={query} 
                autoComplete="off"
                placeholder="Search Food" />
                <input type='submit' value="Search" />
            </form>
            
        </div>
    )
}

export default SearchInput
