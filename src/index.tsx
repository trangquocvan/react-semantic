/**Import css */
import 'semantic-ui-css/semantic.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/**Import library */
import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
/**Import dependency */
import Routes from './components/shared/router';
import { App } from "./components/App";
import rootReducer from './components/reducers/reducers';
import 'core-js/es6/map';
import 'core-js/es6/set';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
console.log(store.getState());
// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
    (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ),
    document.getElementById("root")
);