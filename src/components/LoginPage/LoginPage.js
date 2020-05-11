import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './LoginPage.css';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <div className="login-box">
        <form onSubmit={this.login}>
          <h1>Login</h1>
          <div className="input-field">
            <TextField 
            id="username" 
            label="Username" 
            variant="filled"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChangeFor('username')} />
          </div>
          <div className="input-field">
            <TextField 
            id="password" 
            label="Password" 
            variant="filled"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChangeFor('password')} />
          </div>
          <div className="input-field">
            <Button 
            variant="contained" 
            color="primary"
            type="submit"
            onClick={this.login}>
              Log In
            </Button>
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            Register
          </button>
        </center>
        </div>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
