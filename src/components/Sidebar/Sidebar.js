import React, {Component} from 'react';
import './Sidebar.css';

class Sidebar extends Component {
    render(){
        return(
            <div id="sidebar">
                <div className="menu">Home</div>
                <div className="menu">Recipes</div>
                <div className="menu">List</div>
            </div>
        )
    }
}

export default Sidebar;