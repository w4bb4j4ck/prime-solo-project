import React, { Component } from 'react';
import RecipeItem from '../RecipeItem/RecipeItem';
import { connect } from 'react-redux';
import './RecipeList.css';
import Sidebar from '../Sidebar/Sidebar';
import RecipeModal from '../RecipeModal/RecipeModal';

class RecipeList extends Component {

    state = {
        recipe: '',
        directions: '',
    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_RECIPES' });
    }

    handleChange = (input) => (event) => {
        this.setState({
          [input]: event.target.value,
        });
      };

    handleSave = (inputList) => {
        const newRecipe = {
            recipe: this.state.recipe,
            directions: this.state.directions,
            ingredients: inputList
        }
        this.props.dispatch({type: 'ADD_RECIPE', payload: newRecipe});
    }

    render() {
        return (
            <>
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="main-data">
                    <div className="main-btn">
                        <RecipeModal handleChange={this.handleChange} recipe={this.state.recipe} 
                        directions={this.state.directions} handleSave={this.handleSave}/>
                    </div>
                    <div className="grid-container">
                        {this.props.recipes.map((recipe) =>
                            <div className="grid-item" key={recipe.id}>
                                <RecipeItem recipe={recipe} />
                            </div>)}
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    recipes: reduxStore.recipes,
    units: reduxStore.units,
})

export default connect(mapStateToProps)(RecipeList);