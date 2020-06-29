import React, { Component } from 'react';

import "./userlogin.css"

export default class UserLogin extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            user_id: '',
            loggedIn: false
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault()

        const { history } = this.props;
        const user = {
            email: this.state.email,
            password: this.state.password
        }

        fetch('users/login', {
            method: 'POST',
            headers:{
                "content_type":"application/json",
            },
            body: JSON.stringify(user),
        })
        .then(response => response.json())
        .then(res => {
            console.log(res);
            if (res === "Invalid") {
                console.log("Login invalid")
                alert('Login invalid')
            } else {
            localStorage.setItem('user_id', res.user_id);
            localStorage.setItem('isLoggedIn', true);
            this.setState({loggedIn: true, user_id: res.user_id});
            //Redirect to main page when user is logged in
            alert('Successfully logged in!')
            history.push('/')
            }
        });
    }

    onClick = (e) => {
        e.preventDefault()

        const { history } = this.props;
        history.push('/signup')
    }


    render() {

        return (
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form noValidate onSubmit={this.onSubmit}>
                  <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                  </div>
                    <div className="buttons">
                        <button
                            type="submit"
                            className="btn btn-lg btn-primary btn-block"
                        >
                            Sign in
                        </button>
                        <button 
                            type="signup"
                            className="btn btn-lg btn-primary btn-block"
                            onClick={this.onClick} 
                        >Sign Up
                        </button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        )
    }
}