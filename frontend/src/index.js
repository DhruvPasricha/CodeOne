import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { v4 as uuidV4 } from 'uuid'

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Router>
      <Switch>
        <Route path='/' exact>
          <Redirect to={`/collab/${uuidV4()}`} />
        </Route>

        <Route path='/collab/:id' exact>
          <App />
        </Route>
      </Switch>
    </Router> */}
  </React.StrictMode>,
  document.getElementById('root')
)
