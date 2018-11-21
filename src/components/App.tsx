
/**Import Library */
import * as React from "react";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { getStateLoading } from './reducers/loadingReducers';
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

export class App extends React.Component<DispatchProps, StateProps> {
    constructor(props){
        super(props);
        this.state = {
            loading: this.props.getStateLoading
        }
    }
    componentDidUpdate(){
        this.setState({
            loading: this.props.getStateLoading
        })
    }
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
                            { this.state.loading ? 'TRUE' : 'FALSE'} 
                            <Routes />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = { getStateLoading };
const mapStateToProps = null;

type StateProps = typeof mapStateToProps;

type DispatchProps = typeof mapDispatchToProps;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);