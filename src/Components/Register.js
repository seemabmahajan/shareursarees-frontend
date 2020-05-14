import React, { Component } from 'react'
//import Modal from 'react-modal';
import { Modal } from 'react-bootstrap';
import UserModel from '../models/user'
import SariModel from '../models/sari'


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
    // store the default values for the fields in the register form
    name: '',
    password: '',
    email:'',
    phone:'',
    mySaris:[],
    show:true
    
  }





  }
 

  // handles changes made to the form fields: handleChange()
  handleChange = (event) => {
    // console.log(event)
    // set state with the value from the input
    this.setState({
        [event.target.name]: event.target.value
    })
  }


  // handles submit event when the user submits the form: handleSubmit()
  handleSubmit = (event) => {
    // stop the default form event from firing
    event.preventDefault()
    // make an axios call to the API register route
    UserModel.create(this.state)
      .then(res => {
        this.setState({
          name: '',
          password: '',
          email:'',
          phone:'',
          showModal:true
        })
        this.props.history.push('/login')
      })
      .catch(err => console.log(err))
  }

  
handleClose=()=>{
this.props.history.push('/login')
}





  render() {
   


    return (
      <>
      <br></br>
      <br></br>
      <Modal show={this.state.show} onHide={this.handleClose}>
      <Modal.Header closeButton>
          
          <br></br>
          <Modal.Title>Form</Modal.Title>
        </Modal.Header>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <h4 className="mb-3">Register</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                    onChange={this.handleChange} 
                    className="form-control form-control-lg" 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={this.state.name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Password</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={this.state.password} />
              </div>
              <div className="form-group">
                <label htmlFor="name">Your Email</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="email" name="email" value={this.state.email} />
              </div>
              <div className="form-group">
              <label htmlFor="name">Your Phone:</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="phone" name="phone" value={this.state.phone} />
                
              </div>
              <button className="btn btn-primary float-right" type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
      </Modal>
      </>

    );
  }
}

export default Register;
