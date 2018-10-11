import * as React from "react";
import * as ReactDOM from "react-dom";
import * as BrowserRouter from 'react-router';
import { App } from "./components/App";
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'semantic-ui-css/semantic.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    (<App compiler="TypeScript" framework="React" />
    ),
    document.getElementById("root")
);