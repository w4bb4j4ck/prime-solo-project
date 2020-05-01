import React, {Component} from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

class Sidebar extends Component {

    handleClick = () => {
        console.log('test');
    }

    render(){
        return(
            <>
            <Link to="/home">
                <div className="menu-item" onClick={this.handleClick}>Home</div>
            </Link>
            <Link to="/recipes">
                <div className="menu-item">Recipes</div>
            </Link>
            <Link to="/">
                <div className="menu-item">List</div>
            </Link>
            </>
        )
    }
}

export default Sidebar;