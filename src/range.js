import React, { Component } from 'react';

class Range extends Component {
    state = {  }
    render() { 
        return ( 
        <div className='mt-5'>
            <label><b><h5>Select Range</h5></b></label>
            <input type='range' className='form-control'></input>
        </div>
         );
    }
}
 
export default Range;