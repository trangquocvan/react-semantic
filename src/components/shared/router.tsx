import * as React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Hello from '../hello/hello';
const Routes = () =>(
    <div className="view-routes">
        <Switch>
            <Route exact path='/hello' component={Hello} />
        </Switch>      
    </div>
)
export default Routes;
