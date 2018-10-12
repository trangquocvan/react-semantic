
/**Import Library */
import * as React from "react";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

/** Import dependency */
import Header from './layout/header';
import ButtonExampleEmphasisShorthand from './layout/button';
import Routes from './shared/router';
import Hello from './hello/hello';
/** Import css */
import './App.scss';

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <li><Link to="/hello">Hello</Link></li>                            
                        <Routes />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}