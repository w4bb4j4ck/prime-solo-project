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

function* recipeSaga(){
    yield takeLatest('FETCH_RECIPES', fetchRecipes);
}

export default recipeSaga;