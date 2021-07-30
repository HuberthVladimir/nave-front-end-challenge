import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SingUp'
import { Home } from './pages/Home'
import { isAuthenticated } from './services/auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
   <Route
      {...rest}
      render={props =>
         isAuthenticated() ? (
            <Component {...props} />
         ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
         )
      }
   />
)

const Routes = () => (
   <BrowserRouter>
      <Switch>
         <Route exact path="/" component={SignIn} />
         <Route path="/singup" component={SignUp} />
         <PrivateRoute path="/home" component={Home} />
         <PrivateRoute path="/edit-user" component={() => <h1>xd</h1>} />
      </Switch>
   </BrowserRouter>
)

export default Routes