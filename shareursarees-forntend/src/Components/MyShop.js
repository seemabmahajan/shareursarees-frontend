import React, { Component } from 'react';
import AddSari from  './AddSari';
import SariModel from '../models/sari';
import UserModel from '../models/user';
import Sari from '../Components/Myshopsaris';
import './shop.css'


export default class MyShop extends Component {
    constructor(props){
        super(props)
        this.state = {
          catagory:'',
          image:'',
          description:'',
          showNew:false,
          usersaris:[]
          
        }

        UserModel.getUserInfo(this.props.currentUser)
  		.then(res=>{
              console.log(`My sarees are: ${res.data}`)
  			this.setState({
  				usersaris:res.data.mySaris,

  			})
  		})
  		.catch(err=>{
  			console.log(err)
  		})

      }

      
    
    

    

      handleAddButton=()=>{
	
        this.setState({
            showNew:true,
            
        })
    }
      handleAddClose=()=>{
        this.setState({
          showNew:true
        })
      }

      handleChange = (event) => {
        
        this.setState({
            [event.target.name]: event.target.value
        })
        event.preventDefault()
      }


      handleAddSariSubmit=(event)=>{
        event.preventDefault()
        
        let data={
            catagory:this.state.catagory,
            image:this.state.image,
            description:this.state.description,
            userId:this.props.currentUser,
            user:this.props.currentUser
        }
        SariModel.AddSari(data)
            .then(res=>{
                window.location.reload(false);
            })
            .catch(err=>console.log(err))
   
    }

    handleDelete=(sari)=>{
      let data={
        userId:this.props.currentUser,
        sariId:sari._id
      }
      SariModel.deleteSari(data)
        .then(res=>{
          window.location.reload(false);
        })
        .catch(err=>console.log(err))
    }
    
    
    
    
    

    render() {
        const oneSari = this.state.usersaris.map( (sari) =>{
            return (
                <div className="col-md">
                    <Sari
                    key = {sari._id}
                    sari = {sari}
                    handleDelete={this.handleDelete}
                                />
                </div>               
            )
        });
        
        return (
            <div>
                <div class="alert alert-dark"  class="intro" role="alert">
                       in style with new safety guidelines
                </div>
                <div class = "container">
                  <div class="row">
                  <div class=" col-md-4">  
                 <button type="button"  class="btn btn-dark">My Sarees Collection</button></div>
                 <div class="col-md-4"><div class="waste"><p> Rent/Loan a saree</p></div></div>
                <div col-md-4><button type="button"  class="btn btn-dark  "onClick={this.handleAddButton}>Add Sari to my Collection</button></div>
                
                  </div>
                </div>
                <br></br>
                <br></br>
                
                <AddSari 
                    handleAddSariSubmit ={ this.handleAddSariSubmit}
                    handleChange={this.handleChange}
                    handleAddClose={this.handleAddClose}
                    showNew={this.state.showNew}
                    nowUser={this.props.currentUser}
                                                       />
          
            <ul>
            <div className="container">
                <div className="row">                            
                { oneSari } 
                </div>
                </div>  
            </ul>

            </div>
        )
    }
}
