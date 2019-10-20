import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// Same functionality as React-Router-Dom <Route> component
export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    // Renders  a <Route> and passes props to it.
    <Route
      {...rest}
      render={props =>
        // If user is authenticated render 'component' prop
        localStorage.getItem('token') ? (
          <Component {...props} />
        ) : (
          // else redirect to /login
          <Redirect to='/login' />
        )
      }
    />
  )
}

/*
=== Usage ===
<PrivateRoute path='/protected' component={ProtectedComponent} />
*/
