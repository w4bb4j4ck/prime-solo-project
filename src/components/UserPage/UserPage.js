import React, {Component} from 'react';
import { connect } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';
import HomeTable from '../HomeTable/HomeTable';
import './UserPage.css';

class UserPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_RECIPES' });
  }

  render() {
    return (
      <div className="main-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main-data">
          <h1 id="welcome">
            Welcome, {this.props.user.username}!
      </h1>
          {/* <p>Your ID is: {props.user.id}</p> */}
          <HomeTable recipes={this.props.recipes} user={this.props.user} />
        </div>
      </div>
    )
  }
};

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
  recipes: state.recipes
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
