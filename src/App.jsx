import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './components'
import { Launch, Login, Register, Dashboard } from './pages'
import Habit from './pages/Habit';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Launch} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path = '/habits' component={Habit} />
        <PrivateRoute to='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  )
}

export default App
