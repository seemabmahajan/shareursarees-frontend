import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Components/Home'
import Saris from '../Components/Saris'
import Register from '../Components/Register'
import MyShop from '../Components/MyShop'
import Login from '../Components/Login'

export default (props) => (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route  path="/home" component={ Home } />


    <Route path="/login" render={ (routeProps) => {
      // An example of adding props to a component rendered by react router
      return <Login 
                { ...routeProps }
                //show={true}
                currentUser={props.currentUser}
                setCurrentUser={props.setCurrentUser}
              /> 
    } } />
    <Route path="/myshop" render={(routeProps)=>{
      return <MyShop 
                { ...routeProps }
                currentUser={props.currentUser}
                setCurrentUser={props.setCurrentUser}
              /> 
    }} />
    <Route path="/register" component={ Register } />


    <Route exact path="/saris" render={(routeProps)=>{
      return <Saris 
                { ...routeProps }
                currentUser={props.currentUser}
                setCurrentUser={props.setCurrentUser}
      />
    }} />
    {/* <Route path="/saris/:id" render={(routeProps)=>{
      return <Saris 
                { ...routeProps }
                currentUser={props.currentUser}
                setCurrentUser={props.setCurrentUser}
      />
    }} /> */}

  </Switch>
)