import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ListTable from '../ListTable/ListTable';
import ListModal from '../ListModal/ListModal';
import {connect} from 'react-redux';

class GroceryList extends Component {

    state = {
        description: '',
        quantity: '',
        unit_id: 0,
        category_id: 0
    }

    componentDidMount(){
        this.props.dispatch({type: 'FETCH_GROCERIES'});
    }

    handleChange = (input) => (event) => {
        this.setState({
            [input]: event.target.value
        })
    }

    handleAdd = () => {
        const item = {
            description: this.state.description,
            quantity: this.state.quantity,
            unit_id: this.state.unit_id,
            category_id: this.state.category_id
        }
        this.props.dispatch({type: 'ADD_GROCERY', payload: item});
    }

    render() {
        return (
            <div className="main-container">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="main-data">
                    <div>
                        <ListModal quantity={this.state.quantity} units={this.props.units} categories={this.props.categories} 
                        description={this.state.description} handleChange={this.handleChange} unit={this.state.unit}
                        category={this.state.category} handleAdd={this.handleAdd} />
                    </div>
                    <ListTable />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    units: reduxStore.units,
    categories: reduxStore.categories,
});

export default connect(mapStateToProps)(GroceryList);