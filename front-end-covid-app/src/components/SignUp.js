import React, { Component } from 'react'
import UserLogin from './UserLogin';

export default class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            errors: {}
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault()

        const { history } = this.props;

        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        fetch('/users/register', {
            method: 'POST',
            headers:{
                "content_type":"application/json",
            },
            body: JSON.stringify(newUser),
        })
        .then(response => response.json())
        .then(res => {
            console.log('Registered')
            console.log(res)
            localStorage.setItem('username', res.username);
            this.setState({loggedIn: true});
            history.push('/')
        })
    }

    render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form noValidate onSubmit={this.onSubmit}>
                  <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                
                  <div className="form-group">
                    <label htmlFor="name">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder="Enter a username"
                      value={this.state.username}
                      onChange={this.onChange}
                    />
                  </div>
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
                    Register!
                  </button>
                </form>
              </div>
            </div>
          </div>
        )
      }
    
}