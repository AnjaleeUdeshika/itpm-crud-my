import React from "react";

function SearchBar(){
    return(
        <div className="Search-Bar" style={{}}>
            <div class="input-group">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" class="btn btn-outline-light">search</button>
            </div>
        </div>
    );
}

export default SearchBar;