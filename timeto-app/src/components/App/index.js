import React, { Component } from 'react';
import { Route, Redirect, withRouter,Switch } from 'react-router-dom' 
import Login from '../Login'
import Register from '../Register'
import Home from '../Home'
import EventsByCategory from '../EventsByCategory'
import EventById from '../EventById'
import CreateEvent from '../CreateEvent'
import Header from '../Header';
import Footer from '../Footer';
import logic from '../../logic/index'
import User from '../User';
import UserModify from '../UserModify'
import RedirectLoginOrRegister from '../RedirectLoginorRegister';
import UserById from '../UserById'
import Results from '../Results';
import Events from '../Events';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import feedback from  '../../plugins/feedback'



class App extends Component {
  handleRegister = (name, surname, userName ,age, description, email, password, passwordConfirmation) => {
    try {
        logic.registerUser(name, surname, userName ,age, description, email, password, passwordConfirmation)
        .then( () => {
          this.props.history.push('/login')
          feedback('Completed registration' , 'success')          
        })
        .catch( ({message}) => {
          feedback(message , "error")

      })
    }catch ({message}){ 
      feedback(message , "error")


    }
  }


  handleLogin = (email,password) => {
    try{
      logic.logInUser(email,password)
        .then( () => {            
            this.props.history.push('/home') 
            feedback('successfully logged in' , 'success') 
        }).catch( ({message}) => {
          feedback(message , "error")
        })
    }catch({message}){
      feedback(message , "error")
    }
  }

  handleCreateEvent = (title, description, date, city, address, category) => {
    try {
        logic.createEvent(title, description, date, city, address , category)
        .then( () => {
          this.props.history.push('/home')
          feedback('event created' , 'success') 
        })
        .catch(({message}) =>{
          feedback(message , "error")
        })
    }catch ({message}){ 
      feedback(message , "error")
    }
  }

 

    render() {
      const  {handleRegister,handleLogin,handleCreateEvent } = this
    return (  
    <section className="App">
        <Header  />
        <main>
        <ToastContainer />
        <Switch>
            <Route path='/home' component={Home} />
            <Route exact path='/category/:categoryId' render={() => logic.isUserLoggedIn ? <EventsByCategory /> : <Redirect to="/login-or-register" />}  />
            <Route path='/results/:query' render={() => logic.isUserLoggedIn ? <Results /> : <Redirect to="/home" />}    />
            <Route path='/event/:eventId' render={() => logic.isUserLoggedIn ? <EventById /> : <Redirect to="/home" />}  />
            <Route path= '/user' render={() => logic.isUserLoggedIn ? <User  />:  '' }  />
            <Route path= '/user-modify' render={() => logic.isUserLoggedIn ? <UserModify /> : ''} />
            <Route path= '/my-events' render={() => logic.isUserLoggedIn ? <Events  />:  '' }  />
            <Route path='/register' render={props => !logic.isUserLoggedIn? <Register onRegister={handleRegister} /> : <Redirect to = '/home'/>} /> 
            <Route path='/login' render={props => !logic.isUserLoggedIn? <Login onLogin={handleLogin}   />  : <Redirect to  = '/home' /> } />
            <Route path= '/login-or-register' render={() => <RedirectLoginOrRegister />} />
            <Route path='/create-event' render={props => logic.isUserLoggedIn ? <CreateEvent onCreateEvent={handleCreateEvent}/> : <Redirect to ='/register' />} />
            <Route exact path='/:userName' render={() => <UserById /> } />
            <Route exact path= '/' render={()=> <Redirect to='/home' />} />
        </Switch>
        </main>
        <Footer />
    </section>
   
    );
  }
}

export default withRouter(App);
