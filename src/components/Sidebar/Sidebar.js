import React, {Component} from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render(){
        return(
            <>
            <Link to="/home">
                <div className="menu-item" onClick={this.handleClick}>Home</div>
            </Link>
            <Link to="/recipes">
                <div className="menu-item">Recipes</div>
            </Link>
            <Link to="/grocery-list">
                <div className="menu-item">List</div>
            </Link>
            </>
        )
    }
}

export default Sidebar;