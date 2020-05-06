import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchRecipes (action){
    try{
        const response = yield axios.get('/api/meal/recipes');
        yield put ({type: 'SET_RECIPES', payload: response.data});
    }
    catch(error){
        console.log('Error in fetchRecipes', error);
    }
}

function* addRecipe (action) {
    const recipeItem = {
        recipe: action.payload.recipe,
        directions: action.payload.directions
    }
    try{
        const response = yield axios.post(`/api/meal/recipes`, recipeItem);
        yield axios.post(`/api/meal/recipes/${response.data[0].id}`, action.payload.ingredients);
        yield put ({type: 'FETCH_RECIPES'});
    }
    catch(error){
        console.log('Error in addRecipe.', error);
    }
}

function* recipeSaga(){
    yield takeLatest('FETCH_RECIPES', fetchRecipes);
    yield takeLatest('ADD_RECIPE', addRecipe);
}

export default recipeSaga;