import React from 'react'

import './search.css'

const Search = () => {
    return (
        <form className="search-field">
            <input type="text" className="search-request"/>
            <input type="submit" value="" className="btn-search"/>
        </form>
    )
}

export default Search