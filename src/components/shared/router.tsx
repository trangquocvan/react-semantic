import * as React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
/**Import dependency */
import Hello from '../hello/hello';
import Login from '../login/login';
const Routes = () =>(
    <div className="view-routes">
        <Switch>
            <Route exact path='/hello' component={Hello} />
            <Route exact path='/login' component={Login} />
        </Switch>      
    </div>
)
export default Routes;
