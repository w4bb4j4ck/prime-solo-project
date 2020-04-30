import React, {Component} from 'react';
import RecipeItem from '../RecipeItem/RecipeItem';
import { connect } from 'react-redux';

class RecipeList extends Component {
    render(){
        return(
            <>
            <RecipeItem test="test" />
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    recipes: reduxStore.recipes
})

export default connect(mapStateToProps)(RecipeList);