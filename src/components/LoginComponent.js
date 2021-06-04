import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Input, Label, Card, CardBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import {baseUrl} from '../utils/constants';
//import { useNavigate }  from 'react-router-dom';

//const baseUrl = "http://localhost:8080/"
//let history=useNavigate();
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            token: null,
            role:null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
  
    handleSubmit(event) {
        event.preventDefault();
        alert("Username: " + this.state.username + " Password: " + this.state.password);
        var payload = {
            "username": this.state.username,
            "password": this.state.password
        }
        fetch(baseUrl + 'authenticate', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        //.then(Object => console.log(Object.jwt))
        .then(Object => {
            this.setState({
                token: Object.jwt,
                role: Object.roles
            });
            console.log(this.state.token);
            console.log(this.state.role);
        })
        .catch(err => console.log(err.message));
    };

    handleChange(event) {
        const val = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: val
        })
    };

   
    render() {
        return (
            <div className="container">
                <img src="../images/userlogo.jpg" height="150" width="150" alt="UserLogo" id="logo" href="/" />
                <Form className="login" onSubmit={this.handleSubmit}>
                    <FormGroup className="col-sm-5">
                        <Label htmlFor="username">Username</Label>
                        <Input type="text" id="username" name="username" placeholder="Enter username"
                            innerRef={(input) => this.username = input} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup className="col-sm-5">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" name="password" placeholder="Enter password"
                            innerRef={(input) => this.password = input} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup className="col-sm-5">
                         <Button type="submit" value="submit" color="primary" >Login</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
export default Login;

