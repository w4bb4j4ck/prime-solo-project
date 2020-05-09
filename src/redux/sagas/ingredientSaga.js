import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchIngredients (action){
    try{
        const response = yield axios.get('/api/meal/ingredients');
        yield put ({type: 'SET_INGREDIENTS', payload: response.data});
    }
    catch(error){
        console.log('Error in fetchIngredients', error);
    }
}

function* IngredientSaga(){
    yield takeLatest('FETCH_INGREDIENTS', fetchIngredients);
}

export default IngredientSaga;