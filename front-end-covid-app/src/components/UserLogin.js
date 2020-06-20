import React, { Component } from 'react';


export default class UserLogin extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errors: {},
            username: '',
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
            } else {
            localStorage.setItem('username', res.username);
            localStorage.setItem('isLoggedIn', true);
            this.setState({loggedIn: true});
            //Redirect to main page when user is logged in
            history.push('/')
            }
        });

        const username = localStorage.getItem('username')
    }

    render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form noValidate onSubmit={this.onSubmit}>
                  <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
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
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                    Sign in
                  </button>
                  <button 
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        )
    }
}