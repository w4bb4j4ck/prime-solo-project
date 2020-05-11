import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => (
  <div className={props.user.id ? "nav" : "login-nav"}>
    <div className="nav-name">e-meal.io</div>
    <div className="nav-right">
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id ? 
        <>
          <Link className="nav-link" to="/info">
            Info Page
          </Link>
          <LogOutButton className="nav-link"/>
        </> :
        <>
          <Link className="login-nav-link" to="/home">
            Login / Register
          </Link>
          <Link className="login-nav-link" to="/about">
            About
          </Link>
        </>
      }
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
