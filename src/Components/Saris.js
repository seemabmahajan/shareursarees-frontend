import React, { Component } from 'react';
import SariModel from '../models/sari';
import Sari from '../Components/Sari';


export default class Saris extends React.Component {
     constructor(props) {
        super(props);
        this.state ={
        sarisArr:[]
     }

    
     
    SariModel.getAllSaris()
    .then(res => {
        console.log(res.data)
        this.setState({
            sarisArr:res.data
          
        })
    
    })
    
    .catch(err=>console.log(err))
     }


    render() {
        
        const eachSari = this.state.sarisArr.map( (sari) =>{
            return (
            
                <div className="col-md">
                <Sari
                key = {sari._id}
                sari = {sari}
                                />
                </div>                
            )
        });
        return(
            
            <ul>
            <div className="container">
                <div className="row">
            
                    { eachSari } 
            
                </div>
            </div>
            </ul>
        );
    }

    
}

