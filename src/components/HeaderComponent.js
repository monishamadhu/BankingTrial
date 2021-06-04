import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,Modal,ModalHeader,ModalBody,Button,Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);

    }
    render(){
        return(
            <Jumbotron   className="header" >
            <div className="row">
                <div className="col-sm-collapse col-md-4">
                 <img src="../images/logo2.png" height="100" width="150" alt="MeritBankLogo" />
                </div>
                <div className = "col-md-6">
                <img src="../images/Merit Bank Logo.png" height="100" width="450" alt="MeritBankTitle" />
                </div>
                <div className=" col-md-2" >
               
                <a href="/login"><Button type="submit" value="submit" color="primary btn-outline" className="headerLogIn" ><span className="fa fa-sign-in fa-lg">Login</span></Button></a> 
                </div>
            </div>
            </Jumbotron>
            
        );
    }

}
export default Header;