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
    try{
        yield axios.post(`/api/meal/recipes`, action.payload);
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