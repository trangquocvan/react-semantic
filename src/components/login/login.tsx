import * as $ from "jquery";
import * as React from 'react';
import { login } from '../producers/todos';
import { connect } from 'react-redux';
import { Radio } from 'semantic-ui-react'
import './login.scss';
const divStyle = {
}
console.log($('.ui.radio.checkbox'))

export class Login extends React.Component<DispatchProps,{}>{
    componentDidUpdate(){
        $('.ui.radio.checkbox').checkbox();
        console.log($('.ui.radio.checkbox').checkbox())
    }
    constructor(props){
        super(props);
    }
    handleChangeModel = (event) => {
        console.log(event.target.value)
    }
    handleSubmit = (event) => {
        event.preventDefault();
    }
    render(){
        return (
                <div className="login-screen">  
                    <div className="row justify-content-md-center"> 
                    <div className="col-xl-6 col-md-12 col-sm-12 col-12">
                        <form className="ui form" name="myForm" onSubmit={this.handleSubmit} style={divStyle }>
                            <div className="login-form">
                                <div className="login-header">
                                <h3>Login</h3>
                                </div>
                                <div className="login-detail">
                                <div className="field">
                                    {/* <label>Username</label> */}
                                    <input type="text" name="username" placeholder="Username" onChange={this.handleChangeModel}/>
                                </div>
                                <div className="field">
                                    {/* <label>Password</label> */}
                                    <input type="password" name="password" placeholder="Password" autoComplete="false" onChange={this.handleChangeModel}/>
                                </div>
                                <Radio toggle className="full-width" name="number"  />
                                <button className="btn btn-info my-4 btn-block waves-effect waves-light">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
                    
              
        );
    }
}
const mapDispatchToProps = { login };
const mapStateToProps = null;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps,mapDispatchToProps)(Login)