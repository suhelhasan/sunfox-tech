import React,{Component} from 'react';
import './Login.css';

class Login extends Component{

    state={
        email:"",
        password:""
    }

    emailChangeHandler=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    passwordChangeHandler=(e)=>{
        this.setState({
            password:e.target.value
        })
    }

    render(){
        return (
        <div className="login">
            <h1>This is login</h1>
            <form>
                <input type="text" placeholder="Enter email address" onChange={this.emailChangeHandler} value={this.state.email}/>
                <input type="password" placeholder="Enter Password" onChange={this.passwordChangeHandler} value={this.state.password}/>
                <input type="submit" value="Login" onClick={(e)=>this.props.onLoginHandler(e,this.state.email,this.state.password)}/>
            </form>
        </div>
        );
    }
}
export default Login;