import React, { Component } from 'react';
import { Auth } from "../redux/authReducer";
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Welcome from './LandingPage';
import Login from './LoginComponent';

import Me from './AccountHolderComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';


import {  } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition} from 'react-transition-group';

const mapStateToProps = state => {
    return {
        auth: Auth
    }
}

class Main extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){

    }
    render() {
        return (
            <div>
                <Header />
              
                        <Switch>
                            {/* <Redirect exact from='/login' to='/user'/> */}
                            <Route exact path="/" component={Welcome} />
                            <Route path="/login" component={Login} />
                            <Route path="/user" component={Me} />

                            <Redirect to="/login" />
                        </Switch>
                  
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));