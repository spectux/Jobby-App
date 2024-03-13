import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectRoute from './components/ProtectedRoute'
import JobItemDetails from './components/JobItemDetails'
import JobsDetails from './components/Jobs'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
    <ProtectRoute exact path="/jobs" component={JobsDetails} />
    <ProtectRoute exact path="/jobs/:id" component={JobItemDetails} />

    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
