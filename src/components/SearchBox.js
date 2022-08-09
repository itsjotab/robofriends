import React from "react";

const SearchBox = ( {searchField, searchChange} ) => {
    return (
        <div className="pa2">
            <input  className='tc pa3 ba b--green bg-lightest-blue br2' type='search' 
            placeholder="Search Robots"
            onChange={searchChange}
            >
            </input>
        </div>
    );
}

export default SearchBox;