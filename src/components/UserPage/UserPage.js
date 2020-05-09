import React from 'react';
import { connect } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';
import HomeTable from '../HomeTable/HomeTable';
import './UserPage.css';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div className="main-container">
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className="main-data">
      <h1 id="welcome">
        Welcome, {props.user.username}!
      </h1>
      {/* <p>Your ID is: {props.user.id}</p> */}
      <HomeTable />
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
  recipes: state.recipes
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
