import React, { Component } from 'react';

class Range extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h5 className='disp-inline'>Sort By :  &nbsp;&nbsp;&nbsp;&nbsp;</h5>
                <p className='disp-inline'>&nbsp;&nbsp;Price: Low to High &nbsp;|&nbsp;</p>
                <p className='disp-inline'> &nbsp;&nbsp;Price: High to Low &nbsp;|&nbsp;</p>
                <p className='disp-inline'> &nbsp;&nbsp;&nbsp;Alphabetically &nbsp;|&nbsp;</p>
                <p className='disp-inline'> &nbsp;&nbsp;Popularity </p>
                <hr></hr>
            </div>
            
         );
    }
}
 
export default Range;