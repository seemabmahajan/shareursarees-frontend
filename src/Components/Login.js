import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import UserModel from '../models/user'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    email: '',
    password: '',
    show:true
      }
      this.setState({
        show:this.props.show
      })
  }




  

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    UserModel.login(this.state)
      .then((res) => {
          console.log(res.data);
        this.props.setCurrentUser(res.data.data)

        this.props.history.push('/')
      })
      .catch((err) => console.log(err))
  }
  handleClose=()=>{

  this.props.history.push('/')
}

  render() {
    

    return (
           <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Form</Modal.Title>
         </Modal.Header>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <h4 className="mb-3">Login</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="email" id="email" name="email" value={this.state.email} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={this.state.password} />
              </div>
              <button className="btn btn-primary float-right" type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
      </Modal>
    )
  }
}
export default Login;