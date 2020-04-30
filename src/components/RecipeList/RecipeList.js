import React, {Component} from 'react';
import RecipeItem from '../RecipeItem/RecipeItem';
import { connect } from 'react-redux';
import './RecipeList.css';

class RecipeList extends Component {

    componentDidMount(){
        this.props.dispatch({type: 'FETCH_RECIPES'});
    }

    render(){
        return(
            <div className="grid-container">
            {this.props.recipes.map((recipe) => 
            <div className="grid-item">
            <RecipeItem recipe={recipe.recipe} directions={recipe.directions} />
            </div>)}
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    recipes: reduxStore.recipes
})

export default connect(mapStateToProps)(RecipeList);