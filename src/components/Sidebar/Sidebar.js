import React, {Component} from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';




class Sidebar extends Component {
    render(){
        return(
            <>
            <Link to="/home">
                <div className="menu-item" onClick={this.handleClick}>
                    <HomeRoundedIcon fontSize="large" />
                </div>
            </Link>
            <Link to="/recipes">
                <div className="menu-item">
                    <MenuBookRoundedIcon fontSize="large" />
                </div>
            </Link>
            <Link to="/grocery-list">
                <div className="menu-item">
                    <ListAltRoundedIcon fontSize="large" />
                </div>
            </Link>
            </>
        )
    }
}

export default Sidebar;