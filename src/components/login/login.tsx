import * as React from 'react';
import { login } from '../producers/todos';
import { connect } from 'react-redux';

export class Login extends React.Component<DispatchProps,{}>{
    constructor(props){
        super(props);
        this.handleLogin("van","van",false);
    }
    handleLogin = (username, password, rememberMe = false) => {
        this.props.login(username, password, rememberMe);
    };
    render(){
        return (
            <form className="ui form">
                <div className="field">
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Username" />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" />
                </div>
                <div className="field">
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        );
    }
}
const mapDispatchToProps = { login };
const mapStateToProps = null;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps,mapDispatchToProps)(Login)