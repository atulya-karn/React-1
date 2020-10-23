import React, { Component } from 'react';

class Search extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <label><b><h5>Search</h5></b></label>
            <input type='text' className='form-control'></input>
            <button className='mt-2 btn bg-success text-white'>Search</button>
        </div> );
    }
}
 
export default Search;