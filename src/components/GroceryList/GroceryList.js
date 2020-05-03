import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ListTable from '../ListTable/ListTable';
import ListModal from '../ListModal/ListModal';
import {connect} from 'react-redux';

class GroceryList extends Component {

    componentDidMount(){
        this.props.dispatch({type: 'FETCH_GROCERIES'});
    }

    render() {
        return (
            <div className="main-container">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="main-data">
                    <div>
                        <ListModal test="test" units={this.props.units} />
                    </div>
                    <ListTable />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    units: reduxStore.units,
});

export default connect(mapStateToProps)(GroceryList);