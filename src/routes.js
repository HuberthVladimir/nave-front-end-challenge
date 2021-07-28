import { BrowserRouter, Switch, Route } from 'react-router-dom'
// , Redirect
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SingUp'
import { Home } from './pages/Home'

const Routes = () => (
   <BrowserRouter>
      <Switch>
         <Route exact path="/" component={SignIn} />
         <Route path="/singup" component={SignUp} />
         <Route path="/home" component={Home} />
      </Switch>
   </BrowserRouter>
)

export default Routes