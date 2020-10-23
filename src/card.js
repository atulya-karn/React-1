import React, { Component } from 'react';
import { ThemeProvider } from 'react-bootstrap';

class Card extends Component {
    state = {  }
    render() { 
        return (
            <div className='disp-inline'>
                <div class="card mt-2">
                    <img class="card-img mt-2 px-2" src={this.props.img} alt="Card image cap"></img>
                    <div class="card-body disp-inline">
                        <h5 class="card-title">{this.props.title}</h5>
                        <p class="card-text">{this.props.price}</p>
                        <a href="#" class="btn btn-success">Buy Now</a>
                    </div>
                </div>
            </div>
            
         );
    }
}
 
export default Card;