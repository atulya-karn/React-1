import React, { Component } from 'react';

class Tags extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='tags-container mt-1 disp-inline'>
                <button className='col-md-4 btn btn-primary mr-2 p-0 pl-1 pr-1 mt-2'>{this.props.tag}</button>
            </div>
         );
    }
}
 
export default Tags;