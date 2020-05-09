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
        this.props.dispatch({ type: 'FETCH_INGREDIENTS' });
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
            ingredients: inputList,
            image: this.randomImage()
        }
        this.props.dispatch({type: 'ADD_RECIPE', payload: newRecipe});
        this.setState({
            recipe: '',
            directions: '',
        })
    }

    randomImage = () => {
        return ('/images/generic' + Math.floor((Math.random() * 9) + 1) + '.jpg');
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
                                <RecipeItem recipe={recipe} ingredients={this.props.ingredients} />
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
    ingredients: reduxStore.ingredients
})

export default connect(mapStateToProps)(RecipeList);