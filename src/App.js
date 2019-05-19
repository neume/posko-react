import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SignInForm from './Components/SignInForm'
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <Router>
      <Route exact path='/' component={SignInForm}/>
      <Route exact path='/dashboard' component={Dashboard}/>
    </Router>
  )
}

export default App;
