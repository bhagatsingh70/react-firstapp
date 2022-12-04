import React from "react";
import { json } from "react-router-dom";
import Button from "./button/Button";
import Container  from "./container/Container";
import { Switch, Route, Redirect } from "react-router-dom";
//import { connect } from "react-redux";


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message : "",
            fields: {},
            errors: {},
        }
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    

    login(e){
        e.preventDefault();
        sessionStorage.setItem("navigation", "yes");
        console.log(sessionStorage.getItem("navigation"));
        let email = e.target.email.value;
        let password = e.target.password.value;
        const requestArray = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.fields)
        };

        fetch('http://127.0.0.1:8089/v1/login', requestArray)
        .then(res => res.json())
        .then(
            (result)=> {
                if(result.success == false){
                   
                }else{
                    localStorage.setItem("usertoken", result.data.token);
                    localStorage.setItem("user", JSON.stringify(result.data));
                }
                this.setState({
                    message: result.message
                })
                console.log(result);
            }
        ).catch(error => console.log('error is', error));
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    render(){
        return <>
            <div>
                <Container>
                    <form  onSubmit={this.login}>
                        {this.state.message}
                        <label>Email</label><br></br>
                        <input type="email" name="email" className="email" onChange={this.handleChange.bind(this, "email")} />
                        <label>Password</label>
                        <input type="password" name="password" className="password" onChange={this.handleChange.bind(this, "password")}/><br></br>
                        
                            <Button name="Signupss" save="save button"></Button>
                      
                    
                    </form> 
                </Container>
            </div>
        </>;
    }

}

export default Login