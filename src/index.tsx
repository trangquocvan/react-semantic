/**Import library */
import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
/**Import dependency */
import Routes from './components/shared/router';
import { App } from "./components/App";
import 'core-js/es6/map';
import 'core-js/es6/set';
/**Import css */
import 'semantic-ui-css/semantic.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    (<BrowserRouter>
    <App />
    </BrowserRouter>
    ),
    document.getElementById("root")
);