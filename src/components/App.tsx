
/**Import Library */
import * as React from "react";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { login } from './producers/todos';
/** Import dependency */
import Loading from './shared/loading/loading';
import Header from './layout/header';
import ButtonExampleEmphasisShorthand from './layout/button';
import Routes from './shared/router';
import Hello from './hello/hello';

/** Import css */
import './App.scss';
import './shared/loading/loading.scss';

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<{}, {}> {
    render() {
        return (
            <div className="full-width full-height">
                <div className="loading">
                    <Loading loading={false}/>
                </div>
                <div>
                    <div>
                        <Header />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                            <Routes />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = { login };

export default connect(
    null,
    mapDispatchToProps
)(App);