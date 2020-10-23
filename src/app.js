import React, { Component } from 'react';
import Navbar from './navbar'
import Search from './search';
import Tags from './tags';
import Range from './range'
import Sort from './sort'
import Card from './card';


class App extends Component{

    render(){
        return(
            <div>
                <Navbar/>

                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3 filters mt-5'>
                            <div className='col-md-12'><Search/></div>

                            <div className='col-md-12 mt-4'>
                                <label className='disp-block'><b><h5>Search Brand</h5></b></label>
                                <Tags tag='Xiaomi'/>
                                <Tags tag='Oppo'/>
                                <Tags tag='Vivo'/>
                                <Tags tag='OnePlus'/>
                                <Tags tag='Apple'/>
                            </div>
                            <div className='col-md-12 mt-4'>
                                <Range/>
                            </div>
                        </div>

                        <div className='col-md-9 mt-5'>
                            <div className='row'>
                               <div className='col-md-12'><Sort/></div> 
                            </div>
                            <div className='row'>
                                <div className='col-md-4'><Card title="IPhone XR" price="$899" img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMflb3Pzt-_aiVtxmHabR4xANVyS1ABBn8Jg&usqp=CAU"/></div>
                                <div className='col-md-4'><Card title="Xiaomi Redmi Note 9" price="$150" img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMflb3Pzt-_aiVtxmHabR4xANVyS1ABBn8Jg&usqp=CAU"/></div>
                                <div className='col-md-4'><Card title="Poco M2 Pro" price="$190" img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMflb3Pzt-_aiVtxmHabR4xANVyS1ABBn8Jg&usqp=CAU"/></div>
                                <div className='col-md-4'><Card title="Samsung M1" price="$199" img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMflb3Pzt-_aiVtxmHabR4xANVyS1ABBn8Jg&usqp=CAU"/></div>
                                <div className='col-md-4'><Card title="Poco F1" price="$250" img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMflb3Pzt-_aiVtxmHabR4xANVyS1ABBn8Jg&usqp=CAU"/></div>
                                <div className='col-md-4'><Card title="Redmi Note 9 Pro" price="$190" img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMflb3Pzt-_aiVtxmHabR4xANVyS1ABBn8Jg&usqp=CAU"/></div>
                                <div className='col-md-4'><Card title="Realme 7i" price="$195" img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMflb3Pzt-_aiVtxmHabR4xANVyS1ABBn8Jg&usqp=CAU"/></div>
                                <div className='col-md-4'><Card title="Realme 6 pro" price="$220" img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMflb3Pzt-_aiVtxmHabR4xANVyS1ABBn8Jg&usqp=CAU"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default App